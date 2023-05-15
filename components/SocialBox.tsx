import Image from 'next/image'
import Lottie from 'react-lottie'
import kittyAnimate from '../assets/lottie/kitty.json'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: kittyAnimate,
}

const SocialBox = () => {
  return (
    <div className="lg:basis-1/4 box social-fan">
      <div className="flex justify-between lg:pill">
        <div className="relative w-28 h-28 circle hidden-pill social instagram LinkedIn bg-[#E86479]">
          <a href="">
            <Image src="./icons/doodle-linkedin.svg" fill alt="LinkedIn Logo" />
          </a>
        </div>

        <div className="w-28 h-28 circle hidden-pill social instagram LinkedIn bg-[#F4E8CF]">
          <a href="">
            <Lottie options={defaultOptions} height={100} width={80} />
          </a>
        </div>

        <div className="relative w-28 h-28 circle hidden-pill social github bg-[#7DB9B6]">
          {' '}
          <a href="">
            <Image src="./icons/doodle-github.svg" fill alt="Github Logo" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default SocialBox
