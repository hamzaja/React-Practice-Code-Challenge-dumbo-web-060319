import React, { Fragment } from 'react'

class Sushi extends React.Component{
  state = {
    eaten : false
  }

  clicked = () => { if (this.props.sushi.price<this.props.usermoney){
    this.setState({eaten: true }) ; this.props.totalEaten() ; this.props.money(this.props.sushi.price)
  }
}
render(){
  console.log(this.props)
  return (
    <div className="sushi">
      <div className="plate">
        {
          this.state.eaten?
          null
          :
            <img onClick={this.clicked} src={this.props.sushi.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {this.props.sushi.name} - ${this.props.sushi.price}
      </h4>
    </div>
  )
}
}

export default Sushi
