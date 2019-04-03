import { connect } from 'react-redux'
import { completeTask } from '../actions'
import { bindActionCreators } from 'redux'
import TaskList from '../components/TaskList'
import * as TaskActions from '../actions'
import { VisibilityFilters } from '../actions'

const getVisibleTasks = (tasks, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return tasks
        case VisibilityFilters.SHOW_COMPLETED:
            return tasks.filter(t => t.completed)
        case VisibilityFilters.SHOW_ACTIVE:
            return tasks.filter(t => !t.completed)
    }
}

const mapStateToProps = state => ({
    tasks: getVisibleTasks(state.tasks, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TaskActions, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskList)
