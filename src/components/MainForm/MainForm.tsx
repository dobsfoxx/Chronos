import Container from "../Container/Container"
import Cycles from "../Cycles/Cycles"
import Input from "../Input/Input"
import DefaultButton from "../DefaultButton/DefaultButton"
import { PlayCircleIcon } from "lucide-react"

export default function MainForm(){
    return(
        <Container>
               <form action="" className="form">
                <div className="formRow">
                    <Input 
                    type="text" 
                    id="meuInput" 
                    labelText="task" 
                    className="input" 
                    placeholder="Digite algo"/>
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