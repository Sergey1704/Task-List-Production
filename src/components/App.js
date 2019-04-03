import React from 'react'
import Footer from './Footer'
import AddTask from '../containers/AddTask'
import VisibleTaskList from '../containers/VisibleTaskList'

const App = () => (
    <div className="task-app">
        <div className="task-app-header">
            Task List
        </div>
        <VisibleTaskList />
        <Footer />
        <AddTask />
    </div>
)

export default App
