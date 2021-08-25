import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { getUserAuth } from './app/redux/actions/authActions'
import ProtectedComponent from './components/ProtectedComponent'
import NavBar from './components/common/NavBar'
import CentresView from './views/centres/CentresView'
import Home from './views/Home'
import Login from './views/Login'

const mapActionsToProps = dispatch => ({
  loadUserData: () => dispatch(getUserAuth()),
})

const App = ({ loadUserData }) => {
  useEffect(() => {
    loadUserData()
  }, [])
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/centres" render={() => <ProtectedComponent Component={CentresView} />} />
      </Switch>
    </>
  )
}

export default connect(null, mapActionsToProps)(App)
