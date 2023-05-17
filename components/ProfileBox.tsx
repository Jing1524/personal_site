const ProfileBox = ({ pillsRef }: any) => {
  return (
    <div className="order-first circle-box lg:order-last box">
      <div
        ref={pillsRef}
        className="pill box-border flex items-center justify-center w-full h-full rounded-full circle bg-[url('/images/me.png')] bg-cover"
      />
    </div>
  )
}

export default ProfileBox
