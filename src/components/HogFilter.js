import React, { Component } from 'react'

export default class HogFilter extends Component {



    render() {
        return (
            <div className='form-div'>
                <form onSubmit={this.props.handleFormSubmit}>
                    <select name='grease-filter' onChange={this.props.handleFilterChange}>
                        <option value='all'>All</option>
                        <option value='true'>Greasy Bois</option>
                        <option value='false'>NO GREASE PLZ</option>
                    </select>
                    <input type="submit" value='xxxxx'/>
                </form>
                
                <form onChange={this.props.handleRadioChange}>
                    <input type='radio' id='weight' name='sort-by' value='weight'/>
                    <label htmlFor='weight'>Sort by Weight</label><br/>
                    <input type='radio' id='name' name='sort-by' value='name'/>
                    <label htmlFor='name'>Sort by Name</label>
                </form>
            </div>
        )
    }
}
