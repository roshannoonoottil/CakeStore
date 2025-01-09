import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux/cake/cakeActions'

function CakeShop() {
    const numOfCakes = useSelector((state)=>state.numOfCakes)
    const dispatch = useDispatch()
  return (
    <div>
      <h1>Number Of cakes</h1>
      <h2>{numOfCakes}</h2>
      <button onClick={()=>dispatch(buyCake())}>Buy Cake</button>
    </div>
  )
}

export default CakeShop
