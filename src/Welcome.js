import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Welcome extends Component{
    constructor(props){
        super(props);

        this.state={
            clicks:0,
            year:props.year
        }
    }

    componentWillReceiveProps(newProps){
        console.log(newProps)
        this.setState({
            year:newProps.year
        })
    }

    updateClicks=()=>{
        this.setState({
            clicks:this.state.clicks+1
        })
    }

    render(){
        return (
            <h1 onClick={this.updateClicks}>Welcome to {this.props.title} ({this.state.clicks}) - {this.state.year}</h1>
        )
    }
}

Welcome.propTypes={
    title:PropTypes.string,
    year(props, propName, component){
        if(!(propName in props)){
          return new Error(`missing ${propName}`)
        }
        if(props[propName] > 2019){
          return new Error(`${propName} should not be later than current year`)
        }
      }
}

Welcome.defaultProps={
    title:"Varma"
}


export default Welcome;