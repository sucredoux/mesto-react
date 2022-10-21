import logo from '../images/logo__image_v.svg';

function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={logo} alt="Логотип проекта"/>
        </header>
    )
}

export default Header;