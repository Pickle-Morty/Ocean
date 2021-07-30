import Header from "../Header"
import Catalog from "./Catalog/Catalog"
import Hero from "./Hero/Hero"
import NewPoduct from "./NewProduct/NewProduct"
import ContactForm from "../ContactForm/ContactForm"
import HomePage from "./Home"
import StoreContext from "../../StoreContext"


const HomePageContainer = () => {
    return <StoreContext.Consumer >
        {
            (store) => {
                return (
                    <HomePage store = {store} />
                )
            }
        }
    </StoreContext.Consumer>
}

export default HomePageContainer