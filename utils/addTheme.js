export const setColors = (
  pills,
  boxes,
  bodyBackGround,
  pillColors,
  pillBorderColors,
  pillBorderRadius,
  boxColors,
  bodyBackgroundColor
) => {
  pills.current = Array.from(pills)
  boxes.current = Array.from(boxes)
  console.log({ pillColors })
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

  bodyBackGround.style.backgroundColor = bodyBackgroundColor
}
