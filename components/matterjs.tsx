import React, { useEffect, useRef, useState } from 'react'
import Matter from 'matter-js'
import { Bodies, Composite, Body } from 'matter-js'

import useIsInViewport from '@/hooks/useIsInViewport'
import { useModeToggle } from '@/context/ModeProvider'

export default function Matterjs() {
  const { darkMode } = useModeToggle()
  const boxRef = useRef<HTMLElement>(null)
  const canvasRef = useRef<HTMLElement>(null)

  const [constraints, setContraints] = useState<any>()
  const [scene, setScene] = useState<any>()

  const isInViewport = useIsInViewport(boxRef)

  const handleResize = () => {
    setContraints(boxRef?.current?.getBoundingClientRect())
  }

  useEffect(() => {
    let Engine = Matter.Engine
    let Render = Matter.Render
    let World = Matter.World
    let Bodies = Matter.Bodies
    let Constraint = Matter.Bodies
    // let Body = Matter.Body
    let engine = Engine.create() // set speed { gravity: { x: 0, y: 0.8 } }
    // let Composite = Matter.Composite
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

    const pills: Matter.Body[] = []
    const colors = ['#537188', '#99627A', '#41644A', '#E96479', '#86A3B8']
    for (let i = 0; i < 30; i++) {
      const x = Math.random() * window.innerWidth
      const y = Math.random() * -500
      const width = 100
      const height = 52

      const chamfer = { radius: 15 }
      const color = colors[i % colors.length]

      const pillText = `Pill ${i + 1}`
      const canvas = document.createElement('canvas')
      const context = canvas.getContext('2d')
      canvas.width = width
      canvas.height = height

      // Customize the text appearance
      if (context) {
        context.font = '16px Arial'
        // context.fillStyle = 'white'
        context.textAlign = 'center'
        context.textBaseline = 'middle'

        // Calculate the position to center the text on the pill
        const textX = canvas.width / 2
        const textY = canvas.height / 2

        // Draw the text on the canvas
        context.fillText(pillText, textX, textY)

        // const imageData = context.getImageData(0, 0, canvas.width, canvas.height)
        const dataURL = canvas.toDataURL()

        const pill = Bodies.rectangle(x, y, width, height, {
          chamfer,
          restitution: 0.6,
          friction: 0.005,
          render: {
            fillStyle: color,
          },
        })

        //ball.velocity.y = Math.random() * 10 + 1
        //@ts-ignore
        pills.push(pill)
      } else {
        console.error('Failed to get canvas context')
      }
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

    // Listen for mouse clicks on the ball bodies
    Matter.Events.on(engine, 'mousedown', (event) => {
      const mousePosition = event.mouse.position
      // @ts-ignore
      const clickedBody = Matter.Query.point(balls, mousePosition)[0]
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
  }, [isInViewport])

  useEffect(() => {
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (constraints) {
      let { width, height } = constraints
      console.log(width, height)
      // Dynamically update canvas and bounds
      if (scene) {
        scene.bounds.max.x = width
        scene.bounds.max.y = height
        scene.options.width = width
        scene.options.height = height
        scene.canvas.width = width
        scene.canvas.height = height
        const floor = scene.engine.world.bodies[0]
        console.log(scene.engine.world)
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
