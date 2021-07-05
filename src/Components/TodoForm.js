import React, { useState } from "react";

import {
    Container,
    FormGroup,
    Input,
    Button,
    Form,
    InputGroup,
    InputGroupAddon,
} from "reactstrap";

import { v4 } from "uuid";

//redux
// "connect" use hoga unn 2 special redux function ko use karne ke leye
import { connect } from "react-redux";
import { addTodo } from "../action/todo";

// ye jo addTodo recieve ho raha wo mapDispatchToProps se aa raha mapDispatchToProps
// as an method jo wo method yaha se value lekr reducer ko bhejga
const TodoForm = ({ addTodo }) => {
    const [title, setTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title === "") {
            return alert("Please add a todo");
        }

        const todo = {
            title,
            id: v4(),
        };

        addTodo(todo);

        setTitle("");
    };

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <InputGroup>
                    <Input
                        type="text"
                        name="todo"
                        id="todo"
                        placeholder="Your next Todo"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <InputGroupAddon addonType="prepend">
                        <Button color="primary" onClick={handleSubmit}>
                            ADD
                        </Button>
                    </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>
    );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    // addTodo: me Line 33 se value aayegi, means ki ye method
    // addTodo ko upar component me as a prop pass karega
    // aur Line 33 me uss method ko value pass hogi jo yaha aayegi
    // aur yaha se as an action bankr reducer ko pass ho jayega
    addTodo: (todo) => {
        dispatch(addTodo(todo));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
