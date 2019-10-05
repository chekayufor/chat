import React from 'react';
import ReactEmoji from 'react-emoji';
import styled from "styled-components";


const Message = ({message: {user, text}, name}) => {
    let isSentByCurrentUser = false;
    const trimmedName = name.trim().toLowerCase();
    if (user === trimmedName) {
        isSentByCurrentUser = true;
    }
    return(
        isSentByCurrentUser
        ? (
            <MessageContainerStart className='messageContainer justifyEnd'>
                <SentTextRight className='sentText pr-10'>{trimmedName}</SentTextRight>
                <MessageBoxBlue className='messageBox backgroundBlue'>
                    <MessageTextWite className='messageText colorWite'>{ReactEmoji.emojify(text)}</MessageTextWite>
                </MessageBoxBlue>
            </MessageContainerStart>
        )
        : (
            <MessageContainerEnd className='messageContainer justifyStart'>
            <MessageBoxLight className='messageBox backgroundLight'>
                <MessageTextDark className='messageText colorDark'>{ReactEmoji.emojify(text)}</MessageTextDark>
            </MessageBoxLight>
            <SentTextLeft className='sentText pl-10'>{user}</SentTextLeft>
        </MessageContainerEnd>
        )
    )
}
export default Message;


  
const MessageBoxLight =styled.div`
  background: #F3F3F3;
  border-radius: 20px;
  padding: 5px 20px;
  color: white;
  display: inline-block;
  max-width: 80%;
  background: #F3F3F3;
`
const MessageBoxBlue =styled.div`
  background: #F3F3F3;
  border-radius: 20px;
  padding: 5px 20px;
  color: white;
  display: inline-block;
  max-width: 80%;
  background: #2979FF;
`

const MessageTextWite = styled.p`
  width: 100%;
  letter-spacing: 0;
  float: left;
  font-size: 1.1em;
  word-wrap: break-word;
  color: white;
`
const MessageTextDark = styled.p`
  width: 100%;
  letter-spacing: 0;
  float: left;
  font-size: 1.1em;
  word-wrap: break-word;
  color: #353535;
`

// const Img =styled.img`
//   vertical-align: middle;
// `

const MessageContainerStart =styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 5%;
  margin-top: 3px;
  justify-content: flex-start;
`
const MessageContainerEnd =styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 5%;
  margin-top: 3px;
  justify-content: flex-end;
`

const SentTextLeft =styled.p`
  display: flex;
  align-items: center;
  font-family: Helvetica;
  color: #828282;
  letter-spacing: 0.3px;
  padding-left: 10px;
`
const SentTextRight =styled.p`
  display: flex;
  align-items: center;
  font-family: Helvetica;
  color: #828282;
  letter-spacing: 0.3px;
  padding-left: 10px;
  padding-right: 10px;
`


