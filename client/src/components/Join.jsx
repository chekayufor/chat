import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import styled from "styled-components";


const Join = () => {
    const [name, setName ]= useState('');
    const [room, setRoom ]= useState('');

    return(
        <JoinOuterContainer className='joinOuterContainer'>
            <JoinInnerContainer className='joinInnerContainer'>
                <Heading className='heading'>Join</Heading>
                <div> <JoinInput placeholder='Name' className='joinInput' type='text' onChange={ e => setName(e.target.value) }/></div>
                <div> <JoinInput placeholder='Room' className='joinInput mt-20' type='text' onChange={ e => setRoom(e.target.value) }/></div>
                <Link   onClick={e => (!name || !room) ? e.preventDefault() : null } to={`/chat?name=${name}&room=${room}`}>
                <Button className='button mt-20' type='submit'>Sing In</Button>
                </Link>
            </JoinInnerContainer>
        </JoinOuterContainer>
    )
}
export default Join;

const JoinOuterContainer = styled.div`
    width:100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    background-color: #1A1A1D;
    @media (min-width: 480px) {
        height: 100%;
    }
  `
  
  const JoinInnerContainer = styled.div`
    width: 70%;
    @media(min-width: 600px) {
        width: 40%;
    }
  `
  
  const JoinInput = styled.input`
    border-radius: 0;
    padding: 15px 20px;
    width: 100%;
    margin-top: 20px;
  `
  
  const Heading =styled.h1`
    color: white;
    font-size: 2.5em;
    padding-bottom: 10px;
    border-bottom: 2px solid white;
  `
  
  const Button =styled.button`
      color: #fff !important;
      text-transform: uppercase;
      text-decoration: none;
      background: #2979FF;
      padding: 20px;
      border-radius: 5px;
      display: inline-block;
      border: none;
      width: 100%;
      margin-top: 20px;
      &:focus {
        outline: 0;
      }
  `
  