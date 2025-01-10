import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux/cake/cakeActions'
import { buyIcecream } from '../redux/icecream/icescreamActions'

function CakeShop() {
    const numOfCakes = useSelector((state)=>state.cake.numOfCakes)
    const numOfIceCream = useSelector((state)=>state.icecream.numOfIceCream)

    const dispatch = useDispatch()
  return (
    <div>
      <h1>Number Of cakes</h1>
      <h2>{numOfCakes}</h2>
      <button onClick={()=>dispatch(buyCake())}>Buy Cake</button>

      <h1>Number Of IceCreams</h1>
      <h2>{numOfIceCream}</h2>
      <button onClick={()=>dispatch(buyIcecream())}>Buy IceScream</button>
    </div>
  )
}

export default CakeShop
