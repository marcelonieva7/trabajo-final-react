import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from '@chakra-ui/react'

const CentersListView = ({ centers }) => {
  const bg = useColorModeValue('white', 'gray.800')
  return (
    <>
      { centers.map(({
        _id, name, adress, img,
      }) => (
        <Center py={12} key={_id}>
          <Box
            role="group"
            p={6}
            maxW="330px"
            w="full"
            bg={bg}
            boxShadow="2xl"
            rounded="lg"
            pos="relative"
            zIndex={1}
            as={RouterLink}
            to={`/center/${_id}`}
          >
            <Box
              rounded="lg"
              mt={-12}
              pos="relative"
              height="230px"
              _after={{
                transition: 'all .3s ease',
                content: '""',
                w: 'full',
                h: 'full',
                pos: 'absolute',
                top: 5,
                left: 0,
                backgroundImage: `url(${img})`,
                filter: 'blur(15px)',
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: 'blur(20px)',
                },
              }}
            >
              <Image
                rounded="lg"
                height={230}
                width={282}
                objectFit="cover"
                src={img}
              />
            </Box>
            <Stack pt={10} align="center">
              <Text align="center" color="gray.500" fontSize="sm" textTransform="uppercase">
                {adress}
              </Text>
              <Heading align="center" fontSize="2xl" fontFamily="body" fontWeight={500}>
                {name}
              </Heading>
            </Stack>
          </Box>
        </Center>
      ))}
    </>
  )
}
export default CentersListView
