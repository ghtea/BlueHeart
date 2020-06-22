import React from 'react';
import styled from 'styled-components';

import {Div} from '../styles/DefaultStyles';
import Arrange from '../components/Arrange';


const DivLibrary = styled(Div)`
   
  
  @media (max-width: 540px) {
    margin-top: 30px; /* height of nav */
  	
  	width: 100%;
	  height: 100%;
  	
	}
 
	 @media (min-width: 541px) {
	  margin-left: 180px; /* width of nav */
	 
		width: 100%;
	  height: 100%;
	 
		
	 }
  
`;

function Library() {
  return (
    <DivLibrary>
    
    <Arrange />
    
    <Div> 
      my favorite albums
    </Div>
    
    </DivLibrary>
  );
}

export default Library;