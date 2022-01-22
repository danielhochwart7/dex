import { useContext, useState } from "react";
import { ConnectionContext } from "../context/ConnectionContext";
import TokenField from "./TokenField";

const SellForm = () => {
    const { connectedAccount, accountEthBalance, accountDhoBalance, sellTokens, connectWallet } = useContext(ConnectionContext);
    const [ input, setInput ] = useState(0);
    const [ output, setOutput ] = useState(0);
    const tokenRate = 100; 

    const inputProps = {
        onChange: (event) => {
            setInput(event.target.value);
            setOutput(event.target.value / tokenRate) // 1 ETH = 100 DHO
        },
        required: true
    }

    const outputProps = {
        disabled: true
    }

    return (
        <div className="flex flex-col w-full md:w-80 lg:w-80 py-5 px-3 space-y-5 text-white">
            <TokenField 
                tokenName="DHO"
                tokenBalance={accountDhoBalance}
                props={inputProps}
            />
            <TokenField 
                tokenName="ETH"
                tokenBalance={accountEthBalance}
                value={output}
                props={outputProps}
            />
            <div className="flex flex-col items-center">
                {connectedAccount ? (
                    <button type="button" onClick={() => sellTokens(input)} className="flex rounded-full justify-center px-6 py-1 cursor-pointer bg-gradient-to-r from-purple-900 to-blue-500 shadow-sm">
                        <p className="text-white text-base font-semibold">Swap</p>
                    </button>
                ) : (
                    <button type="button" onClick={connectWallet} className="flex rounded-full justify-center px-6 py-1 cursor-pointer bg-gradient-to-r from-purple-900 to-blue-500 shadow-sm">
                        <p className="text-white text-base font-semibold animate-pulse">Connect wallet first</p>
                    </button>
                )}
            </div>
        </div>
    );
}

export default SellForm;