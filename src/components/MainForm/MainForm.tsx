import Container from "../Container/Container"
import Cycles from "../Cycles/Cycles"
import Input from "../Input/Input"
import DefaultButton from "../DefaultButton/DefaultButton"
import { PlayCircleIcon } from "lucide-react"
import { useState } from "react"



export default function MainForm(){
   const [taskName, setTaskName] = useState('')
   

   function handleCreateNewTask(e: React.FormEvent<HTMLFormElement>){
      e.preventDefault()
      console.log('Deu certo')

   }
   return(

        <Container>
               <form  onSubmit={handleCreateNewTask} action="" className="form">
                <div className="formRow">
                    <Input 
                    type="text" 
                    id="meuInput" 
                    labelText="task" 
                    className="input" 
                    placeholder="Digite algo"
                    value={taskName}
                    onChange={e=> setTaskName(e.target.value)}/>
                </div>
                
                <div className="formRow">
                   <p>Lorem ipsum dolor sit amet.</p>
                </div>

                 <div className="formRow">
                   <Cycles />
                </div>

                <div className="formRow">
                   <DefaultButton icon={<PlayCircleIcon />} color="red"/>
                </div>

               </form>
            </Container> 
    )
}