import styled from "styled-components";
import {AnimatePresence, motion, useViewportScroll} from "framer-motion";
import Images from "../Img/indexImg";
import { useState } from "react";
import { setSyntheticLeadingComments } from "typescript";

const Wrapper = styled.div `
    display: flex;
    align-items: center;
    flex-direction: column;
    height: ;
    width: 100%;
`;

const Name = styled(motion.h1)`
    font-weight: 500;
    margin-top: 10px;
    font-size: 20px;
    color:  ${props => props.theme.gray.darker};
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    
`;

const PhotoPlay = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const PhotoBox = styled(motion.div) `
    width: 300px;
    height: 400px;
    border-radius: 10px;
    box-shadow: 0 1px 9px rgba(0, 0, 0, 0.2), 0 3px 15px rgba(0, 0, 0, 0.2);
    margin-top: 100px;
    display: flex;
    align-items: center;
    flex-direction: column;
    
`;

const Photo = styled(motion.div)`
    width: 280px;
    height: 280px;
    background-color: ;
    margin-top: 10px;
    overflow: hidden;
    transition: 1s;
`;

const PhotoInfo = styled(motion.h4)`
    color: ${props => props.theme.pink };
    margin-top: 20px;
    transition: 0.5s;
`;

const Img = styled(motion.img) `
    z-index: -1;
`;

const ButtonFrame = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px 30px 30px 30px;
    width: 180px;

`;

const Button = styled(motion.button)`
    background-color: transparent;
    border: none;
    cursor: pointer;
`;

const Arrow = styled.svg`
    width: 20px;
    fill: rgba(224, 186, 220, 0.6);
    path {
        stroke: #a8a69e;
        stroke-width: 7px;
    }
`;

const GridBox = styled.div `
    margin-top: 30px;
    margin-bottom: 80px;
`;

const Grid = styled(motion.div) `
    display: grid;
    width: auto;
    height: auto;
    grid-gap: 25px;
    grid-template-columns: repeat(6, 1fr);
    justify-content: center;
    align-items: center;
    justify-items: center;
        @media (max-width: 700px) {
            grid-template-columns: repeat(3, 1fr);
        }
`;

const SkillBox = styled(motion.div)`
    height: 80px;
    width: 80px;
    background-color: rgb(255,255,255);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

const SkillSvg = styled(motion.svg)`
    width: 50px;
    fill: rgba(224, 186, 220, 1);
`;

const Overlay = styled(motion.div)`
    width: 100%;
    height: 100%;
    top: 0;
    background-size: cover;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
`;

const InfoBox = styled(motion.div)`
    width: 350px;
    height: 350px;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0 1px 9px rgba(0, 0, 0, 0.2), 0 3px 15px rgba(0, 0, 0, 0.2);
    position: absolute;
    border-radius: 10px;
    top: 30px;
    left: 0;
    right: 0;
    margin: 0 auto;
        @media (max-width: 400px) {
            width: 300px;
            height: 300px;
        }
`;

const Info = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
        @media (max-width: 400px) {
            
        }
`;

const H4 = styled(motion.h4)`
    color: ${props => props.theme.pink };
    margin: 5px;
`;

const ListBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 220px;
    width: 350px;
        @media (max-width: 400px) {
            width: 300px;
            height: 200px;
        }
`;

const ListP = styled.p`
    margin-top: 10px;
    margin-left: 30px;
    color: ${props => props.theme.gray.lighter};
        @media (max-width: 400px) {
            font-size: 14px;
            text-align: center;
            margin: 0;
        }
`;

const Ul = styled.ul`
    margin: 10px 30px; 
    
`;

const Li = styled.li`
    color: ${props => props.theme.gray.darker};
    font-size: 15px;
    margin-bottom: 10px;
    list-style-type: square;
        @media (max-width: 400px) {
            font-size: 13px;
            text-align: center;
            list-style-type: none;
        }
`;

const LightGray = styled.span`
    color: ${props => props.theme.gray.lighter};
`;

const TitleBox = styled(motion.div)`
    margin-top: 40px;
    margin-bottom: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
        @media (max-width: 800px) {
            flex-direction: column;
            margin-top: 30px;
            margin-bottom: 40px;
        }
`;

