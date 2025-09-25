import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react'
import styles from './Menu.module.css'

export default function Menu(){
    return(
        <nav className={styles.menu}>
            <a className={styles.menu__link}>
                <HouseIcon />
            </a>
            
            <a  className={styles.menu__link}>
                <HistoryIcon />
            </a>
            
            <a  className={styles.menu__link}>
                <SettingsIcon />
            </a>
            
            <a  className={styles.menu__link}>
                <SunIcon />
            </a>
        </nav>
    )
}