import Image from 'next/image'
import { useModeToggle } from '@/context/ModeProvider'
import { motion } from 'framer-motion'
import { useContext, useEffect, useRef } from 'react'
import { ThemeContext } from '@/context/ThemeContext'
import { useMediaQuery, useMediaQueryWidth } from '@/hooks/useMediaQuery'
import HiddenProjectBox from '@/components/HiddenProjectBox'
const ProjectBox = ({ expand, projectSliderValue, setProjectSliderValue, sliderValue }: any) => {
  const { darkMode } = useModeToggle()
  const { theme } = useContext(ThemeContext)
  const tabletView = useMediaQueryWidth('(min-width:1024px)')

  return (
    <div className={`flex flex-col md:flex-row lg:flex-col basis-1/2 ${expand ? 'block lg:hidden' : 'block'} `}>
      <div className="w-full box p-[10px] h-1/2 md:h-full lg:h-1/2 xl:h-full">
        <div
          className={`pill w-full h-full border rounded-[100px] box-border flex flex-row md:flex-col lg:flex-col gap-[1vmin] bg-[#5a6191] p-[2rem] justify-center`}
          style={{ borderWidth: theme.strokeWidth }}
        >
          <div className="flex flex-col w-full ml-3">
            <p
              className={`font-bold text-[2.2vmin] lg:text-[1.2vmin] xl:text-[2vmin] ${
                darkMode || sliderValue > 5 ? 'text-[#1e1e1e]' : 'text-[#CDDAFD]'
              } `}
            >
              Recent Project:
            </p>
            <p
              className={`font-medium text-[2vmin] lg:text-[1vmin] xl:text-[2vmin] ${
                darkMode || sliderValue > 5 ? 'text-[#1e1e1e]' : 'text-[#CDDAFD]'
              }`}
            >
              Yet Another Music App
            </p>

            <a
              href="https://yama-one.vercel.app"
              target="_blank"
              className={`mt-[.6vmin] ${
                darkMode || sliderValue > 5 ? 'text-[#1e1e1e]' : 'text-[#CDDAFD]'
              } hover:underline font-medium text-[2vmin] lg:text-[1vmin] xl:text-[2vmin]`}
            >
              yama-one.vercel.app
            </a>
            <button
              className={`w-[30%] lg:w-[50%] py-[.4vmin] mt-[1vmin] border rounded-lg border-1 ${
                darkMode || sliderValue > 5 ? 'border-[#1e1e1e]' : 'border-[#CDDAFD]'
              }  hover:bg-[#1e1e1e]/20`}
            >
              <a
                href="https://github.com/Jing1524/yet-another-music-app"
                target="_blank"
                className={`${
                  darkMode || sliderValue > 5 ? 'text-[#1e1e1e]' : 'text-[#CDDAFD]'
                } font-bold text-[2.2vmin] lg:text-[2vmin]`}
              >
                Github
              </a>
            </button>
          </div>

          <div className="flex flex-col lg:flex-row w-full xl:mt-[2vw] ml-3">
            <p
              className={`${
                darkMode || sliderValue > 5 ? 'text-[#1e1e1e]' : 'text-[#CDDAFD]'
              } text-[2vmin] lg:text-[1vmin] xl:text-[2vmin] font-bold basis-1/2 2xl:basis-1/3`}
            >
              Teck stack:
            </p>
            <div className="flex flex-col gap-2 mt-[3px]">
              <p
                className={`text-[2vmin] lg:text-[1vmin] xl:text-[1.8vmin] font-medium ${
                  darkMode || sliderValue > 5 ? 'text-[#1e1e1e]' : 'text-[#CDDAFD]'
                }`}
              >
                Next.js
              </p>
              <p
                className={`text-[2vmin] lg:text-[1vmin] xl:text-[1.8vmin] font-medium ${
                  darkMode || sliderValue > 5 ? 'text-[#1e1e1e]' : 'text-[#CDDAFD]'
                }`}
              >
                Redux Toolkit for state management
              </p>
              <p
                className={`text-[2vmin] lg:text-[1vmin] xl:text-[1.8vmin] font-medium ${
                  darkMode || sliderValue > 5 ? 'text-[#1e1e1e]' : 'text-[#CDDAFD]'
                }`}
              >
                Tailwind for styling
              </p>
              <p
                className={`text-[2vmin] lg:text-[1vmin] xl:text-[1.8vmin] font-medium ${
                  darkMode || sliderValue > 5 ? 'text-[#1e1e1e]' : 'text-[#CDDAFD]'
                }`}
              >
                RapidAPI for data
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full box p-[10px] h-1/2 md:h-full lg:h-1/2 xl:hidden">
        <div
          className={`pill w-full h-full border rounded-[100px] box-border flex flex-row md:flex-col lg:flex-col gap-[1vmin] p-[2rem] justify-center`}
          style={{ borderWidth: theme.strokeWidth }}
        >
          <div className="flex flex-col w-full ml-3">
            <p
              className={`font-bold text-[2.2vmin] lg:text-[1.2vmin] xl:text-[2vmin] ${
                darkMode || sliderValue > 5 ? 'text-[#1e1e1e]' : 'text-[#CDDAFD]'
              } `}
            >
              Previous work:
            </p>
            <p
              className={`font-medium text-[2vmin] lg:text-[1vmin] xl:text-[2vmin] ${
                darkMode || sliderValue > 5 ? 'text-[#1e1e1e]' : 'text-[#CDDAFD]'
              }`}
            >
              Pineapple Workshop
            </p>
            <a
              href="https://pineappleworkshop.com"
              target="_blank"
              className={`mt-[.6vmin] ${
                darkMode || sliderValue > 5 ? 'text-[#1e1e1e]' : 'text-[#CDDAFD]'
              } hover:underline font-medium text-[2vmin] lg:text-[1vmin] xl:text-[2vmin]`}
            >
              pineappleworkshop.com
            </a>
          </div>

          <div className="flex flex-col lg:flex-row w-full xl:mt-[2vw] ml-3">
            <p
              className={`${
                darkMode || sliderValue > 5 ? 'text-[#1e1e1e]' : 'text-[#CDDAFD]'
              } text-[2vmin] lg:text-[1vmin] xl:text-[2vmin] font-bold basis-1/2 2xl:basis-1/3`}
            >
              Teck stack:
            </p>
            <div className="flex flex-col gap-2">
              <p
                className={`text-[2vmin] lg:text-[1vmin] xl:text-[1.8vmin] font-medium ${
                  darkMode || sliderValue > 5 ? 'text-[#1e1e1e]' : 'text-[#CDDAFD]'
                }`}
              >
                Next.js
              </p>
              <p
                className={`text-[2vmin] lg:text-[1vmin] xl:text-[1.8vmin] font-medium ${
                  darkMode || sliderValue > 5 ? 'text-[#1e1e1e]' : 'text-[#CDDAFD]'
                }`}
              >
                React context hook for state management
              </p>
              <p
                className={`text-[2vmin] lg:text-[1vmin] xl:text-[1.8vmin] font-medium ${
                  darkMode || sliderValue > 5 ? 'text-[#1e1e1e]' : 'text-[#CDDAFD]'
                }`}
              >
                Tailwind for styling
              </p>
              <p
                className={`text-[2vmin] lg:text-[1vmin] xl:text-[1.8vmin] font-medium ${
                  darkMode || sliderValue > 5 ? 'text-[#1e1e1e]' : 'text-[#CDDAFD]'
                }`}
              >
                Framer motion for animation
              </p>
              <p
                className={`text-[2vmin] lg:text-[1vmin] xl:text-[1.8vmin] font-medium ${
                  darkMode || sliderValue > 5 ? 'text-[#1e1e1e]' : 'text-[#CDDAFD]'
                }`}
              >
                Contentful for data hosting
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* slider  */}
      <div className="box order-last p-[10px] h-[20%] w-full hidden xl:block">
        <div
          className={`pill h-full w-full border border-[#1e1e1e] box-border rounded-[20px] flex justify-center items-center ${
            darkMode ? 'bg-[#E59394]' : 'bg-[#EAC7C7]'
          }`}
          style={{ borderWidth: theme.strokeWidth }}
        >
          <div className="flex items-center w-full px-6">
            <input
              type="range"
              min="0"
              max="900"
              value={projectSliderValue}
              className="projectSlider"
              id="myRange"
              onChange={(e) => setProjectSliderValue(parseInt(e.target.value))}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProjectBox
