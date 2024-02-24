import { useEffect, useState } from "react"
import axios from "axios";
import { Link, useLocation, useParams } from "react-router-dom"
import Header from "../../components/Layout/Header/Header"
import './Direction.css'
import Footer from "../../components/Layout/Footer/Footer"
import Loader from "../../components/UI/Loader/Loader"
const formEducation = ["Очная", "Заочная", "Очно-заочная"]
function Direction() {
    const { directionId: profileId } = useParams()
    const { state } = useLocation()

    const [profile, setProfile] = useState({})
    const [yearRecruitments, setYearRecruitments] = useState({})

    const [isLoading, setIsLoading] = useState(true)

    const fetchDirectionById = async () => {
        console.log("id: " + profileId)
        console.log("state-id: " + state.directionsId)
        await axios({ method: "get", url: "https://localhost:7085/api/Profile/GetById?id=" + profileId })
            .then((e) => {

                console.log(e.data);
                setProfile(e.data)
                let currentYear = (new Date()).getFullYear()
                let year = e.data.yearRecruitments[0].year
                console.log(year)
                e.data.yearRecruitments && e.data.yearRecruitments.map((i) => {
                    if ((new Date(i.year)).getFullYear() == currentYear)
                        setYearRecruitments(i)
                })
                setIsLoading(false)
            })
            .catch((error) => {
                console.log(error);
            });

        // fetch('/data.json')
        //     .then(res => res.json())
        //     .then(data => {
        //         const id = 1 //state.directionsId
        //         const directions = data.data.find(item => item.id === Number(id))
        //         setDirection(directions?.directions.find(d => d.id === Number(12)))
        //         setIsLoading(false)

        //     })
    }

    useEffect(() => {
        fetchDirectionById()
    }, [profileId])

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
                        <Link to={`/directions/${state.directionsId}`} className="path_link">Программы бакалавриата и магистратуры</Link>
                        <div className="path_arrow">
                            <i className='bx bx-chevron-right'></i>
                        </div>
                    </div>
                    <div className="path_item">
                        <p className="path_link">{profile?.name}</p>
                    </div>
                </div>
                {isLoading ? <Loader /> : (
                    <>
                        <h1 className="title">{profile?.name}</h1>
                        <p className="direction-about">{profile?.description}</p>
                        <h2 className="subtitle">Подробнее о специальности</h2>
                        <div className="direction-info">
                            <div>
                                <h3 className="info_title">Период обучения</h3>
                                <div className="info_scores">                                    
                                        <div className="subject">
                                            <p className="subject_score">{profile.specificationsList[0].periodEducation}</p>
                                            <p className="subject_name">{profile.specificationsList[0].periodEducation == 4? "года": "лет"}</p>
                                        </div>
                                    
                                </div>
                            </div>
                            <div>
                                <h3 className="info_title">Количество мест</h3>
                                <div className="info_scores">

                                    <div className="subject" >
                                        <p className="subject_score">{yearRecruitments.numberSeatsList[0].budgetPlaces}</p>
                                        <p className="subject_name">{"Бюджетных"}</p>
                                    </div>
                                    <div className="subject" >
                                        <p className="subject_score">{yearRecruitments.numberSeatsList[0].paidPlaces}</p>
                                        <p className="subject_name">{"Платных"}</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="info_title">Форма обучения</h3>
                                <div className="info_scores">
                                    
                                        <div  className="subject">
                                            <p className="subject_score">{formEducation[profile.specificationsList[0].formEducation]}</p>
                                            {/* <p className="subject_name">{score.subject}</p> */}
                                        </div>
                                    
                                </div>
                            </div>
                            <div>
                                <h3 className="info_title">Стоимость обучения</h3>
                                <div className="info_scores">
                                    <div className="subject">
                                        <p className="subject_score">{profile.specificationsList[0].price} руб.</p>
                                        <p className="subject_name" style={{ visibility: "hidden" }}>1</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h2 className="subtitle">Дисциплины</h2>
                        <div className="courses">
                            {yearRecruitments.yearRecruitment_Disciplines && yearRecruitments.yearRecruitment_Disciplines.map((year) => (
                                <Link
                                    state={{ directionId: profileId, directionsId: state.directionsId }}
                                    to={`/courses/course/${year.discipline.id}`}
                                    key={year.discipline.id}
                                    className="courses_item">
                                    <p className="courses_item-name">{year.discipline.name}</p>
                                </Link>
                            ))}
                        </div>
                    </>
                )}
            </div >
            {!isLoading && <Footer />
            }
        </>
    )
}

export default Direction