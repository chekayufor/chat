import React, {useState, useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import styled from "styled-components";

import InfoBar from './InfoBar';
import Messages from './Messages';
import Input from './Input';
import TextContainer from './TextContainer'

let socket;

const Chat = ({location}) => {
    const [name, setName ]= useState('');
    const [room, setRoom ]= useState('');
    const [users, setUsers]=useState('');
    const [message, setMessage ]= useState('');
    const [messages, setMessages ]= useState([]);

    // const ENDPOINT = 'localhost:5000';
    const ENDPOINT = 'https://react-chat-aplication.herokuapp.com/';


    useEffect(() => {

        //from join.js: <Link onClick={e => (!name || !room) ? e.preventDefault() : null } to={`/chat?name=${name}&room=${room}`}>
        const {name, room} = queryString.parse(location.search);
        console.log(name, room);
        console.log('location.search ',location.search);

       socket=io(ENDPOINT)
       
       setName(name);
       setRoom(room);
       
       console.log(socket);

       //socket 'connection'
       socket.emit ('join', {name, room}, (error) => {
           if(error) alert(error);
       });
        // clean up function
       return () => {
            socket.emit('disconnect');
            socket.off();
       }
    },[ENDPOINT, location.search])

    //add messages anf push them to the [] of messages
    useEffect(() => {
        socket.on ('message', (message) => {
            setMessages([...messages, message])
        })
        socket.on('roomData', ({ users }) => {
            setUsers(users)
        })
        return () => {
            socket.emit('disconnect');
            socket.off();
       }
    }, [messages]);

    //f() for sending messages
    const sendMessage = (event) => {
        event.preventDefault();
        
        if(message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    // console.log(message, messages);

    return (
        <OuterContainer className='outerContainer'>
            <Container className='container'>
                <InfoBar room={room}/>
                <Messages messages={messages} name={name}/>
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
            </Container>
            <TextContainer users={users}/>
        </OuterContainer>
    )
}
export default Chat;


const OuterContainer = styled.div`
    width:100%;
    display: flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;
    height: 100vh;
    @media (min-width: 480px) {
      height: 100%;
    }
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #FFFFFF;
    border-radius: 8px;
    border: solid 2px #2c4877;
    height: 100vh;
    width:100%;
    flex:7;
    @media (min-width: 600px) {
        height: 100%;
    }
`