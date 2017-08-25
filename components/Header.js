import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Container = styled.header`
  position: relative;
  padding: 3rem 10%;
  background-color: #29292f;
  color: white;
`

const Menu = styled.ul`
  margin: 0;
  padding-left: 1.25em;
  text-align: right;
  line-height: 1.85em;

  li {
    display: inline;
    padding: 1rem;
    list-style: none;
  }

  li + li::before {
    content: "c";
    margin-left: -1rem;
    margin-right: 1rem;
    font-size: 0.4em;
    color: #98989E;
  }
`

const Header = () => (
  <Container>
    <nav>
      <aside>
        <h2>Taller</h2>
      </aside>
      <main>
        <Menu>
          <li><a href='http://blog.taller.net.br'>Blog</a></li>
          <li><a href='/contact'>Contato</a></li>
          <li><Link href='/consulting'>Consultoria</Link></li>
        </Menu>
      </main>
    </nav>

    <main id='section-hero'>
      <p className='hero'>
        Somos um time que desenvolve software de qualidade para inovações tecnológicas de alta complexidade.
      </p>
      <p className='sub-hero' />
    </main>

    <footer>
      <a className='know-more smooth-scroll' href='#section-clients'>Saiba mais</a>
    </footer>
  </Container>
)

export default Header
