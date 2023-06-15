import { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router-dom"
import Header from "../../components/Layout/Header/Header"
import './Course.css'
import Footer from "../../components/Layout/Footer/Footer"
import Loader from "../../components/UI/Loader/Loader"

function Course() {
    const {courseId} = useParams()
    const {state} = useLocation()

    const [course, setCourse] = useState({})

    const [isLoading, setIsLoading] = useState(true)

    const fetchCourseById = () => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => {
                const directions = data.data.find(item => item.id === Number(state.directionsId))
                const direction = directions.directions.find(d => d.id === Number(state.directionId))
                setCourse(direction.courses.find(c => c.id === Number(courseId)))

                setIsLoading(false)
            })
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
                        <h1 className="title" style={{marginTop: "2em"}}>{course?.name}</h1>
                        <div className="course_year">
                            <p>{course?.year}</p>
                            <h3>Учебный год</h3>
                        </div>
                        <div className="course_read">
                            <h4>Кто читает:</h4>
                            <p>{course?.read} ...</p>
                        </div>
                        <div className="course_when">
                            <h4>Когда читается:</h4>
                            <p>{course?.when?.number}-й курс, {course?.when?.middle} семестр</p>
                        </div>
                        <div className="course_teachers">
                            <h4>Преподаватели</h4>
                        </div>
                    </>
                )}
            </div>
            {!isLoading && <Footer />}
        </>
    )
}

export default Course