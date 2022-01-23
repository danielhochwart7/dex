import { SiEthereum } from "react-icons/si";
import { MdOutlineGeneratingTokens } from "react-icons/md";
const TokenField = ({tokenName, tokenBalance, value, props}) => {
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
        </div>
    )
}

export default TokenField;