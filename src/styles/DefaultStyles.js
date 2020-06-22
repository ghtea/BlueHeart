import styled, {createGlobalStyle} from 'styled-components';

 const GlobalStyle = createGlobalStyle`
  html, body, #root {
  
    background-color: ${props => props.theme.COLOR_bg};
    color: ${props => props.theme.color_normal};
    
    width: 100%;
    height: 100%;
    
    margin: 0;
    padding: 0;
    
  }
  
  #root {
   display: flex;
  }
  
 
 
 @media (max-width:540px) {
  #root {
    
    flex-direction: column;
  }
 }
 

 @media (min-width: 541px) {
  #root {
    flex-direction: row; 
  }
 }
  
`

 const Div = styled.div`
 
 width: 100%;
 
	display: flex;
 align-items: center;
 justify-content: center;
  
  
`



 const Button = styled.button`
	border: none;
	cursor: pointer;
		
	width: 100%;
		
	display: flex;
 align-items: center;
 justify-content: center;
		
`

const A = styled.a`
	color: ${props => props.theme.color_normal};
	text-decoration: none;
		
	display: flex;
 align-items: center;
 justify-content: center;
		
`

export {GlobalStyle, Div, Button, A};
