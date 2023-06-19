import { ThemeContext } from '@/context/ThemeContext'
import useMediaQuery from '@/hooks/useMediaQuery'
import { useContext } from 'react'

const ProfileBox = ({ pillsRef }: any) => {
  const { theme } = useContext(ThemeContext)
  const mobileView = useMediaQuery({ width: '912px', height: '1368px' })

  // const shortScreenView = useMediaQuery('(max-height:800px)')
  return (
    <>
      {mobileView ? (
        <div className="flex items-center justify-center ml-auto box">
          <div className={`order-first  lg:order-last p-[0.8vh] h-[125px] w-[125px]`}>
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
