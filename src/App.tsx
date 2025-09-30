
import Home from './pages/Home/Home';

import './styles/globals.css';
import './styles/theme.css';


import TaskContextProvider from './contexts/TaskContext/TaskContextProvider';


export default function App() {


  return (
  <TaskContextProvider >
    <Home />
  </TaskContextProvider>
  );
}
