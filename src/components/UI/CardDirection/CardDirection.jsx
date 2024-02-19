import { Link } from "react-router-dom";

function CardDirection({direction}) {
  return (
    <div className="directions-item">
      <div className="directions-item_body">
        <div className="directions-item_body-info">
          <div className="directions-item_body-content">
            <span className="directions-item_body-number">{direction.id}</span>
            <h5 className="directions-item_body-title">{direction.name}</h5>
            <p className="directions-item_body-text">
              {direction.description}
            </p>
          </div>
          <div
            className="directions-item_body-bg"
            style={{
                backgroundImage: `url(/images/logo.png)`   //${direction.image}
            }}
          ></div>
        </div>
        <div className="directions-item_body-select">
          <Link to={`/directions/${direction.id}`} className="btn">Выбрать направление</Link>
        </div>
      </div>
    </div>
  );
}

export default CardDirection;
