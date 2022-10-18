import "@fontsource/inter"

const style =  {
  space: [0, 4, 8, 16, 32, 64, 96, 128, 256, 512],
  fonts: {
    body: 'Inter, system-ui, sans-serif',
    logo: 'Inter, system-ui, sans-serif',
    heading: 'Inter, system-ui, sans-serif',
  },
  fontSizes: [12, 14, 16, 20, 24, 28, 32, 42, 48, 56, 64, 96, 120],
  lineHeights: {
    body: 1.5,
    heading: 2,
  },
  colors: {
    text: '#ffffff',
    alternateText: '#838383',
    background: '#000000',
    altBackground: '#3a3a3a',
    accent: '#EA0000',
  },
  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
    },
    b: {
      color: 'accent',
      fontWeight: 900,
    },
    a: {
      color: 'text',
    }
  },
}

export default style
