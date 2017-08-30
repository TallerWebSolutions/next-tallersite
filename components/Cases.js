import React, { PropTypes } from 'react'
import { compose } from 'recompose'

import { withI18n } from '../i18n/i18n.js'

const Cases = ({ i18n }) => (
  <section id="section-cases">
    <header>
      <h2>{ i18n('section.cases.title') }</h2>
    </header>
    <main>
      { Object.keys(i18n('section.cases.list'))
        .map(item => <Case item={ i18n('section.cases.list')[item] } />) }
    </main>

    <aside>
      <p>{ i18n('section.cases.aside.attention') }</p>
      <a className="call-to-action" href="#contact">{ i18n('section.cases.aside.call-to-action') }</a>
    </aside>
  </section>
)

const Case = ({ item: {
  id, image, title, description, details, readMore
} }) => (
  <article id={ id } className='img-slide img-slide-left'>
    <aside>
      <img src={ image.url } alt={ image.alt } />
    </aside>
    <main>
      <h3>{ title }</h3>
      <p>{ description }</p>

      { details.map(detail => (
        <div>
          <h4>{ detail.title }</h4>
          { detail.description && <p>{ detail.description }</p> }
          { detail.list && <ul>
            { detail.list.map(({ url, text }) => (
              <li>
                <a href={ url } target='_blank'>{ text }</a>
              </li>
            )) }
          </ul> }
        </div>
      )) }

      <a href={ readMore.url } className='read-more' target='_blank'>
        { readMore.text }
      </a>
    </main>
  </article>
)

Cases.propTypes = {
  i18n: PropTypes.func
}

Case.propTypes = {
  item: PropTypes.object
}

export default compose(
  withI18n
)(Cases)
