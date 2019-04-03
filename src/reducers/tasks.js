const initialState = [
    {
        id: 0,
        text: 'Try Redux',
        completed: true
    },
    {
        id: 1,
        text: 'Make the project "Task list"',
        completed: true
    },
    {
        id: 2,
        text: 'Get a good grade',
        completed: false
    }
]

const tasks = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case 'DELETE_TASK':
            return state.filter(task =>
                task.id !== action.id
            )
        case 'COMPLETE_TASK':
            return state.map(task =>
                (task.id === action.id)
                    ? {...task, completed: !task.completed}
                    : task
            )
        default:
            return state
    }
}

export default tasks
