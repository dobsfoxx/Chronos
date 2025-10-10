import Container from '../Container/Container';
import Cycles from '../Cycles/Cycles';
import Input from '../Input/Input';
import DefaultButton from '../DefaultButton/DefaultButton';
import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { useRef } from 'react';
import type { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/UseTaksContext';
import { getNextCycle } from './../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions';
import Tips from '../Tips/Tips';



export default function MainForm() {
  const taskNameInput = useRef<HTMLInputElement>(null);
  const { state, dispatch } = useTaskContext();
  
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);
  

  function handleCreateNewTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim();

    if (!taskName) {
      console.log('Input vazio');
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completedDate: null,
      interruptedDate: null,
      duration: state.config[nextCycleType],
      task: taskName,
      type: nextCycleType,
    };

    dispatch({ type: TaskActionTypes.START_TASK, payload: newTask });

    
  }

  function handleInterruptTask() {
    dispatch({ type: TaskActionTypes.INTERRUPT_TASK });
  }

  return (
    <Container>
      <form onSubmit={handleCreateNewTask} action='' className='form'>
        <div className='formRow'>
          <Input
            type='text'
            id='meuInput'
            labelText='task'
            className='input'
            placeholder='Digite algo'
            ref={taskNameInput}
            disabled={!!state.activeTask}
          />
        </div>

        <div className='formRow'>
          <Tips />
        </div>
        {state.currentCycle > 0 && (
          <div className='formRow'>
            <Cycles />
          </div>
        )}

        <div className='formRow'>
          {!state.activeTask && (
            <DefaultButton
              icon={<PlayCircleIcon />}
              type='submit'
              aria-label='Iniciar tarefa'
              title='Iniciar nova Tarefa'
              color='green'
             
            />
          )}
          {!!state.activeTask && (
            <DefaultButton
              type='button'
              aria-label='Parar Tarefa atual'
              title='Parar Tarefa atual'
              icon={<StopCircleIcon />}
              color='red'
              onClick={handleInterruptTask}
            />
          )}
        </div>
      </form>
    </Container>
  );
}
