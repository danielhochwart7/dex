const TokenField = ({tokenName, tokenBalance, value, props}) => {
    return (
        <div>
            <div className="flex justify-end">
                {tokenName} balance: {tokenBalance}
            </div>
            <div className="flex rounded w-full items-center py-5 white-glassmorphism justify justify-evenly relative">
                <div className="flex absolute left-3">
                <input
                        type="number"
                        className=" text-white font-semibold white-glassmorphism px-1 rounded-lg"
                        placeholder="0"
                        value={value}
                        {...props}
                    />
                </div>
                <div className="rounded text-center font-bold absolute right-1 h-7 w-14">
                    {tokenName}
                </div>
            </div>
        </div>
    )
}

export default TokenField;