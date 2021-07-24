import "./CategoryCart.css"

const CategoryCart = (props) => {
    return (
        <div className="CategoryCart">
            <div className="CategoryCart__img">{props.img}</div>
            <p className="CategoryCart__title">{props.title}</p>
            
        </div>
    )
}

export default CategoryCart