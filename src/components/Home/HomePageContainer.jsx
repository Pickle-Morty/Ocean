import Header from "../Header"
import Catalog from "./Catalog/Catalog"
import Hero from "./Hero/Hero"
import NewPoduct from "./NewProduct/NewProduct"
import ContactForm from "../ContactForm/ContactForm"
import HomePage from "./Home"


const HomePageContainer = ({store}) => {
    return <HomePage store = {store} />
}

export default HomePageContainer