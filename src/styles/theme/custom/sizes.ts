import { generateResponsiveSizes } from '../utils/sizes'
import breakpoints from './breakpoints'

const defaults = {
  ...breakpoints,

  px: '1px',
  0: 0,
  1: '4px',
  1.5: '6px',
  2: '8px',
  3: '12px',
  3.5: '14px',
  4: '16px',
  5: '20px',
  6: '24px',
  7: '28px',
  8: '32px',
  10: '40px',
  11: '44px',
  12: '48px',
  13: '52px',
  14: '56px',
  14.5: '58px',
  15: '60px',
  16: '64px',
  18: '72px',
  20: '80px',
  24: '96px',
  28: '112px',
  32: '128px',
  35: '140px',
  40: '160px',
  48: '192px',
  56: '224px',
  52: '208px',
  64: '256px',
  100: '400px'

  //Custom
}

const responsive = [
  {
    screen: ['nxs', 'nxs3'],
    sizes: [['1.9rem', '2.2rem']]
  },
  {
    screen: ['nxs', 'nsm'],
    sizes: [['0rem', '12rem']]
  },
  {
    screen: ['nxs', 'nsm3'],
    sizes: [['1.4rem', '1.5rem']]
  },
  {
    screen: ['nxs', 'nmd'],
    sizes: [
      ['45rem', '37rem'],
      ['32rem', '51.2rem'],
      ['14.7rem', '23rem'],
      ['0.6rem', '1rem'],
      ['0.7rem', '2.3rem'],
      ['0.7rem', '2rem'],
      ['0.7rem', '1.5rem'],
      ['1rem', '2.3rem'],
      ['0.6rem', '1.6rem'],
      ['2.9rem', '9.5rem'],
      ['4.4rem', '14.2rem'],
      ['1rem', '3.3rem'],
      ['0.9rem', '2.5rem'],
      ['3.6rem', '11.9rem'],
      ['3.1rem', '9.8rem'],
      ['1.2rem', '4.1rem'],
      ['1.2rem', '3.6rem'],
      ['3.5rem', '11.7rem'],
      ['0rem', '0.7rem'],
      ['0rem', '1rem'],
      ['0.034rem', '0.048rem'],
      ['0.036rem', '0.076rem'],
      ['0.4rem', '0.6rem'],
      ['0.5rem', '0.8rem'],
      ['0.8rem', '1.3rem'],
      ['0.8rem', '1.6rem'],
      ['0.8rem', '2.6rem'],
      ['0.8rem', '2.9rem'],
      ['0.9rem', '1.5rem'],
      ['1rem', '1.4rem'],
      ['1rem', '1.6rem'],
      ['1rem', '2.1rem'],
      ['1rem', '2.9rem'],
      ['1rem', '3.5rem'],
      ['1.1rem', '3.8rem'],
      ['1.2rem', '1.4rem'],
      ['1.2rem', '2.3rem'],
      ['1.2rem', '3.1rem'],
      ['1.3rem', '2.7rem'],
      ['1.4rem', '1.2rem'],
      ['1.4rem', '1.6rem'],
      ['1.4rem', '1.7rem'],
      ['1.4rem', '2.2rem'],
      ['1.4rem', '2.4rem'],
      ['1.4rem', '3.7rem'],
      ['1.5rem', '1.7rem'],
      ['1.5rem', '2.4rem'],
      ['1.5rem', '8.5rem'],
      ['1.6rem', '3rem'],
      ['1.6rem', '3.3rem'],
      ['1.6rem', '4.9rem'],
      ['1.7rem', '2.4rem'],
      ['1.8rem', '2rem'],
      ['1.8rem', '2.1rem'],
      ['1.8rem', '3rem'],
      ['1.8rem', '3.8rem'],
      ['1.8rem', '6.9rem'],
      ['2rem', '5rem'],
      ['2.1rem', '2.6rem'],
      ['2.1rem', '3.3rem'],
      ['2.2rem', '3rem'],
      ['2.3rem', '2.6rem'],
      ['2.3rem', '5.5rem'],
      ['2.3rem', '8.1rem'],
      ['2.4rem', '2rem'],
      ['2.4rem', '3rem'],
      ['2.4rem', '4rem'],
      ['2.4rem', '4.5rem'],
      ['2.4rem', '5rem'],
      ['2.4rem', '9.4rem'],
      ['2.5rem', '2.9rem'],
      ['2.6rem', '2.9rem'],
      ['2.6rem', '3.6rem'],
      ['2.7rem', '5.1rem'],
      ['2.8rem', '2rem'],
      ['2.8rem', '3.2rem'],
      ['3rem', '3.3rem'],
      ['3.2rem', '2.9rem'],
      ['3.3rem', '9.4rem'],
      ['3.9rem', '3rem'],
      ['4.5rem', '14.6rem'],
      ['5.4rem', '18rem'],
      ['5.5rem', '12.5rem'],
      ['5.6rem', '9.4rem'],
      ['5.6rem', '11.6rem'],
      ['5.9rem', '22.7rem'],
      ['6.1rem', '21rem'],
      ['6.7rem', '14.5rem'],
      ['6.8rem', '13.6rem'],
      ['7rem', '12.8rem'],
      ['7.5rem', '11.3rem'],
      ['7.8rem', '14.5rem'],
      ['9rem', '28rem'],
      ['10.1rem', '32.5rem'],
      ['11.0rem', '36.5rem']
    ]
  },
  {
    screen: ['nmd', 'nlg2'],
    sizes: [
      ['51.2rem', '62rem'],
      ['0rem', '5rem'],
      ['1.9rem', '2.2rem']
    ]
  },
  {
    screen: ['nmd', 'nxl'],
    sizes: [
      ['0.076rem', '0.06rem'],
      ['0.5rem', '0.8rem'],
      ['3.8rem', '3rem'],
      ['5rem', '3rem'],
      ['9.4rem', '5.3rem'],
      ['11.6rem', '7.6rem'],
      ['12.1rem', '16.5rem'],
      ['25.6rem', '29rem']
    ]
  },
  {
    screen: ['nlg', 'nxl'],
    sizes: [
      ['1.5rem', '1.6rem'],
      ['2rem', '2.2rem'],
      ['4rem', '5rem']
    ]
  },
  {
    screen: ['nlg2', 'nxl'],
    sizes: [
      ['4.1rem', '6rem'],
      ['36.8rem', '50.7rem'],
      ['4.4rem', '8.8rem'],
      ['2.2rem', '3rem'],
      ['2.4rem', '3rem'],
      ['1.6rem', '1.8rem'],
      ['1.8rem', '2.8rem'],
      ['1.2rem', '1.6rem'],
      ['1.5rem', '1.7rem'],
      ['1.7rem', '1.8rem']
    ]
  },
  {
    screen: ['nxl', 'nxl3'],
    sizes: [
      ['0.044rem', '0.048rem'],
      ['0.06rem', '0.076rem'],
      ['0.3rem', '0.1rem'],
      ['1.4rem', '1.6rem'],
      ['1.4rem', '2.1rem'],
      ['2.2rem', '3.6rem'],
      ['2.4rem', '3rem'],
      ['2.4rem', '3rem'],
      ['2.4rem', '4.5rem'],
      ['2.5rem', '3rem'],
      ['3rem', '3.8rem'],
      ['3rem', '5rem'],
      ['5.2rem', '3.2rem'],
      ['5.2rem', '8.1rem'],
      ['7.6rem', '9.2rem'],
      ['5.3rem', '9.2rem']
    ]
  },
  {
    screen: ['nxl', 'nxl4'],
    sizes: [
      ['0rem', '0.7rem'],
      ['2.4rem', '3.7rem'],
      ['5rem', '6.9rem'],
      ['26.7rem', '32.5rem'],
      ['30rem', '36.5rem']
    ]
  }
]

export default generateResponsiveSizes(defaults, responsive)
