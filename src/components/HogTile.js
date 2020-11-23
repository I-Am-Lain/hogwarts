import React, { Component } from 'react'

export default class HogTile extends Component {
    state = {
        detailToggle: false
    }

    handleClick = () => {
        this.setState(prevState => {
            return {
                detailToggle: !prevState.detailToggle
            }
        })
    }

    hideDatHog = () => {
        console.log('to be continued')
    }

    render() {
        const {name, specialty, greased, weight} = this.props.hog

        let pigImage = require(`../hog-imgs/${name.split(' ').join('_').toLowerCase()}.jpg`)


        return (
            <div className='ui seven wide column pigTile'>
                <img width='50%' src={pigImage} alt=''/>
                <p>{this.props.hog.name}</p>
                <button type="button" onClick={this.hideDatHog}>Hide Dat Hog</button>
                <button type="button" onClick={this.handleClick}>More Info</button>
                {
                    this.state.detailToggle === true ? 
                    <ul>
                        <li>{specialty}</li>
                        <li>{greased ? 'true' : 'false'}</li>
                        <li>{weight}</li>
                        <li>{this.props.hog['highest medal achieved']}</li>
                    </ul> 
                    : 
                    null
                }
            </div>
        )
    }
}
