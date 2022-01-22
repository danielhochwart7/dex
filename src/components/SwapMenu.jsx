import { useContext, useState } from "react";
import { ConnectionContext } from "../context/ConnectionContext";
import BuyForm from "./BuyForm";
import SellForm from "./SellForm";

const SwapMenu = () =>  {
    const { connectedAccount, connectWallet } = useContext(ConnectionContext);
    const [isBuy, setIsBuy] = useState(true);

    const handleSwap = () => {
        if (isBuy) {
            buyTokens()
        } else {
            console.log("Sell");
        }
    }

    return (
        <div className="flex flex-col items-center space-y-5 text-white">
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
        </div>
    )
}

export default SwapMenu;