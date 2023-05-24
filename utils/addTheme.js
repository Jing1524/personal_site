export const setColors = (
  pills,
  boxes,
  bodyBackGround,
  togglePill,
  pillColors,
  pillBorderColors,
  pillBorderRadius,
  boxColors,
  bodyBackgroundColor,
  toggleBorderColor
) => {
  pills.current = Array.from(pills)
  boxes.current = Array.from(boxes)
  console.log(pills.current)
  pills.current.forEach((pill, i) => {
    return (
      (pill.style.backgroundColor = Array.isArray(pillColors) ? pillColors[i] : pillColors),
      (pill.style.borderColor = Array.isArray(pillBorderColors) ? pillBorderColors[i] : pillBorderColors),
      (pill.style.borderRadius = pillBorderRadius)
    )
  })

  boxes.current.forEach((box, i) => {
    box.style.backgroundColor = boxColors ? boxColors[i] : ''
  })
  togglePill.style.borderColor = toggleBorderColor
  togglePill.style.borderRadius = pillBorderRadius
  bodyBackGround.style.backgroundColor = bodyBackgroundColor
}
