import { Link } from "react-router-dom"

function Card({card}) {
    return (
        <Link to={card.path} className="card-1">
            <h3 className="card-1-title">{card.name}</h3>
            <div className="card-1-more">
                <div className="card-1-more_text">Подробнее</div>
                <div className="card-1-more_arrow">
                    <i className='bx bx-arrow-back' ></i>
                </div>
		    </div>
		</Link>
    )
}

export default Card