import React, { useEffect, useState } from "react";
import Web3 from "web3/dist/web3.min.js";
import Dho from "../abis/Dho.json";

export const ConnectionContext = React.createContext();

const { ethereum } = window;

const web3 = new Web3(ethereum);

const getTokenContract = async () => {
    const networkId = await web3.eth.net.getId();
    const tokenAddress = Dho.networks[networkId].address;
    return new web3.eth.Contract(Dho.abi, tokenAddress);
} 

export const ConnectionProvider = ({ children }) => {
    const [connectedAccount, setConnectedAccount] = useState("");
    const [accountEthBalance, setAccountEthBalance] = useState(0);
    const [accountDhoBalance, setAccountDhoBalance] = useState(0);

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
            }

            ).catch(error => {
                console.log(error);
            });
    }

    const checkAccountBalance = async (account) => {
        if (account) {
            const balance = await web3.eth.getBalance(account);
            setAccountEthBalance(web3.utils.fromWei(balance.toString()));

            getTokenContract()
                .then(contract => {
                    contract.methods.balanceOf(account).call()
                        .then(dhoBalance => setAccountDhoBalance(web3.utils.fromWei(dhoBalance)));
                })
        }
    }

    useEffect(() => {
        checkIfWalletIsConnected();
        ethereum.on('accountsChanged', function (accounts) {
            if (!accounts) setConnectedAccount("");
            window.location.reload();
        });
    }, []);

    return (
        <ConnectionContext.Provider value={{ connectWallet, connectedAccount, accountEthBalance, accountDhoBalance }}>
            {children}
        </ConnectionContext.Provider>
    )
}