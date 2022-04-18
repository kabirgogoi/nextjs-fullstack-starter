import { ColorModeScript } from '@chakra-ui/react'
import BaseDocument, {
  Html,
  Head,
  Main,
  NextScript,
  // type DocumentContext,
  // type DocumentInitialProps,
} from 'next/document'
import theme from '@/theme/theme'

class Document extends BaseDocument {
  // static async getInitialProps(
  //   ctx: DocumentContext
  // ): Promise<DocumentInitialProps> {
  //   const initialProps = await Document.getInitialProps(ctx)
  //   return { ...initialProps }
  // }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
