import React from "react";

import Todo from "../components/Todo";
import TodoStore from "../stores/TodoStore"

export default class ToDo extends React.Component {
	constructor() {
		super();
		this.state = {
			todos: TodoStore.getAll(),b
		};
	}

	render() {
		const { todos } this.state;

		const TodoComponents = todos.map(() => {
			return <Todo key={todo.id} {...todo} />;
		})

		return (
			<div>
				<h1>Todos</h1>
				<ul>{TodoComponents}</ul> 
			</div>
		);
	}
}