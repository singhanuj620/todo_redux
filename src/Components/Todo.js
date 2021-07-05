import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { FaCheckDouble } from "react-icons/fa";

//redux
import { connect } from "react-redux";
import { removeTodo } from "../action/todo";

const Todo = ({ todos, markComplete }) => {
  return (
    <ListGroup className="mt-5 mb-2">
      {todos.map((todo) => (
        <ListGroupItem key={todo.id}>
          {todo.title}
          <span onClick={() => markComplete(todo.id)} className="float-right">
            <FaCheckDouble />
          </span>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};


const mapStateToProps = (state) => ({
  // ye state.todos issleye hua kyuki reducer me jo initial state ban rahi 
  // wo export as a "todos" ho raha
  // agar confusion ho to state ko print kar lo
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  markComplete: (id) => {
    dispatch(removeTodo(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
