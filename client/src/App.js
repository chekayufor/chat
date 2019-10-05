import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Join from './components/Join'
import Chat from './components/Chat'
import GlobalStyles from './global.styles';
import styled from "styled-components";


const App = ()=> 
   (
     <Box>
     <Router>
     <Route path="/" exact component={Join} />
     <Route path="/chat" component={Chat} />
    </Router>
     <GlobalStyles/> 
    </Box>
  );

export default App;

const Box =styled.div`

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
height: 100%;
`