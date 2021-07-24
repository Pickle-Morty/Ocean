import "./Navbar.css"

const Navbar = (props) => {
  let categoryItem = props.catalogData.map(data => <li className="sidebar__categoryitem">{data.title}</li>)
  let showAlert = () => {
    alert('')
  }
    return (
        <nav className="sidebar">
        <ul>
          <li class="sidebar__item" onClick={showAlert}>Категории</li>
          {categoryItem}
          <li class="sidebar__item">Размеры</li>
          <li class="sidebar__item">Быстрая доставка</li>
        </ul>
      </nav>
    );
}

export default Navbar