import logo from "../../assets/images/logo.svg"
import CartProfileWrapper from "./CartProfileWrapper"
import DesktopNav from "./DesktopNav"
import MobileNav from "./MobileNav"
function NavBar() {

    return (
        <div
            className="
            relative
        flex items-center justify-between sm:gap-20
        p-6 sm:pt-16 sm:pb-16 sm:px-60
        "
        >
            <MobileNav />
            <img src={logo} alt="Sneakers Website logo"
                className="
            h-8 sm:h-12 w-30 sm:w-60"
            />
            <DesktopNav />
            <CartProfileWrapper />
        </div>
    )
}

export default NavBar