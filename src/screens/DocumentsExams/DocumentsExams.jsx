import { Link } from "react-router-dom"
import Header from "../../components/Layout/Header/Header"
import './DocumentsExams.css'
import Footer from "../../components/Layout/Footer/Footer"

const pdfDocsExams = [
    {fileName: '01.04.01_o_z', name: '01.04.01 «Математика» - Профиль: «Математика. Преподавание математики и информатики» (оч-зо)'},
    {fileName: '01.04.02', name: '01.04.02 «Прикладная математика и информатика» - Профиль: Математические и информационные технологии'},
    {fileName: '03.04.02', name: '03.04.02 Физика» - Профиль: Физическое образование в школе'}
]

function DocumentsExams() {
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
                        <p className="path_link">Программы вступительных испытаний</p>
                    </div>       
                </div>
                <div className="documents-exams">
                    {pdfDocsExams.map((doc, i) => (
                        <Link 
                        to={`/docs/${doc.fileName}`}
                        target="_blank"
                        rel="noreferrer"
                        key={i} 
                        className="document">
                            <div className="document_icon">
                                <i className='bx bxs-file-blank' ></i>
                            </div>
                            <div className="document_name">{doc.name}</div>
                        </Link>
                    ))}
                </div>
            </div>
            <div style={{
                position: 'fixed',
                left: 0,
                right: 0,
                bottom: 0
            }}>
                <Footer />
            </div>
        </>
    )
}

export default DocumentsExams