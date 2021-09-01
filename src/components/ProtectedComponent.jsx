import React from 'react'
import { connect } from 'react-redux'
import { userDataSelector } from '../app/redux/selectors/authSelector'
import LoginView from '../views/LoginView'

const mapStateToProps = state => ({
  userData: userDataSelector(state),
})

const ProtectedComponent = ({ Component, userData }) => {
  // eslint-disable-next-line no-constant-condition
  if (userData?.roles === 'User' || 'Admin') {
    return <Component />
  }
  return <LoginView />
}

export default connect(mapStateToProps)(ProtectedComponent)
