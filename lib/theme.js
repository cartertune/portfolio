import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#ffe3e5', '#090909')(props)
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#3d7aed', '#ff63c3')(props),
      textUnderlineOffset: 3
    })
  }
}

const fonts = {
  heading: 'Cormorant Garamond',
  body: 'Inter'
}

const colors = {
  pink: {
    50: '#fff8f9',
    100: '#ffeaec',
    200: '#ffe3e5',
    300: '#ffd4d9',
    400: '#ffc6cc',
    500: '#ffb8bf',
    600: '#cc9399',
    700: '#996e73',
    800: '#664a4c',
    900: '#332526'
  }
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme
