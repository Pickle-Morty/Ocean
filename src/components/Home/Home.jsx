import Header from "../Header"
import Catalog from "./Catalog/Catalog"
import Hero from "./Hero/Hero"
import NewPoduct from "./NewProduct/NewProduct"
import ContactForm from "../ContactForm/ContactForm"


const HomePage = ({catalogData, productData}) => {
    return (
        <div>
            <Header customClass="absolute"/>
            <Hero />
            <Catalog catalogData={catalogData} />
            <NewPoduct productData={productData}/>  
            <ContactForm />
        </div>
    )
}

export default HomePage