import styled from "styled-components";
import { motion, useAnimation, useViewportScroll, AnimatePresence } from "framer-motion";
import {Link, useMatch, PathMatch} from "react-router-dom";
import { useEffect, useState } from "react";

const Nav = styled(motion.nav)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 40px;
    font-size: 14px;
    z-index: 99;
`;

const Col = styled.div`
    display: flex;
    align-items: center;
`;

const Logos = styled(motion.div)`
    display: flex;
    margin-left: 30px;
    margin-right: 25px;
`;

const Logo = styled(motion.svg)`
    width: 15px;
    height: 20px;
    margin-right: 3px;
    fill: transparent;
    path {
        stroke: white;
        stroke-width: 25;
    };

    shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0.06);
`;

const Items = styled.ul`    
    display: flex;
    align-items: center;
    font-type: bold;
`;

const Item = styled.li`
    margin-right: 20px;
    position: relative;
    font-size: 16px;
    color: #e7daf2;
    &:hover {
        color: ${(props) => props.theme.black.darker};
    };
    transition: color 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Circle = styled(motion.span)`
    width: 5px;
    height: 5px;
    border-radius: 2.5px;
    position: absolute;
    background-color: ${(props) => props.theme.gray.lighter};
    bottom: -4px;
    margin: 0 auto;
    left: 0;
    right: 0;
`;

const Bars = styled.svg`
    width: 17px;
    margin-right: 30px;
    fill: ${(props) => props.theme.gray.lighter};
    &:hover {
        fill: ${(props) => props.theme.black.darker};
    }
    transition: fill 0.3s ease-in-out;
`;

const StyledLink = styled(Link)`
    color: ${(props) => props.theme.gray.lighter};
    text-decoration: none;
    &:hover {
        color: ${(props) => props.theme.black.darker}
    }
    `;

const Overlay = styled(motion.div)`
    width: 100%;
    height: 100%;
    top: 0;
    background-color: rgba(0,0,0,0.3);
    position: fixed;
`;

const DirectoryBox = styled(motion.div)`
    display: flex;
    justify-content: center;
    width: 300px;
    height: 400px;
    top: 40px;
    right: 0;
    background-color: #faf8f2;
    position: absolute;
    border-radius: 7px 0 0 7px;
    box-shadow: 0 1px 9px rgba(0, 0, 0, 0.2), 0 3px 15px rgba(0, 0, 0, 0.2);
`;

const DirectoryUl = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const DirectoryLi = styled.li`
    font-size: 20px;
    font-weight: 500;
    list-style-type: none;
    margin: 25px;
    color: ${props => props.theme.gray.darker};
    &:hover {
        color: ${props => props.theme.black.lighter};
    }
`;

const DirectoryLink = styled(Link)`
    text-decoration: none;
    color: ${props => props.theme.gray.darker};
    &:hover {
        color: ${props => props.theme.black.lighter};
    }
`;

const DirectoryA =styled.a`
    text-decoration: none;
    color: ${props => props.theme.gray.darker};
    &:hover {
        color: ${props => props.theme.black.lighter};
    }
`;

const DirectoryIcon = styled.svg`
    width: 23px;
    fill: ${props => props.theme.gray.darker};
    &:hover {
        fill: ${props => props.theme.black.lighter};
    }
`;


const logoVariants = {
    start:{
        scale: 0,
        opacity: 0,
        y: 20,
    },
    active:{
        scale: [0, 1, 1, 0],
        opacity: [0, 1, 1, 0],
        transition:{
            duration: 13,
            repeat: Infinity,
        }
    },
}

const navVariants = {
    top:{
        backgroundColor: "rgba(255, 255, 255, 0)",
    },
    scroll: {
        backgroundColor: "rgba(0, 0, 0, 0.7)",
    },    
}

const overlayVariants = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1,
        transition: {duration: 0.6},
    },
    exit: {
        opacity: 0,
        transition: {duration: 0.5},
    },
}

const directoryVariants = {
    hidden: {
        opacity: 0,
        x: 300,
    },
    visible: {
        opacity: 1,
        x: 0,
        type: "tween",
        transition: {duration: 0.6},
    },
    exit: {
        opacity: 0,
        x: 300,
        type: "tween",
        transition: {duration: 0.5},
    },
}

