import React, {useState} from 'react'
import './Body.css'
import Screen from './Screen'
import Item from './Item'

import {choosePage} from '../redux/screens/screensaction'
import { useSelector, useDispatch } from 'react-redux'

const Body = () => {

  const [active, setActive] = useState(false)
  const is = active

  const state = useSelector(state => state)
  const dispatch = useDispatch()


  return (
    <div className='body-container'>
      <div class="body-sidebar">
        <a onClick={() => setActive(!active)} className={active ? 'active-a' : null} href="#">حسابداری</a>
        <a  href="#">د/پ</a>
        <a href="#">خ/ف</a>
        <a href="#">انبار</a>
        <a href="#">عمومی</a>
        <a href="#">گزارشات</a>
      </div>

    <div className={active ? 'body-slider active-slider' : 'body-slider'}>
      <a>
      تعریف سرفصفل
      </a>
    </div>

      <div class="body-content">
      <div className='top-header'>
        <p>نام شرکت</p>
      </div>
      <div className='top-header2'>
        { (i=0, i<state, ++) {
          <Item />
        }}
      </div>
      <div className='screen-space'>
        <Screen />
      </div>

      </div>
    </div>
  )
}

export default Body
