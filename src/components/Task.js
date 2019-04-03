import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Task extends Component {
    static propTypes = {
        task: PropTypes.object.isRequired,
        deleteTask: PropTypes.func.isRequired,
        completeTask: PropTypes.func.isRequired
    }

    state = {}

    render() {
        const { task, completeTask, deleteTask } = this.props

        let element = (
            <div className="task-list-item">
                <div className="task-list-item__cell">
                    <input
                        type="checkbox"
                        className="ripple-checkbox"
                        checked={task.completed}
                        onChange={() => completeTask(task.id)}
                    />
                    <label className="ripple-checkbox-label"
                        onClick={() => completeTask(task.id)}
                        style={{
                            textDecoration: task.completed ? 'line-through' : 'none'
                        }}
                    >
                        <span className="ripple-checkbox-label__cell">
                            <span className="ripple-checkbox-symbol"></span>
                        </span>
                        <span className="ripple-checkbox-label__cell">
                            {task.text}
                            <ins><i>{task.text}</i></ins>
                        </span>
                    </label>
                </div>
                <div className="task-list-item__cell
                                task-list-item__cell_delete"
                    onClick={() => deleteTask(task.id)}>
                    <div className="task-list-item__delete"
                        dangerouslySetInnerHTML={{__html: '&#10006;'}}
                        style={{ cursor: 'pointer' }}
                    >
                    </div>
                </div>
            </div>
        )

        return (
            <div>
             {element}
            </div>
        )
    }
}
