import React from 'react';
import onlineIcon from '../icons/onlineIcon.png';
import closeIcon from '../icons/closeIcon.png';
import styled from "styled-components";


const InfoBar = ({room}) => (

    <Bar className='infoBar'>
        <LeftInnerContainer className='leftInnerContainer'>
            <OnlineIcon className='onlineIcon' src={onlineIcon} alt='online'/>
            <h3>{room}</h3>
        </LeftInnerContainer>
        <RightInnerContainer  className='rightInnerContainer'>
            <a href='/'> <img src={closeIcon} alt='close'/></a>
        </RightInnerContainer>
    </Bar>
)
export default InfoBar;

const Bar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #2c4877;
    border-radius: 4px 4px 0 0;
    height: 60px;
    width: 100%;
`
const LeftInnerContainer = styled.div`
    flex: 0.5;
    display: flex;
    align-items: center;
    margin-left: 5%;
    color: white;
`
const RightInnerContainer = styled.div`
    display: flex;
    flex: 0.5;
    justify-content: flex-end;
    margin-right: 5%;
`
const OnlineIcon = styled.div`
    margin-right: 5%;
  `