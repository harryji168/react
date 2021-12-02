import React, { Component } from 'react';
import questionIndexData from '../mock_data/questionIndexData';

class QuestionIndexPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
             
            questions: questionIndexData,
            location: "VAN",
            name: "CodeCore"
        }
    }
    deleteQuestion(id) {
        // anytime you want to change the state, you must use this.setState function!
        // you can not use this.state = sth!
        // this callback function has 2 arguments
        // 1. the state, 2. the props
        // the return of this callback function will be merged into the state
        // `merge` => merge these 2 objects and only replace the same name attributes

        // this.setState((state, props) => {
        //     return {
        //         questions: state.questions.filter(q => q.id !== id)
        //     }
        // })
        this.setState({
            questions: this.state.questions.filter(q => q.id !== id)
        })
    }

    render() {
        return (
            <div>
                {this.state.questions.map((e) => {
                    return (
                        <h1 key={e.id}>{e.id} - {e.title} <button onClick={() => this.deleteQuestion(e.id)}>Delete</button> </h1>
                    )
                })}
            </div>
        )
    }
}

export default QuestionIndexPage; 