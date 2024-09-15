import logo from '../../assets/images/Logo.svg';
import './index.css';
const Logo = () => {
  return (
    <>
      <div>
        <a className="logo" href="/">
          <img src={logo} alt="Logo page" />
          <p className="logoText">BookShelter</p>
        </a>
      </div>
    </>
  );
};

export default Logo;
