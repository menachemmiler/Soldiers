import tank_image from "../assets/tank_image.png";
import Form from "./Form";

const Main = () => {
  return (
    <div className="main">
      <div className="tank_image">
        <h1>טופס העדפות שירות צבאי</h1>
        <h3>מלא את העדפותיך לשירות הצבאי</h3>
      </div>
      <Form />
    </div>
  );
};

export default Main;
