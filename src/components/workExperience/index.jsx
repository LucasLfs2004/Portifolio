import * as C from "./styles";

const WorkExperienceCard = ({ work }) => {
  return (
    <C.Card>
      <C.ImgBanner src={work.img} alt={work.title} />
      <C.Content>
        <h3>{work.title}</h3>
        <p>{work.desc}</p>
        <C.ButtonLearnMore>Ver mais</C.ButtonLearnMore>
      </C.Content>
    </C.Card>
  );
};

export default WorkExperienceCard;
