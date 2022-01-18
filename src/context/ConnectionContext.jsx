import React, { useEffect, useState } from "react";

export const ConnectionContext = React.createContext();

const { ethereum } = window;

export const ConnectionProvider = ({ children }) => {
    const [connectedAccount, setConnectedAccount] = useState("");

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
            }).catch(error => {
                console.log(error);
            });
    }

    useEffect(() => {
        checkIfWalletIsConnected();
        ethereum.on('accountsChanged', function (accounts) {
            if (!accounts) setConnectedAccount("");
            window.location.reload();
        });
    }, []);

    return (
        <ConnectionContext.Provider value={{ connectWallet, connectedAccount }}>
            {children}
        </ConnectionContext.Provider>
    )
}