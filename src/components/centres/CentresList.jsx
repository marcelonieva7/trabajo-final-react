import React from 'react'

const CentresList = ({ centres }) => (
  <ul>
    { centres.map(({
      _id, name, adress, img, coordenades,
    }) => <li key={_id}>{`${name} ${adress} ${img} ${coordenades.lon}`}</li>) }
  </ul>
)

export default CentresList
