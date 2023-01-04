import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
*, ::before, ::after {
	box-sizing: border-box;
}
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video, button {
	margin: 0;
	padding: 0;
	border: 0;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body, button {
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
	line-height: 1;
	font-size: 16px;
	color: var(--text-color);
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
h1, h2, h3, h4, h5, h6 {
	color: var(--title-color);
}

// --- Variables ---

// Colors
:root {
	--main-color: #E45CDF;
	--main-color-transparent: #e45cdf99;
	--support-color: #B667E7;
	--bg-color: #FFFFFF;
	--title-color: #1D1D24;
	--text-color: #737373;
	--text-color-ligher: #FFFFFF;
	--border: #bebebe;
	--border-dark: #666666;

};



// --- Animations ---

.loginbgpos-anim {

	animation-name: loginbgpos;
	animation-duration: 8s;
	animation-iteration-count: infinite;
	animation-timing-function: cubic-bezier(0, 0, 0, 0);
}
@keyframes loginbgpos {
 0% { background-position: 0px 0px; }
 100% { background-position: 75px 75px; }
}

`;