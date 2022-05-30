import React, {useState} from 'react';

export const useHome = () => {
  const [tasks, setTasks] = useState(['milk', 'coffee', 'orange']);
  const [searchText, setSearchText] = useState('');

  //! add new task
  const addTask = task => {
    if (task == null) return;
    setTasks([...tasks, task]);
  };

  //! delete task
  const deleteTask = deleteIndex => {
    setTasks(tasks.filter((value, index) => index != deleteIndex));
  };

  return {
    tasks,
    setTasks,
    addTask,
    deleteTask,
    searchText,
    setSearchText,
  };
};
