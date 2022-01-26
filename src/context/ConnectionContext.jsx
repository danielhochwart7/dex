import React, { useEffect, useState } from "react";
import Web3 from "web3/dist/web3.min.js";
import Dho from "../abis/Dho.json";
import Dex from "../abis/Dex.json";

export const ConnectionContext = React.createContext();

const { ethereum } = window;

const web3 = new Web3(ethereum);

const getTokenAddress = async () => {
    const networkId = await web3.eth.net.getId();
    const addr = Dho.networks[networkId].address;
    return addr;
}

const getTokenContract = async () => {
    const tokenAddress = await getTokenAddress();
    return new web3.eth.Contract(Dho.abi, tokenAddress);
}

const getDexAddress = async () => {
    const networkId = await web3.eth.net.getId();
    return Dex.networks[networkId].address;
}

const getDexContract = async () => {
    const dexAddress = await getDexAddress();
    return new web3.eth.Contract(Dex.abi, dexAddress);
} 

export const ConnectionProvider = ({ children }) => {
    const [connectedAccount, setConnectedAccount] = useState("");
    const [accountEthBalance, setAccountEthBalance] = useState(0);
    const [accountDhoBalance, setAccountDhoBalance] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const connectWallet = async () => {
        if(!ethereum) return alert("Please install metamask");

        ethereum.request({ method: "eth_requestAccounts"})
            .then(accounts => {
                setConnectedAccount(accounts[0]);
            }).catch(error => {
                console.log(error);
            });
    }

    const checkIfWalletIsConnected = async () => {
        if(!ethereum) return alert("Please install metamask");
        ethereum.request({ method: "eth_accounts"})
            .then(accounts => {
                if (accounts.length) {
                    setConnectedAccount(accounts[0]);
                } else {
                    console.log("No accounts found")
                }
                return accounts[0];
            }).then(account => {
                checkAccountBalance(account);
            }).catch(error => {
                console.log(error);
            });
    }

    const checkAccountBalance = async (account) => {
        if (account) {
            const balance = await web3.eth.getBalance(account);
            setAccountEthBalance(web3.utils.fromWei(balance.toString()).slice(0,6));

            getTokenContract()
                .then(contract => {
                    contract.methods.balanceOf(account).call()
                        .then(dhoBalance => setAccountDhoBalance(web3.utils.fromWei(dhoBalance)));
                })
        }
    }

    const buyTokens = async (amount) => {
        if (amount > 0) {
            const tokenAmount = web3.utils.toWei(amount.toString(), "Ether");
            const dexContract = await getDexContract();

            setIsLoading(true);
            await dexContract.methods.buyTokens()
                .send({ from: connectedAccount, value: tokenAmount })
                .on("transactionHash", (hash) => {
                    console.log(`TxHash: ${hash}`)
                })
                .catch(error => console.log(error));
            setIsLoading(false);
            checkAccountBalance(connectedAccount);
        } else {
            console.log("Amount must be greater than 0");
        }
    }

    const sellTokens = async (tokenAmount) => {
        if (tokenAmount > 0) {
            const amount = web3.utils.toWei(tokenAmount.toString(), "Ether");
            const dexAddress = await getDexAddress();
            const tokenContract = await getTokenContract();
            const dexContract = await getDexContract();
            let approved = false;

            setIsLoading(true);
            await tokenContract.methods.approve(dexAddress, amount)
                .send({ from: connectedAccount })
                .on("transactionHash", (hash) => {
                    console.log(`TxHash approved: ${hash}`)
                    approved = true;
                })
                .catch(error => console.log(error));

            if (approved) {
                await dexContract.methods.sellTokens(amount)
                .send({ from: connectedAccount })
                .on("transactionHash", (hash) => {
                    console.log(`TxHash tokens sold: ${hash}`);
                }).catch(error => console.log(error));
            }
            checkAccountBalance(connectedAccount);
            setIsLoading(false);
        } else {
            console.log("Amount must be greater than 0");
        }
    }

    const importToken = async () => {
        const tokenAddress = await getTokenAddress();
        const tokenContract = await getTokenContract();
        const tokenSymbol = await tokenContract.methods.symbol().call();
        const tokenDecimals = await tokenContract.methods.decimals().call();;

        ethereum.request({
            method: 'wallet_watchAsset',
            params: {
                type: 'ERC20',
                options: {
                    address: tokenAddress,
                    symbol: tokenSymbol,
                    decimals: tokenDecimals,
                },
            },
        }).then(() => console.log(`Adding token to wallet`))
        .catch(error => console.log(`Error adding token to wallet: ${error}`));
    }

    useEffect(() => {
        checkIfWalletIsConnected();
        ethereum.on('accountsChanged', function (accounts) {
            if (!accounts) setConnectedAccount("");
            window.location.reload();
        });
    }, []);

    return (
        <ConnectionContext.Provider value={{ connectWallet, connectedAccount, accountEthBalance, accountDhoBalance, buyTokens, sellTokens, importToken, isLoading }}>
            {children}
        </ConnectionContext.Provider>
    )
}