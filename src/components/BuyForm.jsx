import { useContext, useState } from "react";
import { ConnectionContext } from "../context/ConnectionContext";

const BuyForm = () => {
    const { connectedAccount, accountEthBalance, accountDhoBalance } = useContext(ConnectionContext);
    const [ output, setOutput ] = useState(0);
    const tokenRate = 100; 

    return (
        <div className="flex flex-col w-full md:w-80 lg:w-80 py-5 px-3 white-glassmorphism space-y-5 text-white">
            <div className="flex justify-end">
                ETH balance: {accountEthBalance}
            </div>
            <div className="flex rounded w-full items-center py-5 white-glassmorphism justify justify-evenly relative">
                <div className="flex absolute left-3">
                    <input
                        type="number"
                        onChange={(event) => {
                            setOutput(event.target.value * tokenRate); // 1 ETH = 100 DHO
                        }}
                        className=" text-white font-semibold white-glassmorphism px-1 rounded-lg"
                        placeholder="0"
                        required
                    />
                </div>
                <div className="rounded text-center font-bold absolute right-1 h-7 w-14">
                    ETH
                </div>
            </div>
            <div className="flex justify-end">
                DHO balance: {accountDhoBalance}
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
                <div className="rounded text-center font-bold absolute right-1 h-7 w-14">
                    DHO
                </div>
            </div>
            {connectedAccount ? (
                <button type="button" onClick={() => {console.log("Buy buy!")}} className="flex rounded justify-center bg-[#2952e3] px-6 py-1 cursor-pointer hover:bg-[#2546bd] shadow-lg">
                    <p className="text-white text-base font-semibold">Swap</p>
                </button>
            ) : (
                <button type="button" onClick={() => {console.log("Buy buy!")}} className="flex rounded justify-center bg-[#2952e3] px-6 py-1 cursor-pointer hover:bg-[#2546bd] shadow-lg">
                    <p className="text-white text-base font-semibold">Connect walle first</p>
                </button>
            )}
            
        </div>
    );
}

export default BuyForm;