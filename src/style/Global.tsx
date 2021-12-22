import { createGlobalStyle } from "styled-components";
import { PancakeTheme } from "uikit";
declare module "styled-components" {
  export interface DefaultTheme extends PancakeTheme {}
}
const GlobalStyle = createGlobalStyle`


@font-face {
  font-family: 'Arial-BoldMT';
  src: url('fonts/Arial-BoldMT/Arial-BoldMT.eot?#iefix') format('embedded-opentype'),  url('fonts/Arial-BoldMT/Arial-BoldMT.woff') format('woff'), url('fonts/Arial-BoldMT/Arial-BoldMT.ttf')  format('truetype'), url('fonts/Arial-BoldMT/Arial-BoldMT.svg#Arial-BoldMT') format('svg');
  font-weight: normal;
  font-style: normal;
}


@font-face {
  font-family: 'Arial-ItalicMT';
  src: url('fonts/Arial-ItalicMT/Arial-ItalicMT.eot?#iefix') format('embedded-opentype'),  url('fonts/Arial-ItalicMT/Arial-ItalicMT.woff') format('woff'), url('fonts/Arial-ItalicMT/Arial-ItalicMT.ttf')  format('truetype'), url('fonts/Arial-ItalicMT/Arial-ItalicMT.svg#Arial-ItalicMT') format('svg');
  font-weight: normal;
  font-style: normal;
}


@font-face {
  font-family: 'ArialMT';
  src: url('fonts/ArialMT/ArialMT.eot?#iefix') format('embedded-opentype'),  url('fonts/ArialMT/ArialMT.woff') format('woff'), url('fonts/ArialMT/ArialMT.ttf')  format('truetype'), url('fonts/ArialMT/ArialMT.svg#ArialMT') format('svg');
  font-weight: normal;
  font-style: normal;
}


@font-face {
  font-family: 'MuseoSlab-500';
  src: url('fonts/MuseoSlab-500/MuseoSlab-500.eot?#iefix') format('embedded-opentype'),  url('fonts/MuseoSlab-500/MuseoSlab-500.otf')  format('opentype'),
	     url('fonts/MuseoSlab-500/MuseoSlab-500.woff') format('woff'), url('fonts/MuseoSlab-500/MuseoSlab-500.ttf')  format('truetype'), url('fonts/MuseoSlab-500/MuseoSlab-500.svg#MuseoSlab-500') format('svg');
  font-weight: normal;
  font-style: normal;
}

*{
  font-family:'Arial-BoldMT', 'Arial Bold', 'Arial';
}
body {
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 0 20px;
  ${({ theme }) => theme.mediaQueries.md} {
    max-width: 900px;
  }
  img{
    height: auto;
    max-width: 100%;
  }
}
-webkit-appearance: textfield;

::-webkit-search-decoration {
  -webkit-appearance: none;
}

[type='number'] {
  -moz-appearance: textfield;
}

::-webkit-outer-spin-button,
::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
&::-webkit-scrollbar {
  display: none;
}
`;
export default GlobalStyle;
