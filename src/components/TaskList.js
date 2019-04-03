import React from 'react'
import PropTypes from 'prop-types'
import Task from './Task'

const TaskList = ({ tasks, actions }) => (

    <div className="task-list">
        {tasks.map(task =>
            <Task
                key={task.id}
                task={task}
                {...actions}
            />
        )}
    </div>

)

TaskList.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    actions: PropTypes.object.isRequired
}

export default TaskList
