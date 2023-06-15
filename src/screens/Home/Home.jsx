import Header from "../../components/Layout/Header/Header"
import Main from "../../components/Layout/Main/Main"
import Footer from "../../components/Layout/Footer/Footer"
import Loader from "../../components/UI/Loader/Loader"


function Home() {
    return (
        <>
            <Header />
            <div className="background" style={{
                backgroundImage: 'url(/images/bg-fmf.jpg)'
            }}></div>
            <Main />
            <Footer />
        </>
    )
}

export default Home