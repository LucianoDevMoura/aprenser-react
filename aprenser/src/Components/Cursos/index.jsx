import './stilo.css';
import { CardItem } from "../CardItem";
import Botao from '../Botao';

const itensCard = [
    {
        src:'/public/img/curso-design.png',
        title: 'Design para Web',
        desc: 'O curso Design para Web é perfeito para aqueles que desejam aprender a criar designs atraentes e funcionais para sites e aplicativos móveis.',
    },

    {
        src:'/public/img/curso-design-2.png',
        title: 'Front End Developer',
        desc: 'Aprenda HTML, CSS e Javascript e crei interfaces ricas e semânticas para páginas web, aplicativos on-line ou até mesmo aplicações para aparelhos celulares',
    },

    {
        src:'/public/img/curso-design-3.png',
        title: 'Back End Developer',
        desc: 'Com este curso você vai dominar uma linguagem back-end a sua escolha, um sistema de banco de dados e aprenderá como funciona o protocolo HTTP na prática.',
    }
]

function Cursos (){

    return(
        <>
            <div className="white">
                <h2>Principais Cursos</h2>
                <section className="cursos">
                    <div className='Cards'>
                        <CardItem itensCard={ itensCard }/>
                    </div>
                    <Botao name='Ver mais cursos'/>
                </section>
                
            </div>
        </>
    );
}

export default Cursos;