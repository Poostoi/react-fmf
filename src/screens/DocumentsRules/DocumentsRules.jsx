import { Link } from "react-router-dom"
import Header from "../../components/Layout/Header/Header"
import './DocumentsRules.css'
import Footer from "../../components/Layout/Footer/Footer"

const pdfDocsRules = [
    {fileName: 'Pravila_priema_2022', name: 'Правила приема в Приднестровский государственный университет им. Т.Г. Шевченко'},
    {fileName: 'Kontrol_2022', name: 'Контрольные цифры приема на на 2022-2023 учебный год'},
    {fileName: 'Priem_Spec2022', name: 'Перечень направлений (профилей направлений) и специальностей подготовки и вступительных испытаний к ним в 2022 году'}
]

function DocumentsRules() {
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
                        <p className="path_link">Правила приёма</p>
                    </div>       
                </div>
                <div className="documents-rules">
                    {pdfDocsRules.map((doc, i) => (
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

export default DocumentsRules