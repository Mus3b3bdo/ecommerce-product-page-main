import { useState } from "react"
import menuIcon from ".././../assets/images/icon-menu.svg"
import closeIcon from ".././../assets/images/icon-close.svg"
import { menu } from "../../data/data"
function MobileNav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <div
            className="
        block sm:hidden
        "
        >
            <button 
            className="
            cursor-pointer
            "
            onClick={() => setIsMenuOpen(true)}
            >
                <img src={menuIcon} alt="Menu Button Open" />
            </button>
            <div
            className=
            {`${isMenuOpen == true ? "block" : "hidden"}
            " absolute 
            h-[100svh]
            w-[50%]
            top-0
            left-0
            p-5
            bg-white
            shadow-md
            shadow-neutral-100
            "`}
            >
                <button
                className="
                cursor-pointer
                "
                onClick={()=>setIsMenuOpen(false)}
                >
                    <img src={closeIcon} alt="Menu Button Close" />
                </button>
                <ul className="mt-15">
                    {menu.map((item)=>{
                        return (
                            <li key={item} className="mb-5">
                                <a href="#" 
                                className="text-neutral-900 font-bold">
                                {item}
                                </a>
                                </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default MobileNav