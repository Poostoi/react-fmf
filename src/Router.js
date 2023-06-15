import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './screens/Home/Home.jsx'
import Directions from './screens/Directions/Directions.jsx'
import Direction from './screens/Direction/Direction.jsx'
import Course from './screens/Course/Course.jsx'
import DocumentsRules from './screens/DocumentsRules/DocumentsRules.jsx'
import DocumentWrapper from './components/UI/DocumentWrapper/DocumentWrapper.jsx'
import DocumentsExams from './screens/DocumentsExams/DocumentsExams.jsx'
import PrepareTests from './screens/PrepareTests/PrepareTests.jsx'
import DirectionsEducation from './screens/DirectionsEducation/DirectionsEducation.jsx'

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path='/' />
                <Route element={<DocumentsRules />} path='/docs' />
                <Route element={<DocumentsExams />} path='/exams' />
                <Route element={<PrepareTests />} path='/tests' />
                <Route element={<DirectionsEducation />} path='/directions' />
                <Route element={<DocumentWrapper />} path='/docs/:docsName' />
                <Route element={<Directions />} path='/directions/:directionsId' />
                <Route element={<Direction />} path='/directions/direction/:directionId' />
                <Route element={<Course />} path='/courses/course/:courseId' />
            </Routes>
        </BrowserRouter>
    )
}

export default Router