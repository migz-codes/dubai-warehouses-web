import { generateFontSizes } from '../utils/fontSizes'
import sizes from './sizes'

const defaults = {
  xs3: ['0.6rem', '0.8rem'],
  xs2: ['0.8rem', '1.2rem'],
  xs: ['1.0rem', '1.4rem'], //1.0
  sm: ['1.2rem', '1.6rem'], //1.2
  md: ['1.3rem', '1.8rem'], //1.4
  lg: ['1.4rem', '1.8rem'], //1.6
  xl: ['1.5rem', '1.9rem'], //1.8
  xl2: ['1.6rem', '2.2rem'],
  xl3: ['1.8rem', '2.4rem'],

  h6: ['2rem', '2.6rem'], //1.6
  h5: ['2.4rem', '3.2rem'], //2
  h4: ['2.8rem', '3.6rem'], //2.4
  h3: ['3.0rem', '3.8rem'], //3
  h2: ['3.4rem', '4.2rem'], //3.8
  h1: ['3.8rem', '4.6rem'], //4.8

  b: ['4.0rem', '4.8rem'],
  b1: ['4.4rem', '5.4rem']
}

const responsive = [
  {
    screen: [320, 768],
    sizes: [
      ['xs', 'xl2'],
      ['sm', 'xl2'],
      ['lg', 'h5'],
      ['lg', 'xl2'],
      ['xl3', 'h4'],
      ['xl3', 'h2'],
      ['xl2', 'h1']
    ]
  },
  {
    screen: [920, 1280],
    sizes: [
      ['lg', 'h4'],
      ['xl', 'h3'],
      ['xl3', 'h3'],
      ['xl2', 'h5']
    ]
  }
]

export default {
  ...sizes,
  ...generateFontSizes(defaults, responsive)
}
