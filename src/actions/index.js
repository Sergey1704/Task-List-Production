let nextTaskId = 3
export const addTask = text => ({
    type: 'ADD_TASK',
    id: nextTaskId++,
    text
})

export const deleteTask = id => ({
    type: 'DELETE_TASK',
    id
})

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})

export const completeTask = id => ({
    type: 'COMPLETE_TASK',
    id
})

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
    SHOW_COMPLETED: 'SHOW_COMPLETED'
}
