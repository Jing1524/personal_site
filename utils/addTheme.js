export const AddTheme = (
  bodyBackgroundColor,
  strokeWidth,
  svgFill,
  opacity,
  lineColor,
  borderRadius,
  boxBackgroundColor,
  pillBackgroundColor
) => {
  body.style.backgroundColor = bodyBackgroundColor

  xBox.style.backgroundColor = boxBackgroundColor || colorPallets[paletteIndex][xLetterIndex].fill
  iconPath.style.stroke = lineColor || colorPallets[paletteIndex][rotateIconIndex].altStroke

  iconPath.style.strokeWidth = strokeWidth
  allBoxes.forEach((box, i) => (box.style.backgroundColor = boxBackgroundColor || colorPallets[paletteIndex][i].fill))
  allPills.forEach((pill, i) => {
    pill.style.opacity = opacity
    pill.style.backgroundColor = pillBackgroundColor || colorPallets[paletteIndex][i].fill
    pill.style.borderWidth = strokeWidth
    pill.style.borderColor = lineColor || colorPallets[paletteIndex][i].altStroke
    pill.style.borderBlockStyle = 'solid'
    pill.stlye.borderRadius = borderRadius
  })
  allHiddenPills.forEach((hiddenPill, i) => {
    hiddenPill.style.opacity = opacity
    // pill.style.backgroundColor = pillBackgroundColor || colorPallets[paletteIndex][i].fill
    hiddenPill.style.borderWidth = strokeWidth
    pill.style.borderColor = lineColor || colorPallets[paletteIndex][socailFanIndex].altStroke
    // pill.style.borderBlockStyle = "solid"
    hiddenPill.stlye.borderRadius = borderRadius
  })
  allArrows.forEach((arrow) => {
    arrow.style.borderBlockStyle = 'solid'
    arrow.style.borderColor = lineColor
    arrow.style.borderWidth = '0' + strokeWidth + ' ' + strokeWidth + ' 0'
    arrow.style.opacity = opacity
  })
}
