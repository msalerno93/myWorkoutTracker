import {Route, Routes} from 'react-router-dom'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import MyWorkoutsPage from './pages/MyWorkoutsPage'
import ExercisesPage from './pages/ExercisesPage'
import NotFoundPage from './pages/NotFoundPage'

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="home" element={<HomePage/>}/>
        <Route path="myworkouts" element={<MyWorkoutsPage/>}/>
        <Route path="exercises" element={<ExercisesPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </div>
  )
}

export default App
