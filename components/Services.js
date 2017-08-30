import React from 'react'
import { compose } from 'recompose'

import { withI18n } from '../i18n/i18n.js'

const Services = ({ i18n }) => {
  return (
    <section id="section-services">
      <aside className="services-training">
        <h3>{ i18n('section.services.training.title') }</h3>
        <p>{ i18n('section.services.training.description') }</p>
        <a className="call-to-action" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSf8UWmFYOTHI60na5oI9Dp-1cs3n5UCU3Dab5n9I5WZ0jLuHw/viewform?c=0&w=1">{ i18n('section.services.training.read-more') }</a>
      </aside>

      <main className="services-consulting">
        <h3>{ i18n('section.services.consulting.title') }</h3>
        <p>{ i18n('section.services.consulting.description') }</p>
        <a className="call-to-action" href="consultoria.html">{ i18n('section.services.consulting.read-more') }</a>
      </main>

      <aside className="services-content">
        <h3>{ i18n('section.services.content.title') }</h3>
        <p>{ i18n('section.services.content.description') }</p>
        <a className="call-to-action" target="_blank" href="http://blog.taller.net.br">{ i18n('section.services.content.read-more') }</a>
      </aside>
    </section>
  )
}

export default compose(withI18n)(Services)
