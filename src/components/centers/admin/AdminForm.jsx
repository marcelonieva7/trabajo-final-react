/* eslint-disable react/jsx-props-no-spreading */
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
  FormErrorMessage,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import centerModel from '../../../app/models/center.model'

const AdminForm = ({ center, onSubmit }) => {
  const {
    name,
    img,
    adress,
    coordenades,
  } = center || {}
  const [newImg, setNewImg] = useState('')
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: joiResolver(centerModel) })
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
              onSubmit={handleSubmit(onSubmit)}
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
                  <FormControl as={GridItem} colSpan={6} isInvalid={errors.img}>
                    <FormLabel
                      htmlFor="img"
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
                        name="img"
                        id="img"
                        mt={1}
                        w="full"
                        rounded="md"
                        {...register('img')}
                      />
                    </InputGroup>
                    <FormErrorMessage>
                      {errors.img && errors.img.message}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl as={GridItem} colSpan={6} isInvalid={errors.name}>
                    <FormLabel
                      htmlFor="name"
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
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      name="name"
                      id="name"
                      mt={1}
                      w="full"
                      rounded="md"
                      {...register('name')}
                    />
                    <FormErrorMessage>
                      {errors.name && errors.name.message}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl as={GridItem} colSpan={6} isInvalid={errors.adress}>
                    <FormLabel
                      htmlFor="adress"
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue('gray.700', 'gray.50')}
                    >
                      Dirección
                    </FormLabel>
                    <Input
                      type="text"
                      name="adress"
                      id="adress"
                      placeholder="Ej. San Nicolas de Bari 255"
                      defaultValue={adress}
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      {...register('adress')}
                    />
                    <FormErrorMessage>
                      {errors.adress && errors.adress.message}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl as={GridItem} colSpan={[3, 4]} isInvalid={errors.coordenades?.lat}>
                    <FormLabel
                      htmlFor="coordenades.lat"
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue('gray.700', 'gray.50')}
                    >
                      Latitud
                    </FormLabel>
                    <Input
                      type="number"
                      step="0.000000000001"
                      name="coordenades.lat"
                      id="coordenades.lat"
                      placeholder="Ej. -66.8919548"
                      defaultValue={coordenades?.lat}
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      {...register('coordenades.lat', { valueasnumber: true })}
                    />
                    <FormErrorMessage>
                      {errors.coordenades?.lat && errors.coordenades?.lat.message}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl as={GridItem} colSpan={[3, 4]} isInvalid={errors.coordenades?.lon}>
                    <FormLabel
                      htmlFor="coordenades.lon"
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue('gray.700', 'gray.50')}
                    >
                      Longitud
                    </FormLabel>
                    <Input
                      type="number"
                      step="0.000000000001"
                      name="coordenades.lon"
                      id="coordenades.lon"
                      placeholder="Ej. -22.3454789"
                      defaultValue={coordenades?.lon}
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      {...register('coordenades.lon', { valueasnumber: true })}
                    />
                    <FormErrorMessage>
                      {errors.coordenades?.lon && errors.coordenades?.lon.message}
                    </FormErrorMessage>
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
                  isLoading={isSubmitting}
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
