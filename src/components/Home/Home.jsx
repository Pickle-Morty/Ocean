import Header from "../Header"
import Catalog from "./Catalog/Catalog"
import Hero from "./Hero/Hero"
import NewPoduct from "./NewProduct/NewProduct"
import ContactForm from "../ContactForm/ContactForm"


const HomePage = ({store}) => {
    let state = store.getState()
    return (
        <div>
            <Header customClass="absolute"/>
            <Hero />
            <Catalog catalogData={state.homePage.catalogData} />
            <NewPoduct productData={state.homePage.productData}/>  
            <ContactForm />
        </div>
    )
}

export default HomePage