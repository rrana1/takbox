import React from 'react';
import { action} from '@storybook/addon-actions';
import Task from './Task';

export default {
    component: Task,
    title: 'Task',
    excludeStories: /.*Data$/,
}

export const taskData = {
    id: 1,
    title: 'Test task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2020, 0, 1, 9, 0),
};

export const actionData = {
    onPinTask: action('onPinTask'),
    onArchiveTask: action('onArchiveTask'),
};

export const Defaut = () => <Task task={ {...taskData}} {...actionData} />

export const Pinned = () => <Task task={{...taskData, state: 'TASK_PINNED'}} {...actionData} />

export const Archived = () => <Task task={{...taskData, state: 'TASK_ARCHIVED'}} {...actionData} />
