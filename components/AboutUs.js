import React from 'react'
import { compose } from 'recompose'

import { withI18n } from '../i18n/i18n.js'

const AboutUs = ({ i18n }) => {
  return (
    <section id="section-who">
      <header>
        <h2>{ i18n('section.who.title') }</h2>
      </header>

      <article>
        <aside>
          <h3>{ i18n('section.who.aside.title') }:</h3>
          <ul>
            {
              i18n('section.who.aside.list').map((item, key) => <li key={ key }>{ item }</li>)
            }
          </ul>
          <a target='_blank' href='http://blog.taller.net.br/a-historia-da-taller-2-0/'>
            { i18n('section.who.aside.call-to-action') }
          </a>
        </aside>
        <main>
          <img src="/static/images/galera.png" alt="Taller Team" />
          <p>{ i18n('section.who.main.description') }</p>
          <a className="call-to-action" href="#contact">{ i18n('section.who.main.call-to-action') }</a>
        </main>
      </article>
    </section>
  )
}

export default compose(withI18n)(AboutUs)
