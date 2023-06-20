import { useModeToggle } from '@/context/ModeProvider'
import { ThemeContext } from '@/context/ThemeContext'
import useMediaQuery from '@/hooks/useMediaQuery'
import { useContext, useState } from 'react'

const OverViewBox = ({ pillsRef, expand, setExpand }: any) => {
  const { darkMode } = useModeToggle()
  const { theme } = useContext(ThemeContext)
  const mobileView = useMediaQuery({ width: '912px', height: '1368px' })
  const tabletView = useMediaQuery({ width: '1024px', height: '1366px' })
  const laptopView = useMediaQuery({ width: '1366px', height: '1024px' })

  const fontColor = darkMode ? 'text-[#fff]' : 'text-[#1e1e1e]'

  if (!expand && laptopView) {
    return (
      <div
        className={`p-[0.8vh] box ${expand ? 'h-full' : laptopView ? 'h-full basis-1/2' : 'h-[30%]'} `}
        id="takeover"
      >
        <div
          className={`pill h-full w-full border border-[#1e1e1e] rounded-[100px] box-border flex justify-center items-center ${
            darkMode ? 'bg-[#eae0d7]' : 'bg-[#add4bd]'
          }`}
          style={{ borderWidth: theme.strokeWidth }}
        >
          <div className={`flex flex-col items-center gap-[2vh] px-6 py-8 h-full w-full text-box group `}>
            <h1 className={`self-start text-[3vh] font-bold text-[#1e1e1e]`}>Overview.</h1>
            <div className="flex flex-col gap-[1.5vh]">
              <p className={` text-[#1e1e1e] font-medium ${mobileView ? 'text-[1.5vh]' : 'text-[14px] 2xl:text-lg'}`}>
                As a software engineer with a background in design and music, I approach engineering challenges with a
                unique viewpoint on creativity, self-discipline, and teamwork. With two years of experience building and
                delivering web applications, I have honed my skills in modern development technologies such as React.js,
                TypeScript, and Node.js.
              </p>
            </div>
            {!expand ? (
              <button
                className="flex flex-col items-center mt-auto lg:flex-row intro"
                onClick={() => setExpand(!expand)}
              >
                <p className="text-[#1e1e1e] font-bold">Hover To See More</p>

                <div className="mt-4 -rotate-90 lg:mt-0 lg:ml-4 lg:rotate-180 arrow right-expand-arrow ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#1e1e1e"
                    className="w-6 h-6 animate-move-arrow"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
                    />
                  </svg>
                </div>
              </button>
            ) : (
              <button
                className="flex flex-col items-center mt-auto lg:flex-row intro"
                onClick={() => setExpand(!expand)}
              >
                <p className={`${fontColor} font-bold `}>See Less</p>
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`p-[0.8vh] box ${expand ? 'h-full' : laptopView ? 'h-full basis-1/2' : 'h-[30%]'} `} id="takeover">
      <div
        className={`pill h-full w-full border border-[#1e1e1e] rounded-[100px] box-border flex justify-center items-center ${
          darkMode ? 'bg-[#eae0d7]' : 'bg-[#add4bd]'
        }`}
        style={{ borderWidth: theme.strokeWidth }}
      >
        <div className={`flex flex-col items-center gap-[2vh] px-6 py-8 h-full w-full text-box group `}>
          <h1 className={`self-start text-[3vh] font-bold text-[#1e1e1e]`}>Overview.</h1>
          <div className="flex flex-col gap-[1.5vh]">
            {expand ? (
              <>
                <p className={` text-[#1e1e1e] font-medium ${mobileView ? 'text-[1.5vh]' : 'text-[14px] 2xl:text-lg'}`}>
                  As a software engineer with a background in design and music, I approach engineering challenges with a
                  unique viewpoint on creativity, self-discipline, and teamwork. With two years of experience building
                  and delivering web applications, I have honed my skills in modern development technologies such as
                  React.js, TypeScript, and Node.js.
                </p>
                <p className={` ${mobileView ? 'text-[1.5vh]' : 'text-[14px] 2xl:text-lg'} text-[#1e1e1e] font-medium`}>
                  Working at Pineapple Workshop, I developed my expertise in writing, testing, and documenting scalable,
                  reusable code. I thrive in collaborative environments and am equally comfortable taking ownership of
                  projects and driving them to completion. I led the project to develop a responsive, user-friendly
                  website, coordinating directly with the founder/CEO and collaborating with the design team to
                  successfully meet the needs and goals of Pineapple Workshop.
                </p>
                <p className={`${mobileView ? 'text-[1.5vh]' : 'text-[14px] 2xl:text-lg'} text-[#1e1e1e] font-medium`}>
                  In addition to my software engineering skills, I have experience working in the fashion industry as a
                  designer. My background in multiple disciplines and diverse interests allow me to approach
                  problem-solving from a unique perspective. I&apos;m excited to continue building my software
                  engineering career and to collaborate with others to create innovative digital products.
                </p>
              </>
            ) : (
              ''
            )}
          </div>
          {!expand ? (
            <button className="flex flex-col items-center mt-auto lg:flex-row intro" onClick={() => setExpand(!expand)}>
              <p className="text-[#1e1e1e] font-bold">Hover To See More</p>

              <div className="mt-4 -rotate-90 lg:mt-0 lg:ml-4 lg:rotate-180 arrow right-expand-arrow ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#1e1e1e"
                  className="w-6 h-6 animate-move-arrow"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
                  />
                </svg>
              </div>
            </button>
          ) : (
            <button className="flex flex-col items-center mt-auto lg:flex-row intro" onClick={() => setExpand(!expand)}>
              <p className={`${fontColor} font-bold `}>See Less</p>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default OverViewBox
