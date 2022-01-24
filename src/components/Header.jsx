import React, { useContext } from "react";
import { ConnectionContext } from "../context/ConnectionContext";

import { shortenAddress } from "../utils/shortenAddress";

const Header = () =>  {
    const { connectedAccount } = useContext(ConnectionContext);

    return (
        <div className="w-full flex flex-row items-center py-5">
            <div className="flex p-4 px-12">
                {connectedAccount &&
                    <button type="button" className="flex absolute right-5 p-2 rounded-full cursor-pointer bg-gradient-to-r from-purple-900 to-blue-500 shadow-sm">
                        <p className="text-white text-base font-semibold">{ shortenAddress(connectedAccount) }</p>
                    </button>
                }
            </div>
        </div>
    )
}

export default Header;