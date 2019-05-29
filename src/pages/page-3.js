import React from "react"
import { Slider } from "../components/slider"
import { Frame } from "framer"
// import { Link } from "gatsby"

export default function App() {
  const [scale, setScale] = React.useState(0, 5)
  const constraint = (480 * scale - 120) / 2
  return (
    <>
      <Frame
        name={"SliderApp"}
        min-width={"320px"}
        min-height={"320px"}
        background={"#242424"}
      >
        <Frame
          name={"Mask"}
          size={120}
          center
          y={"-100px"}
          overflow={"hidden"}
          radius={"50%"}
        >
          <Frame
            name={"Image"}
            scale={scale}
            center
            size={480}
            image={"https://static.framer.com/api/bg.jpg"}
            drag
            dragElastic={0}
            dragMomentum={false}
            dragConstraints={{
              top: -constraint,
              bottom: constraint,
              left: -constraint,
              right: constraint,
            }}
          />
        </Frame>
        <Slider
          value={scale}
          min={0.25}
          max={0.75}
          onChange={function(newValue) {
            setScale(newValue)
          }}
        />
      </Frame>
      {/* <Link to="/">Home</Link> */}
    </>
  )
}
