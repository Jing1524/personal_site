import React, { useEffect, useRef, useState } from 'react'
import Matter from 'matter-js'

import useIsInViewport from '@/hooks/useIsInViewport'
import { useModeToggle } from '@/context/ModeProvider'
import useMediaQuery from '@/hooks/useMediaQuery'

export default function Matterjs() {
  const tabletScreen = useMediaQuery('(min-width:1024px)')
  const tabletHeightScreen = useMediaQuery('(max-height:937px)')

  const { darkMode } = useModeToggle()
  const boxRef = useRef<HTMLElement>(null)
  const canvasRef = useRef<HTMLElement>(null)

  const [constraints, setContraints] = useState<any>()
  const [scene, setScene] = useState<any>()

  const isInViewport = useIsInViewport(boxRef)

  const handleResize = () => {
    setContraints(boxRef?.current?.getBoundingClientRect())
  }
  const pills: Matter.Body[] = []
  useEffect(() => {
    let Engine = Matter.Engine
    let Render = Matter.Render
    let World = Matter.World
    let Bodies = Matter.Bodies

    let engine = Engine.create({ gravity: { x: 0, y: 0.4 } }) // set falling speed

    let render = Render.create({
      // @ts-ignore
      element: boxRef.current,
      engine: engine,
      // @ts-ignore
      canvas: canvasRef.current,

      options: {
        background: `${darkMode ? 'bg-[#FFE193]' : 'bg-[#FEF8DF]'}`,
        wireframes: false,
      },
    })

    const floor = Bodies.rectangle(0, 0, 0, 15, {
      isStatic: true,
      render: {
        fillStyle: 'blue',
      },
    })

    // Add walls to both sides of the canvas

    const leftWall = Bodies.rectangle(-1, window.innerHeight / 2, 1, window.innerHeight, {
      isStatic: true,
    })
    const rightWall = Bodies.rectangle(constraints?.width, constraints?.height / 2, 1, constraints?.height, {
      isStatic: true,
    })

    const renderTextOnPill = (text: string, bgColor: string, radius: number) => {
      const canvas = document.createElement('canvas')
      const context = canvas.getContext('2d')
      canvas.width = 100
      canvas.height = 52
      if (context) {
        context.fillStyle = bgColor
        context.fillStyle = bgColor
        context.beginPath()
        context.moveTo(radius, 0)
        context.lineTo(canvas.width - radius, 0)
        context.quadraticCurveTo(canvas.width, 0, canvas.width, radius)
        context.lineTo(canvas.width, canvas.height - radius)
        context.quadraticCurveTo(canvas.width, canvas.height, canvas.width - radius, canvas.height)
        context.lineTo(radius, canvas.height)
        context.quadraticCurveTo(0, canvas.height, 0, canvas.height - radius)
        context.lineTo(0, radius)
        context.quadraticCurveTo(0, 0, radius, 0)
        context.closePath()
        context.fill()

        context.font = '16px Arial'

        context.textAlign = 'center'
        context.textBaseline = 'middle'
        context.fillStyle = 'black'
        context.fillText(text, canvas.width / 2, canvas.height / 2)
      }

      return canvas.toDataURL()
    }
    const colors = ['#EAE4E9', '#FFF1E6', '#FDE2E4', '#FAD2E1', '#E2ECE9', '#BEE1E6', '#F0EFEB', '#DFE7FD', '#CDDAFD']
    const tectStack = [
      'React.js',
      'Next.js',
      'JavaScript',
      'TypeScript',
      'Matter.js',
      'Node.js',
      'MongoDB',
      'Express.js',
      'Tailwind',
      'MUI',
      'Python',
      'Git',
    ]
    for (let i = 0; i < 12; i++) {
      const x = Math.random() * constraints?.width
      const y = Math.random() * -constraints?.height
      const pillWidth = tabletScreen ? 100 : 80
      const pillHeight = tabletScreen ? 52 : 30

      const chamfer = { radius: 15 }
      const color = colors[i % colors.length]
      const text = tectStack[i]
      const pill = Bodies.rectangle(x, y, pillWidth, pillHeight, {
        chamfer,
        restitution: 0.6,
        friction: 0.005,
        render: {
          fillStyle: color,
          sprite: {
            texture: renderTextOnPill(text, color, 15),
            xScale: 1,
            yScale: 1,
          },
        },
      })

      //@ts-ignore
      pills.push(pill)
    }

    World.add(engine.world, [floor, leftWall, rightWall])
    World.add(engine.world, pills)

    // Add mouse interaction to the canvas
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      // @ts-ignore
      mouse: Matter.Mouse.create(canvasRef.current),
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    })
    World.add(engine.world, mouseConstraint)

    // Listen for mouse clicks on the pill bodies
    Matter.Events.on(engine, 'mousedown', (event) => {
      const mousePosition = event.mouse.position
      // @ts-ignore
      const clickedBody = Matter.Query.point(pills, mousePosition)[0]
      if (clickedBody) {
        // Apply a random force to the clicked body
        const force = {
          x: (Math.random() - 0.5) * 0.2,
          y: (Math.random() - 0.5) * 0.2,
        }
        Matter.Body.applyForce(clickedBody, mousePosition, force)
      }
    })

    // Prevent the canvas from capturing mousewheel events and blocking scrolling
    // @ts-ignore
    mouseConstraint.mouse.element.removeEventListener('mousewheel', mouseConstraint.mouse.mousewheel)
    // @ts-ignore
    mouseConstraint.mouse.element.removeEventListener('DOMMouseScroll', mouseConstraint.mouse.mousewheel)

    if (isInViewport) {
      Matter.Runner.run(engine)
    }

    Render.run(render)
    // @ts-ignore
    setContraints(boxRef.current.getBoundingClientRect())
    // @ts-ignore
    setScene(render)

    window.addEventListener('resize', handleResize)
  }, [constraints?.height, constraints?.width, darkMode, isInViewport, tabletScreen])

  useEffect(() => {
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (constraints) {
      let { width, height } = constraints

      // Dynamically update canvas and bounds
      if (scene) {
        let Bodies = Matter.Bodies
        let World = Matter.World
        scene.bounds.max.x = width
        scene.bounds.max.y = height
        scene.options.width = width
        scene.options.height = height
        scene.canvas.width = width
        scene.canvas.height = height
        const floor = scene.engine.world.bodies[0]

        Matter.Body.setPosition(floor, {
          x: width / 2,
          y: height + 15 / 2,
        })

        Matter.Body.setVertices(floor, [
          { x: 0, y: height },
          { x: width, y: height },
          { x: width, y: height + 15 },
          { x: 0, y: height + 15 },
        ])
      }
    }
  }, [constraints, scene])

  return (
    <>
      {/* @ts-ignore */}
      <div ref={boxRef} className="flex items-center justify-center w-full h-full">
        {/* @ts-ignore */}
        <canvas ref={canvasRef} className="flex justify-center m-auto" />
      </div>
    </>
  )
}
