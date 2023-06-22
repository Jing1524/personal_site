import { ThemeContext } from '@/context/ThemeContext'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { useContext } from 'react'

const ProfileBox = ({ pillsRef }: any) => {
  const { theme } = useContext(ThemeContext)
  const mobileView = useMediaQuery({ width: '912px', height: '1368px' })
  const laptopView = useMediaQuery({ width: '1366px', height: '768px' })
  const anotherFkView = useMediaQuery({ width: '1024px', height: '768px' })

  return (
    <div className="flex items-center justify-center ml-auto basis-1/5 box lg:h-full">
      <div className={`order-first lg:order-last p-[0.8vmin] h-[20vmin] w-full xl:h-full xl:w-[70%]`}>
        <div
          style={{ borderWidth: theme.strokeWidth }}
          className="pill box-border flex items-center justify-center w-full h-full rounded-full circle bg-[url('/images/me.png')] bg-center bg-cover"
        />
      </div>
    </div>
  )
}

export default ProfileBox
