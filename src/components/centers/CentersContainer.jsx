import React, { useEffect } from 'react'
import {
  Box,
  Heading,
  Skeleton,
  Center,
} from '@chakra-ui/react'
import { connect } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { getCentersAllCenters } from '../../app/redux/actions/centerActions'
import { loadingSelector, centersSelector } from '../../app/redux/selectors/centerSelector'
import CentersListView from '../../views/CentersListView'
import CentersAdminView from '../../views/CentersAdminView'

const mapStateToProps = state => ({
  loading: loadingSelector(state),
  centers: centersSelector(state),
})

const mapActionsToProps = dispatch => ({
  loadCenters: () => dispatch(getCentersAllCenters()),
})

const CentersContainer = ({ loadCenters, loading, centers }) => {
  const path = useLocation().pathname
  useEffect(() => {
    loadCenters()
  }, [loadCenters])

  return (
    <>
      <Box>
        <Center mt="6"><Heading>Centros de Vacunación</Heading></Center>
      </Box>
      <Skeleton h="100vh" isLoaded={!loading}>
        { centers.length > 0 && (path === '/admin/centers' ? <CentersAdminView centers={centers} /> : <CentersListView centers={centers} />) }
        { centers.length === 0 && <Center mt="14"><Heading>Sin centros de vacunación</Heading></Center>}
      </Skeleton>
    </>
  )
}

export default connect(mapStateToProps, mapActionsToProps)(CentersContainer)
