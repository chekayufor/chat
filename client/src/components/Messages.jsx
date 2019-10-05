import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'
import Message from './Message';
import styled from "styled-components";

const Messages = ({messages, name}) => (

    <ScrollToBottomStyled>
        {messages.map((message, i) => <div key={i}><Message message={message} name={name}/></div>)}
    </ScrollToBottomStyled>
)
export default Messages;

const ScrollToBottomStyled = styled(ScrollToBottom)`
    padding: 5% 0;
    overflow: auto;
    flex: auto;
  `