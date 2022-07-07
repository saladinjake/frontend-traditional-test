import React from 'react'
import Header from '../components/Header/Header'
import Leftbar from '../components/Leftbar/Leftbar'
import { Container } from './LayoutStyles'

export const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <Leftbar />
      <div className="content-page" >
        <div className="content" style={{marginLeft:"-15px"}}>{children}</div>
      </div>
    </Container>
  )
}
