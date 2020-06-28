import React, {useState} from 'react';
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

// work strangely if I use button tag
const DivButtonAdd = styled(Div)`
  
  background-color: ${props => props.theme.COLOR_bg};
  color: ${props => props.theme.color_normal};
    
  cursor: pointer;
  
  width: 100px;
  height: 40px;
  
`;

const useSelect = initialValue => {
	const [value, setValue] = useState(initialValue);
	const onChange = event => {
	  setValue( parseInt(event.target.value) );
	}
	return {value, onChange};
}


function Add() {
  
  const inputUrlRym = useInput("");
  const selectRating = useSelect(0);
  
  const review = "";
  
  const [addAlbum] = useMutation(ADD_ALBUM, {
    variables: { urlRym: inputUrlRym.value, rating:selectRating.value, review:review }
  });
  
  return (
    <DivAdd>
    
    <select  {...selectRating} >
      <option value="0" selected >None</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
    
    <input {...inputUrlRym} placeholder="url" />
    
    <DivButtonAdd onClick={ (e) => {
    
      //e.preventDefault();
      addAlbum();
      //inputUrlRym.value = ''; 
      //selectRating.value = 0;
    }
    }
    >
      Add Album
    </DivButtonAdd>
    
    </DivAdd>
  );
}

export default Add;