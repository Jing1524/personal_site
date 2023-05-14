const SliderBox = () => {
  return (
    <div className="basis-1/5 slider-container box">
      <div className="pill">
        <div className="input-container">
          <input id="slider-input" type="range" min="0" max="10" value="0" step="1" />
        </div>
      </div>
    </div>
  )
}

export default SliderBox
