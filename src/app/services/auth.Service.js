import routes from '../rest/routes'
import client from '../rest/client'

const validateToken = async () => {
  const { user } = await client.get(routes.auth())
  return user
}

export default validateToken
