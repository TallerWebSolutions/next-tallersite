import React from 'react'
import {  compose  } from 'recompose'

import {  withI18n  } from '../i18n/i18n.js'

const Newsletter = ({ i18n }) => (
  <section id="section-newsletter">
    <main>
      <article id="news-main">
        <p>{ i18n('section.newsletter.description') }</p>
        <form id="form-newsletter" action="#rd-subscribe" method="post" target="_blank">
          <input type="email" value="" name="email"  placeholder={ i18n('section.newsletter.placeholder') }/>
          <button name="subscribe" id="mc-embedded-subscribe" >{ i18n('section.newsletter.subscribe') }</button>

          <input type="hidden" id="identificador" name="identificador" value="Inscrição na newsletter do site" />
          <input type="hidden" id="token_rdstation" name="token_rdstation" value="6e0b0b2ec757b35ac11962ed0f72ce1e" />
        </form>
        <div className="form-response">
          <div className="success"><strong>{ i18n('section.newsletter.form.success.head') }</strong> { i18n('section.newsletter.form.success.compliment') }</div>
          <div className="error"><strong>{ i18n('section.newsletter.form.error.head') }</strong> { i18n('section.newsletter.form.error.compliment') }</div>
        </div>
      </article>
    </main>
  </section>
)

export default compose(withI18n)(Newsletter)
