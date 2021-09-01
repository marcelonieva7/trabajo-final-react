/* eslint-disable react/jsx-props-no-spreading */
import { Link as RouterLink } from 'react-router-dom'
import React from 'react'
import Cookies from 'js-cookie'
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  useColorMode,
} from '@chakra-ui/react'
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  MoonIcon,
  SunIcon,
} from '@chakra-ui/icons'
import { connect } from 'react-redux'
import { loadingSelector, userDataSelector } from '../../app/redux/selectors/authSelector'

const mapStateToProps = state => ({
  loading: loadingSelector(state),
  userData: userDataSelector(state),
})

const NavBar = ({ userData }) => {
  const { isOpen, onToggle } = useDisclosure()
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH="60px"
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle="solid"
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align="center"
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant="ghost"
            aria-label="Toggle Navigation"
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Link as={RouterLink} to="/">
            <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily="heading"
              color={useColorModeValue('gray.800', 'white')}
            >
              Covid Info
            </Text>
          </Link>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav userData={userData} />
          </Flex>
        </Flex>

        {/* <Stack
          flex={{ base: 1, md: 0 }}
          justify="flex-end"
          direction="row"
          spacing={6}
        >
          <IconButton
            icon={colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
            isRound="true"
            size="lg"
            alignSelf="flex-end"
            onClick={toggleColorMode}
          />
        </Stack> */}

        <Stack
          flex={{ base: 1, md: 0 }}
          justify="flex-end"
          align="center"
          direction="row"
          spacing={6}
        >
          <IconButton
            icon={colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
            // @ts-ignore
            isRound="true"
            size="lg"
            alignSelf="flex-end"
            onClick={toggleColorMode}
          />
          {userData ? <Logout mobile={false} /> : <Login mobile={false} />}
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav userData={userData} />
      </Collapse>
    </Box>
  )
}

const Login = ({ mobile }) => (
  <Button
    as={RouterLink}
    display={{ base: mobile ? 'inline-flex' : 'none', md: !mobile ? 'inline-flex' : 'none' }}
    fontSize="sm"
    fontWeight={600}
    color="white"
    bg="pink.400"
    to="/login"
    _hover={{
      bg: 'pink.300',
    }}
  >
    Iniciar Sesión
  </Button>
)

const Logout = ({ mobile }) => (
  <Button
    as={Link}
    display={{ base: mobile ? 'inline-flex' : 'none', md: !mobile ? 'inline-flex' : 'none' }}
    onClick={() => Cookies.remove('token')}
    fontSize="sm"
    fontWeight={600}
    color="white"
    bg="pink.400"
    href="https://covidcentre.herokuapp.com/"
    _hover={{
      bg: 'red.300',
    }}
  >
    Cerrar Sesión
  </Button>
)

const NAV_ITEMS = userData => ([
  {
    label: 'Centros de vacunación',
    children: [
      {
        label: 'La Rioja',
        // subLabel: 'La Rioja Capital',
        href: '/centers',
      },
      // {
      //   label: 'New & Noteworthy',
      //   subLabel: 'Up-and-coming Designers',
      //   href: '#',
      // },
    ],
  },
  userData?.roles === 'Admin'
    ? {
      label: 'Administrar',
      children: [
        {
          label: 'Centros de vacunación',
          // subLabel: 'Find your dream design job',
          href: '/admin/centers',
        },
        // {
        //   label: 'Freelance Projects',
        //   subLabel: 'An exclusive list for contract work',
        //   href: '#',
        // },
      ],
    } : null,
  // {
  //   label: 'Centers',
  //   href: '/centers',
  // },
  // {
  //   label: 'Hire Designers',
  //   href: '#',
  // },
])

const DesktopNav = ({ userData }) => {
  const linkColor = useColorModeValue('gray.600', 'gray.200')
  const linkHoverColor = useColorModeValue('gray.800', 'white')
  const popoverContentBgColor = useColorModeValue('white', 'gray.800')
  const navItems = NAV_ITEMS(userData)
  return (
    <Stack direction="row" spacing={4}>
      {navItems.map(navItem => (
        navItem && (
        <Box key={navItem.label}>
          <Popover trigger="hover" placement="bottom-start">
            <PopoverTrigger>
              <Link
                as={RouterLink}
                p={2}
                to={navItem.href ?? '#'}
                fontSize="sm"
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow="xl"
                bg={popoverContentBgColor}
                p={4}
                rounded="xl"
                minW="sm"
              >
                <Stack>
                  {navItem.children.map(child => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
        )))}
    </Stack>
  )
}

const DesktopSubNav = ({ label, href }) => (
  <Link
    as={RouterLink}
    to={href}
    role="group"
    display="block"
    p={2}
    rounded="md"
    _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}
  >
    <Stack direction="row" align="center">
      <Box>
        <Text
          transition="all .3s ease"
          _groupHover={{ color: 'pink.400' }}
          fontWeight={500}
        >
          {label}
        </Text>
        {/* <Text fontSize="sm">{subLabel}</Text> */}
      </Box>
      <Flex
        transition="all .3s ease"
        transform="translateX(-10px)"
        opacity={0}
        _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
        justify="flex-end"
        align="center"
        flex={1}
      >
        <Icon color="pink.400" w={5} h={5} as={ChevronRightIcon} />
      </Flex>
    </Stack>
  </Link>
)

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify="space-between"
        align="center"
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition="all .25s ease-in-out"
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle="solid"
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align="start"
        >
          {children
            && children.map(child => (
              <Link key={child.label} py={2} to={child.href} as={RouterLink}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  )
}

const MobileNav = ({ userData }) => {
  const navItems = NAV_ITEMS(userData)
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ base: 'flex', md: 'none' }}
    >
      {navItems.map(navItem => (
        // @ts-ignore
        navItem && <MobileNavItem key={navItem.label} {...navItem} />
      ))}
      {userData ? <Logout mobile /> : <Login mobile />}
    </Stack>
  )
}

export default connect(mapStateToProps)(NavBar)
