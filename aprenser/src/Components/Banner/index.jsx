import MulherImg from '../../assets/img/HeroImage.png';
import './stilo.css';


function Banner() {
    return (
        <main className="container">
            <section className="banner">
                <div className="texto">
                    <h1>O saber é o que <br />
                    transforma <br /> o nosso <span>Ser</span></h1>
                </div>
                <div className="bannerMulher">
                    <img src= { MulherImg }
                        alt=" Img Mulher" 
                    />
                </div>

            </section>

        </main>
    );
}

export default Banner;