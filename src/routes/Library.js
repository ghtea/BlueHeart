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
  
  
`;

const DivAlbums = styled(Div)`
  display: flex;
  flex-direction: row;
  
  flex-wrap:wrap;
`

function Library() {
  
  const { loading, data } = useQuery(GET_AlBUMS);
   
  return (
    <DivLibrary>
    
    <Arrange />
    
    <DivAlbums> 
      {loading && <Div>Loading...</Div>}
      {!loading &&
        data.getAlbums &&
        data.getAlbums.map(album => 
        
        <Album 
          key={album._id} 
          album = {album}
        />
        
        )}
    </DivAlbums>
    
    </DivLibrary>
  );
}

export default Library;