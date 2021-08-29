// @ts-nocheck
import React, { useEffect } from 'react'
import { Center } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCenterOneCenter } from '../app/redux/actions/centerActions'
import { loadingSelector, centerSelector } from '../app/redux/selectors/centerSelector'
import VaccinationCenter from '../components/center/Center'
import Map from '../components/center/Map'

const mapStateToProps = state => ({
  loading: loadingSelector(state),
  center: centerSelector(state),
})

const mapActionsToProps = dispatch => ({
  loadCenter: id => dispatch(getCenterOneCenter(id)),
})

const CenterView = ({ loadCenter, center, loading }) => {
  const { id } = useParams()
  useEffect(() => {
    loadCenter(id)
  }, [id, loadCenter])
  return (
    <Center
      py={12}
      flexDirection={{ base: 'column', md: 'row' }}
      mt={{ base: '0', md: '9' }}
    >
      <VaccinationCenter center={center} loading={loading} />
      <Map coordenades={center?.coordenades} loading={loading} name={center?.name} />
    </Center>
  )
}

export default connect(mapStateToProps, mapActionsToProps)(CenterView)
