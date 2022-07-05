import React from 'react'
import Header from '../components/Header/Header'
import Leftbar from '../components/Leftbar/Leftbar'
import { Container } from './LayoutStyles'

export const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <Leftbar />
      <div class="content-page">
        <div class="content">{children}</div>
      </div>
    </Container>
  )
}
