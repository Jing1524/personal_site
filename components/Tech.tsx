import { technologies } from '../constants'
import BallCanvas from './canvas/BallCanvas'

export default function Tech() {
  return (
    <div id="tech" className="flex flex-row flex-wrap justify-center gap-10 w-[90vw] mx-auto my-8">
      {technologies.map((technology) => {
        return (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        )
      })}
    </div>
  )
}
