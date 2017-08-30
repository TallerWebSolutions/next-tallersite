import React from 'react'
import { compose } from 'recompose'

import { withI18n } from '../i18n/i18n.js'

const Footer = ({ i18n }) => {
  return (
    <footer id="section-footer">
      {/* {{#with footer}} */}
      <header>
        <h2 data-title="Taller">Taller</h2>
      </header>
      <main>
        <h3>{ i18n('footer.contact.title') }</h3>
        <p>
        </p>
        <p>
            contato@taller.net.br
        </p>
        <ul>
          <li><a href="http://blog.taller.net.br/">Blog</a></li>
          <li><a href="http://twitter.com/tallerws" target="_blank">Twitter</a></li>
          <li><a href="http://facebook.com/tallerwebsolutions" target="_blank">Facebook</a></li>
          <li><a href="http://instagram.com/instadataller" target="_blank">Instagram</a></li>
          <li><a href="http://linkedin.com/company/taller-solu-es-web-inteligentes" target="_blank">Linkedin</a></li>
        </ul>
        <ul>
          <li><a href="http://taller.net.br">Português</a></li>
          <li><a href="http://taller.net.br/en">English</a></li>
          <li><a href="http://taller.net.br/es">Español</a></li>
        </ul>
      </main>
      <aside>
        <h3>{ i18n('footer.extras.title') }</h3>
        <p>
          { i18n('footer.extras.description') }
          <br />
          <a href="http://blog.taller.net.br/serie-lean-ui-redesign-taller-case">{ i18n('footer.extras.read-more') }</a>
        </p>
      </aside>
    </footer>
  );
}

export default compose(withI18n)(Footer)
