import { useContext, useState } from "react";
import { ConnectionContext } from "../context/ConnectionContext";

const SellForm = () => {
    const { accountEthBalance, accountDhoBalance } = useContext(ConnectionContext);
    const [ output, setOutput ] = useState(0);
    const tokenRate = 100; 

    return (
        <div className="flex flex-col w-full md:w-80 lg:w-80 py-5 px-3 white-glassmorphism space-y-5 text-white">
            <div className="font-bold">
                DHO balance: {accountDhoBalance}
            </div>
            <div className="flex rounded w-full items-center py-5 white-glassmorphism justify justify-evenly relative">
                <div className="flex absolute left-3">
                <input
                        type="number"
                        onChange={(event) => {
                            setOutput(event.target.value / tokenRate); // 1 ETH = 100 DHO
                        }}
                        className=" text-white font-semibold white-glassmorphism px-1 rounded-lg"
                        placeholder="0"
                        required
                    />

                </div>
                <div className="rounded text-center font-bold absolute right-1 h-7 w-14 white-glassmorphism hover:bg-slate-600">
                    DHO
                </div>
            </div>
            <div className="font-bold">
                ETH balance: {accountEthBalance}
            </div>
            <div className="flex rounded w-full items-center py-5 white-glassmorphism justify justify-evenly relative">
                <div className="flex absolute left-3">
                    <input
                        type="number"
                        className=" text-white font-semibold white-glassmorphism px-1 rounded-lg"
                        placeholder="0"
                        value={output}
                        disabled
                    />
                </div>
                <div className="rounded text-center font-bold absolute right-1 h-7 w-14 white-glassmorphism hover:bg-slate-600">
                    ETH
                </div>
            </div>

            <button type="button" onClick={() => console.log("Sell sell!")} className="flex rounded justify-center bg-[#2952e3] px-6 py-1 cursor-pointer hover:bg-[#2546bd] shadow-lg">
                <p className="text-white text-base font-semibold">Swap</p>
            </button>
        </div>
    );
}

export default SellForm;