import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App App-header">

      <div className='div-flex'>

        <div className='div-nav'>

          <div className='div-img'>
            <img className='img-profile' src='/Assets/racheBartmoss.jpg' />
          </div>

          <div className='div-list'>

            <div>
              <a className='nav-li'>Antonio</a>
            </div>
            <div>
              <a className='nav-li' href='sobre-mi'>Sobre Mi</a>
            </div>
            <div>
              <a className='nav-li' >Porfolio</a>
            </div>
            <div>
              <a className='nav-li' >Educacion</a>
            </div>
            <div>
              <a className='nav-li' >Skills</a>
            </div>
            <div>
              <a className='nav-li' >Contacto</a>
            </div>

          </div>

        </div>

        <div className='div-page'>

          <div className='div-section'>

            <div className='div-tittle'>
              <h1 className='tittle-section'>Antonio Rivas</h1>
            </div>

            <div className='div-content'>
              <p className='text-content'>Bienvenido a mi portafolio como Desarrollador Trainee</p>
              <p className='text-content'>Puedes contactar conmigo en mi correo</p>
              <div className='div-buttons'>
                <button className='btn'>Generar CV</button>
                <a className='link'>Ver CV</a>
              </div>
            </div>

          </div>

          <div className='div-section' id='sobre-mi'>

            <div className='div-tittle'>
              <h1 className='tittle-section'>Sobre Mi</h1>
            </div>

            <div className='div-content'>
              <p className='text-content'>
                Joven con pasión por su profesión que busca mejorar en el desarrollo
                web, usuario de sistemas de linux y aplicaciones open source y que busca
                busca convertirse en un desarrolador full stack a la vez que aprende nuevas
                habilidades y tecnologias.
              </p>
              <h1 className='sub-tittle'>Actualmente trabajo como codficador externo para Bansi SA</h1>
            </div>

          </div>

          <div className='div-section'>

            <div className='div-tittle'>
              <h1 className='tittle-section'>Porfolio</h1>

              <div className='div-cards'>

                <div className='card'>
                  <div className='div-img-card'>
                    <img className='img-card' src='https://media0.giphy.com/media/lkceXNDw4Agryfrwz8/giphy.gif?cid=53b38410mpbuqxqk9rqx0lizb5vj0i6122m0ss07w0ptb3e3&ep=v1_gifs_search&rid=giphy.gif&ct=g' />
                  </div>
                  <div className='div-content-card'>
                    <h1 className='tittle-card'>GifExpert App</h1>
                    <p className='text-content'>Una divertida aplicacion para buscar gifs</p>
                    <a className='link'>Ver app</a>
                  </div>

                </div>

                <div className='card'>
                  <div className='div-img-card'>
                    <img className='img-card' src='https://media0.giphy.com/media/3ohhweiVB36rAlqVCE/giphy.gif?cid=53b38410859r2noo4mtwsxsutzjbksi2voz4kt2vm5p19qac&ep=v1_gifs_search&rid=giphy.gif&ct=g' />
                  </div>
                  <div className='div-content-card'>
                    <h1 className='tittle-card'>Oraculo App</h1>
                    <p className='text-content'>Una aplicacion para responder tus preguntas</p>
                    <a className='link'>Ver app</a>
                  </div>
                </div>

              </div>

            </div>

          </div>

          <div className='div-section'>

            <div className='div-tittle'>
              <h1 className='tittle-section'>Educacion</h1>
            </div>

            <p>Poner la informacion academica</p>

          </div>

          <div className='div-section'>

            <div className='div-tittle'>
              <h1 className='tittle-section'>Skills</h1>
            </div>

          </div>

          <div className='div-section'>

            <div className='div-tittle'>
              <h1 className='tittle-section'>Contacto</h1>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
