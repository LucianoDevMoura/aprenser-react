import Stilo from './Stilo.module.css';
import imgEstudo from '/img/nossa-escola.png';

function Escola() {
    return(
        <div className={ Stilo.darkBlue }>
            <section className= { Stilo.school }>
                <img src= { imgEstudo } alt="imagem mulher estudando" />
                <div className={ Stilo.descricao } >
                    <h2>Nossa Escola</h2>
                    <p>Aprenda habilidades tecnológicas em demanda e alcance seus objetivos de carreira com a nossa escola de tecnologia online. Oferecemos uma ampla gama de cursos online, desde programação e desenvolvimento de software até design gráfico e análise de dados. Nossos instrutores experientes fornecerão a você um ambiente de aprendizado interativo e de suporte para ajudá-lo a adquirir as habilidades necessárias para ter sucesso em sua carreira. Inscreva-se agora e comece sua jornada para se tornar um profissional de tecnologia bem-sucedido.</p>
                </div>
            </section>

        </div>
    );
}

export default Escola;