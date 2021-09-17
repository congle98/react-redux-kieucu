import React, {useState} from "react";
import {v4 as uuid} from "uuid";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {addTodo} from "../store/actions/todoAction";
const TodoForm = ({addTodo})=>{
    const [title,setTitle] = useState("")
    const onTitleChange = (event)=>{
        setTitle(event.target.value)
    }
    const onFormSubmit = (event)=>{
        event.preventDefault()
        if(title.trim()!==""){
            const newTodo = {
                title,
                completed:false,
                id:uuid()
            }
            addTodo(newTodo)
            setTitle("")
        }
    }
    return(
      <div>
          <form onSubmit={onFormSubmit}>
              <input type="text" name="title" onChange={onTitleChange} value={title}/>
              <input type="submit" value="Add"/>
          </form>
      </div>
    )
}
TodoForm.propTypes = {
    addTodo:PropTypes.func.isRequired
}

const mapStateToProps = state =>({

})

export default connect(mapStateToProps,{addTodo})(TodoForm)
