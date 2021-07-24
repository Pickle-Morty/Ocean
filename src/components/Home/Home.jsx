import Header from "../Header"
import Catalog from "./Catalog/Catalog"
import Hero from "./Hero/Hero"
import NewPoduct from "./NewProduct/NewProduct"
import ContactForm from "../ContactForm/ContactForm"


const Home = (props) => {
    return (
        <div>
            <Header customClass="absolute"/>
            <Hero />
            <Catalog catalogData={props.catalogData} />
            <NewPoduct productData={props.productData}/>  
            <ContactForm />
        </div>
    )
}

export default Home