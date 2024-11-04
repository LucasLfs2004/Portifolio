import * as C from './styles';

const Footer = () => {
  return (
    <C.Footer>
      <h1>Contato</h1>
      <C.Row>
        <p>
          Atualmente estou procurando ingressar uma equipe onde possa
          desenvolver ideias e propostas inovadoras. Tem uma oportunidade ou
          ideia de projeto, entre em contato.
        </p>
        <div>
          <a href='mailto:lucas_lfs04@outlook.com'>lucas_lfs04@outlook.com</a>
          <C.SocialMedia>
            <a href='https://www.instagram.com/lucas__silvafr/' target='_blank'>
              <img src='/assets/instagramIcon.png' alt='' />
            </a>
            <a href='https://www.linkedin.com/in/lucas-sil-va/' target='_blank'>
              <img src='/assets/linkedinIcon.png' alt='' />
            </a>
            <a href='https://github.com/LucasLfs2004' target='_blank'>
              <img src='/assets/githubIcon.png' alt='' />
            </a>
          </C.SocialMedia>
        </div>
      </C.Row>
    </C.Footer>
  );
};

export default Footer;
