import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'

// routes config
import routes from '../routes'
import Dashboard from './../views/dashboard/Dashboard'
import Report1 from './Report1'
import Report2 from './Report2'
import Form from '../Form'

const AppContent = ({ component }) => {
  return (
    <div>
      {/* <Dashboard />
      <Report1 /> */}
      {component === 'dashboard' && <Dashboard />}
      {component === 'report1' && <Report1 />}
      {component === 'report2' && <Report2 />}
      {component === 'form' && <Form />}
    </div>
  )
}

export default React.memo(AppContent)
