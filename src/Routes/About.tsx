import styled from "styled-components";
import {AnimatePresence, motion} from "framer-motion";
import Images from "../Img/indexImg";
import { useState } from "react";

const Wrapper = styled(motion.div) `
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const AboutBox = styled.div`
    margin-top: 120px;
    margin-bottom: 100px;
    width: 760px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
        @media (max-width: 890px) {
            width: 85%;
            margin-bottom: 75px;
        };
        @media (max-width: 400px) {
            margin-bottom: 50px; 
        };
`;

const Name = styled.h1`
    font-size: 30px;
    font-weight: 900;
    color: gray;
    margin-bottom: 50px;
    text-align: center;
        @media (max-width: 510px) {
            font-size: 25px;
        }
        @media (max-width: 400px) {
            font-size: 25px;            
        };
`;

const AboutMe = styled.p`
    line-height: 1.5;
    font-size: 17px;
    text-align: center;
    color: gray;
        @media (max-width: 890px) {
            font-size: 16px;
        };
        @media (max-width: 400px) {
            font-size: ;
        };
`;

const Strong = styled.span`
    font-weight: bold;
`;

const StrongP = styled.p`
    font-size: 20px;
    text-align: center;
    font-weight: bold;
        @media (max-width: 400px) {
            font-size: 16px;
        };
`;

const InfoBox = styled.div`
    display: flex;
    width: 850px;
    height: 400px; 
    border-radius: 10px;
    box-shadow: 0 1px 9px rgba(0, 0, 0, 0.2), 0 3px 15px rgba(0, 0, 0, 0.2);
    margin-bottom: 70px;
        @media (max-width: 890px) {
            width: 500px;
            height: 650px;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        };

        @media (max-width: 510px) {
            box-shadow: none;
        };
        @media (max-width: 400px) {
            margin-bottom: 50px;
        }


`;

const PhotoBox = styled.div`
    width: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 890px) {
        width: 400px;
    }
   
`;

const Photo = styled(motion.div)`
    width: 280px;
    height: 330px;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 1px 9px rgba(0, 0, 0, 0.2), 0 3px 15px rgba(0, 0, 0, 0.2);
    @media (max-width: 890px) {
        width: 400px;
        height: 300px;
    };

    @media (max-width: 510px) {
        width: 100vw;
        border-radius: 0px;
        box-shadow: none;
    }
    `;

const Img = styled(motion.img)`
    height: 330px;
        @media (max-width: 400px) {
            width: ;
        }
`;    

const DetailBox = styled.div`
    width: 500px;
        @media (max-width: 890px) {
            display: flex;
            flex-direction: column;
        };
        @media (max-width: 510px) {
            width: 100vw;
            align-items: center;
        }
`;

const DetailTop = styled.div`
    margin-top: 60px;
    width: ;
    display: flex;
    align-items: flex-end;
        @media (max-width: 890px) {
            justify-content: flex-start;
            margin-left: 40px;
            margin-top: 50px;
        };
        @media (max-width: 510px) {
            align-items: center;
            margin-left: 0;
            margin-top: 40px;
        };
`;

const Icon = styled(motion.svg)`
    width: 30px;
    fill: ${props => props.theme.pink};
`;

const P = styled.h2`
    font-size: 18px;
    font-weight: 700;
    color: ${props => props.theme.gray.darker};
    margin-left: 15px;
        @media (max-width: 510px) {
            
        }

`;

const GridBoxWrap = styled.div`
    @media (max-width: 890px) {
        display: flex;
        justify-content: center;
    }
`;

const GridBox = styled.div`
    display: grid;
    grid-template: 1fr 1fr 1fr / 2fr 8fr;
    grid-gap: 15px;
    align-items: center;
    height: 200px;
    color: ${props => props.theme.gray.darker};
    margin-top: 40px;
        @media (max-width: 890px) {
            margin-top: 30px;
            font-size: 16px;
            width: 400px;
            height: 150px;
            grid-gap: 10px;
        };
        @media (max-width: 510px) {
            grid-template: repeat(6, 1fr) / 1fr;
            width: 100vw;
            height: 220px;
            justify-items: center;
            align-items: center;
            font-size: ;
            grid-gap: 0;
            margin-top: 10px;
            text-align: center;
        };  
`;


const wrapperVariants ={
    hidden:{opacity: 0,},
    visible:{opacity: 1, transition: {duration: 0.8}},
}

const Date = styled.div`
    @media (max-width: 510px) {
        margin-top: 15px;
    }
`;

const Detail = styled.div`
    
`;

const B = styled.span`
    font-weight: 900;
