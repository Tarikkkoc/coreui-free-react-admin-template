import React from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'
import PropTypes from 'prop-types'

const DefaultLayout = ({ currentUser }) => {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader currentUser={currentUser} />
        <div className="body flex-grow-1 px-3">
          <AppContent />
        </div>
        <AppFooter />
      </div>
    </div>
  )
}
// DefaultLayout.propTypes = {
//   currentUser: PropTypes.array, // currentUser prop'unun bir obje olduğunu belirtin veya uygun bir proptypes tanımını kullanın
// }
export default DefaultLayout
