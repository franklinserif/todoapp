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
   --secondary-task-color: ${({theme}) => theme.styles.secondaryColor};
   --active-button-option: ${({theme}) => theme.styles.activeButtonOption};

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
   background-image: url(${({theme}) => theme.styles.backgroundImageMobile});
   background-repeat: no-repeat;
   background-size: 100% 70%;
   transition: background-image 0.7s ease, background-color 0.3s ease;
 }

 @media screen and (min-width: 700px){
   body{
    background-image: url(${({theme}) => theme.styles.backgroundImageDesktop});
    background-repeat: no-repeat;
    background-size: 100% 340px;
   }
 }

 #root{
   display: flex;
   justify-content: center;
   margin-top: 12vh;
   width: 100vw;
 }
`;

export default GlobalStyle;
