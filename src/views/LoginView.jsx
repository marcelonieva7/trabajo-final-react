import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'
import {
  Button,
  Center,
  Stack,
  Text,
  Link,
  Heading,
  Code,
  VStack,
} from '@chakra-ui/react'

const base = process.env.REACT_APP_API_BASE_URL

const LoginView = () => (
  <>
    <Center mt={14}><Heading>Iniciar sesión</Heading></Center>
    <Center p={8}>
      <Stack spacing={2} align="center" maxW="md" w="full">
        <Button as={Link} w="full" variant="outline" leftIcon={<FaGithub />} href={`${base}/auth/github`}>
          <Center>
            <Text>Iniciar sesión con Github</Text>
          </Center>
        </Button>
        <Button as={Link} w="full" variant="outline" leftIcon={<FcGoogle />} href={`${base}/auth/google`}>
          <Center>
            <Text>Iniciar sesión con Google</Text>
          </Center>
        </Button>
        <VStack>
          <Code>Las cuentas de github se crean con acceso administrativo</Code>
          <Code>Las cuentas de google se crean con acceso de usuario</Code>
        </VStack>
      </Stack>
    </Center>
  </>
)

export default LoginView
