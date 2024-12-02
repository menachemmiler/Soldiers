import image from "../assets/image.png";

const Header = () => {
  return (
    <div className="header">
      <div className="leftheader">
        <a href="#">?מה חדש</a>
        <a href="#">תפריט מנות קרב</a>
        <a href="#">צור קשר</a>
      </div>
      <div className="centerheader">
        <h1>מנילה צבאית</h1>
      </div>
      <div className="imgheader">
        <img src={image} alt="image" />
      </div>
    </div>
  );
};

export default Header;
