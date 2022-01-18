import logo from "../images/logo.png";

const Header = () =>  {
    return (
        <div className="w-full flex flex-row items-center py-5">
            <div className="flex p-4 px-12">
                <img src={logo} alt="logo" className="w-32 cursor-pointer" />
            </div>
            
            {true ? (
                <button type="button" onClick={() => {}} className="flex absolute right-5  bg-[#2952e3] p-2 rounded-full cursor-pointer hover:bg-[#2546bd] shadow-lg">
                    <p className="text-white text-base font-semibold">Connect Wallet</p>
                </button>
            ) : (
                <button type="button" onClick={() => {}} className="flex absolute right-5  bg-[#2952e3] p-2 rounded-full cursor-pointer hover:bg-[#2546bd] shadow-lg">
                    <p className="text-white text-base font-semibold">0x327d89...923</p>
                </button>
            )}
            
        </div>
    )
}

export default Header;