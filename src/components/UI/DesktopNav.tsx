import { menu } from "../../data/data"

function DesktopNav() {
    return (
        <div
            className="
        hidden sm:block
        flex-1
        "
        >
            <ul
                className="
            flex gap-10
            "
            >
                {menu.map((item) => {
                    return (<li
                        className="
                        text-neutral-400
                        relative
                        cursor-pointer
                        after:content-['']
                        after:absolute
                        after:inset-0
                        after:pb-25
                        after:w-full after:h-10
                        after:transition-border
                        after:duration-300
                        after:border-orange-500
                        hover:after:border-b-[5px]
                        hover:font-bold
                        hover:text-neutral-700
                        "
                        key={item}>{item}</li>)
                })}
            </ul>
        </div>
    )
}

export default DesktopNav