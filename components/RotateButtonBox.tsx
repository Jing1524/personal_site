import Image from 'next/image'

const RotateButtonBox = () => {
  return (
    <div className="box basis-1/2">
      <button className="m-auto h-[50px] w-[150px] border-[8px] border-[#1e1e1e] rounded-full p-[6.25px] box-content flex items-center justify-center">
        <Image src="./icons/rotation_icon.svg" height={50} width={50} alt="rotation icon" />
      </button>
    </div>
  )
}

export default RotateButtonBox
