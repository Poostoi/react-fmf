import { useEffect, useState } from "react"
import { Link, useLocation, useParams } from "react-router-dom"
import Header from "../../components/Layout/Header/Header"
import './Direction.css'
import Footer from "../../components/Layout/Footer/Footer"
import Loader from "../../components/UI/Loader/Loader"

function Direction() {
    const {directionId} = useParams()
    const {state} = useLocation()

    const [direction, setDirection] = useState({})

    const [isLoading, setIsLoading] = useState(true)

    const fetchDirectionById = () => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => {
                const id = state.directionsId
                const directions = data.data.find(item => item.id === Number(id))
                setDirection(directions?.directions.find(d => d.id === Number(directionId)))

                setIsLoading(false)
            })
    }

    useEffect(() => {
        fetchDirectionById()
    }, [directionId])

    console.log(state)

    return (
        <>
            <Header />
            <div className="container">
            <div className="path">
                    <div className="path_item">
                        <Link to={'/'} className="path_link">Главная</Link>
                        <div className="path_arrow">
                            <i className='bx bx-chevron-right'></i>
                        </div>
                    </div>
                    <div className="path_item">
                        <Link to={`/directions/${Number(state.directionsId)}`} className="path_link">Программы бакалавриата и магистратуры</Link>
                        <div className="path_arrow">
                            <i className='bx bx-chevron-right'></i>
                        </div>
                    </div>
                    <div className="path_item">
                        <p className="path_link">{direction?.name}</p>
                    </div>       
                </div>
                {isLoading ? <Loader /> : (
                    <>
                        <h1 className="title">{direction?.name}</h1>
                        <p className="direction-about">{direction?.info}</p>
                        <h2 className="subtitle">Условия поступления</h2>
                        <div className="direction-info">
                            <div>
                                <h3 className="info_title">Минимальный балл ЕГЭ для обязательных предметов</h3>
                                <div className="info_scores">
                                    {direction.scoresNeed && direction.scoresNeed.map((score, i) => (
                                        <div key={i} className="subject">
                                            <p className="subject_score">{score.score}</p>
                                            <p className="subject_name">{score.subject}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h3 className="info_title">Количество мест</h3>
                                <div className="info_scores">
                                    {direction.places && direction.places.map((place, i) => (
                                        <div key={i} className="subject">
                                            <p className="subject_score">{place.count}</p>
                                            <p className="subject_name">{place.type}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h3 className="info_title">Минимальный балл вступительных испытаний</h3>
                                <div className="info_scores">
                                    {direction.scoresChoice && direction.scoresChoice.map((score, i) => (
                                        <div key={i} className="subject">
                                            <p className="subject_score">{score.score}</p>
                                            <p className="subject_name">{score.subject}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h3 className="info_title">Стоимость обучения</h3>
                                <div className="info_scores">
                                    <div className="subject">
                                        <p className="subject_score">{direction.price} руб.</p>
                                        <p className="subject_name" style={{visibility: "hidden"}}>1</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h2 className="subtitle">Учебные курсы</h2>
                        <div className="courses">
                            {direction.courses && direction.courses.map((course) => (
                                <Link
                                state={{directionId, directionsId: state.directionsId}}
                                to={`/courses/course/${course.id}`}  
                                key={course.id} 
                                className="courses_item">
                                    <p className="courses_item-name">{course.name}</p>
                                </Link>
                            ))}
                        </div>
                    </>
                )}
            </div>
            {!isLoading && <Footer />}
        </>
    )
}

export default Direction