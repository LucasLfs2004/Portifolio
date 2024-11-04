import { workExperienceData } from '../../data/experience';
import Header from '../../components/header';
import WorkExperienceCard from '../../components/workExperience';
import * as C from './styles';
import Footer from '../../components/footer';

const Home = () => {
  return (
    <C.Container>
      <Header />
      <C.Presentation>
        <C.Banner>
          <C.RowName>
            <img src='/assets/arrow.png' />
            <p>
              Olá, me chamo <span>Lucas Ferreira</span>
            </p>
          </C.RowName>
          <C.LineAvatar>
            <C.Avatar>
              <img src='/assets/luka.PNG' alt='' />
            </C.Avatar>
            <C.Lead>
              <h3>Um Dev Frontend, porque</h3>
              <h1>
                uma boa experiência começa no <span>front-end</span>.
              </h1>
              <span>Afinal, é ele que você xinga ou elogia!</span>
            </C.Lead>
          </C.LineAvatar>
        </C.Banner>
        <C.CurrentWork>
          <h1>Sou desenvolvedor front-end</h1>
          <p className='currentWork'>
            Atualmente, estou trabalhando na{' '}
            <i>
              <img src='/assets/logo-pmovil.png' alt='' />
            </i>
            , uma empresa focada no desenvolvimento e solução de produtos
            digitais.
          </p>
        </C.CurrentWork>

        <C.Description>
          Atuando na área de desenvolvimento frontend com foco em mobile a 2
          anos, autodidata e movido por desafios. <br />
          Busco a melhor forma de desenvolver um projeto em equipe, equilibrando
          entrega e qualidade, sou responsável pelo desenvolvimento de novos
          projetos, implementação de novas features, resolução de bugs e
          manutenção e atualização de plataformas legadas, como sites e
          aplicativos.
        </C.Description>
      </C.Presentation>
      <C.WorkXpArea>
        <h1>Experiência Profissional</h1>
        <C.CardWorkArea>
          {workExperienceData.map((item, key) => (
            <WorkExperienceCard work={item} key={key} />
          ))}
        </C.CardWorkArea>
      </C.WorkXpArea>
      <C.Stack>
        <h2>Atualmente estou procurando ingressar uma equipe</h2>
        <p>
          onde possa desenvolver ideias e propostas inovadoras.
          <br />
          Essas são as tecnologias que tenho experiência
        </p>
        <img src='/assets/stack.png' alt='' />
      </C.Stack>
      <Footer />
    </C.Container>
  );
};

export default Home;
