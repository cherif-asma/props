import React from 'react';
import Wrapper from './components/Wrapper';
import Photo from  './components/Photo';
import Title from './components/Title';
function App() {
 
  return (
          <Wrapper>
             
                 <Photo src="/images.png" />

                <Title style={{color:'red'}}>My Name here</Title>

                <Title small>My job here</Title> 
           
          </Wrapper>
       
  );

}

export default App;
