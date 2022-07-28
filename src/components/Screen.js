import React from 'react'
import {choosePage} from '../redux/screens/screensaction'
import { useSelector, useDispatch } from 'react-redux'
import './Screen.css'

const Screen = () => {


    const state = useSelector(state => state)
    const dispatch = useDispatch()


    return (
    <div className='screen-container'>
      <h2>{state.choosed}</h2>
    </div>
  )
}

export default Screen
