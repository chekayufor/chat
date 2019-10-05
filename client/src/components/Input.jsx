import React from 'react';
import styled from "styled-components";

const Input = ({message, sendMessage, setMessage}) => (

<Form className='form'>
    <InputContainer
    className='input'
    type='text'
    placeholder='Type a message...'
    value={message}
    // onChange={e => setMessage(e.target.value)}
    onChange={({target: { value}}) => setMessage(value)}
    onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
    />
    <SendButton className='sendButton' onClick={e => sendMessage(e)}>Send</SendButton>
</Form>
)
export default Input;

const Form = styled.form`
    display: flex;
    border-top: 2px solid #D3D3D3;
  `
  
  const InputContainer = styled.input`
    border: none;
    border-radius: 0;
    padding: 5%;
    width: 80%;
    font-size: 1.2em;
    &:focus, textarea:focus, select:focus {
    outline: none;
    }
  `
  
  const SendButton =styled.button`
    color: #fff !important;
    text-transform: uppercase;
    text-decoration: none;
    background: #2c4877;
    padding: 20px;
    display: inline-block;
    border: none;
    width: 20%;
  `