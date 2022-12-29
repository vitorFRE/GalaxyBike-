import { createGlobalStyle } from 'styled-components';
import { device } from './BreakPoints';

const GlobalStyles = createGlobalStyle`
.container {
  max-width: 1200px;
  padding: 0 1rem;
  margin: 0 auto;
}
//Reset 
* {
  box-sizing: border-box;
  scroll-behavior: smooth;
}
body {
  margin: 0px;
  color:#fff;
  font-family: 'Inter', sans-serif;
}
a {
  text-decoration: none;
  color:inherit;
}
h1,
h2,
h3,
p {
  margin: 0px;
}
ul,
li {
  list-style: none;
  padding: 0px;
  margin: 0px;
}
img {
  display: block;
  max-width: 100%;
}

//Scroll
::-webkit-scrollbar {
  width: 7px;
}

::-webkit-scrollbar-track {
  background-color: black;
}

::-webkit-scrollbar-thumb {
  background-color: #87CEEB;
  border-radius: 5px;
}

.t1 {
  font-family: 'Inter', sans-serif;
  font-weight: 800;
  font-size: 5rem;
  line-height: 1.1;
}

.t2 {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 3.75rem;
  line-height: 1.4;
}

.p1 {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.6;
}

.p2 {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5;
}

@media ${device.sm} {
  .t1 {
    font-size: 4rem;
    line-height: 1.2;
  }
  .t2 {
    font-size: 3rem;
    line-height: 1.3;
  }
  .p1 {
    font-size: 1rem;
    line-height: 1.4;
  }
  .p2 {
    font-size: 0.9rem;
    line-height: 1.3;
  }
}

@media ${device.md} {
  .t1 {
    font-size: 4.5rem;
    line-height: 1.2;
  }
  .t2 {
    font-size: 3.5rem;
    line-height: 1.3;
  }
  .p1 {
    font-size: 1.1rem;
    line-height: 1.4;
  }
  .p2 {
    font-size: 1rem;
    line-height: 1.3;
  }
}

`;