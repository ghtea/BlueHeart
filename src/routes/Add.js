import React from 'react';
import styled from 'styled-components';

import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";

import {Div} from '../styles/DefaultStyles';

import useInput from '../tools/hooks/useInput'



const ADD_ALBUM = gql` 
  mutation addAlbum($urlRym:String!, $rating:Int, $review:String) { 
    addAlbum(
      urlRym: $urlRym
      ,rating: $rating
      ,review: $review
    )
  } 
`;



const DivAdd = styled(Div)`
  
`;

const DivAddButton = styled(Div)`
  
  background-color: ${props => props.theme.COLOR_bg};
  color: ${props => props.theme.color_normal};
    
  cursor: pointer;
  
  width: 100px;
  height: 40px;
  
`;

function Add() {
  
  const urlRym = useInput("");
  const rating = 4;
  const review = "";
  
  const [addAlbum] = useMutation(ADD_ALBUM, {
    variables: { urlRym: urlRym, rating:rating, review:review }
  });
  
  return (
    <DivAdd>
    
    <select name="rating">
      <option value="None" selected >None</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
    
    <input {...urlRym} placeholder="url" />
    
    <DivAddButton onClick={addAlbum} >
      Add Album
    </DivAddButton>
    
    </DivAdd>
  );
}

export default Add;