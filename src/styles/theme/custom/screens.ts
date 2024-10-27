import breakpoints from './breakpoints'

export default {
  ...breakpoints,

  hxs: { raw: `(min-height: ${breakpoints.hxs})` },
  hsm: { raw: `(min-height: ${breakpoints.hsm})` },
  hmd: { raw: `(min-height: ${breakpoints.hmd})` },
  hlg: { raw: `(min-height: ${breakpoints.hlg})` },

  max_hsm: { raw: `(max-height: ${breakpoints.hsm})` },

  px: '1px',
  s1: '4px',
  s2: '8px',
  s3: '12px',
  s4: '16px',
  s5: '20px',
  s6: '24px',
  s8: '32px',
  s10: '40px',
  s12: '48px',
  s14: '56px',
  s15: '60px',
  s16: '64px',
  s18: '72px',
  s20: '80px',
  s24: '96px',
  s32: '128px',
  s40: '160px',
  s48: '192px',
  s56: '224px',
  s52: '208px',
  s64: '256px',
  s100: '400px'
}
