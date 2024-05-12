const AboutUsCard = (props) => {
  return (
      <div>
          <img src={props.icon} alt="icon" />
          <h3> {props.title} </h3>
          <p> {props.description} </p>
          <p> {props.author} </p>
      </div>
  )
};

export default AboutUsCard;
