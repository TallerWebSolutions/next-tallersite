import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  render () {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()

    return (
      <html>
        <Head>
          <meta charSet='utf-8' />
          <meta httpEquiv='x-ua-compatible' content='ie=edge' />

          <title>Taller Negócios </title>
          <meta name='description' content='{{site.description}}' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='icon' type='image/png' href='/images/favicon.png' />

          <link href='https://fonts.googleapis.com/css?family=Alegreya:400italic,700italic,400,700' rel='stylesheet' type='text/css' />

          {
            // <script>var ElTracker = [];(function(){ var el = document.createElement('script');el.defer = true;el.type = 'text/javascript';el.async = true;el.src = "http://eltracker.io/";el.src += window === window.parent ? "project/cdn/3d0af795-6003-4a08-a668-7a25b161a411" : "project/cdn/editor/3d0af795-6003-4a08-a668-7a25b161a411";var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(el, s);})();</script>
            // <script type="text/javascript" async="true" src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/38a83442-f3a8-482c-b659-634e039fce40-loader.js"  />
            // <script src="//load.sumome.com/" data-sumo-site-id="56c09898a94f9af92b38521b1d99ec4ab207b8aa5f29630441ab84cf2f80a8f6" async="async" />
          }

          <link href='/static/old.css' rel='stylesheet' />

          { styleTags }
        </Head>
        <body>
          <div>
            {main}
          </div>

          <NextScript />

          <script type='text/javascript' src='https://d335luupugsy2.cloudfront.net/js/integration/stable/rd-js-integration.min.js' />
        </body>
      </html>
    )
  }
}
