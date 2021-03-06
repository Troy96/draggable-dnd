import React from 'react';
import ReactDOM from 'react-dom';
import initialData from './initial-data';
import Column from './Column';

class App extends React.Component {
  state = initialData;


  render() {
    return this.state.columnOrder.map(columnID=> {
      const column = this.state.columns[columnID];
      const tasks = column.taskIds.map(taskId=> this.state.tasks[taskId]);
      
      return <Column key={column.id} column={column} tasks={tasks} />
    })
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
