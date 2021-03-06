import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalStyles = createGlobalStyle`
  ${normalize};
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
  

  font-family: ${(props) => props.theme.fonts.main};
  font-size: 1.6rem;
  background: ${(props) => props.theme.colors.background1};
  color: ${(props) => props.theme.colors.primary1};
  cursor: default;
}
html {
  position: relative;
  min-height: 100%;
  background:  ${(props) => props.theme.colors.background1};
  scroll-behavior: smooth;
}


h1,
h2,
h3,
h4,
h5,
h6 {
  color:  ${(props) => props.theme.colors.primary1};
  font-family: ${(props) => props.theme.fonts.main};
  margin: 10px 0;
}
h1 {
  line-height: 43px;
}
h2 {
  line-height: 35px;
}
h3 {
  line-height: 30px;
}
h3 small {
  color: #444444;
}
h4 {
  line-height: 22px;
}
h4 small {
  color: #444444;
}
h5 {
  font-size: 15px;
}
h5 small {
  color: #444444;
}
p {
  line-height: 1.6;
}
* {
  outline: none !important;
}
b {
  font-weight: 600;
}

.container {
  width: auto;
}
.container-alt {
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
}

#wrapper {
  height: 100%;
  overflow: hidden;
  width: 100%;
  color:${(props) => props.theme.colors.primary1};
  background:#000;
}
.page {
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
}
/* Page titles */
.page-title {
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 0px;
  margin-top: 7px;
  margin-left:40px;
}
.page-title-alt {
  margin-bottom: 23px;
  margin-top: 10px;
}
.page-header {
  border-bottom: 1px solid #DBDDDE;
  color:${(props) => props.theme.colors.primary1};
}
.header-title {
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.04em;
  line-height: 16px;
  margin-bottom: 8px;
  color:${(props) => props.theme.colors.primary1};
}


.content-page {
  margin-left: 240px;
  overflow: hidden;
}
.content-page > .content {
  margin-bottom: 60px;
  margin-top: 60px;
  padding: 20px 5px 15px 5px;
}

.row {
  margin-right: -10px;
  margin-left: -10px;
}
.col-lg-1,
.col-lg-10,
.col-lg-11,
.col-lg-12,
.col-lg-2,
.col-lg-3,
.col-lg-4,
.col-lg-5,
.col-lg-6,
.col-lg-7,
.col-lg-8,
.col-lg-9,
.col-md-1,
.col-md-10,
.col-md-11,
.col-md-12,
.col-md-2,
.col-md-3,
.col-md-4,
.col-md-5,
.col-md-6,
.col-md-7,
.col-md-8,
.col-md-9,
.col-sm-1,
.col-sm-10,
.col-sm-11,
.col-sm-12,
.col-sm-2,
.col-sm-3,
.col-sm-4,
.col-sm-5,
.col-sm-6,
.col-sm-7,
.col-sm-8,
.col-sm-9,
.col-xs-1,
.col-xs-10,
.col-xs-11,
.col-xs-12,
.col-xs-2,
.col-xs-3,
.col-xs-4,
.col-xs-5,
.col-xs-6,
.col-xs-7,
.col-xs-8,
.col-xs-9 {
  padding-left: 10px;
  padding-right: 10px;
}
`

export default GlobalStyles
