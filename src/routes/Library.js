import React from 'react';
import styled from 'styled-components';

import {Div} from '../styles/DefaultStyles';
import Arrange from '../components/Arrange';


const DivLibrary = styled(Div)`
  display: flex;
  flex-direction: row;
  
  
`;

function Library() {
  return (
    <DivLibrary>
    
    <Arrange />
    
    <Div style={{width: "150px"}}> 
      my favorite albums
    </Div>
    
    <Div> 
      my favorite albums
    </Div>
    
    </DivLibrary>
  );
}

export default Library;