import { capitalize, generateClamp, remToNumber } from './index'

const generateClamps = (screen: any, keysFromTo: any, fontSizes: any) => {
  const sizes = {
    screen: { min: screen[0], max: screen[1] },
    font: {
      min: remToNumber(fontSizes[keysFromTo[0]][0]),
      max: remToNumber(fontSizes[keysFromTo[1]][0])
    },
    line: {
      min: remToNumber(fontSizes[keysFromTo[0]][1]),
      max: remToNumber(fontSizes[keysFromTo[1]][1])
    }
  }

  const font = `${keysFromTo[0]}To${capitalize(keysFromTo[1])}`
  const screens = `${sizes.screen.min}x${sizes.screen.max}`
  const name = `${font}_${screens}`

  const generatedValues: any = {}

  const fontSize = generateClamp(
    sizes.screen.min,
    sizes.screen.max,
    sizes.font.min,
    sizes.font.max
  )

  const lineHeight = generateClamp(
    sizes.screen.min,
    sizes.screen.max,
    sizes.line.min,
    sizes.line.max
  )

  generatedValues[name] = [fontSize, lineHeight]

  return generatedValues
}

const generateFontSizes = (defaults: any, responsive: any) => {
  const responsiveFontSizes = {}

  responsive.forEach(({ screen, sizes }: any) =>
    sizes.forEach((size: any) => {
      const object = generateClamps(screen, size, defaults)

      Object.assign(responsiveFontSizes, object)
    })
  )

  return { ...defaults, ...responsiveFontSizes }
}

export { generateFontSizes }
