import { useState } from "react";
import BuyForm from "./BuyForm";
import SellForm from "./SellForm";

const SwapMenu = () =>  {
    const [isBuy, setIsBuy] = useState(true);

    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col items-center space-y-5 text-white blue-glassmorphism">
                <div className="flex flex-row relative py-2">
                    <button type="button" onClick={() => setIsBuy(true)} className="rounded-full text-center font-bold font-size absolute right-10 blue-glassmorphism px-6 hover:bg-slate-600">
                        Buy
                    </button>
                    <button type="button" onClick={() => setIsBuy(false)} className="rounded-full text-center font-bold font-size absolute left-10 blue-glassmorphism px-6 hover:bg-slate-600">
                        Sell
                    </button>
                </div>
                {isBuy ? (
                    <BuyForm />
                ) : (
                    <SellForm />
                )}
            </div>
        </div>
    )
}

export default SwapMenu;