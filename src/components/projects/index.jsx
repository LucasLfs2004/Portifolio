import { projectsPessoal } from '../../data/projectsPessoal';
import * as C from './styles';

const ProjectsArea = () => {
  return (
    <C.Area>
      <h1>Projetos pessoais</h1>

      {projectsPessoal.map((item, key) =>
        key % 2 == 0 ? (
          <CardProject project={item} />
        ) : (
          <CardProjectInverted project={item} />
        ),
      )}
    </C.Area>
  );
};

export default ProjectsArea;

const CardProject = ({ project }) => {
  return (
    <C.Card>
      <C.Infos>
        <h4>Projeto pessoal</h4>
        <h1>{project.title}</h1>
        <C.Description>
          <p>{project.description}</p>
          <a href={project.link} target='_blank'>
            <img src='/assets/redirectIcon.png' alt='' />
          </a>
        </C.Description>
      </C.Infos>
      <C.ImgCard>
        <C.BgImg>
          <img src={project.img} alt='' />
        </C.BgImg>
      </C.ImgCard>
    </C.Card>
  );
};

const CardProjectInverted = ({ project }) => {
  return (
    <C.Card className='reverse'>
      <C.ImgCard>
        <C.BgImg className='reverse'>
          <img src={project.img} alt='' />
        </C.BgImg>
      </C.ImgCard>
      <C.Infos>
        <h4>Projeto pessoal</h4>
        <h1>{project.title}</h1>
        <C.Description className='reverse'>
          <p className='reverse'>{project.description}</p>
          <a href={project.link} target='_blank'>
            <img src='/assets/redirectIcon.png' alt='' />
          </a>
        </C.Description>
      </C.Infos>
    </C.Card>
  );
};
