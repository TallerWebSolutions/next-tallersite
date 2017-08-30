import React from 'react'
import { compose } from 'recompose'

import {  withI18n  } from '../i18n/i18n.js'
import { page } from '../lib/routing.js'

import Header from '../components/Header'
import Services from '../components/Services'
import AboutUs from '../components/AboutUs'
import Cases from '../components/Cases'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'
import Studio from '../components/Studio'

const Home = ({ i18n }) => (
  <div className='body'>
    <Header />

    {
      <div>
        <section id="section-clients">
          <main>
            <h4>{ i18n('section.cases.clientLogos.header') }</h4>
            <ul>
              <li><img src="static/images/parceiros/natura.svg" title="Natura" alt="Natura"/></li>
              <li><img src="static/images/parceiros/ogilvy.svg" title="Ogilvy" alt="Ogilvy"/></li>
              <li><img src="static/images/parceiros/claro.svg" title="Claro" alt="Claro"/></li>
              <li><img src="static/images/parceiros/fiesc.svg" title="FIESC" alt="FIESC"/></li>
              <li><img src="static/images/parceiros/usp.svg" title="USP" alt="USP"/></li>
              <li><img src="static/images/parceiros/abril.svg" title="Editora Abril" alt="Editora Abril"/></li>
            </ul>
          </main>
        </section>

        <section id="section-who">
          <header>
            <h2>{ i18n('section.who.title') } </h2>
          </header>

          <article>
            <aside>
              <h3>{ i18n('section.who.aside.title') }:</h3>
              <ul>
                {(i18n('section.who.aside.list')).map(item => (
                  <li>{ item }</li>
                ))}
              </ul>
              { i18n('section.who.aside.call-to-action') }
            </aside>
            <main>
              <img src="static/images/galera.png" alt="Taller Team"/>
              <p>{ i18n('section.who.main.description') }</p>
              <a className="call-to-action" href="#contact">{ i18n('section.who.main.call-to-action') }</a>
            </main>
          </article>
        </section>
      </div>
          // <section id="section-members">
          //   <ul>
          //     <li
          //       v-for="member in members"
          //       v-bind:id="'member-' + member.name"
          //       v-on:click="swipe(member)"
          //     >
          //       <div>
          //         <img v-bind:src="member.image" />
          //       </div>
          //     </li>
          //
          //     <li v-if="!started"><div><img src="/images/members/1.jpg" /></div></li>
          //     <li v-if="!started"><div><img src="/images/members/3.jpg" /></div></li>
          //     <li v-if="!started"><div><img src="/images/members/4.jpg" /></div></li>
          //     <li v-if="!started"><div><img src="/images/members/5.jpg" /></div></li>
          //     <li v-if="!started"><div><img src="/images/members/6.jpg" /></div></li>
          //     <li v-if="!started"><div><img src="/images/members/7.jpg" /></div></li>
          //     <li v-if="!started"><div><img src="/images/members/8.jpg" /></div></li>
          //     <li v-if="!started"><div><img src="/images/members/9.jpg" /></div></li>
          //     <li v-if="!started"><div><img src="/images/members/10.jpg" /></div></li>
          //     <li v-if="!started"><div><img src="/images/members/12.jpg" /></div></li>
          //     <li v-if="!started" id="member-ban"><div><img src="/images/members/13.jpg" /></div></li>
          //     <li v-if="!started"><div><img src="/images/members/14.jpg" /></div></li>
          //     <li v-if="!started"><div><img src="/images/members/16.jpg" /></div></li>
          //     <li v-if="!started"><div><img src="/images/members/17.jpg" /></div></li>
          //   </ul>
          // </section>
          //
          // <section id="section-clients">
          //   {{#with section.cases}}
          //   <main>
          //     <h4>{{{clientLogos.header}}}</h4>
          //     <ul>
          //       <li><img src="/images/parceiros/natura.svg" title="Natura" alt="Natura"></li>
          //       <li><img src="/images/parceiros/ogilvy.svg" title="Ogilvy" alt="Ogilvy"></li>
          //       <li><img src="/images/parceiros/claro.svg" title="Claro" alt="Claro"></li>
          //       <li><img src="/images/parceiros/fiesc.svg" title="FIESC" alt="FIESC"></li>
          //       <li><img src="/images/parceiros/usp.svg" title="USP" alt="USP"></li>
          //       <li><img src="/images/parceiros/abril.svg" title="Editora Abril" alt="Editora Abril"></li>
          //     </ul>
          //   </main>
          //   {{/with}}
          // </section>
          //
          // <section id="section-studio">
          //   {{#with section.studio}}
          //   <header>
          //     <h2>{{{title}}}</h2>
          //   </header>
          //
          //   <main>
          //     <h3>{{{main.title}}}</h3>
          //     <p>{{{main.description}}}</p>
          //     <article className="what">
          //       <ul className="services-list-first">
          //         {{#each main.list-first}}
          //           <li>{{{this}}}</li>
          //         {{/each}}
          //       </ul>
          //       <ul className="services-list-second">
          //         {{#each main.list-second}}
          //           <li>{{{this}}}</li>
          //         {{/each}}
          //       </ul>
          //     </article>
          //     <a className="call-to-action" href="#contact">{{{main.call-to-action}}}</a>
          //   </main>
          //
          //   <aside className="services-stack">
          //     <h3>{{{aside.title}}}</h3>
          //     <p>{{{aside.description}}}</p>
          //     <ul>
          //       {{#each aside.list}}
          //       <li><a target="_blank" href="{{{this.url}}}">{{{this.text}}}</a></li>
          //       {{/each}}
          //     </ul>
          //   </aside>
          //   {{/with}}
          // </section>
          <Cases />
          //
          //
          //
          //
          // <section id="section-newsletter">
          //   {{#with section.newsletter}}
          //   <main>
          //     <article id="news-main">
          //       <p>{{{description}}}</p>
          //       <form id="form-newsletter" action="#rd-subscribe" method="post" target="_blank">
          //         <input type="email" value="" name="email"  placeholder="{{{placeholder}}}">
          //         <button name="subscribe" id="mc-embedded-subscribe" >{{{subscribe}}}</button>
          //
          //         <input type="hidden" id="identificador" name="identificador" value="Inscrição na newsletter do site" >
          //         <input type="hidden" id="token_rdstation" name="token_rdstation" value="6e0b0b2ec757b35ac11962ed0f72ce1e" >
          //       </form>
          //       <div className="form-response">
          //         <div className="success"><strong>{{{form.success.head}}}</strong> {{{form.success.compliment}}}</div>
          //         <div className="error"><strong>{{{form.error.head}}}</strong> {{{form.error.compliment}}}</div>
          //       </div>
          //     </article>
          //   </main>
          //   {{/with}}
          // </section>


          // <section id="contact" data-remodal-id="contact" data-remodal-options="closeOnOutsideClick: false" className="remodal">
          //   {{#with contact}}
          //   <header>
          //     <h2>{{{title}}}</h2>
          //   </header>
          //
          //   <main>
          //     {{#with form}}
          //     <form id="form-contact" action="#rd-contact" method="POST" target="_blank">
          //       <input type="hidden" id="identificador" name="identificador" value="Contato via formulário do site" >
          //       <input type="hidden" id="token_rdstation" name="token_rdstation" value="6e0b0b2ec757b35ac11962ed0f72ce1e" >
          //
          //       <label>
          //         <input type="text" value="" name="nome">
          //         <span>{{name}}</span>
          //       </label>
          //
          //       <label>
          //         <input type="email" value="" name="email" required>
          //         <span>{{email}}</span>
          //       </label>
          //
          //       <label>
          //         <select name="assunto">
          //           <option disabled selected>{{subject.empty}}</option>
          //           {{#each subject.options}}
          //             <option value="{{@key}}">{{this}}</option>
          //           {{/each}}
          //         </select>
          //         <span>{{subject.label}}</span>
          //       </label>
          //
          //       <label>
          //         <textarea name="mensagem" required></textarea>
          //         <span>{{message}}</span>
          //       </label>
          //
          //       <button name="submit" value="Enviar" onclick="ga('send', 'event', 'formulario', 'cadastro-em-newsletter', 'Newsletter Site Taller')">{{send}}</button>
          //     </form>
          //     <div id="contact-form-success">
          //       <h2>Mensagem enviada!<small>Entraremos em contato em breve.</small></h2>
          //       <p>Enquanto isso, visite nosso blog e nossas redes sociais.</p>
          //
          //       <ul>
          //         <li><a href="http://blog.taller.net.br/">Blog</a></li>
          //         <li><a href="http://twitter.com/tallerws" target="_blank">Twitter</a></li>
          //         <li><a href="http://facebook.com/tallerwebsolutions" target="_blank">Facebook</a></li>
          //       </ul>
          //
          //       <p>Grande abraço,<br><i>Tallerbot</i></p>
          //     </div>
          //     {{/with}}
          //   </main>
          //
          //   <button data-remodal-action="close" className="remodal-close"></button>
          //   {{/with}}
          // </section>
          //
          //
    }
    <Studio />
    <Services />
    <AboutUs />
    <Newsletter />
    <Footer />
  </div>
)

export default compose(
  page,
  withI18n
)(Home)
