import React from "react";
import HeaderLogoSection from "./HeaderLogoSection";
import Nav from "./Nav";
import SearchBar from "./SearchBar";
import ImgLockinLogo from "./ImgLockinLogo";
import LoginBtn from "./LoginBtn";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <HeaderLogoSection />
        <Nav />
        {}
        <SearchBar />
        <ImgLockinLogo />
        <LoginBtn />
      </header>
    );
  }
}

export default Header;
