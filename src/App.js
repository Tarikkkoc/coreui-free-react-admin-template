import React, { useState, Suspense } from 'react'
import { HashRouter, Route, Routes, useNavigate } from 'react-router-dom'
import './scss/style.scss'
import data from './data/Users.json'
import PropTypes from 'prop-types'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

const App = () => {
  const [currentUser, setCurrentUser] = useState(null)
  const navigate = useNavigate()

  const handleLogin = (username, password) => {
    const user = data.users.find((u) => u.username === username && u.password === password)
    if (user) {
      setCurrentUser(user)
      // window.location.href = '/#/dashboard'
      navigate('/dashboard')
    } else {
      alert('Username or password is wrong!')
    }
  }

  return (
    <Suspense fallback={loading}>
      <Routes>
        <Route path="/" name="Login Page" element={<Login handleLogin={handleLogin} />} />
      </Routes>
      <Routes>
        <Route exact path="/register" name="Register Page" element={<Register />} />
      </Routes>
      <Routes>
        <Route exact path="/404" name="Page 404" element={<Page404 />} />
      </Routes>
      <Routes>
        <Route exact path="/500" name="Page 500" element={<Page500 />} />
      </Routes>
      <Routes>
        <Route
          exact
          path="/dashboard"
          name="Home"
          element={<DefaultLayout currentUser={currentUser} />}
        />
      </Routes>
    </Suspense>
  )
}

export default App
