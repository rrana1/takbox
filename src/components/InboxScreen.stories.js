import React from 'react';

import { PureInboxScreen } from './InboxScreen';
import { Provider } from 'react-redux';

import { defaultTaskData } from './TaskList.stories';
import { action } from '@storybook/addon-actions';

export default {
    component: PureInboxScreen,
    title: 'InboxScreen',
    decorators: [story => <Provider store={store}>{story()}</Provider>]
  };

  const store = {
    getState: () => {
      return {
        tasks: defaultTaskData,
      };
    },
    subscribe: () => 0,
    dispatch: action('dispatch')
  };

  
  export const Default = () => <PureInboxScreen />;
  
  export const Error = () => <PureInboxScreen error="Something" />;