import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";
import SearchBar from "./SearchBar";
import CartIcon from "./CartIcon";
import FavoriteButton from "./FavoriteButton";
import SignIn from "./SignIn";
import HeaderMobileMenu from "./HeaderMobileMenu";

const Header = () => {
  return (
    <header className="bg-white sticky top-0 z-50 py-5 backdrop-blur-md">
      <Container
        className="flex items-center justify-between 
        text-gray-950
      "
      >
        <div
          className="w-auto md:w-1/3 flex items-center
        gap-2.5 justify-start md:gap-0
        "
        >
          <HeaderMobileMenu></HeaderMobileMenu>
          <Logo></Logo>
        </div>
        <HeaderMenu></HeaderMenu>
        <div
          className="w-auto md:w-1/3 flex
        items-center justify-end gap-5
        "
        >
          <SearchBar></SearchBar>
          <CartIcon></CartIcon>
          <FavoriteButton></FavoriteButton>
          <SignIn></SignIn>
        </div>
      </Container>
    </header>
  );
};

export default Header;
