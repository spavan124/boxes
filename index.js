const Box = props => {
  const {className,text} = props
    return <h1 className="heading">{className}</h1>
  )
}

const element = (
  <div className="bg-container">
      <h1 className="heading">Boxes</h1>
  
    <Box text="Small" className="yellowPic"/>
    <Box text="Medium" className="bluePic"/>
    <Box text="Large" className="pincPic"/>>
  </div>
)

ReactDOM.render(element, document.getElementById("root"));
