import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;        
}
body{
    font-family: var(--poppins)
}
*, button, input {
    border: 0;
    outline: 0;   
}
:root {
--primary: #8F5B3C;
--secondary: #CD926D;
--tertiary: #0e0e0e;
--white: #fff;
--black: #464646;
--poppins: 'Poppins', sans-serif;
}

`;