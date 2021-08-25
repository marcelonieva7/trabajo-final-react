import routes from '../rest/routes'
import client from '../rest/client'

const getCentres = async () => {
  const centres = await client.get(routes.vaccinationCentres())
  return centres
}

export default getCentres
