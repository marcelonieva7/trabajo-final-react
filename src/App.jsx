import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
// import Cookie from 'js-cookie'
import { Skeleton } from '@chakra-ui/react'
import { getUserAuth } from './app/redux/actions/authActions'
import { loadingSelector } from './app/redux/selectors/authSelector'
import ProtectedComponent from './components/ProtectedComponent'
import AdminProtectedComponent from './components/AdminProtectedComponent'
import NavBar from './components/common/NavBar'
import CentersContainer from './components/centers/CentersContainer'
import CenterView from './views/CenterView'
import HomeView from './views/HomeView'
import Login from './views/LoginView'
import NotFounded from './components/NotFounded'

// eslint-disable-next-line max-len
// Cookie.set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjcyNzEyODA1IiwiYWRtaW4iOnRydWUsImlhdCI6MTYzMDE5MjQ3NSwiZXhwIjoxNjMwMzY1Mjc1fQ.YdcSoc5ju1t6J4T6VfB_8a2Xd4mWKPBXon5K4SMOU88')
const mapActionsToProps = dispatch => ({
  loadUserData: () => dispatch(getUserAuth()),
})

const mapStateToProps = state => ({
  loading: loadingSelector(state),
})

const App = ({ loadUserData, loading }) => {
  useEffect(() => {
    loadUserData()
  }, [loadUserData])
  return (
    <Skeleton isLoaded={!loading} h="100vh">
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/centers" render={() => <ProtectedComponent Component={CentersContainer} />} />
        <Route exact path="/center/:id" render={() => <ProtectedComponent Component={CenterView} />} />
        <Route exact path="/admin/centers" render={() => <AdminProtectedComponent Component={CentersContainer} />} />
        <Route exact path="*" component={NotFounded} />
      </Switch>
    </Skeleton>
  )
}

export default connect(mapStateToProps, mapActionsToProps)(App)
