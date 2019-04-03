import React from 'react'
import { connect } from 'react-redux'
import { addTask } from '../actions'

const AddTask = ({ dispatch }) => {
    let input

    return (
        <div className="new-task">
            <form onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }
                dispatch(addTask(input.value))
                input.value = ''
            }}>
                <div className="new-task__row">
                    <input
                        ref={node => input = node}
                        placeholder = "Write some task here"
                        className="new-task__input"
                    />
                </div>
                <div className="new-task__row new-task__row_button">
                    <button
                        type="submit"
                        style={{ cursor: 'pointer' }}
                        className="flat-button flat-button_blue"
                    >
                     Add new task
                    </button>
                </div>
            </form>
        </div>
    )
}

export default connect()(AddTask)
