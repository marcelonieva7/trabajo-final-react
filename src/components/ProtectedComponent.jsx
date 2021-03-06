import React from 'react'
import { connect } from 'react-redux'
import { userDataSelector } from '../app/redux/selectors/authSelector'
import LoginView from '../views/LoginView'

const mapStateToProps = state => ({
  userData: userDataSelector(state),
})

const ProtectedComponent = ({ Component, userData }) => {
  if (userData?.roles === 'User' || userData?.roles === 'Admin') {
    return <Component />
  }
  return <LoginView />
}

export default connect(mapStateToProps)(ProtectedComponent)
