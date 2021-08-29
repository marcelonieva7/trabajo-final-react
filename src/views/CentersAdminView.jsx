/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react'
import {
  Flex,
  Stack,
  useColorModeValue,
  Button,
  useDisclosure,
} from '@chakra-ui/react'
import AdminList from '../components/centers/admin/AdminList'
import AdminModal from '../components/centers/admin/AdminModal'
import AdminAlert from '../components/centers/admin/AdminAlert'

const CentersAdminList = ({ centers }) => {
  const bg = useColorModeValue('white', 'gray.800')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { isOpen: isOpen1, onOpen: onOpen1, onClose: onClose1 } = useDisclosure()
  const [name, setName] = useState('')
  const [id, setId] = useState('')
  const [title, setTitle] = useState('')
  const [centerData, setCenterData] = useState({})

  const onOpenModal = (center = {}) => {
    setTitle(center?.name ? 'Editar centro' : 'Crear centro')
    setCenterData(center)
    onOpen()
  }
  const onOpenAlert = (centerName, _id) => {
    setName(centerName)
    setId(_id)
    onOpen1()
  }
  return (
    <Flex
      w="full"
      bg={{ md: bg }}
      p={50}
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Button
        alignSelf="flex-end"
        my="6"
        onClick={onOpenModal}
      >
        Crear Nuevo Centro
      </Button>
      <Stack
        direction={{ base: 'column' }}
        w="full"
        bg={{ md: useColorModeValue('white', 'gray.800') }}
        shadow="lg"
      >
        {centers.map((center, tid) => (
          <AdminList
            center={center}
            tid={tid}
            key={tid}
            onOpenAlert={onOpenAlert}
            onOpenModal={onOpenModal}
          />
        ))}
      </Stack>
      <AdminAlert isOpen={isOpen1} onClose={onClose1} name={name} id={id} />
      <AdminModal isOpen={isOpen} onClose={onClose} center={centerData} title={title} />
    </Flex>
  )
}

export default CentersAdminList
