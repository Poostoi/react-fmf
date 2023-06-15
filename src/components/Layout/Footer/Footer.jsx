import './Footer.css'

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="contacts">
          <p className="contacts-address">
            г. Тирасполь, ул.25 Октября, 128, корп. 2
          </p>
          <p className="contacts-phone">(373) 533-79506</p>
          <p className="contacts-email">fmfdekan@spsu.ru</p>
          <div className="contacts-social">
            <a href="#">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="#">
              <i className="bx bxl-instagram-alt"></i>
            </a>
            <a href="#">
              <i className="bx bxl-vk"></i>
            </a>
          </div>
        </div>
        <p className="copyright">&copy; 2023 Физико-математический факультет</p>
      </div>
    </div>
  );
}

export default Footer;
