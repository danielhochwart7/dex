import BuyForm from "./BuyForm";

const SwapMenu = () =>  {

    return (
        <div className="flex flex-col justify-center items-center space-y-9">
                <div className="flex flex-row relative">
                    <button type="button" onClick={() => setIsBuy(true)} className="rounded text-center font-bold font-size absolute right-10 white-glassmorphism px-6 hover:bg-slate-600">
                        Buy
                    </button>
                    <button type="button" onClick={() => setIsBuy(false)} className="rounded text-center font-bold font-size absolute left-10 white-glassmorphism px-6 hover:bg-slate-600">
                        Sell
                    </button>
                </div>
                <BuyForm />
        </div>
    )
}

export default SwapMenu;