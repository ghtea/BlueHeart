import React from 'react';
import styled from 'styled-components';

import { NavLink } from 'react-router-dom';
import {Div} from '../styles/DefaultStyles';


const styles = {
	heightNavItem: "30px"
}

const DivNav = styled(Div)`
  background-color: ${props => props.theme.COLOR_normal};
  color: ${props => props.theme.color_strong};
  
  display: grid;
  position: fixed;
  
  
  @media (max-width: 480px) {
  
  	left: 50%;
  	transform: translateX(-50%);
  	
  	width: 100%;
  	height: ${styles.heightNavItem}; 
  	
  	
  	grid-template-columns: 1fr;
  	grid-template-rows: 1fr;
  	
  	grid-auto-flow: row;
  	grid-auto-columns: 1fr;
  	
  	
	}
 
	 @media (min-width: 481px) {
		left: 0;
		top: 150px;
	  
	  width: 70px;
	  
	  grid-template-columns: 1fr;
  	grid-template-rows: 1fr;
  	
	  grid-auto-flow: column;
	  grid-auto-rows: ${styles.heightNavItem};
	  
	 }
  
`;

const DivNavItem = styled(Div)`
	height: ${styles.heightNavItem}; 

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