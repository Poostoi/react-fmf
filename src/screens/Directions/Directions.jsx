import { Link, useParams } from "react-router-dom"
import Header from "../../components/Layout/Header/Header"

import axios from "axios";
import './Directions.css'
import { useCallback, useEffect, useState } from "react"
import Footer from "../../components/Layout/Footer/Footer"
import Loader from "../../components/UI/Loader/Loader"

function Directions() {
    const { directionsId } = useParams()

    const [isLoading, setIsLoading] = useState(true)

    const [isChecked, setIsChecked] = useState({ bachelor: false, master: false, speciality: false })

    const changeDirectionsHandler = useCallback(() => {
        if (!isChecked.bachelor && !isChecked.master && !isChecked.speciality) {
            setFilteredProfiles(profiles)
        } else if (isChecked.bachelor && isChecked.master && isChecked.speciality) {
            setFilteredProfiles(profiles)
        } else if (isChecked.bachelor) { //бакалавриат
            setFilteredProfiles(profiles.filter(p => p.specificationsList[0].levelEducation === 0))
        } else if (isChecked.master) {  //магистратура
            setFilteredProfiles(profiles.filter(p => p.specificationsList[0].levelEducation === 1))
        }else if (isChecked.speciality) {  //специалитет
            setFilteredProfiles(profiles.filter(p => p.specificationsList[0].levelEducation === 2))
            console.log(filteredProfiles)
        }

    }, [isChecked])

    const [filteredProfiles, setFilteredProfiles] = useState([])
    const [profiles, setProfiles] = useState([])
    const [nameGeneralDirection, setNameGeneralDirection] = useState('')
    const [classPlaceholder, setClassPlaceholder] = useState(['placeholder'])

    const fetchDirectionsById = useCallback(async () => {
        console.log(directionsId)
        await axios({ method: "get", url: "https://localhost:7085/api/Direction/GetByGeneralDirection?id=" + directionsId })
            .then((e) => {
                console.log(e.data);
                let array_profiles = []
                e.data.forEach((k)=> k.profiles.forEach((e)=>{e.nameDirection = k.name; array_profiles.push(e);}))
                console.log(array_profiles);
                setProfiles(array_profiles)
                setFilteredProfiles(array_profiles)
                setNameGeneralDirection(e.data[0].generalDirection.name)
                setIsLoading(false)

            })
            .catch((error) => {
                console.log(error);
            });
        // fetch('/data.json')
        //     .then(res => res.json())
        //     .then(data => {
        //         const directions = data.data.find(item => item.id === Number(directionsId))
        //         setDirections(directions.directions)
        //         setFilteredDirections(directions.directions)
        //         setNameDirection(directions.name)

        //         setIsLoading(false)
        //     })
    }, [directionsId])

    useEffect(() => {
        fetchDirectionsById()
    }, [directionsId])

    useEffect(() => {
        changeDirectionsHandler()
    }, [isChecked])

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
                        <p className="path_link">Программы бакалавриата и магистратуры</p>
                    </div>
                </div>
                <h1 className="title">Программы бакалавриата и магистратуры</h1>
                <div className="search-direction">
                    <input type="text" className="search-direction_input"
                        onFocus={() => (setClassPlaceholder(prev => ([...prev, 'show'])))}
                        onBlur={() => (setClassPlaceholder(['placeholder']))}
                        onInput={(e) => {
                            if (e.target.value.length === 0) {
                                setClassPlaceholder(prev => ([...prev, 'show']))
                            } else {
                                setClassPlaceholder(['placeholder'])
                            }
                        }} />
                    <div className={classPlaceholder.join(' ')}>Поиск по специальностям</div>
                    <div className="search-direction_icon">
                        <i className='bx bx-search' ></i>
                    </div>
                </div>
                {isLoading ? <Loader /> : (
                    <div className="list-direction">
                        <div className="list-direction_filter">
                            <div>
                                <h3>Выберите форму обучения</h3>
                                <div className="filter_item">
                                    <input type="checkbox" className="checkbox" id="bachelor"
                                        checked={isChecked.bachelor} onChange={(e) => setIsChecked(prev => ({ ...prev, bachelor: e.target.checked }))} />
                                    <label htmlFor="bachelor">Бакалавриат</label>
                                </div>
                                <div className="filter_item">
                                    <input type="checkbox" className="checkbox" id="master"
                                        checked={isChecked.master} onChange={(e) => setIsChecked(prev => ({ ...prev, master: e.target.checked }))} />
                                    <label htmlFor="master">Магистратура</label>
                                </div>
                                <div className="filter_item">
                                    <input type="checkbox" className="checkbox" id="speciality"
                                        checked={isChecked.speciality} onChange={(e) => setIsChecked(prev => ({ ...prev, speciality: e.target.checked }))} />
                                    <label htmlFor="speciality">Специалитет</label>
                                </div>
                            </div>
                        </div>
                        <div className="list-direction_items">
                            {filteredProfiles && filteredProfiles.map(p => (
                                <Link
                                    to={`/directions/direction/${p.id}`}
                                    state={{ directionsId }}
                                    key={p.id}
                                    className="list-direction_items-card">
                                    <div className="card-title">
                                        <h3>{p.nameDirection}</h3>
                                        <p>{p.specificationsList[0].levelEducation == 0 ? 'бакалавр' : p.specificationsList[0].levelEducation == 1 ? 'магистр': 'специалист'}
                                            <i className='bx bx-right-arrow-alt' ></i></p>
                                    </div>
                                    <div className="card-desc">{p.name}</div>
                                    <span className="card-mark">{nameGeneralDirection}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            {!isLoading && <Footer />}
        </>
    )
}

export default Directions