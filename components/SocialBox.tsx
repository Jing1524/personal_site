const SocialBox = () => {
  const mobileSocial = 'h-24 w-24 border-8 border-[#FFE193] rounded-full flex items-center justify-center'
  return (
    <div className="lg:basis-1/4 box social-fan">
      <div className="flex justify-between lg:pill">
        <div className={`${mobileSocial} hidden-pill social instagram LinkedIn`}>
          <a href="">kitty</a>
        </div>
        <div className={`${mobileSocial} hidden-pill social instagram LinkedIn`}>
          <a href="">LinkedIn</a>
        </div>

        <div className={`${mobileSocial} hidden-pill social github`}>
          {' '}
          <a href="">github</a>
        </div>
      </div>
    </div>
  )
}

export default SocialBox
