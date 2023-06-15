import { Link } from "react-router-dom"
import Header from "../../components/Layout/Header/Header"
import { useEffect, useState } from "react"
import CardDirection from "../../components/UI/CardDirection/CardDirection"
import Footer from "../../components/Layout/Footer/Footer"
import Loader from "../../components/UI/Loader/Loader"

function DirectionsEducation() {
    const [directions, setDirections] = useState([])

    const [isLoading, setIsLoading] = useState(true)

    const fetchData = () => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => {
                setTimeout(() => {
                    console.log(data.data)
                    setDirections(data.data)

                    setIsLoading(false)
                }, 500)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

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
                        <p className="path_link">Направления обучения</p>
                    </div>       
                </div>
                <h1 className="title">Направления обучения</h1>
                <div className="directions">
                    {isLoading ? <Loader /> : (
                        directions.map(direction => (<CardDirection key={direction.id} direction={direction} />))
                    )}
                </div>
            </div>
            {!isLoading && <Footer />}
        </>
    )
}

export default DirectionsEducation