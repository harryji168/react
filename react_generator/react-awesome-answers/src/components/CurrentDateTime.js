import { render } from '@testing-library/react';
import React, {Component} from 'react';

class CurrentDateTime extends Component {
    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        }
        console.log('1: constructor fired')
    }
    
    render(){
        return (
            <div>
                CURRENT TIME: {this.state.date.toLocaleString() }
            </div>
        )
    }

}
