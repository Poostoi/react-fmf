import Card from "../../UI/Card/Card"
import CardDirection from "../../UI/CardDirection/CardDirection"
import './Main.css'
import { useEffect, useState } from "react"

const cards = [
    {id: 1, name: 'Правила приема', path: '/docs'},
    {id: 2, name: 'Подготовительные курсы', path: '/tests'},
    {id: 3, name: 'Направления обучения', path: '/directions'},
    {id: 4, name: 'Программы вступительных испытаний', path: '/exams'},
]

function Main() {
    return (
        <div className="main">
            <div className="container">
                <div className="navigation">
                    <ul>
                        <li><span>Главная</span> <i className='bx bx-chevron-right'> </i></li>
                        <li>Абитуриенту</li>
                    </ul>
                </div>
                <h1 className="title">Абитуриенту</h1>
                <div className="cards">
                    {cards.map(card => (<Card key={card.id} card={card} />))}
                </div>
            </div>
        </div>
    )
}

export default Main