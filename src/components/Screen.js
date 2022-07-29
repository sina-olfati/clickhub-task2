import React from 'react'
import {choosePage} from '../redux/screens/screensaction'
import { useSelector } from 'react-redux'
import './Screen.css'

const Screen = () => {


    const state = useSelector(state => state)


    return (
    <div className='screen-container'>
      <h2>{state.choosed == null ? '' : state.choosed + 1}</h2>
    </div>
  )
}

export default Screen
