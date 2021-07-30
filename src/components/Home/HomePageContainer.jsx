import Header from "../Header"
import Catalog from "./Catalog/Catalog"
import Hero from "./Hero/Hero"
import NewPoduct from "./NewProduct/NewProduct"
import ContactForm from "../ContactForm/ContactForm"
import HomePage from "./Home"
import StoreContext from "../../StoreContext"
import { connect } from "react-redux"




let mapStateToProps = (state) => {
    return {
        catalogData: state.homePage.catalogData,
        productData: state.homePage.productData
    }
}
let mapDispatchToProps = () => {
    return 
}


const HomePageContainer = connect(mapStateToProps, mapDispatchToProps)(HomePage)

export default HomePageContainer