`;

function About() {
    return (
        <Wrapper
            variants = {wrapperVariants}
            initial = "hidden"
            animate = "visible"
        >
            <AboutBox>
                <Name>Lucy Nam 남화정</Name>
                <AboutMe>
                <StrongP>I love to visualize my imagination.</StrongP><br/>
                I am an <Strong>artist, event planner, and front-end developer. </Strong> 
                When I draw pictures, I utilize drawing materials and my imagination. When I plan events, I imagine the experience my customers will expect and try to make imagination into reality. Recently, I have been learning to code so I can make my imaginations into reality digitally. Although I have used different mediums, I have always loved making my imaginations into reality and visualizing those images. This is why I have taught myself how to code for the past year and have enjoyed the experience so much.

                </AboutMe>
            </AboutBox>

            <InfoBox>
                <PhotoBox>
                    <Photo>
                        <Img src={Images.nyuImg} style={{x: -70, height: "330px",}} />
                    </Photo>
                </PhotoBox>
                <DetailBox>
                    <DetailTop>
                        <Icon 
                                style={{y: -1}}
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 640 512"><path d="M320 128C328.8 128 336 135.2 336 144V160H352C360.8 160 368 167.2 368 176C368 184.8 360.8 192 352 192H320C311.2 192 304 184.8 304 176V144C304 135.2 311.2 128 320 128zM476.8 98.06L602.4 125.1C624.4 130.9 640 150.3 640 172.8V464C640 490.5 618.5 512 592 512H48C21.49 512 0 490.5 0 464V172.8C0 150.3 15.63 130.9 37.59 125.1L163.2 98.06L302.2 5.374C312.1-1.791 327-1.791 337.8 5.374L476.8 98.06zM256 512H384V416C384 380.7 355.3 352 320 352C284.7 352 256 380.7 256 416V512zM96 192C87.16 192 80 199.2 80 208V272C80 280.8 87.16 288 96 288H128C136.8 288 144 280.8 144 272V208C144 199.2 136.8 192 128 192H96zM496 272C496 280.8 503.2 288 512 288H544C552.8 288 560 280.8 560 272V208C560 199.2 552.8 192 544 192H512C503.2 192 496 199.2 496 208V272zM96 320C87.16 320 80 327.2 80 336V400C80 408.8 87.16 416 96 416H128C136.8 416 144 408.8 144 400V336C144 327.2 136.8 320 128 320H96zM496 400C496 408.8 503.2 416 512 416H544C552.8 416 560 408.8 560 400V336C560 327.2 552.8 320 544 320H512C503.2 320 496 327.2 496 336V400zM320 88C271.4 88 232 127.4 232 176C232 224.6 271.4 264 320 264C368.6 264 408 224.6 408 176C408 127.4 368.6 88 320 88z"/>
                        </Icon>  
                        <P>Education</P>
                    </DetailTop>
                    <GridBoxWrap>
                        <GridBox>
                            <Date>2002-2004</Date>
                            <Detail><B>New York University</B>, USA <br/>Master of Arts in Studio Arts
                            </Detail>
                            <Date>1997-2001</Date>
                            <Detail><B>Seoul Women’s University</B>, Korea <br/>Bachelor of Arts in Painting
                            </Detail>
                            <Date>2000</Date>
                            <Detail><B>RMIT University</B>, Australia <br/>1 year Exchange program in Fine Arts </Detail>
                        </GridBox>
                    </GridBoxWrap>
                </DetailBox>
            </InfoBox>

            <InfoBox>
                <PhotoBox>
                        <Photo>
                            <Img src={Images.seminarImg} />
                        </Photo>
                    </PhotoBox>
                    <DetailBox>
                        <DetailTop>
                            <Icon 
                                style={{y:1.5}}
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 512 512">
                                <path d="M320 336c0 8.844-7.156 16-16 16h-96C199.2 352 192 344.8 192 336V288H0v144C0 457.6 22.41 480 48 480h416c25.59 0 48-22.41 48-48V288h-192V336zM464 96H384V48C384 22.41 361.6 0 336 0h-160C150.4 0 128 22.41 128 48V96H48C22.41 96 0 118.4 0 144V256h512V144C512 118.4 489.6 96 464 96zM336 96h-160V48h160V96z"/>
                            </Icon>
                            <P>Work</P>
                        </DetailTop>
                        <GridBoxWrap>
                        <GridBox>
                            <Date>2011-2019</Date>
                            <Detail><B>Mary Kay Korea</B>, Korea <br/>Comm. Marketing Sr. Specialist <br/>Event Coordinator ~ Supervisor</Detail>
                            <Date>2010</Date>
                            <Detail><B>Ananti Club Seoul</B>, Korea<br/>Event & Marketing Manager </Detail>
                            <Date>2006-2010</Date>
                            <Detail><B>W Seoul–Walkerhill Hotel</B>, Korea<br/>Event Coordinator</Detail>
                        </GridBox>
                        </GridBoxWrap>
                    </DetailBox>
            </InfoBox>

        </Wrapper>
        );
    }  

export default About;