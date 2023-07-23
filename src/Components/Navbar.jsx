import React from 'react';
import style from './Navbar.module.css';
import { Link, Navigate } from 'react-router-dom';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  useColorMode,
  useDisclosure,
} from '@chakra-ui/react';

import logopng from './InfinityFITLogo.png';

import { MoonIcon, SearchIcon, SunIcon, HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className={style.navbar} style={{ zIndex: "5" }}>
      <div className={style.logoDiv}>
        <img src={logopng} alt="logo" />
        <Input size='sm' placeholder='Search for Destinations' border='1px' bg='transparent' borderRadius='25px' />
      </div>
      <div className={style.navRoutes}>
        <Link to="/" className={({ isActive }) => isActive ? `${style.active}` : `${style.notActive}`}>
          Home
        </Link>
        <Link to="/categories" className={({ isActive }) => isActive ? `${style.active}` : `${style.notActive}`}>
          Exercise Categories
        </Link>
        <Link to="/gym" className={({ isActive }) => isActive ? `${style.active}` : `${style.notActive}`}>
          Gym
        </Link>
      </div>

      <div className={style.switchDiv}>
        <Button onClick={toggleColorMode} justifySelf={"flex-end"}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
        <Popover>
          <PopoverTrigger>
            <span className={`${style.profileIcon} material-symbols-outlined`}>
              person <span className={style.authStatus} style={{ position: 'absolute' }}>.</span>
            </span>
          </PopoverTrigger>
          <PopoverContent w='300px'>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>
              <p style={{ fontSize: '15px' }}>Hello, {colorMode === 'light' ? 'User' : 'User Dark'}!</p>
            </PopoverHeader>
            <PopoverBody>
              <Button colorScheme='blue' onClick={() => Navigate('/login')}>Login</Button>
              <Button colorScheme='blue' >Logout</Button>
            </PopoverBody>
          </PopoverContent>
        </Popover>

        <div className={style.hymberger}>
          <Button p='0px' bg='transparent' onClick={onOpen}>
            <span className="material-symbols-outlined">
              <HamburgerIcon />
            </span>
          </Button>
        </div>

        <Drawer isOpen={isOpen} placement='right' onClose={onClose} size='xs'>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody>
              <div className={style.menuDiv}>
                <Link to="/" className={({ isActive }) => isActive ? `${style.active}` : `${style.notActive}`}>
                  Home
                </Link>
                <Link to="/destinations" className={({ isActive }) => isActive ? `${style.active}` : `${style.notActive}`}>
                  Destinations
                </Link>
                <Link to="/booking" className={({ isActive }) => isActive ? `${style.active}` : `${style.notActive}`}>
                  Booking
                </Link>
                <Link to="/reviews" className={({ isActive }) => isActive ? `${style.active}` : `${style.notActive}`}>
                  Reviews
                </Link>
                <Link to="/ContactUs" className={({ isActive }) => isActive ? `${style.active}` : `${style.notActive}`}>
                  Contact Us
                </Link>
              </div>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  )
}

export default Navbar;
