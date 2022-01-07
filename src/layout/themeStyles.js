import darkBackgroundImageDesktop from '../assets/img/bg-desktop-dark.jpg';
import lighBackgroundImageDesktop from '../assets/img/bg-desktop-light.jpg';
import darkBackgroundImageMobile from '../assets/img/bg-mobile-dark.jpg';
import lighBackgroundImageMobile from '../assets/img/bg-mobile-light.jpg';

const darkStyle = {
  backgroundColor: '#181824',
  titleColor: '#fefdff',
  todosBoardColor: '#25273c',
  primaryColor: '#b3b5ce',
  secondaryColor: '#5b5c77',
  secondaryColortHover: '#5b5c77',
  todosBorderColor: '#303247',
  completedButtonColor: 'linear-gradient(90deg,#77b5f2,#9e7ae1)',
  secondaryTaskColor: '#b3b5ce',
  activeButtonOption: '#4572c5',
  backgroundImageDesktop: darkBackgroundImageDesktop,
  backgroundImageMobile: darkBackgroundImageMobile,
};

const lightStyle = {
  backgroundColor: '#fafafa',
  titleColor: '#fefdff',
  todosBoardColor: '#fff',
  primaryColor: '#b3b5ce',
  secondaryColor: '#9c9ba1',
  secondaryColortHover: '#9c9ba1',
  todosBorderColor: '#ecebef',
  completedButtonColor: 'linear-gradient(90deg,#77b5f2,#9e7ae1)',
  secondaryTaskColor: '#6f6e77',
  activeButtonOption: '#4572c5',
  backgroundImageDesktop: lighBackgroundImageDesktop,
  backgroundImageMobile: lighBackgroundImageMobile,
};

const uniqueStyles = {
  fontSize: '18px',
  weight700: 700,
};

export {darkStyle, lightStyle, uniqueStyles};
