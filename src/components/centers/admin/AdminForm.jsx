// @ts-nocheck
import React, { useState } from 'react'
import {
  Box,
  Stack,
  SimpleGrid,
  GridItem,
  Heading,
  Button,
  useColorModeValue,
  FormLabel,
  FormControl,
  Input,
  InputGroup,
  chakra,
  Image,
} from '@chakra-ui/react'

const AdminForm = ({ center, handleSubmit }) => {
  const {
    name,
    img,
    adress,
    coordenades,
  } = center || {}
  const [newImg, setNewImg] = useState('')
  return (
    <Box>
      <Box mt={10}>
        <SimpleGrid
          display={{ base: 'initial', md: 'grid' }}
          columns={{ md: 3 }}
          spacing={{ md: 6 }}
        >
          <GridItem colSpan={{ md: 1 }}>
            <Box px={[4, 0]}>
              <Heading align="center" fontSize="lg" fontWeight="medium" lineHeight="6">
                Administrar centro de vacunación
              </Heading>
              {img ? (
                <Image
                  rounded="lg"
                  height={230}
                  width={282}
                  objectFit="cover"
                  src={img}
                />
              )
                : (
                  <Image
                    rounded="lg"
                    height={230}
                    width={282}
                    objectFit="cover"
                    src={newImg}
                  />
                )}
            </Box>
          </GridItem>
          <GridItem mt={[5, null, 0]} colSpan={{ md: 2 }}>
            <chakra.form
              onSubmit={handleSubmit}
              shadow="base"
              rounded={[null, 'md']}
              overflow={{ sm: 'hidden' }}
            >
              <Stack
                px={4}
                py={5}
                p={[null, 6]}
                bg={useColorModeValue('white', 'gray.700')}
                spacing={6}
              >
                <SimpleGrid columns={6} spacing={6}>
                  <FormControl as={GridItem} colSpan={6} isRequired>
                    <FormLabel
                      htmlFor="center_img"
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue('gray.700', 'gray.50')}
                    >
                      Url de la imagen
                    </FormLabel>
                    <InputGroup size="sm">
                      <Input
                        type="url"
                        placeholder="https://www.ejemplo.com"
                        defaultValue={img}
                        onChange={e => setNewImg(e.target.value)}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        name="center_img"
                        id="center_img"
                        mt={1}
                        w="full"
                        rounded="md"
                      />
                    </InputGroup>
                  </FormControl>
                  <FormControl as={GridItem} colSpan={6} isRequired>
                    <FormLabel
                      htmlFor="center_name"
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue('gray.700', 'gray.50')}
                    >
                      Nombre
                    </FormLabel>
                    <Input
                      type="text"
                      placeholder="Nombre"
                      defaultValue={name}
                      minLength="5"
                      maxLength="30"
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      name="center_name"
                      id="center_name"
                      mt={1}
                      w="full"
                      rounded="md"
                    />
                  </FormControl>
                  <FormControl as={GridItem} colSpan={6} isRequired>
                    <FormLabel
                      htmlFor="street_address"
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue('gray.700', 'gray.50')}
                    >
                      Dirección
                    </FormLabel>
                    <Input
                      type="text"
                      name="street_address"
                      id="street_address"
                      placeholder="Ej. San Nicolas de Bari 255"
                      defaultValue={adress}
                      minLength="5"
                      maxLength="50"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                    />
                  </FormControl>
                  <FormControl as={GridItem} colSpan={[3, 4]} isRequired>
                    <FormLabel
                      htmlFor="center_lat"
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue('gray.700', 'gray.50')}
                    >
                      Latitud
                    </FormLabel>
                    <Input
                      type="number"
                      step="0.000000000001"
                      name="center_lat"
                      id="center_lat"
                      placeholder="Ej. -66.8919548"
                      defaultValue={coordenades?.lat}
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                    />
                  </FormControl>
                  <FormControl as={GridItem} colSpan={[3, 4]} isRequired>
                    <FormLabel
                      htmlFor="center_lon"
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue('gray.700', 'gray.50')}
                    >
                      Longitud
                    </FormLabel>
                    <Input
                      type="number"
                      step="0.000000000001"
                      name="center_lon"
                      id="center_lon"
                      placeholder="Ej. -22.3454789"
                      defaultValue={coordenades?.lon}
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                    />
                  </FormControl>
                </SimpleGrid>
              </Stack>
              <Box
                px={{ base: 4, sm: 6 }}
                py={3}
                bg={useColorModeValue('gray.50', 'gray.900')}
                textAlign="right"
              >
                <Button
                  type="submit"
                  _focus={{ shadow: '' }}
                  fontWeight="md"
                >
                  Enviar
                </Button>
              </Box>
            </chakra.form>
          </GridItem>
        </SimpleGrid>
      </Box>
    </Box>
  )
}

export default AdminForm
