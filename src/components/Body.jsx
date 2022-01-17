const Body = () =>  {
    return (
        <div className="flex flex-col justify-center items-center p-5">
            <div className="flex flex-col w-full md:w-80 lg:w-80 items-center py-3 px-3 white-glassmorphism space-y-10">
                <div className="flex flex-row relative">
                    <div className="text-center font-size absolute right-10 white-glassmorphism px-6 hover:bg-slate-600">
                        Buy
                    </div>
                    <div className="text-center font-size absolute left-10 white-glassmorphism px-6 hover:bg-slate-600">
                        Sell
                    </div>
                </div>
                <div className="text-center font-size">
                    Eth balance: 3.8736
                </div>
                <div className="flex w-full items-center py-5 white-glassmorphism justify justify-evenly relative">
                    <div className="text-center absolute right-1 h-7 w-14 white-glassmorphism hover:bg-slate-600">
                        ETH
                    </div>
                </div>
                <div className="flex w-full items-center py-5 white-glassmorphism justify justify-evenly relative">
                    <div className="text-center absolute right-1 h-7 w-14 white-glassmorphism hover:bg-slate-600">
                        DHO
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Body;