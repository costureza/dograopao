import styles from './style.module.css';
import logo from '../assets/IMG/logo.svg';

export const Header: React.FC = () =>{
  return(
        <header className={styles.headerbg}>
    <div className={styles.container}>
      <a href="./index.html">
        <picture className={styles.logo}><img src={logo} alt=""></picture>
      </a>
      <nav className="nav-links">
        <ul className="header-menu font-1-m">
          <li><a href="./minhasreceitas.html">Minhas Receitas</a></li>
          <li><a href="./addreceita.html">Adicionar Receitas</a></li>
          <li><a href="./sobre.html">sobre nós</a></li>
          <li><a href="./login.html"><i className="fa-regular fa-circle-user"></i></a></li>
        </ul>
      </nav>
    </div>
    </header>

  );
}
