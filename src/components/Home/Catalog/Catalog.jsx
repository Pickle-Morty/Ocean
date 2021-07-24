import "./Catalog.css"
import CategoryCart from "./CategoryCart/CategoryCart"




const Catalog = (props) => {
    return (
       <section className="catalog">
           <div className="container">
               <h2 className="catalog__title">КАТАЛОГ</h2>
               <div className="catalog__wrapper">
                   {props.catalogData.map( data =><CategoryCart title={data.title}/> )}
                   
               </div>
           </div>
       </section>
    )
}

export default Catalog