import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'


const SushiContainer = (props) => {
  const {sushis, start, next4 , totalEaten , money, usermoney } = props
  function renderSushi() {
    return sushis.slice(start , start+4).map(sushi =>
       < Sushi
       sushi={sushi}
        key={sushi.id}
        totalEaten = {totalEaten}
        money = {money}
        usermoney={usermoney}/>) }
  return (
    <Fragment>
      <div className="belt">
        {
        renderSushi()
        }
        <MoreButton next4 ={next4}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
