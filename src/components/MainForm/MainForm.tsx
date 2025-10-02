import Container from '../Container/Container';
import Cycles from '../Cycles/Cycles';
import Input from '../Input/Input';
import DefaultButton from '../DefaultButton/DefaultButton';
import { PlayCircleIcon } from 'lucide-react';
import { useRef } from 'react';
import type { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/UseTaksContext';
import { getNextCycle } from './../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { formatedSecondsToMinutes } from '../../utils/formatSecondsToMinutes';

export default function MainForm() {
  const taskNameInput = useRef<HTMLInputElement>(null);
  const { state, setState } = useTaskContext();
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle)

  function handleCreateNewTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value;

    console.log(taskName);

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
    const secondsRemaining = newTask.duration * 60;

    setState(prevState => {
      return {
        ...prevState,
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining,
        formattedSecondsRemaining: formatedSecondsToMinutes(secondsRemaining),
        tasks: [...prevState.tasks, newTask],
        config: { ...prevState.config },
      };
    });
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
          <p>Próximo intervalo é de 25 minutos</p>
        </div>
         {state.currentCycle > 0 && (
      
        <div className='formRow'>
          <Cycles />
        </div>
        )}

        <div className='formRow'>
          <DefaultButton icon={<PlayCircleIcon />} color='red' />
        </div>
      </form>
    </Container>
  );
}
