import { useContext, useState } from "react";
import { ConnectionContext } from "../context/ConnectionContext";
import TokenField from "./TokenField";
import SwapButton from "./SwapButton";

const SellForm = () => {
    const { accountEthBalance, accountDhoBalance, sellTokens } = useContext(ConnectionContext);
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
            <SwapButton onClickEvent={() => sellTokens(input)} />
        </div>
    );
}

export default SellForm;