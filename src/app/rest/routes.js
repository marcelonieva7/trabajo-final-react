const base = process.env.REACT_APP_API_BASE_URL

const routes = {
  center: id => `${base}/vaccinationcentres/${id}`,
  vaccinationCenters: () => `${base}/vaccinationcentres`,
  auth: () => `${base}/auth`,
}

export default routes