const QuoteSvg = styled(motion.svg)`
    fill: ${props => props.theme.gray.lighter};
    width: 35px;
    margin-right: 15px;
    margin-left: 15px;
        @media (max-width: 800px) {
            width: 25px;
            margin: 15px;
        }
`;

const Title = styled(motion.div)`
    font-size: 25px;
    font-weight: 900;
    color: rgba(235, 12, 19, 0.4);
    margin-right: 10px;
    margin-left: 10px;
    font-style: italic;
        @media (max-width: 800px) {
            font-size: 25px;
            margin: 8px;
        }
`;


const nameVariants = {
    hidden: {opacity:0},
    visible: {opacity:1, transition:{duration:3}},
}

const photoVariants = {
    hidden: {
        opacity:0
    },

    visible: {
        opacity:1,
    },
    exit: {
        opacity:0,

    },
}


function Home () {
    
    const [visible, setVisible] = useState(1);
    const next = () => setVisible(prev => (prev === 7 ? 1 : prev + 1));
    const back = () => setVisible(prev => (prev === 1 ? 7 : prev - 1));
    const [id, setId] = useState<string | null>(null);
    const [clicked, setClicked] = useState(false);
    const toggle = () => setClicked((prev) => !prev);  
    const {scrollY} = useViewportScroll();

    return (
        <Wrapper>
            <PhotoPlay>
                <AnimatePresence>
                    <PhotoBox>
                        <Name 
                            variants={nameVariants} 
                            initial="hidden"
                            animate="visible" 
                            >
                            LUCY NAM
                        </Name>
                        <Photo 
                            variants={photoVariants} 
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            key={visible}
                            >  
                            {visible === 1 && <><Img src={Images.careerImg_1} style={{height: "280px"}} /></>} 
                            {visible === 2 && <Img src={Images.careerImg_2} style={{height: "280px"}} />} 
                            {visible === 3 && <Img src={Images.careerImg_3} style={{height: "280px", x: -50}} />} 
                            {visible === 4 && <Img src={Images.careerImg_4} style={{height: "280px", x: -30}} />} 
                            {visible === 5 && <Img src={Images.careerImg_5} style={{height: "280px", x: -50, y: -20}} />} 
                            {visible === 6 && <Img src={Images.careerImg_7} style={{width: "280px", y: -30}} />} 
                            {visible === 7 && <Img src={Images.careerImg_8} style={{height: "310px", x: -185}} />} 
                        </Photo>
                        <PhotoInfo variants={photoVariants} initial="hidden" animate="visible" exit="exit">
                            { visible ===1 && "Event Planner @Mary Kay"} 
                            { visible ===2 && "Event Planner @Mary Kay"} 
                            { visible ===3 && "Comm. Marketer @Mary Kay"}
                            { visible ===4 && "Event Planner @Ananti Club"}
                            { visible ===5 && "Event Planner @W Hotel"}
                            { visible ===6 && "Event Planner @W Hotel"}
                            { visible ===7 && "Art Exhibition @New York"}    
                        </PhotoInfo>
                    </PhotoBox>
                </AnimatePresence>
                    <ButtonFrame>
                        <Button onClick={back} whileHover={{scale:1.1}}>
                            <Arrow xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z"/></Arrow>
                        </Button>
                        <Button onClick={next} whileHover={{scale:1.1}}>
                            <Arrow xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"/></Arrow>
                        </Button>
                    </ButtonFrame>
            </PhotoPlay>

            <GridBox>
                <Grid  onClick={toggle}>
                    {["1", "2", "3", "4", "5", "6"].map((n) => 
                        (<SkillBox onClick={() => setId(n)} key={n} layoutId={n} whileHover={{scale:1.15, boxShadow:"0 2px 7px rgba(0, 0, 0, 0.2)", y: -10}}>
                            { n === "1" && <SkillSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/></SkillSvg>}
                            { n === "2" && <SkillSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"/></SkillSvg> }
                            { n === "3" && <SkillSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"/></SkillSvg> }
                            { n === "4" && <SkillSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"/></SkillSvg>}
                            { n === "5" && <SkillSvg viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><rect  height="512" rx="50" width="512"/><rect height="512" rx="50" width="512"/><path clip-rule="evenodd" d="m316.939 407.424v50.061c8.138 4.172 17.763 7.3 28.875 9.386s22.823 3.129 35.135 3.129c11.999 0 23.397-1.147 34.196-3.442 10.799-2.294 20.268-6.075 28.406-11.342 8.138-5.266 14.581-12.15 19.328-20.65s7.121-19.007 7.121-31.522c0-9.074-1.356-17.026-4.069-23.857s-6.625-12.906-11.738-18.225c-5.112-5.319-11.242-10.091-18.389-14.315s-15.207-8.213-24.18-11.967c-6.573-2.712-12.468-5.345-17.685-7.9-5.217-2.556-9.651-5.163-13.303-7.822-3.652-2.66-6.469-5.476-8.451-8.448-1.982-2.973-2.974-6.336-2.974-10.091 0-3.441.887-6.544 2.661-9.308s4.278-5.136 7.512-7.118c3.235-1.981 7.199-3.52 11.894-4.615 4.696-1.095 9.912-1.642 15.651-1.642 4.173 0 8.581.313 13.224.938 4.643.626 9.312 1.591 14.008 2.894 4.695 1.304 9.259 2.947 13.694 4.928 4.434 1.982 8.529 4.276 12.285 6.884v-46.776c-7.616-2.92-15.937-5.084-24.962-6.492s-19.381-2.112-31.066-2.112c-11.895 0-23.163 1.278-33.805 3.833s-20.006 6.544-28.093 11.967c-8.086 5.424-14.476 12.333-19.171 20.729-4.695 8.395-7.043 18.433-7.043 30.114 0 14.914 4.304 27.638 12.912 38.172 8.607 10.533 21.675 19.45 39.204 26.751 6.886 2.816 13.303 5.579 19.25 8.291s11.086 5.528 15.415 8.448c4.33 2.92 7.747 6.101 10.252 9.543 2.504 3.441 3.756 7.352 3.756 11.733 0 3.233-.783 6.231-2.348 8.995s-3.939 5.162-7.121 7.196-7.147 3.624-11.894 4.771c-4.748 1.148-10.303 1.721-16.668 1.721-10.851 0-21.597-1.903-32.24-5.71-10.642-3.806-20.502-9.516-29.579-17.13zm-84.159-123.342h64.22v-41.082h-179v41.082h63.906v182.918h50.874z" fill="#fff" fill-rule="evenodd"/></SkillSvg> }
                            { n === "6" && <SkillSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M439.55 236.05L244 40.45a28.87 28.87 0 0 0-40.81 0l-40.66 40.63 51.52 51.52c27.06-9.14 52.68 16.77 43.39 43.68l49.66 49.66c34.23-11.8 61.18 31 35.47 56.69-26.49 26.49-70.21-2.87-56-37.34L240.22 199v121.85c25.3 12.54 22.26 41.85 9.08 55a34.34 34.34 0 0 1-48.55 0c-17.57-17.6-11.07-46.91 11.25-56v-123c-20.8-8.51-24.6-30.74-18.64-45L142.57 101 8.45 235.14a28.86 28.86 0 0 0 0 40.81l195.61 195.6a28.86 28.86 0 0 0 40.8 0l194.69-194.69a28.86 28.86 0 0 0 0-40.81z"/></SkillSvg> }
                        </SkillBox>)
                    )}
                </Grid>
            </GridBox>

            <AnimatePresence>
            {clicked? <><Overlay onClick={toggle} exit={{opacity:0}} animate={{opacity:1}} />
            <InfoBox style={{top: scrollY.get() + 100}} layoutId={id+""} key={id+""} >
                
                {id === "1" && <Info>
                        <SkillSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/></SkillSvg>
                        <H4>HTML</H4>
                        <ListBox>
                            <ListP>Completed</ListP>
                            <Ul>
                                <Li>Proficient in HTML5, <br/><LightGray>Digital Nova Scotia</LightGray></Li>
                                <Li>Proficient in Building Websites with HTML, CSS & JavaScript, <LightGray>Digital Nova Scotia</LightGray></Li>
                                <Li>The Ultimate HTML5 & CSS3, <br/><LightGray>Code with Mosh</LightGray></Li>     
                            </Ul>
                        </ListBox>
                    </Info>}
                {id === "2" && <Info>
                        <SkillSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"/></SkillSvg>
                        <H4>CSS</H4>
                        <ListBox>
                            <ListP>Completed</ListP>
                            <Ul>
                                <Li>Proficient in CSS, <br/><LightGray>Digital Nova Scotia</LightGray></Li>
                                <Li>Proficient in Building Websites with HTML, CSS & JavaScript, <LightGray>Digital Nova Scotia</LightGray></Li>
                                <Li>The Ultimate HTML5 & CSS3, <br/><LightGray>Code with Mosh</LightGray></Li>    
                            </Ul>
                        </ListBox>
                    </Info>}
                {id === "3" && <Info>
                        <SkillSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"/></SkillSvg>
                        <H4>JavaScript</H4>
                        <ListBox>
                            <ListP>Completed</ListP>
                            <Ul>
                                <Li>The Ultimate JavaScript Mastery Series - Part 1 & 2, <br/><LightGray>Code with Mosh</LightGray></Li>
                                <Li>Proficient in JavaScript Core Language, <LightGray>Digital Nova Scotia</LightGray></Li>
                                <Li>Proficient in Building Websites with HTML, CSS & JavaScript, <LightGray>Digital Nova Scotia</LightGray></Li>
                            </Ul>
                        </ListBox>
                    </Info>}
                {id === "4" && <Info>
                        <SkillSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"/></SkillSvg>
                        <H4>React</H4>
                        <ListBox>
                            <ListP>Completed</ListP>
                            <Ul>
                                <Li>React JS Master Class, <br/><LightGray>Nomad Coders</LightGray></Li>
                                <Li>Creating Movie Web Service using React JS, <LightGray>Nomad Coders</LightGray></Li>
                            </Ul>
                        </ListBox>
                    </Info>}
                {id === "5" && <Info>
                        <SkillSvg viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><rect  height="512" rx="50" width="512"/><rect height="512" rx="50" width="512"/><path clip-rule="evenodd" d="m316.939 407.424v50.061c8.138 4.172 17.763 7.3 28.875 9.386s22.823 3.129 35.135 3.129c11.999 0 23.397-1.147 34.196-3.442 10.799-2.294 20.268-6.075 28.406-11.342 8.138-5.266 14.581-12.15 19.328-20.65s7.121-19.007 7.121-31.522c0-9.074-1.356-17.026-4.069-23.857s-6.625-12.906-11.738-18.225c-5.112-5.319-11.242-10.091-18.389-14.315s-15.207-8.213-24.18-11.967c-6.573-2.712-12.468-5.345-17.685-7.9-5.217-2.556-9.651-5.163-13.303-7.822-3.652-2.66-6.469-5.476-8.451-8.448-1.982-2.973-2.974-6.336-2.974-10.091 0-3.441.887-6.544 2.661-9.308s4.278-5.136 7.512-7.118c3.235-1.981 7.199-3.52 11.894-4.615 4.696-1.095 9.912-1.642 15.651-1.642 4.173 0 8.581.313 13.224.938 4.643.626 9.312 1.591 14.008 2.894 4.695 1.304 9.259 2.947 13.694 4.928 4.434 1.982 8.529 4.276 12.285 6.884v-46.776c-7.616-2.92-15.937-5.084-24.962-6.492s-19.381-2.112-31.066-2.112c-11.895 0-23.163 1.278-33.805 3.833s-20.006 6.544-28.093 11.967c-8.086 5.424-14.476 12.333-19.171 20.729-4.695 8.395-7.043 18.433-7.043 30.114 0 14.914 4.304 27.638 12.912 38.172 8.607 10.533 21.675 19.45 39.204 26.751 6.886 2.816 13.303 5.579 19.25 8.291s11.086 5.528 15.415 8.448c4.33 2.92 7.747 6.101 10.252 9.543 2.504 3.441 3.756 7.352 3.756 11.733 0 3.233-.783 6.231-2.348 8.995s-3.939 5.162-7.121 7.196-7.147 3.624-11.894 4.771c-4.748 1.148-10.303 1.721-16.668 1.721-10.851 0-21.597-1.903-32.24-5.71-10.642-3.806-20.502-9.516-29.579-17.13zm-84.159-123.342h64.22v-41.082h-179v41.082h63.906v182.918h50.874z" fill="#fff" fill-rule="evenodd"/></SkillSvg>
                        <H4>TypeScript</H4>
                        <ListBox>
                            <ListP>Completed</ListP>
                            <Ul>
                                <Li>The Ultimate TypeScript Course, <LightGray>Code with Mosh</LightGray></Li>
                                <Li>React JS Master Class, <br/><LightGray>Nomad Coders</LightGray></Li>
                            </Ul>
                        </ListBox>
                    </Info>}
                {id === "6" && <Info>
                        <SkillSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M439.55 236.05L244 40.45a28.87 28.87 0 0 0-40.81 0l-40.66 40.63 51.52 51.52c27.06-9.14 52.68 16.77 43.39 43.68l49.66 49.66c34.23-11.8 61.18 31 35.47 56.69-26.49 26.49-70.21-2.87-56-37.34L240.22 199v121.85c25.3 12.54 22.26 41.85 9.08 55a34.34 34.34 0 0 1-48.55 0c-17.57-17.6-11.07-46.91 11.25-56v-123c-20.8-8.51-24.6-30.74-18.64-45L142.57 101 8.45 235.14a28.86 28.86 0 0 0 0 40.81l195.61 195.6a28.86 28.86 0 0 0 40.8 0l194.69-194.69a28.86 28.86 0 0 0 0-40.81z"/></SkillSvg>
                        <H4>Git</H4>
                        <ListBox>
                            <ListP>Completed</ListP>
                            <Ul>
                                <Li>The Ultimate Git Course, <br/><LightGray>Code with Mosh</LightGray></Li>
                            </Ul>
                        </ListBox>
                    </Info>}
            </InfoBox></> : null}
            </AnimatePresence>
            
            <TitleBox whileHover={{scale: 1.1, y: -10,}}>
                <QuoteSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M96 224C84.72 224 74.05 226.3 64 229.9V224c0-35.3 28.7-64 64-64c17.67 0 32-14.33 32-32S145.7 96 128 96C57.42 96 0 153.4 0 224v96c0 53.02 42.98 96 96 96s96-42.98 96-96S149 224 96 224zM352 224c-11.28 0-21.95 2.305-32 5.879V224c0-35.3 28.7-64 64-64c17.67 0 32-14.33 32-32s-14.33-32-32-32c-70.58 0-128 57.42-128 128v96c0 53.02 42.98 96 96 96s96-42.98 96-96S405 224 352 224z"/></QuoteSvg>    
                <Title style={{color:"rgba(235, 12, 19, 1)"}}>CURIOUS</Title>
                <Title style={{color:"rgba(235, 12, 19, 0.8)"}}>Web Developer</Title>
                <Title style={{color: "rgba(235, 12, 19, 0.6)"}} >Artist</Title>
                <Title style={{color: "rgba(235, 12, 19, 0.4)"}}>Event Planner</Title>
                <QuoteSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M96 96C42.98 96 0 138.1 0 192s42.98 96 96 96c11.28 0 21.95-2.305 32-5.879V288c0 35.3-28.7 64-64 64c-17.67 0-32 14.33-32 32s14.33 32 32 32c70.58 0 128-57.42 128-128V192C192 138.1 149 96 96 96zM448 192c0-53.02-42.98-96-96-96s-96 42.98-96 96s42.98 96 96 96c11.28 0 21.95-2.305 32-5.879V288c0 35.3-28.7 64-64 64c-17.67 0-32 14.33-32 32s14.33 32 32 32c70.58 0 128-57.42 128-128V192z"/></QuoteSvg>
            </TitleBox>
        </Wrapper>
    );
}

export default Home;