function Header() {
    const { scrollY } = useViewportScroll();
    const navAnimation = useAnimation();
    const homeMatch = useMatch("/");
    const aboutMatch = useMatch("/about");
    const [clicked, setClicked] = useState(false);
    const toggle = () => setClicked(prev => !prev);
    useEffect(() => {
        scrollY.onChange(() => {
            if(scrollY.get() > 80){
                navAnimation.start("scroll");
            } else {
                navAnimation.start("top");
            }
        });
    }, [scrollY, navAnimation]);

    return (
        <Nav
            variants={navVariants}
            animate={navAnimation}
        >
            <Col>
              <Logos >             
                <Logo
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 320 512">
                    <motion.path 
                        variants={logoVariants}
                        initial="start"
                        animate="active"
                        style={{stroke:"#fa4c43"}}
                        d="M320 448c0 17.67-14.31 32-32 32H64c-17.69 0-32-14.33-32-32v-384C32 46.34 46.31 32.01 64 32.01S96 46.34 96 64.01v352h192C305.7 416 320 430.3 320 448z"/>
                </Logo>
                <Logo
                    style={{y:1.2}}
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <motion.path 
                        variants={logoVariants}
                        initial="start"
                        animate="active"  
                        style={{stroke:"#fa8943"}}               
                        d="M384 64.01v225.7c0 104.1-86.13 190.3-192 190.3s-192-85.38-192-190.3V64.01C0 46.34 14.33 32.01 32 32.01S64 46.34 64 64.01v225.7c0 69.67 57.42 126.3 128 126.3s128-56.67 128-126.3V64.01c0-17.67 14.33-32 32-32S384 46.34 384 64.01z"/>
                </Logo>
                <Logo 
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <motion.path 
                        variants={logoVariants}
                        initial="start"
                        animate="active"
                        style={{stroke:"#3fa7e8"}}
                        d="M352 359.8c22.46 0 31.1 19.53 31.1 31.99c0 23.14-66.96 88.23-164.5 88.23c-137.1 0-219.4-117.8-219.4-224c0-103.8 79.87-223.1 219.4-223.1c99.47 0 164.5 66.12 164.5 88.23c0 12.27-9.527 32.01-32.01 32.01c-31.32 0-45.8-56.25-132.5-56.25c-97.99 0-155.4 84.59-155.4 159.1c0 74.03 56.42 160 155.4 160C306.5 416 320.5 359.8 352 359.8z"/>
                </Logo>
                <Logo 
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <motion.path 
                        variants={logoVariants}
                        initial="start"
                        animate="active"
                        style={{stroke:"#853fe8"}}
                        d="M378 82.61L224 298.3v149.8c0 17.67-14.31 31.1-32 31.1S160 465.7 160 448V298.3L5.969 82.61C-4.313 68.23-.9688 48.25 13.41 37.97c14.34-10.27 34.38-6.922 44.63 7.453L192 232.1l133.1-187.5c10.28-14.37 30.28-17.7 44.63-7.453C384.1 48.25 388.3 68.23 378 82.61z"/>
                </Logo>
            </Logos>
                <Items>
                    <Item>
                        <StyledLink to="/">
                            Home{homeMatch && <Circle layoutId="circle" />}
                        </StyledLink>
                    </Item>
                        
                    <Item>
                        <StyledLink to="/about" >
                            About{aboutMatch && <Circle layoutId="circle" />}
                        </StyledLink>
                    </Item>
                    
                </Items>
            </Col>
            <Col>
                <Bars 
                    onClick={toggle}
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 448 512">
                    <motion.path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"/>
                </Bars>
            </Col>
            <AnimatePresence>
                {clicked? 
                    <>
                    <Overlay 
                        onClick={toggle}
                        variants={overlayVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    /> 
                    <DirectoryBox
                            variants={directoryVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                    >
                        <DirectoryUl>
                            <DirectoryLi><DirectoryLink to="/" >Home</DirectoryLink></DirectoryLi>
                            <DirectoryLi><DirectoryLink to="/about" >About</DirectoryLink></DirectoryLi>
                            <DirectoryLi><DirectoryA href="mailto:lucy.h.nam@gmail.com">e-mail</DirectoryA></DirectoryLi>
                            <DirectoryLi>
                                    <DirectoryA href="https://www.linkedin.com/in/lucy-hwajoung-nam-360231139/" target="_blank">
                                    <DirectoryIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                                    </DirectoryIcon>
                                </DirectoryA>
                            </DirectoryLi>
                        </DirectoryUl>
                    </DirectoryBox>          
                    </>
                : null}
            </AnimatePresence>
        </Nav>
    );
}

export default Header;