import { createContext,  useReducer } from 'react';
import './App.css';
import Display from './Display';
import CreateTask from './CreateTask';
import Navbars from './Navbars';
import {reducer,defaultState} from './Reducers';
import 'bootstrap/dist/css/bootstrap.min.css';
export const TaskContext=createContext();

function App() {

  const [state,dispatch]=useReducer(reducer,defaultState)


  
  return (
    <div >
      <TaskContext.Provider value={{state,dispatch}}>
      <Navbars />
      {state.modalOpen && <CreateTask  />}
      <Display/>
      </TaskContext.Provider>
    </div>
  );
}

export default App;
