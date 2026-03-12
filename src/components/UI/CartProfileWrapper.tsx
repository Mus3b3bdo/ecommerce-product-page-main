import profile from "../../assets/images/image-avatar.png"
import Cart from "../Cart"
function CartProfileWrapper() {
    return (
        <>
            <Cart />
            <div>
                <img src={profile} alt="Avatar image for profile menu"
                    className="
                    cursor-pointer
                    w-10 h-10 sm:w-15 sm:h-15
                    rounded-full
                    hover:outline-5
                    hover:outline-orange-500
                    hover:transition-outline
                    hover:duration-300
            "
                />
            </div>
        </>
    )
}

export default CartProfileWrapper