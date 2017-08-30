import React from 'react'

import { withI18n } from '../i18n/i18n.js'

const Studio = ({ i18n }) => (
  <section id="section-studio">
    <header>
      <h2>{ i18n('section.studio.title') }</h2>
    </header>

    <main>
      <h3>{ i18n('section.studio.main.title') }</h3>
      <p>{ i18n('section.studio.main.description') }</p>
      <article className="what">
        <ul className="services-list-first">
          { i18n('section.studio.main.list-first').map(item => (
            <li key={ item }>{ item }</li>
          )) }
        </ul>
        <ul className="services-list-second">
          { i18n('section.studio.main.list-second').map(item => (
            <li key={ item }>{ item }</li>
          )) }
        </ul>
      </article>
      <a className="call-to-action" href="#contact">{ i18n('section.studio.main.call-to-action') }</a>
    </main>

    <aside className="services-stack">
      <h3>{ i18n('section.studio.aside.title') }</h3>
      <p>{ i18n('section.studio.aside.description') }</p>
      <ul>
        { i18n('section.studio.aside.list').map(item => (
          <li key={ item.text }><a target='_blank' href={ item.url }>{ item.text }</a></li>
        )) }
      </ul>
    </aside>
  </section>
)

export default withI18n(Studio)
