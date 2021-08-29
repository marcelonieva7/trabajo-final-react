import routes from '../rest/routes'
import client from '../rest/client'

export const getCenter = async id => {
  const center = await client.get(routes.center(id))
  return center
}

export const updateCenter = async (id, data) => {
  const { updated } = await client.put(routes.center(id), data)
  return updated
}

export const deleteCenter = async id => {
  const { deleted } = await client.delete(routes.center(id))
  return deleted
}

export const createCenter = async data => {
  const { added } = await client.post(routes.vaccinationCenters(), data)
  return added
}

export const getCenters = async () => {
  const centers = await client.get(routes.vaccinationCenters())
  return centers
}
