/* eslint-disable max-len */
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root{
   --background-color: ${({theme}) => theme.styles.backgroundColor};
   --title-color: ${({theme}) => theme.styles.titleColor};
   --todos-board-color: ${({theme}) => theme.styles.todosBoardColor};
   --primary-color: ${({theme}) => theme.styles.primaryColor};
   --secondary-color: ${({theme}) => theme.styles.secondaryColor};
   --secondary-color-hover: ${({theme}) => theme.styles.secondaryColorHover};
   --todos-border-color: ${({theme}) => theme.styles.todosBorderColor};
   --completed-button-color: ${({theme}) => theme.styles.completedButtonColor};

   --font-size: ${({theme}) => theme.uniqueStyles.fontSize};
   --weight700: ${({theme}) => theme.styles.weight700};
}  

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

 body{
   font-family: 'Josefin Sans', sans-serif;
   font-size: var(--font-size);
   background: var(--background-color);
 }

 #root{
   display: flex;
   justify-content: center;
   margin-top: 12vh;
   width: 100vw;
 }
`;

export default GlobalStyle;
