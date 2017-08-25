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
          <title>My page</title>
          <link href='/static/base.css' rel='stylesheet' />
          <link href='https://fonts.googleapis.com/css?family=Alegreya:400italic,700italic,400,700' rel='stylesheet' type='text/css' />
          { styleTags }
        </Head>
        <body>
          <div>
            {main}
          </div>
          <NextScript />
        </body>
      </html>
    )
  }
}
