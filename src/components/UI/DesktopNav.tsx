import { menu } from "../../data/data"

function DesktopNav() {
    return (
        <nav
            className="
        hidden sm:block
        flex-1
        relative
        [anchor-name:--active-link]
        after:content-['']
            after:absolute
            after:h-1
            after:bg-orange-500
            after:left-[anchor(left)]
            after:right-[anchor(right)]
            after:bottom-[anchor(bottom)]
            after:translate-y-20
            after:[position-anchor:--active-link]
            after:transotion-500
        "
        >
            <ul
                className="
            flex
            w-fit
            "
            >
                {menu.map((item) => {
                    return (<li
                        className="
                        text-neutral-400
                        cursor-pointer
                        first:ps-0
                        last:pe-0
                        px-5
                        hover:[anchor-name:--active-link]
                        hover:font-bold
                        hover:text-neutral-700
                        "
                        key={item}>
                            <a 
                        href="#"
                        >{item}</a></li>)
                })}
            </ul>
        </nav>
    )
}

export default DesktopNav