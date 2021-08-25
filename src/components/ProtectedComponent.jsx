import React from 'react'
import { connect } from 'react-redux'
import { loadingSelector, userDataSelector } from '../app/redux/selectors/authSelector'

const mapStateToProps = state => ({
  loading: loadingSelector(state),
  userData: userDataSelector(state),
})

const ProtectedComponent = ({ Component, loading, userData: { roles } }) => {
  if (!loading) {
    if (roles === 'Admin') {
      return <Component />
    }
    return <div>logueate</div>
  }
  return <div>cargando</div>
}

export default connect(mapStateToProps)(ProtectedComponent)
