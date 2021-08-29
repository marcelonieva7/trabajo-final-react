import React from 'react'
import {
  Flex,
  SimpleGrid,
  useColorModeValue,
  useBreakpointValue,
  chakra,
  IconButton,
  ButtonGroup,
} from '@chakra-ui/react'
import { AiFillEdit } from 'react-icons/ai'
import { BsFillTrashFill } from 'react-icons/bs'

const AdminList = ({
  center,
  tid,
  onOpenModal,
  onOpenAlert,
}) => {
  const { _id, name, creation_date: date } = center
  const bg = useColorModeValue('gray.100', 'gray.700')
  const color = useColorModeValue('gray.500', 'gray.600')
  return (
    <Flex
      direction={{ base: 'row', md: 'column' }}
      bg={useColorModeValue('white', 'gray.800')}
    >
      {useBreakpointValue({ base: true, md: tid === 0 }) && (
        <SimpleGrid
          spacingY={3}
          columns={{ base: 1, md: 3 }}
          w={{ base: 120, md: 'full' }}
          textTransform="uppercase"
          bg={bg}
          color={color}
          py={{ base: 1, md: 4 }}
          px={{ base: 2, md: 10 }}
          fontSize="md"
          fontWeight="hairline"
        >
          <span>Nombre</span>
          <chakra.span textAlign={{ md: 'center' }} columns={1}>Creado</chakra.span>
          <chakra.span textAlign={{ md: 'right' }} columns={1}>Acciones</chakra.span>
        </SimpleGrid>
      )}
      <SimpleGrid
        spacingY={3}
        columns={{ base: 1, md: 3 }}
        w="full"
        py={2}
        px={10}
        fontWeight="hairline"
      >
        <span>{name}</span>
        <chakra.span
          textOverflow="ellipsis"
          textAlign={{ md: 'center' }}
          overflow="hidden"
          whiteSpace="nowrap"
        >
          {date}
        </chakra.span>
        <Flex justify={{ md: 'start' }}>
          <ButtonGroup variant="solid" size="sm" spacing={3} justifyContent="flex-end" w={{ base: 'auto', md: 'full' }}>
            <IconButton
              colorScheme="green"
              icon={<AiFillEdit />}
              aria-label="Edit Center"
              onClick={() => onOpenModal(center)}
            />
            <IconButton
              colorScheme="red"
              variant="outline"
              icon={<BsFillTrashFill />}
              aria-label="Delete Center"
              onClick={() => onOpenAlert(name, _id)}
            />
          </ButtonGroup>
        </Flex>
      </SimpleGrid>
    </Flex>
  )
}

export default AdminList
