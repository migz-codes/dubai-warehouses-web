const remToNumber = (text: any) => Number(text.split('r')[0])
const capitalize = (text: any) => text.charAt(0).toUpperCase() + text.slice(1)
const pxToNumber = (value: any) =>
  typeof value === 'string' ? Number(value.split('p')[0]) : value

const generateClamp = (
  minScreenSizePx: any,
  maxScreenSizePx: any,
  minSizeRemNumber: any,
  maxSizeRemNumber: any
) => {
  const pixelsPerRem = 10

  const isDecreasing = minSizeRemNumber > maxSizeRemNumber

  const minWidth = minScreenSizePx / pixelsPerRem
  const maxWidth = maxScreenSizePx / pixelsPerRem
  const minSize = minSizeRemNumber
  const maxSize = maxSizeRemNumber

  const slope = (maxSize - minSize) / (maxWidth - minWidth)
  const yAxisIntersection = -minWidth * slope + minSize

  const first = `${minSize}rem`
  const second = `${yAxisIntersection.toFixed(4)}rem`
  const third = `${(slope * 100).toFixed(4)}vw`
  const fourth = `${maxSize}rem`

  return `clamp(${isDecreasing ? fourth : first}, ${second} + ${third}, ${
    isDecreasing ? first : fourth
  })`
}

export { generateClamp, remToNumber, capitalize, pxToNumber }
