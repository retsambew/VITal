import React from 'react'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';

import Navbar from './components/NavBar/Navbar.js'
import HomeView from './components/Home/index.js'
import NotesForm from './components/Notes/Form.js'
import NotesView from './components/Notes/View.js'
import PapersForm from './components/Papers/Form.js'
import PapersView from './components/Papers/View.js'
import FacultyForm from './components/Faculty/Form.js'
import FacultyView from './components/Faculty/View.js'
import ClubsForm from './components/Clubs/Form.js'
import ClubsView from './components/Clubs/View.js'
import EventForm from './components/Event/Form.js'
import EventView from './components/Event/View.js'
import RoadmapForm from './components/Roadmap/Form.js'
import RoadmapView from './components/Roadmap/View.js'
import RoadmapSView from './components/Roadmap/SpecView.js'
import CoursesForm from './components/Courses/Form.js'
import CoursesView from './components/Courses/View.js'
import CoursesSView from './components/Courses/SpecView.js'
import UnderDev from './components/UnderDev.js'

const App = () => {
    return (
        <div className='overflow-hidden'>
            <Router>
                <Navbar/>
                <div style={{paddingTop:'60px'}}>
                <Routes>
                    <Route exact path='/' element={<HomeView/>} />
                    <Route exact path='/notes' element={<NotesView/>} />
                    <Route exact path='/notes/add' element={<NotesForm/>} />
                    <Route exact path='/papers' element={<PapersView/>} />
                    <Route exact path='/papers/add' element={<PapersForm/>} />
                    <Route exact path='/faculty' element={<FacultyView/>} />
                    <Route exact path='/faculty/add' element={<FacultyForm/>} />
                    <Route exact path='/clubs' element={<ClubsView/>} />
                    <Route exact path='/clubs/add' element={<ClubsForm/>} />
                    <Route exact path='/event' element={<EventView/>} />
                    <Route exact path='/event/add' element={<EventForm/>} />
                    <Route exact path='/roadmaps' element={<RoadmapView/>} />
                    <Route exact path='/roadmaps/add' element={<RoadmapForm/>} />
                    <Route exact path='/roadmaps/:sec' element={<RoadmapSView/>} />
                    <Route exact path='/courses' element={<CoursesView/>} />
                    <Route exact path='/courses/add' element={<CoursesForm/>} />
                    <Route exact path='/courses/:sec' element={<CoursesSView/>} />
                    <Route exact path='/devl' element={<UnderDev/>} />
                </Routes>
                </div>
            </Router>
        </div>
    )
}

export default App;