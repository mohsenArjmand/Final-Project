import React from 'react'
//import ComponentDinamyc from './ComponentDinamyc';


export default function Todo(props) {


    // const handleEventOnDoubleClick = (e) => {
    //     console.log('double')
    //     //console.log(e.target, 'id')
    //     console.log('props.todoprops.change :' ,props.todoprops.change, 'handleEventOnDoubleClick')
    //     if (e !== -1) {
    //         props.todoprops.change = !props.todoprops.change;
    //         //console.log(props.todoprops.change[!props.todoprops.change])
    //         //this.setIsChange({ todos: arrayTemp });
    //     }
    
    // }
    // useEffect(() => {
    //   first
    
    //   return () => {
    //     second
    //   }
    // }, [third])
    
    function handleEventOnChangeInput(e,todoId){
        console.log('ChangeInput')
        //console.log(e.target, 'id')
        console.log('props.todoprops.name :' ,props.todoprops.name, 'handleEventOnChangeInput')
        if (e !== -1) {
            props.todoprops.name = e.target.value;
            console.log(e.target.value)

            console.log('id : ' ,todoId)
             //setTodos([...todos],findArrayElementById(todos,todoId).name = event.target.value )
             //console.log('2' ,findArrayElementById(todos,todoId).change)
            //console.log(props.todoprops.change[!props.todoprops.change])
            //this.setIsChange({ todos: arrayTemp });
        }
    }

    return (
        <div>
            {props.todoprops.change === true ?
                <input key={'todo1' + props.todoprops.id}
                onDoubleClick={props.propshandleEventDouble} value={props.todoprops.name}
                onChange= {(e)=>handleEventOnChangeInput(e,props.todoprops.id)} />
                   :
                <span key={'todo2' + props.todoprops.id} style={{
                    color: 'red'
                }} className="strike"
                    onDoubleClick={props.propshandleEventDouble}
                //onClick={handleToggle()}
                >{props.todoprops.id} - {props.todoprops.name} </span>
            }


            <button onClick={props.propshandleEventDel}> - del </button>
        </div>
    )
}