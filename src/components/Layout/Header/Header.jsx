import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <div className="header">
                <div className="container">
                <nav className="nav">
                    <div className="logo">
                        <div className="logo-icon">
                            <img src="/images/logo-fmf.png" alt="logo" />
                        </div>
                        <div className="logo-name">физико-математический факультет</div>
                    </div>
                    <div className="menu">
                        <div className="menu-top">
                            <div className="menu-top_item">
                                <Link to={'/'} className="menu-top_link">Абитуриенту</Link>
                            </div>
                            <div className="menu-top_item">
                                <a href="#" className="menu-top_link">Вопрос декану</a>
                            </div>
                            <div className="menu-top_item">
                                <a href="#" className="menu-top_link">Контакты</a>
                            </div>
                            <div className="menu-top_item">
                                <div className="menu-top_social">
                                    <a href="#" className="menu-top_link">
                                    <i className="bx bxl-facebook"></i>
                                    </a>
                                    <a href="#" className="menu-top_link">
                                    <i className="bx bxl-instagram-alt"></i>
                                    </a>
                                    <a href="#" className="menu-top_link">
                                    <i className="bx bxl-vk"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="menu-bottom">
                            <div className="menu-bottom_item">
                                <Link to={'/docs'} className="menu-bottom_link">Правила приема</Link>
                            </div>
                            <div className="menu-bottom_item">
                                <Link to={'/directions'} className="menu-bottom_link">Направления обучения</Link>
                            </div>
                        </div>
                    </div>			
                </nav>
            </div>
        </div>
    )
}

export default Header