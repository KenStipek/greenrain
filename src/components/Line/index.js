import React, { Component } from 'react'
import './styles.css'

import Character from '../Character'

const Line = ({content, top, left, height}) => {
  return (
    <div className='line' style={{height: `${height}px`, top, left}}>
      {content}
    </div>
  )
}

export default Line
