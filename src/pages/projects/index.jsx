import Footer from '../../components/footer';
import Header from '../../components/header';
import ProjectsArea from '../../components/projects';
import * as C from './styles';

const Projects = () => {
  return (
    <C.Container>
      <Header />
      <ProjectsArea />
      <Footer />
    </C.Container>
  );
};

export default Projects;
