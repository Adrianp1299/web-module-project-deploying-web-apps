import React from "react";

const Todo = (props) => {

    return (
        <div key={props.key}>
            {props.activity}
        </div>
    )
}

export default Todo