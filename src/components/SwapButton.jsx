import { useContext } from "react";
import { ConnectionContext } from "../context/ConnectionContext";
import Loader from "./Loader";

const SwapButton = ({onClickEvent}) => {
    const { connectedAccount, connectWallet, isLoading } = useContext(ConnectionContext);
    return (
        <div className="flex flex-col items-center">
            {connectedAccount ? (
                <button type="button" onClick={onClickEvent} className="flex rounded-full justify-center px-6 py-1 cursor-pointer bg-gradient-to-r from-purple-900 to-blue-500 shadow-sm">
                    {isLoading ? (
                        <Loader />
                    ) : (
                        <p className="text-white text-base font-semibold">Swap</p>
                    )}
                </button>
            ) : (
                <button type="button" onClick={connectWallet} className="flex rounded-full justify-center px-6 py-1 cursor-pointer bg-gradient-to-r from-purple-900 to-blue-500 shadow-sm">
                    <p className="text-white text-base font-semibold animate-pulse">Connect wallet first</p>
                </button>
            )}
        </div>
    )   
};

export default SwapButton;