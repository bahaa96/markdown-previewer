import React from "react"
import renderHTML from 'react-render-html';
import marked from "marked"

class Main extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            markdown: `
            Heading
=======

Sub-heading
-----------
 
### Another deeper heading
 
Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a  
line break

Text attributes *italic*, **bold**, 
\`monospace\`, ~~strikethrough~~ .

Shopping list:

  * apples
  * oranges
  * pears

Numbered list:

  1. apples
  2. oranges
  3. pears

The rain---not the reign---in
Spain.

 *[Herman Fassett](https://freecodecamp.com/hermanfassett)*
            `
        }
    }
    render(){
        return (
            <div className="container-fluid py-3">
                <div className="row">
                    <div className="col-6 input">
                        <textarea placeholder="Enter some markdown" ref={"markdown"} value={this.state.markdown} onChange={(e)=>{
                            e.preventDefault()
                            this.setState({
                                markdown: this.refs.markdown.value
                            })
                        }}/>
                    </div>
                    <div className=" col-6 result">
                        <div>
                            {renderHTML(marked(this.state.markdown))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Main