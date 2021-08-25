import React, { useEffect } from 'react'
import { Box, Heading, Skeleton } from '@chakra-ui/react'
import { connect } from 'react-redux'
import { getCentresAllCentres } from '../../app/redux/actions/centresActions'
import { loadingSelector, centresSelector } from '../../app/redux/selectors/centresSelector'
import CentresList from '../../components/centres/CentresList'

const mapStateToProps = state => ({
  loading: loadingSelector(state),
  centres: centresSelector(state),
})

const mapActionsToProps = dispatch => ({
  loadCentres: () => dispatch(getCentresAllCentres()),
})

const CentresView = ({ loadCentres, loading, centres }) => {
  useEffect(() => {
    loadCentres()
  }, [])

  return (
    <div>
      <Box>
        <Skeleton isLoaded={!loading}>
          <Heading>Centros de Vacunación</Heading>
        </Skeleton>
      </Box>
      { centres.length > 0 && <CentresList centres={centres} /> }
    </div>
  )
}

export default connect(mapStateToProps, mapActionsToProps)(CentresView)
