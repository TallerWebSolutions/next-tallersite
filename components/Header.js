import React, { PropTypes } from 'react'
import { compose } from 'recompose'

import { withI18n } from '../i18n/i18n.js'

const Header = ({ i18n }) => (
  <header id='section-heading'>
    <nav>
      <aside>
        <a href='/'><h2>Taller</h2></a>
      </aside>
      <main>
        <ul>
          <li><a href='http://blog.taller.net.br'>Blog</a></li>
          <li><a href='#contact'>{ i18n('menu.contact') }</a></li>
        </ul>
      </main>
    </nav>

    <main id='section-hero'>
      <p className='hero'>
        { i18n('header.hero') }
      </p>
      <p className='sub-hero'>
        { i18n('header.subhero') }
      </p>
    </main>

    <footer>
      <a className='know-more smooth-scroll' href='#section-clients'>{ i18n('util.knowMore') }</a>
    </footer>
  </header>
)

Header.propTypes = {
  i18n: PropTypes.func
}

export default compose(
  withI18n
)(Header)
