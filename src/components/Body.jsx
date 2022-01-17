const Body = () =>  {
    return (
        <div className="flex flex-col justify-center items-center p-5">
            <div className="flex flex-col w-full md:w-80 lg:w-80 py-5 px-3 white-glassmorphism space-y-5">
                <div className="flex flex-row relative">
                    <button type="button" className="rounded-lg text-center font-bold font-size absolute right-10 white-glassmorphism px-6 hover:bg-slate-600">
                        Buy
                    </button>
                    <button type="button" className="rounded-lg text-center font-bold font-size absolute left-10 white-glassmorphism px-6 hover:bg-slate-600">
                        Sell
                    </button>
                </div>
                <div className="font-bold">
                    ETH balance: 3.8736...
                </div>
                <div className="flex w-full items-center py-5 white-glassmorphism justify justify-evenly relative">
                    <div className="flex absolute left-3">
                        3.8736
                    </div>
                    <div className="rounded-l-lg text-center font-bold absolute right-1 h-7 w-14 white-glassmorphism hover:bg-slate-600">
                        ETH
                    </div>
                </div>
                <div className="flex w-full items-center py-5 white-glassmorphism justify justify-evenly relative">
                    <div className="flex absolute left-3">
                        387.36
                    </div>
                    <div className="rounded-l-lg text-center font-bold absolute right-1 h-7 w-14 white-glassmorphism hover:bg-slate-600">
                        DHO
                    </div>
                </div>
                <button type="button" onClick={() => {}} className="flex justify-center bg-[#2952e3] px-6 py-1 rounded-full cursor-pointer hover:bg-[#2546bd] shadow-lg">
                    <p className="text-white text-base font-semibold">Swap</p>
                </button>
            </div>
            
        </div>
    )
}

export default Body;