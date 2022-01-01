import React from "react";
import AnswerDetails from './AnswerDetails';

export default function AnswerList(props) {
    return (
        <div>
            <h4>Answer List:</h4>
            <ul>
                {
                    props.list.map((e, i) => {
                        return <AnswerDetails
                            key={i}
                            body={e.body}
                            author_full_name={e.author.first_name + " " + e.author.last_name}
                            created_at={e.created_at}
                            id={e.id}
                            deleteAnswer={props.deleteAnswer}
                        />
                    })
                }
            </ul>
        </div>
    )
}