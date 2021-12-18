import React from 'react';
import QuestionDetails from './QuestionDetails'

export default function QuestionList(props) {

    return (
        <div>
            {props.list.map((e, i) => {
                return <QuestionDetails
                    key={i}
                    name={e.title}
                    body={e.body}
                    author={e.author}
                    created_at={e.created_at}
                />
            })}
        </div>
    )
}