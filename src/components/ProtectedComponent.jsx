import React from 'react'
import { Skeleton } from '@chakra-ui/react'
import { connect } from 'react-redux'
import { loadingSelector, userDataSelector } from '../app/redux/selectors/authSelector'
import LoginView from '../views/LoginView'

const mapStateToProps = state => ({
  loading: loadingSelector(state),
  userData: userDataSelector(state),
})

const ProtectedComponent = ({ Component, loading, userData }) => {
  if (userData?.roles === 'Admin') {
    return <Skeleton isLoaded={!loading}><Component /></Skeleton>
  }
  return <LoginView />
}

export default connect(mapStateToProps)(ProtectedComponent)
