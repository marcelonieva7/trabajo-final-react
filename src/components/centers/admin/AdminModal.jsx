/* eslint-disable camelcase */
import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from '@chakra-ui/react'
import { connect } from 'react-redux'
import { updateCenterOneCenter, createCenterOneCenter } from '../../../app/redux/actions/centerActions'
import AdminForm from './AdminForm'

const mapActionsToProps = dispatch => ({
  updateCenter: (id, data) => dispatch(updateCenterOneCenter(id, data)),
  createCenter: data => dispatch(createCenterOneCenter(data)),
})

const AdminModal = ({
  isOpen,
  onClose,
  center,
  title,
  createCenter,
  updateCenter,
}) => {
  const { _id } = center || {}
  const action = e => {
    e.preventDefault()
    const {
      center_name, street_address, center_img, center_lat, center_lon,
    } = e.target
    const data = {
      name: center_name.value,
      adress: street_address.value,
      img: center_img.value,
      coordenades: {
        lat: Number(center_lat.value),
        lon: Number(center_lon.value),
      },
    }
    // console.log(data)
    if (title === 'Editar centro') {
      updateCenter(_id, data)
      onClose()
      return
    }
    createCenter(data)
    onClose()
  }
  return (
    <>
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <AdminForm center={center} handleSubmit={action} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default connect(null, mapActionsToProps)(AdminModal)
