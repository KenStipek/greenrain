import React, { Component } from 'react'

import Line from '../components/Line'

class LineContainer extends Component {
  constructor(props) {
    super(props)
    const width = 
      window.innerWidth || 
      document.documentElement.clientWidth ||
      document.body.clientWidth
    const height = 
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight
    const breaks = 100

    this.state = {
      width: width / breaks,
      height,
      breaks,
      lines: [
        {
          data: this._randChar(),
          x: 0,
          y: 0
        }
      ]
    }
    
    this._genContent = this._genContent.bind(this)
    this._randChar = this._randChar.bind(this)
    this._updatePosition = this._updatePosition.bind(this)
  }
  
  componentDidMount() {
    window.requestAnimationFrame(this._updatePosition)
  }

  render() {
    const {lines} = this.state
    return lines.map((line, i) => {
      return <Line key={i} content={line.data} top={line.y} left={line.x} />
    })
  }
  
  _genContent() {
    const {content} = this.state
    this.setState({content: this._randChar().concat(content)})
  }
  
  _randChar(length = 100) {
    return Array.from({length}, () => Math.floor(Math.random() * 10))
  }
  
  _updatePosition() {
    const {lines} = this.state
    this.setState({
      lines: lines.map((line) => {
        return {...line, y: line.y + 1}
      })
    }, () => {
      window.requestAnimationFrame(this._updatePosition)
    })
  }
}

export default LineContainer;
