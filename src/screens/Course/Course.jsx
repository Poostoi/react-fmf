import { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router-dom"
import Header from "../../components/Layout/Header/Header"
import './Course.css'
import Footer from "../../components/Layout/Footer/Footer"
import Loader from "../../components/UI/Loader/Loader"
import axios from "axios";

function Course() {
    const { courseId } = useParams()
    const { state } = useLocation()

    const [course, setCourse] = useState({})
    const [stave, setStave] = useState([])
    const [yearRec, setYearRec] = useState("")

    const [isLoading, setIsLoading] = useState(true)

    const fetchCourseById = async () => {
        await axios({ method: "get", url: "https://localhost:7085/api/Discipline/GetById?id=" + courseId })
            .then((e) => {

                console.log(e.data);
                setCourse(e.data)
                let currentYear = (new Date()).getFullYear()
                e.data.yearRecruitment_Disciplines && e.data.yearRecruitment_Disciplines.map((i) => {
                    if ((new Date(i.yearRecruitment.year)).getFullYear() == currentYear) {
                        setYearRec(i.yearRecruitment.year)
                        console.log((new Date(i.yearRecruitment.year)).getFullYear())
                        if (i.staves.length != 0) setStave(i.staves)
                    }
                    console.log('year' + (new Date(i.yearRecruitment.year)).getFullYear())
                })
                setIsLoading(false)
            })
            .catch((error) => {
                console.log(error);
            });
        // fetch('/data.json')
        //     .then(res => res.json())
        //     .then(data => {
        //         const directions = data.data.find(item => item.id === Number(state.directionsId))
        //         const direction = directions.directions.find(d => d.id === Number(state.directionId))
        //         setCourse(direction.courses.find(c => c.id === Number(courseId)))

        //         setIsLoading(false)
        //     })
    }

    useEffect(() => {
        fetchCourseById()
    }, [courseId])

    console.log(course)

    return (
        <>
            <Header />
            <div className="container">
                {isLoading ? <Loader /> : (
                    <>
                        <h1 className="title" style={{ marginTop: "2em" }}>{course?.name}</h1>
                        <div className="course_year">
                            <p>{yearRec}</p>
                            <h3>Учебный год</h3>
                        </div>
                        <div className="course_read">
                            <h4>Кто читает:</h4>
                            <p>{stave[0]?.employee?.surname + " " + stave[0]?.employee?.name[0] + ". " + stave[0]?.employee?.patronymic[0] + ". "}</p>
                        </div>
                        <div className="course_when">
                            <h4>Когда читается:</h4>
                            <p>{course?.when?.number}-й курс, {course?.when?.middle} семестр</p>
                        </div>
                        <div className="course_teachers">
                            <h4>Преподаватели</h4>
                            {stave && stave.map((staveItem) =>
                            (
                                <p>{staveItem?.employee?.surname + " " + staveItem?.employee?.name[0] + ". " + staveItem?.employee?.patronymic[0] + ". "}</p>
                            ))}

                        </div>
                    </>
                )}
            </div>
            {!isLoading && <Footer />}
        </>
    )
}

export default Course