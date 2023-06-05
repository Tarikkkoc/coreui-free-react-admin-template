import React, { useEffect } from 'react'
import { Routes, Route, Navigate, useParams } from 'react-router-dom'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'
import PropTypes from 'prop-types'
// import Dashboard from './../views/dashboard/Dashboard'
import Report1 from '../components/Report1'
import Report2 from '../components/Report2'
import Form from '../Form'

const DefaultLayout = ({ currentUser }) => {
  const params = useParams()
  useEffect(() => {
    console.log('params', params.component)
  }, [])
  let ContentComponent
  switch (params.component) {
    // case 'dashboard':
    //   ContentComponent = Dashboard
    //   break
    case 'report1':
      ContentComponent = Report1
      break
    case 'report2':
      ContentComponent = Report2
      break
    case 'form':
      ContentComponent = Form
      break
    default:
      ContentComponent = null
  }
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader currentUser={currentUser} />
        <div className="body flex-grow-1 px-3">
          {/* <AppContent component={params} /> */}
          {ContentComponent && <ContentComponent />}
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default DefaultLayout
