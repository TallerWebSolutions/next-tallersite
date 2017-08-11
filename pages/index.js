import React from 'react'

// import texto from '../components/Menu'
import { Menu } from '../components/Menu'
import Header from '../components/Header'
import styled from 'styled-components'
import Link from 'next/link'

export default () => (
  <Wrapper>
    <Header>
      <nav>
        <aside>
          <h2>Taller</h2>
        </aside>
        <main>
          <Menu>
            <li><a href="http://blog.taller.net.br">Blog</a></li>
            <li><a href="/contact">Contato</a></li>
            <li><Link href="/consulting">Consultoria</Link></li>
          </Menu>
        </main>
      </nav>

      <main id="section-hero">
        <p className="hero">
          Somos um time que desenvolve software de qualidade para inovações tecnológicas de alta complexidade.
        </p>
        <p className="sub-hero">

        </p>
      </main>

      <footer>
        <a className="know-more smooth-scroll" href="#section-clients">Saiba mais</a>
      </footer>
    </Header>
  </Wrapper>
)

const Wrapper = styled.div``
