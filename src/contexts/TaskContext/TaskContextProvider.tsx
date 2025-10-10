import { useEffect, useReducer } from 'react';
import { initialTaskState } from './initialTaskState';
import { TaskContext } from './TaskContext';
import { taskReducer } from './taskReducer';
import { TimerWorkerManager } from '../../workers/TimerWorkerManager';
import { TaskActionTypes } from './taskActions';


type TaskContextProviderProps = {
  children: React.ReactNode;
};

export default function TaskContextProvider({
  children,
}: TaskContextProviderProps) {
  
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);

  const worker = TimerWorkerManager.getInstance();

  worker.onmessage(e => {
    const countDonwSeconds = e.data
    console.log(countDonwSeconds);

    
    if(countDonwSeconds <=0){
      dispatch({type: TaskActionTypes.COMPLETE_TASK});
      console.log('Worker encerrado por contagem zerada.');
      worker.terminate();
    }else{
       dispatch({
      type: TaskActionTypes.COUNT_DOWN, 
      payload: {secondsRemaining: countDonwSeconds}
    });
  }
       
 });
  useEffect(() => {
    if (!state.activeTask) {
      console.log('Worker encerrado por falta de tarefa ativa.');
      worker.terminate();
    }
      worker.postMessage(state);
  }, [worker, state]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
