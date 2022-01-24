import { useContext } from "react";
import { ConnectionContext } from "../context/ConnectionContext";
import { SiEthereum } from "react-icons/si";
import { MdOutlineGeneratingTokens } from "react-icons/md";

const TokenField = ({tokenName, tokenBalance, value, props}) => {
    const { importToken } = useContext(ConnectionContext);
    return (
        <div>
            <div className="flex justify-end text-xs">
                Balance: {tokenBalance}
            </div>
            <div className="flex flex-row justify-center rounded w-full py-2 blue-glassmorphism space-x-3">
                <div className="">
                    <input
                        type="number"
                        className=" text-white font-semibold white-glassmorphism px-1 rounded-lg"
                        placeholder="0"
                        value={value}
                        {...props}
                    />
                </div>
                <div className="flex flex-row rounded font-bold space-x-1">
                    <div className="flex justify-evenly w-7 h-7 rounded-full border-white">
                        {tokenName == "ETH" ? (
                            <SiEthereum fontSize={27} color="#fff"/>
                        ) : (
                            <MdOutlineGeneratingTokens fontSize={27} color="#fff"/>
                        )}
                    </div>
                    <div className="flex justify text-sm items-center">
                        {tokenName}
                    </div>
                </div>
            </div>
                {tokenName == "DHO" && 
                    <div className="flex flex-col items-end">
                        <button type="button" onClick={importToken} className="text-xs cursor-pointer">
                            Import token to wallet
                        </button>
                    </div>  
                }
        </div>
    )
}

export default TokenField;