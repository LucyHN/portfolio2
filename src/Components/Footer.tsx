import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const BottomBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    margin-bottom: 50px;
    padding-top: 40px;
    width: 90%;
    border-top: 1.5px solid ${props => props.theme.gray.lighter};
        @media(max-width: 500px) {
            margin-top: 50px;
        }
`;

const BottomCopy = styled.p`
    color: ${props => props.theme.gray.darker};
    font-size: 14px;
        @media (max-width: 510px){
            font-size: 13px;
        }
`;

function Footer() {
    return(
        <Wrapper>
            <BottomBox>
                <BottomCopy>&copy;2022 Lucy Nam 남화정. All rights reserved.</BottomCopy>
            </BottomBox>
        </Wrapper>
    );
}

export default Footer;