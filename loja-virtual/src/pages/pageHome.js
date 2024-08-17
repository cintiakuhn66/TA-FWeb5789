import './pageHome.css'
import Busca from '../component header/compHeader';

import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="container">
            <header id="busca">
                <Busca/>
            </header>
            <main>
            <div className='listaProdutos'>
            <section1>
                <img src='./img/item1.png'></img>

            </section1>
            <section2>
              

            </section2>
            </div>
            </main>
            <footer>
            <Link to="/produtos">Carrinho</Link>
            </footer>
        </div>
    );
}

export default Home;