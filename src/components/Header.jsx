import "./header.css";
import { NavButtons } from "./data";
const Header = () => {


  const Buttons = (a) => {
    return <div className="Buttons">{a.name}</div>;
  };

  return (
    <div className="Header">
      <div className="Logo">LS</div>
      <div className="Navigation">
        {NavButtons.map(Buttons)}
        <div>
          <div className="Icon">icon</div>
          <div>icon</div>
          <div>icon</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
