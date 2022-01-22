import { useContext, useState } from "react";
import { ConnectionContext } from "../context/ConnectionContext";
import TokenField from "./TokenField";

const BuyForm = () => {
    const { accountEthBalance, accountDhoBalance } = useContext(ConnectionContext);
    const [ output, setOutput ] = useState(0);
    const tokenRate = 100; 

    const inputProps = {
        onChange: (event) => {
            setOutput(event.target.value * tokenRate) // 1 ETH = 100 DHO
        },
        required: true
    }

    const outputProps = {
        disabled: true
    }

    return (
        <div className="flex flex-col w-full md:w-80 lg:w-80 py-5 px-3 space-y-5 text-white">
            <TokenField 
                tokenName="ETH"
                tokenBalance={accountEthBalance}
                props={inputProps}
            />
            <TokenField
                tokenName="DHO"
                tokenBalance={accountDhoBalance}
                value={output}
                props={outputProps}
            />
        </div>
    );
}

export default BuyForm;