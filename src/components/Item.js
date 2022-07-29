import React from 'react'

import {choosePage, addPage} from '../redux/screens/screensaction'
import { useSelector, useDispatch } from 'react-redux'


const Item = ({id}) => {

  const state1 = useSelector(state => state);
  const dispatch = useDispatch();


  return (
    <div>
    <div style={{padding: "0 10px", borderLeft: "solid 1px black", cursor: "pointer"}} onClick={() => dispatch(choosePage(id))}>
      سرفصل{id + 1}
    </div>
    </div>
  )
}

export default Item
