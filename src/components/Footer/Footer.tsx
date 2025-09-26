import styles from './Footer.module.css'

export default function Footer(){
    return(
        <footer className={styles.footer}>
           <a href="">Entenda como funciona a técnica de Pomodoro</a> 
           <a href="">PomoClock &copy; {new Date().getFullYear()} </a> 
        </footer>   
 )
    
}