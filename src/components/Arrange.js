import React from 'react';
import styled from 'styled-components';

import { NavLink } from 'react-router-dom';
import {Div} from '../styles/DefaultStyles';


const DivArrange = styled(Div)`
	position: fixed;
  left: 50%;
  transform: translateX(-50%);
  
  background-color: ${props => props.theme.COLOR_normal};
  color: ${props => props.theme.color_strong};
  
  
  flex-direction: row;
  
  height: 50px;
  
  @media (max-width: 480px) {
  	width: 100%;
	}
 
	 @media (min-width: 481px) {
		width: 300px;
	 }
  
`;

const DivArrangeItem = styled(Div)`
	height: 100%;

  @media (max-width: 480px) {
  
	}
 
	 @media (min-width: 481px) {
	 }
`;


const activeClassName = 'nav-link-active';

const NavLinkMenuItem = styled(NavLink).attrs({ activeClassName })`
  
	color: ${props => props.theme.color_normal};
	text-decoration: none;
	
	&.${activeClassName} {
		color: ${props => props.theme.color_active};
	}
	
`;


function Arrange () {
	return (
 
  <DivArrange>
  	<DivArrangeItem> abc </DivArrangeItem>
  	<DivArrangeItem> artist </DivArrangeItem>
  	<DivArrangeItem> rating </DivArrangeItem>
  	<DivArrangeItem> group </DivArrangeItem>
	</DivArrange>
	
	)
}

export default Arrange;