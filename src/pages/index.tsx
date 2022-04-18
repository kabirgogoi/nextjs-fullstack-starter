import { Box, Heading } from '@chakra-ui/react'
import { type NextPage } from 'next'
import { NextSeo, type NextSeoProps } from 'next-seo'

const HomePage: NextPage = () => {
  const SEO: NextSeoProps = {
    title: 'Home Page',
    description: 'Just a simple home page',
  }

  return (
    <>
      <NextSeo {...SEO} />

      <Box>
        <Heading>Hello World</Heading>
      </Box>
    </>
  )
}

export default HomePage
