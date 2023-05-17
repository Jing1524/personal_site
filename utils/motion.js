export const textVariant = (delay) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1.25,
        delay: delay,
      },
    },
  }
}

export const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: 'easeOut',
      },
    },
  }
}

export const zoomIn = (delay, duration) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'tween',
        delay: delay,
        duration: duration,
        ease: 'easeOut',
      },
    },
  }
}

export const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
      y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: 'easeOut',
      },
    },
  }
}

export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  }
}

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
  xLetterPath.style.strokeWidth = strokeWidth
  xLetterSVG.style.fill = svgFill || colorPallets[paletteIndex][xLetterIndex].fill
  xLetterSVG.style.opacity = opacity
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
