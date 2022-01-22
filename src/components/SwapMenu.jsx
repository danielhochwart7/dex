import { useContext, useState } from "react";
import { ConnectionContext } from "../context/ConnectionContext";
import BuyForm from "./BuyForm";
import SellForm from "./SellForm";

const SwapMenu = () =>  {
    const { connectedAccount } = useContext(ConnectionContext);
    const [isBuy, setIsBuy] = useState(true);

    const handleSwap = () => {
        if (isBuy) {
            console.log("Buy buy");
        } else {
            console.log("Sell");
        }
    }

    return (
        <div className="flex flex-col justify-center items-center space-y-5 text-white ">
            <div className="flex flex-row relative">
                <button type="button" onClick={() => setIsBuy(true)} className="rounded text-center font-bold font-size absolute right-10 white-glassmorphism px-6 hover:bg-slate-600">
                    Buy
                </button>
                <button type="button" onClick={() => setIsBuy(false)} className="rounded text-center font-bold font-size absolute left-10 white-glassmorphism px-6 hover:bg-slate-600">
                    Sell
                </button>
            </div>
            {isBuy ? (
                <BuyForm />
            ) : (
                <SellForm />
            )}
            {connectedAccount ? (
                <button type="button" onClick={handleSwap} className="flex rounded justify-center bg-[#2952e3] px-6 py-1 cursor-pointer hover:bg-[#2546bd] shadow-lg">
                    <p className="text-white text-base font-semibold">Swap</p>
                </button>
            ) : (
                <button type="button" onClick={() => {console.log("Buy buy!")}} className="flex rounded justify-center bg-[#2952e3] px-6 py-1 cursor-pointer hover:bg-[#2546bd] shadow-lg">
                    <p className="text-white text-base font-semibold">Connect walle first</p>
                </button>
            )}
        </div>
    )
}

export default SwapMenu;