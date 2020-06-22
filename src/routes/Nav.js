import React from 'react';
import styled from 'styled-components';

import { NavLink } from 'react-router-dom';
import {Div} from '../styles/DefaultStyles';





const DivNav = styled(Div)`
  background-color: ${props => props.theme.COLOR_normal};
  color: ${props => props.theme.color_strong};
  
  
  position: fixed;
  
  display: flex;
  
  
  @media (max-width: 540px) {
  
  	width: 100%;
  	height: 50px; 
  	
  	flex-direction: row;
  	
	}
 
	 @media (min-width: 541px) {
		width: 180px;
	  height: 100%;
	 
		flex-direction: column;
		
	 }
  
`;


const DivNavItem = styled(Div)`
	height: 30px; 

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


function Nav () {
	return (
 
	
  <DivNav>
  	<DivNavItem > <NavLink to="/about"> About </NavLink> </DivNavItem>
		<DivNavItem > <NavLink to="/" exact={true}> Library </NavLink> </DivNavItem>
	</DivNav>
	
	)
}

export default Nav;