import React from 'react'
import { Text, Center } from '@chakra-ui/react'
import { connect } from 'react-redux'
import { userDataSelector } from '../app/redux/selectors/authSelector'
import LoginView from '../views/LoginView'

const mapStateToProps = state => ({
  userData: userDataSelector(state),
})

const AdminProtectedComponent = ({ Component, userData }) => {
  if (userData?.roles) {
    if (userData?.roles === 'Admin') {
      return <Component />
    }
    return <Center mt="6"><Text>Requiere rol de Administrador</Text></Center>
  }
  return <LoginView />
}

export default connect(mapStateToProps)(AdminProtectedComponent)
