import React, { useState } from 'react'


export default function Todo(props) {


    const handleEventOnDoubleClick = (e) => {
        console.log(e.target, 'id')
        console.log(props.todoprops.change, 'handleEventOnDoubleClick')
        if (e !== -1) {
            props.todoprops.change = !props.todoprops.change;
            console.log(props.todoprops.change[e.target.value])
            //this.setIsChange({ todos: arrayTemp });
        }
    }

    return (
        <div>
            <p>Todo</p>
            {props.todoprops.change ?
                <span key={'todo1' + props.todoprops.id}
                    onClick={handleEventOnDoubleClick}>
                    {props.todoprops.id} - {props.todoprops.name} </span> :
                <span key={'todo2' + props.todoprops.id} style={{
                    color: 'red'
                }} className="strike"
                    onClick={handleEventOnDoubleClick}
                //onClick={handleToggle()}
                >{props.todoprops.id} - {props.todoprops.name} </span>
            }
            <button onClick={props.propshandleEventDel}> - del </button>

        </div>
    )
}