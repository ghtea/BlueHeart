import React from 'react';
import styled from 'styled-components';

import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import {Div} from '../styles/DefaultStyles';
import Arrange from '../components/Arrange';
import Album from '../components/Album';


const GET_AlBUMS = gql`
  {
    getAlbums {
      _id
      urlRym
      
      title
      artist
      year
      
      rating
      review
    }
  }
`;



const DivLibrary = styled(Div)`
   
  
  @media (max-width: 540px) {
    margin-top: 30px; /* height of nav */
  	
  	width: 100%;
	  height: 100%;
  	
	}
 
	 @media (min-width: 541px) {
	  margin-left: 160px; /* width of nav */
	 
		width: 100%;
	  height: 100%;
	 
		
	 }
  
`;

function Library() {
  
  const { loading, data } = useQuery(GET_AlBUMS);
   
  return (
    <DivLibrary>
    
    <Arrange />
    
    <Div> 
      {loading && <Div>Loading...</Div>}
      {!loading &&
        data.getAlbums &&
        data.getAlbums.map(album => 
        
        <Album 
          key={album._id} 
          album = {album}
        />
        
        )}
    </Div>
    
    </DivLibrary>
  );
}

export default Library;