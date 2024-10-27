const generateColorClass =
  (variable: any) =>
  ({ opacityValue }: any) =>
    opacityValue
      ? `rgba(var(--${variable}), ${opacityValue})`
      : `rgb(var(--${variable}))`

export const generateColors = (colorsObject: any) => {
  const convertedObject: any = {}

  for (const key in colorsObject) {
    if (colorsObject.hasOwnProperty(key)) {
      const prefix = `colors-${key}`
      convertedObject[key] = {}

      for (const shade in colorsObject[key])
        if (colorsObject[key].hasOwnProperty(shade))
          convertedObject[key][shade] = generateColorClass(`${prefix}-${shade}`)
    }
  }

  return convertedObject
}
