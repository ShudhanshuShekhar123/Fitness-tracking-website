import React, { useEffect, useState } from 'react';
import style from './Navbar.module.css';
import { Link, Navigate } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';

import { BiSolidUserCircle } from 'react-icons/bi';
import { MdManageAccounts } from 'react-icons/md';

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



  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(query);

    fetch(`http://localhost:7000/fitness/search?q=${query}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res);
      });

    // console.log(isAuth)
  }, [query]);

  // console.log(data, "here datas")

  const handlechange = (e) => {
    setQuery(e.target.value);
  };














  return (


    <div className={style.navbar} style={{ zIndex: "5"}}>

      <div className={style.logoDiv}>
        <img src={logopng} alt="logo" />
        {/* <Input size='sm' placeholder='Search for Destinations' border='1px' bg='transparent' borderRadius='25px' /> */}
        <div style={{ position: "relative" }} className='navSearchBox'>
          <label>
            <div>
              <input onChange={handlechange} style={{  borderRadius: "10px", height: "50px", marginTop: "10px", marginLeft: "10px", paddingLeft: "40px", background: "transparent", border: "3px solid black" }} type="search" placeholder='Type to Search' />
            </div>
            {/* <i className="fa-solid fa-magnifying-glass"></i> */}
            <span style={{ position: "absolute", top: "22px", fontSize: "25px", left: "20px", color: "white", paddingRight: "4px", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <BsSearch />
            </span>

          </label>
          {query !== "" && data.length === 0 ? (
            <p>No Exercises Found!!</p>
          ) : query.trim() && query !== "" ? (
            <div
              className="scroll_container"
              style={{
                position: "absolute",
                top: "65px",
                width: "320px",
                background: "white",
                maxHeight: "400px",
                zIndex: "100",
                overflowY: "scroll",
                // borderRadius: "20px",
                padding: "5px 9px 5px 18px",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
              }}
            >
              {data.map((item) => {
                return (
                  // <Link
                  //   style={{ textDecoration: "none" }}
                  //   to={`/products/${item.id}`}
                  // >
                  <div
                    key={Math.random()}
                    className="div"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <img
                      style={{ paddingLeft: "8px" }}
                      width="55px"
                      height="50px"
                      src={item.img}
                      alt=""
                    />
                    <p
                      style={{
                        fontWeight: "600",
                        padding: "8px 4px 8px 4px",
                        margin: "6px 4px",
                        borderRadius: "8px",
                        color: "black"
                      }}
                      key={Math.random()}
                    >
                      {`${item.description.substring(0, 40)}...`}
                    </p>
                  </div>
                );
              })}
            </div>
          ) : null}

        </div>
      </div>
      <div className={style.navRoutes}>
        <Link style={{color:"white"}} to="/" className={({ isActive }) => isActive ? `${style.active}` : `${style.notActive}`}>
          Home
        </Link>
        <Link style={{color:"white"}} to="/categories" className={({ isActive }) => isActive ? `${style.active}` : `${style.notActive}`}>
          Categories
        </Link>
        <Link style={{color:"white"}} to="/dashboard" className={({ isActive }) => isActive ? `${style.active}` : `${style.notActive}`}>
          Dashboard
        </Link>
        <Link style={{color:"white"}} to="/gym" className={({ isActive }) => isActive ? `${style.active}` : `${style.notActive}`}>
          Gym
        </Link>
      </div>

      <div className={style.switchDiv}>
        {/* <Button onClick={toggleColorMode} justifySelf={"flex-end"}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button> */}
        <Popover>
          {/* <PopoverTrigger> */}
          {/* <span className={`${style.profileIcon} material-symbols-outlined`}>
            <span className={style.authStatus} style={{ position: 'absolute' }}>.</span>
            </span> */}
          {/* </PopoverTrigger> */}

          <div style={{ fontSize: "38px" }}>
            <span style={{marginRight:"10px"}}> <BiSolidUserCircle /></span>
           <span>  <MdManageAccounts /></span>       
          </div>

          {/* <h3>Admin</h3> */}
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
