import React from 'react'
import {
  Box,
  Image,
  Stack,
  Heading,
  Text,
  useColorModeValue,
  Skeleton,
} from '@chakra-ui/react'

const Center = ({ loading, center }) => (
  <Box
    role="group"
    p={6}
    maxW="330px"
    w="full"
    bg={useColorModeValue('white', 'gray.800')}
    boxShadow="2xl"
    rounded="lg"
    pos="relative"
    zIndex={1}
  >
    <Skeleton isLoaded={!loading}>
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
          backgroundImage: `url(${center?.img})`,
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
          src={center?.img}
        />
      </Box>
      <Stack pt={10} align="center">
        <Text align="center" color="gray.500" fontSize="sm" textTransform="uppercase">
          {center?.adress}
        </Text>
        <Heading align="center" fontSize="2xl" fontFamily="body" fontWeight={500}>
          {center?.name || 'Centro No encontrado'}
        </Heading>
      </Stack>
    </Skeleton>
  </Box>
)

export default Center
