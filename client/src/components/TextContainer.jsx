import React from 'react';
import styled from "styled-components";

import onlineIcon from '../icons/onlineIcon.png';


const TextContainer = ({ users }) => (
  <Container className="textContainer">
    {/* <div>
      <h3>Created with React, Express, Node and Socket.IO </h3>
    </div> */}
    {
      users
        ? (
          <div>
            <H4>People currently chatting:</H4>
            <ActiveContainer className="activeContainer">
              <H2>
                {users.map(({name}) => (
                  <ActiveItem key={name} className="activeItem">
                    {name}
                    <Img alt="Online Icon" src={onlineIcon}/>
                  </ActiveItem>
                ))}
              </H2>
            </ActiveContainer>
          </div>
        )
        : null
    }
  </Container>
);

export default TextContainer;

const Container =styled.div` 
  display: flex;
  flex:1;
  flex-direction: row;
  height: 100%;
  justify-content: space-between;
  border-right: solid 2px #2c4877;
  border-top: solid 2px #2c4877;
  border-bottom: solid 2px #2c4877;
  border-left: solid 0.1px #2c4877;
  padding:1%;
  border-radius: 8px;
  // @media(min-width: 1200px) {
  //   display: none;
  // }
`

const ActiveContainer =styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width:100%;
`

const ActiveItem =styled.div`
  display: flex;
  flex-direction:row
  align-items: center;
  text-align:center;
  font-size: 16px;
`

const Img = styled.img `
  padding-left: 10px;
  font-size:30px;

`

const H4 =styled.h4 `
  margin-bottom: 0px; 
  font-family: fantasy;
  font-size: 16px;
  text-align: center;
`
const H2 =styled.h2 `
  width:100%;
  display:flex;

`