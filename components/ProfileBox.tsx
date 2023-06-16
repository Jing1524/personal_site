import { ThemeContext } from '@/context/ThemeContext'
import useMediaQuery from '@/hooks/useMediaQuery'
import { useContext } from 'react'

const ProfileBox = ({ pillsRef }: any) => {
  const { theme } = useContext(ThemeContext)
  const largeScreenView = useMediaQuery('(min-width:1800px)')
  const shortScreenView = useMediaQuery('(max-height:800px)')
  return (
    <>
      {largeScreenView ? (
        <div className="flex items-center justify-center h-full box">
          <div
            className={`order-first ${
              shortScreenView ? 'h-[6vw] w-[6vw]' : ' h-[9vw] w-[9vw]'
            } lg:order-last p-[0.8vh]`}
          >
            <div
              style={{ borderWidth: theme.strokeWidth }}
              className="pill box-border flex items-center justify-center w-full h-full rounded-full circle bg-[url('/images/me.png')] bg-cover"
            />
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center ml-auto box lg:h-full">
          <div className={`order-first lg:order-last p-[0.8vh] h-[120px] w-[120px] lg:h-[10vw] lg:w-[10vw]`}>
            <div
              style={{ borderWidth: theme.strokeWidth }}
              className="pill box-border flex items-center justify-center w-full h-full rounded-full circle bg-[url('/images/me.png')] bg-cover"
            />
          </div>
        </div>
      )}
    </>
  )
}

export default ProfileBox
