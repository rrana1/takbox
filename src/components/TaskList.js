import React from 'react';
import Task from './Task';
import { connect} from 'react-redux';
import {archiveTask, pinTask} from '../lib/redux.js';
import PropTypes from 'prop-types';
// import { defaultTaskData } from './TaskList.stories';

export function PureTaskList({loading, tasks, onPinTask, onArchiveTask}) {
    const events = {
        onPinTask,
        onArchiveTask
    };

    const LoadingRow  = (
        <div className="loading-item">
            <span className="glow-checkbox" />
            <span className="glow-text">
                <span>Loading</span><span>cool</span><span>state</span>
            </span>
        </div>
    );


    if(loading) {
        return <div className="list-items">
            {LoadingRow}
            {LoadingRow}
            {LoadingRow}
            {LoadingRow}
            {LoadingRow}
            {LoadingRow}
        </div>
    }

    if (tasks.length === 0) {
        return (
            <div className="list-items">
                <div className="wrapper-message">
                    <span className="icon-check" />
                    <div className="title-message" >You have no task</div>
                    <div className="subtitle-message" >Sit back and relex</div>
                </div>
            </div>
        );
    }

    const taskInOrder = [
        ...tasks.filter(t => t.state === 'TASK_PINNED'),
        ...tasks.filter(t => t.state !== 'TASK_PINNED')
    ];

    return (
        <div className="list-items">
            {
                taskInOrder.map(task => (
                    <Task key={task.id} task={task} {...events} />                 
                ))
            }
        </div>
    );

}

PureTaskList.prototype = {
    loading: PropTypes.bool.isRequired,
    tasks: PropTypes.arrayOf(Task.prototype.task).isRequired,
    onArchiveTask: PropTypes.func.isRequired,
    onPinTask: PropTypes.func.isRequired
}

PureTaskList.defaultProps = {
    loading: false,
}

export default connect(
    ({tasks}) => ({
        tasks: tasks.filter(t => t.state === "TASK_INBOX" || t.state === "TASK_PINNED"),
    }),
    dispatch => ({
        onArchiveTask: id => dispatch(archiveTask(id)),
        onPinTask: id => dispatch(pinTask(id))
    })
)(PureTaskList)


function TaskList({loading, tasks, onPinTask, onArchiveTask}) {
    const events = {
        onPinTask,
        onArchiveTask
    };

    const LoadingRow  = (
        <div className="loading-item">
            <span className="glow-checkbox" />
            <span className="glow-text">
                <span>Loading</span><span>cool</span><span>state</span>
            </span>
        </div>
    );


    if(loading) {
        return <div className="list-items">
            {LoadingRow}
            {LoadingRow}
            {LoadingRow}
            {LoadingRow}
            {LoadingRow}
            {LoadingRow}
        </div>
    }

    if (tasks.length === 0) {
        return (
            <div className="list-items">
                <div className="wrapper-message">
                    <span className="icon-check" />
                    <div className="title-message" >You have no task</div>
                    <div className="subtitle-message" >Sit back and relex</div>
                </div>
            </div>
        );
    }

    const taskInOrder = [
        ...tasks.filter(t => t.state === 'TASK_PINNED'),
        ...tasks.filter(t => t.state !== 'TASK_PINNED')
    ];

    return (
        <div className="list-items">
            {
                taskInOrder.map(task => (
                    <Task key={task.id} task={task} {...events} />                 
                ))
            }
        </div>
    );

}

//export default TaskList;

TaskList.prototype = {
    loading: PropTypes.bool.isRequired,
    tasks: PropTypes.arrayOf(Task.prototype.task).isRequired,
    onArchiveTask: PropTypes.func,
    onPinTask: PropTypes.func
}

TaskList.defaultProps = {
    loading: false,
};