import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux/cake/cakeActions'
import { buyIcecream } from '../redux/icecream/icescreamActions'

function CakeShop() {
    const numOfCakes = useSelector((state)=>state.cake.numOfCakes)
    const numOfIceCream = useSelector((state)=>state.icecream.numOfIceCream)
    const [number, setNumber] = useState(1)

    const dispatch = useDispatch()
  return (
    <div>
      <h1>Number Of cakes</h1>
      <h2>{numOfCakes}</h2>
      <input type="text" value={number} onChange={e => setNumber(e.target.value)} />
      <button onClick={()=>dispatch(buyCake(number))}>Buy {number} Cake</button>

      <h1>Number Of IceCreams</h1>
      <h2>{numOfIceCream}</h2>
      <button onClick={()=>dispatch(buyIcecream())}>Buy IceScream</button>
    </div>
  )
}

export default CakeShop
