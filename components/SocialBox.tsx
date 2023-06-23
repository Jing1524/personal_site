import Image from 'next/image'
import Lottie from 'react-lottie'
import kittyAnimate from '../assets/lottie/kitty.json'
import { useContext } from 'react'
import { ThemeContext } from '@/context/ThemeContext'
import { useMediaQueryWidth } from '@/hooks/useMediaQuery'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: kittyAnimate,
}

const SocialBox = () => {
  const { theme } = useContext(ThemeContext)
  const tabletScreen = useMediaQueryWidth('(min-width:1024px)')
  return (
    <div className="h-full lg:basis-1/4 p-[0.8vh] box">
      {tabletScreen ? (
        <div className="h-full social-fan lg:basis-1/4">
          <div
            className="pill h-full w-full border box-border border-[#1e1e1e] rounded-[100px] hidden-pill social github bg-[#e6abbe]"
            style={{ borderWidth: theme.strokeWidth }}
          >
            <a href="https://github.com/Jing1524" target="_blank">
              <Image src="./icons/doodle-github.svg" fill alt="Github Logo" />
            </a>
          </div>

          <div
            className="pill h-full w-full border box-border border-[#1e1e1e] rounded-[100px] hidden-pill hidden social linkedIn bg-[#54a58a]"
            style={{ borderWidth: theme.strokeWidth }}
          >
            <a href="https://www.linkedin.com/in/jing-li-a71436ba/" target="_blank">
              <Image src="./icons/doodle-linkedin.svg" fill alt="LinkedIn Logo" />
            </a>
          </div>

          <div
            className="pill h-full w-full border box-border border-[#1e1e1e] rounded-[100px] hidden-pill social kitty bg-[#5a6191]"
            style={{ borderWidth: theme.strokeWidth }}
          >
            <a href="">
              <div className="h-[12.4vh] w-[12vw]">
                <Lottie options={defaultOptions} />
              </div>
            </a>
          </div>
        </div>
      ) : (
        <div className="h-full box">
          <div className="flex justify-between h-full gap-5">
            <div className="pill relative w-28 h-28 circle hidden-pill social instagram LinkedIn bg-[#54a58a]">
              <a href="https://www.linkedin.com/in/jing-li-a71436ba/" target="_blank">
                <Image src="./icons/doodle-linkedin.svg" fill alt="LinkedIn Logo" />
              </a>
            </div>

            <div className="pill relative w-28 h-28 circle hidden-pill social instagram LinkedIn bg-[#5a6191]">
              <a href="">
                <Lottie options={defaultOptions} height={100} width={80} />
              </a>
            </div>

            <div className="pill relative w-28 h-28 circle hidden-pill social instagram LinkedIn bg-[#e6abbe]">
              <a href="https://github.com/Jing1524" target="_blank">
                <Image src="./icons/doodle-github.svg" fill alt="Github Logo" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SocialBox
