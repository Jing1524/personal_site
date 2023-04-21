import { useRef } from 'react'
import { technologies } from '../constants'
import Ball from './canvas/BallCanvas'
import BallCanvas from './canvas/BallCanvas'
import PacmanCanvas from './canvas/pacmanCanvas'

export default function Tech() {
  return (
    //flex flex-row  justify-center gap-10
    <div id="tech" className="flex items-center w-[90vw] mx-auto my-8">
      <div className="w-[30%]">
        <PacmanCanvas />
      </div>
      <div className="flex flex-wrap items-center">
        {/* <BallCanvas /> */}
        {technologies.map((technology, idx) => {
          return (
            <div className="w-20 h-20" key={technology.name}>
              <BallCanvas icon={technology.icon} idx={idx} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
