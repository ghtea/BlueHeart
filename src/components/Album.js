import React from 'react';
import styled from 'styled-components';

import { NavLink } from 'react-router-dom';
import {Div} from '../styles/DefaultStyles';


const DivAlbum = styled(Div)`
  
  
  background-color: ${props => props.theme.COLOR_normal};
  color: ${props => props.theme.color_strong};
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  
  width: 120px;
  height: 120px;
  
`;


const DivInfo = styled(Div)`
	text-align: center;
`

const ImgAlbumCover = styled.img`
  width: 100%;
  heigth: 100%;
`



function Album ({album}) {
	return (
 
  <DivAlbum>
    <ImgAlbumCover src= {`https://albumcover.avantwing.com/${album["_id"]}.png`} />
  	<DivInfo> {album.title} </DivInfo>
    <DivInfo> {album.artist} </DivInfo>
    <DivInfo> {album.year} </DivInfo>
	</DivAlbum>
	
	)
}

export default Album;