import styles from './Header.module.css';

import igniteLogo from '../assets/ignite-logo.svg';

console.log(igniteLogo);

export function Header() {
    return (
        <div>
            <header className={styles.header}>
                <img src={igniteLogo} alt="Ignite Logo"></img>
                <p className={styles.title}>Ignite Feed</p>
            </header>            
        </div>
    )
}