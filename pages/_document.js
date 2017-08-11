import Document, { Head, Main, NextScript } from 'next/document'
import styled, { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  render () {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()
    return (
      <html>
        <Head>
          <title>My page</title>
          {styleTags}
        </Head>
        <Body>
          <div>
            {main}
          </div>
          <NextScript />
        </Body>
      </html>
    )
  }
}

const Body = styled.body`
  margin: 0;
`
