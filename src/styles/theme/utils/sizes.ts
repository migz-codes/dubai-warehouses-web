import breakpoints from '../custom/breakpoints'
import { generateClamp, pxToNumber, remToNumber } from './index'

const generateClamps = (screen: any, keysFromTo: any) => {
  const minWidthPxName = screen[0]
  const maxWidthPxName = screen[1]

  const minWidthPx =
    typeof screen[0] === 'number'
      ? screen[0]
      : pxToNumber(breakpoints[screen[0]])
  const maxWidthPx =
    typeof screen[1] === 'number'
      ? screen[1]
      : pxToNumber(breakpoints[screen[1]])

  const minSizeRem = remToNumber(keysFromTo[0])
  const maxSizeRem = remToNumber(keysFromTo[1])

  const size = `${minSizeRem}_${maxSizeRem}`
  const screens = `${minWidthPxName}_${maxWidthPxName}`
  const name = `${size}_${screens}`

  const generatedValues: any = {}

  const generatedSize = generateClamp(
    minWidthPx,
    maxWidthPx,
    minSizeRem,
    maxSizeRem
  )

  generatedValues[name] = generatedSize

  return generatedValues
}

const generateResponsiveSizes = (defaults: any, responsive: any) => {
  const responsiveSizes = {}

  responsive.forEach(({ screen, sizes }: any) =>
    sizes.forEach((size: any) => {
      const object = generateClamps(screen, size)

      Object.assign(responsiveSizes, object)
    })
  )

  return { ...defaults, ...responsiveSizes }
}

export { generateResponsiveSizes }
