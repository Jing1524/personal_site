import { useModeToggle } from '@/context/ModeProvider'

const OverViewBox = () => {
  const { darkMode } = useModeToggle()
  return (
    <div className="flex-1 lg:basis-5/12 large-box box" id="takeover">
      <div className={`pill ${darkMode ? 'bg-[#4F6F81]' : 'bg-[#A6D0DC]'}`}>
        <div className="flex flex-col items-center p-6 text-center text-box">
          <h1 className="text-2xl font-bold">overview.</h1>
          <p className="text-lg">
            As a frontend software engineer with a background in design and music, I approach engineering challenges
            with a unique viewpoint on creativity, self-discipline, and teamwork. With two years of experience building
            and delivering web applications, I have honed my skills in modern development technologies such as React.js,
            TypeScript, and Node.js.
          </p>
          <p>adkfjroihdfg a alsdkjf aeorighsdofbkajdhlgfka asdlkfhaksdhfkasjhdkgf</p>
          <p>a lot of text</p>
          <button className="flex mt-auto intro">
            <p>See More</p>
            <div className="arrow-container">
              <div className="ml-4 rotate-180 arrow right-expand-arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 animate-move-arrow"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
                  />
                </svg>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default OverViewBox
