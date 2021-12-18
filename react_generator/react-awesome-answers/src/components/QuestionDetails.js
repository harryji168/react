import React from "react"

function QuestionDetails(props) {
    // React.Fragment or <></>
    return (
        <>
            <h2 style={{ backgroundColor: "lightblue" }} className="">{props.name}</h2>
            <p>
                {props.body}
                <br />
                By {props.author.full_name}
            </p>
            <p>
                Seen {props.view_count} times
                <small>{props.created_at.toLocaleString()}</small>
            </p>
        </>
    )
}
export default QuestionDetails; 