import React, { useRef } from 'react'
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
} from '@chakra-ui/react'
import { connect } from 'react-redux'
import { deleteCenterOneCenter } from '../../../app/redux/actions/centerActions'

const mapActionsToProps = dispatch => ({
  deleteCenter: id => dispatch(deleteCenterOneCenter(id)),
})

const AdminAlert = ({
  isOpen, onClose, name, deleteCenter, id,
}) => {
  const cancelRef = useRef()
  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Borrar Centro
          </AlertDialogHeader>

          <AlertDialogBody>
            {`¿Estas seguro de querer eliminar el centro ${name}?`}
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Cancelar
            </Button>
            <Button
              colorScheme="red"
              onClick={() => {
                onClose()
                deleteCenter(id)
              }}
              ml={3}
            >
              Borrar
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  )
}

export default connect(null, mapActionsToProps)(AdminAlert)
