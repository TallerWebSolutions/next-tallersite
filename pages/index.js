import React from 'react'
import { compose } from 'recompose'

import {  withI18n  } from '../i18n/i18n.js'
import { page } from '../lib/routing.js'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'


const Home = ({ i18n }) => (
  <div className='body'>
    <Header />

    {
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
          //
          // <section id="section-services">
          //   {{#with section.services}}
          //   <aside className="services-training">
          //     <h3>{{training.title}}</h3>
          //     <p>{{training.description}}</p>
          //     <a className="call-to-action" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSf8UWmFYOTHI60na5oI9Dp-1cs3n5UCU3Dab5n9I5WZ0jLuHw/viewform?c=0&w=1">{{training.read-more}}</a>
          //   </aside>
          //
          //   <main className="services-consulting">
          //     <h3>{{consulting.title}}</h3>
          //     <p>{{consulting.description}}</p>
          //     <a className="call-to-action" href="consultoria.html">{{consulting.read-more}}</a>
          //   </main>
          //
          //   <aside className="services-content">
          //     <h3>{{content.title}}</h3>
          //     <p>{{content.description}}</p>
          //     <a className="call-to-action" target="_blank" href="http://blog.taller.net.br">{{content.read-more}}</a>
          //   </aside>
          //   {{/with}}
          // </section>
          //
          // <section id="section-cases">
          //   {{#with section.cases}}
          //   <header>
          //     <h2>{{{title}}}</h2>
          //   </header>
          //
          //   <main>
          //     <article id="case-natura" className="img-slide img-slide-left">
          //       {{#with list.natura}}
          //       <aside>
          //         <img src="/images/mockup_natura.png">
          //       </aside>
          //       <main>
          //         <h3>{{{title}}}</h3>
          //         <p>{{{description}}}</p>
          //
          //         <h4>{{{details.[0].title}}}</h4>
          //         <p>{{{details.[0].description}}}</p>
          //
          //         <h4>{{{details.[1].title}}}</h4>
          //         <p>{{{details.[1].description}}}</p>
          //
          //         <h4>{{{details.[2].title}}}</h4>
          //         <ul>
          //           {{#each details.[2].list}}
          //             <li>
          //               <a href="{{this.url}}" target="_blank">{{{this.text}}}</a>
          //             </li>
          //           {{/each}}
          //         </ul>
          //         <a className="read-more" href="http://natura.com.br" target="_blank">{{read-more}}</a>
          //       </main>
          //       {{/with}}
          //     </article>
          //
          //     <article id="case-fiesc" className="img-slide img-slide-right">
          //       {{#with list.fiesc}}
          //       <aside>
          //         <img src="/images/mockup_fiesc.png">
          //       </aside>
          //       <main>
          //         <h3>{{{title}}}</h3>
          //         <p>{{{description}}}</p>
          //
          //         <h4>{{{details.[0].title}}}</h4>
          //         <p>{{{details.[0].description}}}</p>
          //
          //         <h4>{{{details.[1].title}}}</h4>
          //         <p>{{{details.[1].description}}}</p>
          //
          //         <h4>{{{details.[2].title}}}</h4>
          //         <ul>
          //           {{#each details.[2].list}}
          //             <li>
          //               <a href="{{this.url}}" target="_blank">{{{this.text}}}</a>
          //             </li>
          //           {{/each}}
          //         </ul>
          //         <a className="read-more" href="http://fiesc.com.br" target="_blank">{{read-more}}</a>
          //       </main>
          //       {{/with}}
          //     </article>
          //
          //     <article id="case-claro" className="img-slide img-slide-left">
          //       {{#with list.claro}}
          //       <aside>
          //         <img src="/images/mockup_claro.png">
          //       </aside>
          //       <main>
          //         <h3>{{{title}}}</h3>
          //         <p>{{{description}}}</p>
          //
          //         <h4>{{{details.[0].title}}}</h4>
          //         <p>{{{details.[0].description}}}</p>
          //
          //         <h4>{{{details.[1].title}}}</h4>
          //         <p>{{{details.[1].description}}}</p>
          //
          //         <h4>{{{details.[2].title}}}</h4>
          //         <ul>
          //           {{#each details.[2].list}}
          //             <li>
          //               <a href="{{this.url}}" target="_blank">{{{this.text}}}</a>
          //             </li>
          //           {{/each}}
          //         </ul>
          //         <a className="read-more" href="https://www.drupal.org/node/2330069" target="_blank">{{read-more}}</a>
          //       </main>
          //
          //       {{/with}}
          //     </article>
          //
          //   </main>
          //
          //   <aside>
          //     <p>{{{aside.attention}}}</p>
          //     <a className="call-to-action" href="#contact">{{{aside.call-to-action}}}</a>
          //   </aside>
          //
          //
          //   {{/with}}
          // </section>
          //
          //
          // <section id="section-who">
          //   {{#with section.who}}
          //   <header>
          //     <h2>{{title}}</h2>
          //   </header>
          //
          //   <article>
          //     <aside>
          //       <h3>{{aside.title}}:</h3>
          //       <ul>
          //         {{#each aside.list}}
          //         <li>{{{this}}}</li>
          //         {{/each}}
          //       </ul>
          //       {{{aside.call-to-action}}}
          //     </aside>
          //     <main>
          //       <img src="/images/galera.png" alt="Taller Team">
          //       <p>{{{main.description}}}</p>
          //       <a className="call-to-action" href="#contact">{{{main.call-to-action}}}</a>
          //     </main>
          //   </article>
          //   {{/with}}
          // </section>
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
          //
          //
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
    <Newsletter />
    <Footer />
  </div>
)

export default compose(
  page,
  withI18n
)(Home)
