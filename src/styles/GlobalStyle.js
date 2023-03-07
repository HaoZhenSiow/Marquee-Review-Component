import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
/* root font size must be fixed */
/* scale 1.067, 14px, 320px viewport and 1.2 18px, 1920px viewport */
/* viewport - viewport, fluid-container-padding - fluid container horizontal padding */
:root {
  --fluid-lg: clamp(1.2101247690rem, calc(0.8922777225rem + 1.58923523100vw), 2.79936rem);
  --fluid-h1: clamp(1.1341375530rem, calc(0.8944050633rem + 1.19866244700vw), 2.33280rem);
  --fluid-h2: clamp(1.0629217930rem, calc(0.8867061512rem + 0.88107820740vw), 1.94400rem);
  --fluid-h3: clamp(0.9961778750rem, calc(0.8714134500rem + 0.62382212500vw), 1.62000rem);
  --fluid-h4: clamp(0.9336250000rem, calc(0.8503500000rem + 0.41637500000vw), 1.35000rem);
  --fluid-h5: clamp(0.8750000000rem, calc(0.8250000000rem + 0.25000000000vw), 1.12500rem);
  --fluid-h6: clamp(0.8200562324rem, calc(0.7965674789rem + 0.11744376760vw), 0.93750rem);
  --fluid-sm: clamp(0.7685625421rem, calc(0.7660250505rem + 0.01268745789vw), 0.78125rem);
  --fluid-line-height: calc(1.8em - .4 * ((100vw - 29.08324552em) / (77.58342115)));

  --viewportSmall: 375;
  --viewportMedium: 768;
  --viewportLarge: 1440;
  --viewportMin: 375;
  --viewportMax: 1920;
}

/* to prevent font-size looping use :not()*/
*:not(html, small, blockquote *)  {
  font-size: var(--fluid-h5);
}
h1 {font-size: var(--fluid-h1);}
h2 {font-size: var(--fluid-h2);}
h3 {font-size: var(--fluid-h3);}
h4 {font-size: var(--fluid-h4);} 
/* h5 is alread set to var(--heading-5)*/
h6 {font-size: var(--fluid-h6);} 
p {line-height: var(--fluid-line-height);}

@media (max-width: 414px){
p {line-height: 1.8em;} 
}

@media (min-width: 1920px){
p {line-height: 1.4em;} 
}

* {box-sizing: border-box;}

html {
  font-family: 'Epilogue', sans-serif;
  color: var(--grey);
}

body {
    margin: 0;
    padding: 0;
    background-color: var(--white);
}

a {
    text-decoration: none;
    color: #337ab7;
}

a:hover, a:focus {text-decoration: underline;}

abbr:hover , acronym:hover { cursor: help;}

kbd {
    background-color: #333333;
    color: #ffffff;
    font-size: .9em;
    padding: 0.1em 0.2em;
    border-radius: 0.2em;
}

code {
    color: #c7254e;
    background-color: #f9f2f4;
    font-size: .9em;
    padding: 0.1em 0.2em;
    border-radius: 0.2em;
}

sub, sup {
    font-size: 75%;
}

blockquote {
    padding: 0.5em 1.5em;
    margin-left: 0;
    margin-right: 0;
    /* font-size: var(--fluid-h4); */
    border-left: 5px solid #eee;
}

blockquote > p {
    margin: 0;
}

dt {font-weight: 700;}
dd {margin-inline-start: 0;}
address {font-style: normal;}

pre {
    display: block;
    padding: 1.5em;
    /* font-size: var(--fluid-sm); */
    line-height: 1.6em;
    word-break: break-all;
    word-wrap: break-word;
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    border-radius: .3em;
}

fieldset {
    padding: 0;
    margin: 0;
    border: 0;
}

legend {
    width: 100%;
    /* font-size: var(--fluid-h3); */
    border-bottom: solid 1px #d6d6d6;
    margin-bottom: 1em;
}

label {
    font-weight: 700;
}

button:hover, input[type="button"]:hover, input[type="submit"]:hover, input[type="reset"]:hover {
    cursor: pointer;
}
`;

export default GlobalStyle;