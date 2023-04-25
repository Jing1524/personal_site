import React, { useEffect, useRef, useState } from 'react'
import Matter from 'matter-js'
import useIsInViewport from '@/hooks/useIsInViewport'

export default function Matterjs() {
  const boxRef = useRef<HTMLElement>(null)
  const canvasRef = useRef<HTMLElement>(null)

  const [constraints, setContraints] = useState<any>()
  const [scene, setScene] = useState<any>()

  const isInViewport = useIsInViewport(boxRef)
  console.log('isInViewport: ', isInViewport)

  const handleResize = () => {
    setContraints(boxRef?.current?.getBoundingClientRect())
  }

  useEffect(() => {
    let Engine = Matter.Engine
    let Render = Matter.Render
    let World = Matter.World
    let Bodies = Matter.Bodies
    let engine = Engine.create() // set speed { gravity: { x: 0, y: 0.8 } }

    let render = Render.create({
      // @ts-ignore
      element: boxRef.current,
      engine: engine,
      // @ts-ignore
      canvas: canvasRef.current,
      options: {
        height: 500,
        width: 800,
        background: 'rgba(255, 0, 0, 0.5)',
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
    const leftWall = Bodies.rectangle(0, 0, 1, window.innerHeight * 2, {
      isStatic: true,
      render: {
        fillStyle: 'rgba(255, 0, 0, 0.5)',
      },
    })
    const rightWall = Bodies.rectangle(window.innerWidth, 0, 1, window.innerHeight * 2, {
      isStatic: true,
      render: {
        fillStyle: 'rgba(255, 0, 0, 0.5)',
      },
    })

    let pills: [] = []

    for (let i = 0; i < 17; i++) {
      const x = Math.random() * window.innerWidth
      const y = Math.random() * -500
      const width = 182
      const height = 52

      const chamfer = { radius: 25 }
      const pill = Bodies.rectangle(x, y, width, height, { chamfer, restitution: 0.9, friction: 0.005 })

      //ball.velocity.y = Math.random() * 10 + 1
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
      <div ref={boxRef} className="w-screen h-[800px] flex items-center justify-center">
        {/* @ts-ignore */}
        <canvas ref={canvasRef} className="flex justify-center m-auto" />
      </div>
    </>
  )
}
