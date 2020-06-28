import React from 'react';
import styled from 'styled-components';

import { NavLink } from 'react-router-dom';
import {Div} from '../styles/DefaultStyles';



const size = {
  widthAlbum: [110, 130]
  ,heightTitle: [30, 40]
}
const DivAlbum = styled(Div)`
  

  color: ${props => props.theme.color_strong};
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  
  margin: 5px;
  
  width: ${size.widthAlbum[1]}px;
 
  
`;


const DivTitle = styled(Div)`
	text-align: center;
	
	width: 100%;
	height: ${size.heightTitle[1]}px;
`

// text-align aligh img to center!!!
const DivImg= styled(Div)`
	
	position: relative;
	width: ${size.widthAlbum[1]}px;
	height: ${size.widthAlbum[1]}px;
  
  text-align: center;
  
}
`

const ImgAlbumCover = styled.img`
  width: 100%;
  heigth: 100%;
  
  border-radius: 4%;
`



function Album ({album}) {
	return (
 
  <DivAlbum>
  
    <DivTitle> {album.title} </DivTitle>
    <DivImg> <ImgAlbumCover src= {`https://albumcover.avantwing.com/${album["_id"]}.png`} /> </DivImg>
  	
  	
	</DivAlbum>
	
	)
}

export default Album;

/*
<DivInfo> {album.artist} </DivInfo>
*/