const Body = () =>  {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col w-1/2 items-center py-5 px-3 white-glassmorphism space-y-10">
                <div className="flex flex-row">
                    <div className="text-center font-size absolute left-5 white-glassmorphism px-6 hover:bg-slate-600">
                        Buy
                    </div>
                    <div className="text-center font-size absolute right-5 white-glassmorphism px-6 hover:bg-slate-600">
                        Sell
                    </div>
                </div>
                <div className="text-center font-size">
                    Eth balance: 3.8736
                </div>
                <div className="flex w-full items-center py-5 white-glassmorphism justify justify-evenly">
                    <div className="text-center absolute right-3 h-7 w-14 white-glassmorphism hover:bg-slate-600">
                        ETH
                    </div>
                </div>
                <div className="flex w-full items-center py-5 white-glassmorphism justify justify-evenly">
                    <div className="text-center absolute right-3 h-7 w-14 white-glassmorphism hover:bg-slate-600">
                        DHO
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Body;