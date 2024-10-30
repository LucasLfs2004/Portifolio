import { workExperienceData } from "../../data/experience";
import Header from "../../components/header";
import WorkExperienceCard from "../../components/workExperience";
import * as C from "./styles";

const Home = () => {
  return (
    <C.Container>
      <Header />
      <C.Presentation>
        <h1>Sou desenvolvedor front-end</h1>
        <p className="currentWork">
          Atualmente, estou trabalhando na{" "}
          <i>
            <img src="/assets/logo-pmovil.png" alt="" />
          </i>
          , uma empresa focada no desenvolvimento e solução de produtos
          digitais.
        </p>

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
    </C.Container>
  );
};

export default Home;
