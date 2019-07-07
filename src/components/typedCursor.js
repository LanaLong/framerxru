import * as React from "react"
import ReactDOM from "react-dom"

/* Adding CSS manually is only necessary in JSFiddle,
   where CSS can't be inserted into the <head> */
// .typed - cursor{
//     opacity: 1;
//     animation: typedjsBlink 0.7s infinite;
//     -webkit - animation: typedjsBlink 0.7s infinite;
//     animation: typedjsBlink 0.7s infinite;
// }
// @keyframes typedjsBlink{
//     50 % { opacity: 0.0; }
// }
// @-webkit - keyframes typedjsBlink{
//     0 % { opacity: 1; }
//     50 % { opacity: 0.0; }
//     100 % { opacity: 1; }
// }
// .typed - fade - out{
//     opacity: 0;
//     transition: opacity .25s;
//     -webkit - animation: 0;
//     animation: 0;
// }

class TypedReactDemo extends React.Component {
  componentDidMount() {
    // If you want to pass more options as props, simply add
    // your desired props to this destructuring assignment.
    const { strings } = this.props
    // You can pass other options here, such as typing speed, back speed, etc.
    const options = {
      strings: strings,
      typeSpeed: 50,
      backSpeed: 50,
    }
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options)
  }

  componentWillUnmount() {
    // Make sure to destroy Typed instance on unmounting
    // to prevent memory leaks
    this.typed.destroy()
  }

  render() {
    return (
      <div className="wrap">
        <h1>Typed.js</h1>
        <div className="type-wrap">
          <span
            style={{ whiteSpace: "pre" }}
            ref={el => {
              this.el = el
            }}
          />
        </div>
        {/* <button onClick={() => this.typed.toggle()}>Toggle</button>
        <button onClick={() => this.typed.start()}>Start</button>
        <button onClick={() => this.typed.stop()}>Stop</button>
        <button onClick={() => this.typed.reset()}>Reset</button>
        <button onClick={() => this.typed.destroy()}>Destroy</button> */}
      </div>
    )
  }
}

ReactDOM.render(
  <TypedReactDemo
    strings={[
      "временем <i>strings</i> are slanted",
      "Some <strong>собой</strong> are bold",
      "пространством",
    ]}
  />,
  document.getElementById("react-root")
)
