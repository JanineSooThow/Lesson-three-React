import React, { useState } from "react";
import Checkbox from "./checkbox";

const Todo = () => {
    //creating a new state variable called "task" and "setTask" as  the state function. Set this state to be an empty object with the following variables and states
    const [task, setTask] = useState({
        id: 0,
        taskDescription: "",
        isCompleted: false
    });

    //creating a new useState hook, state variable called todos and state function "setTodos", set initial state to an empty array
    const [todos, setTodos] = useState([]);

    //creating a new function called "addTodos" which takes in an event parameter. This function will handle the adding of the tasks to the list of todos
    //method will be executed when the button is clicked. 
    function addTodos(e) {
        e.preventDefault();
        setTodos([
            ...todos, //spread operator to append the remaining todos on top of our newly created todo list
            {
                id: todos.length + 1,
                taskDescription: task.taskDescription,
                isCompleted: false
            }
        ]);

        //reset the state so when we add a todo, we clear the input and add more
        setTask({
            id: 0,
            taskDescription: "",
            isCompleted: false
        });
    }

    const handleToggle = (id) => {
        console.log({ id });
        // sieving through the todos and returning the ones that are completed
        let mapped = todos.map((task) => {
            return task.id === Number(id)
                ? { ...task, isCompleted: true }
                : { ...task };
        });
        // setting our new todo list with updated variables
        setTodos(mapped);
    };

    //returning a title, a label for text input and a button
    return (
        <div className="App">
            <h1>Janine's ToDo List</h1>
            <form onSubmit={addTodos}>
                <div>
                    <label>
                        Task
                        <input
                            type="text"
                            value={task.taskDescription}
                            name="taskDescription"
                            onChange={(event) =>
                                setTask({       //adding setTask() to the onChange event handler for the text input
                                    taskDescription: event.target.value, //using the event.target.value to set the taskDescription 
                                    isCompleted: false   //setting the isCompleted flag to false
                                })
                            }
                        />
                    </label>
                    <button> Add Task </button>
                </div>
            </form>
            <>
                {todos.length > 0 ? (
                    <>
                        {todos.map((t, index) => {
                            return (
                                <div id={t.id} key={index + t.id} value={t.id}>
                                    {t.isCompleted ? (
                                        <strike>
                                            <p>{t.taskDescription}</p>
                                        </strike>
                                    ) : (
                                        <Checkbox
                                            label={t.taskDescription}
                                            value={t.id}
                                            checked={t.isCompleted}
                                            onChange={(e) => handleToggle(t.id)}
                                        />
                                    )}
                                </div>
                            );
                        })}
                    </>
                ) : (
                    <p>No tasks for today</p>
                )}
            </>
        </div>
    );
}


export default Todo;