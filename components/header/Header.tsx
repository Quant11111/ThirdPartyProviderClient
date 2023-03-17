import React from "react";
import HeaderWrapper from "./HeaderWrapper";
import LeftSection from "./LeftSection";
import Image from "next/image";
import logo from "../../media/logo.png";
import Link from "next/link";
import RightSection from "./navbar/RightSection";
import NavButton from "./navbar/NavButton";
import MenuButton from "./navbar/MenuButton";
import { useState } from "react";

type Props = {};

const Header = (props: Props) => {
  const [open, setOpen] = useState(false);
  const isOpen = open === true;

  const toogleOpen = () => {
    setOpen(!open);
  };

  return (
    <HeaderWrapper>
      <Link href="/">
        <LeftSection>
          <Image src={logo} alt="logo" fill={true} />
        </LeftSection>
      </Link>
      <RightSection open={isOpen}>
        <NavButton>Home</NavButton>
        <NavButton>Become 3rdP</NavButton>
        <NavButton>Coucou</NavButton>
        <NavButton>Coucou</NavButton>
      </RightSection>
      <MenuButton onClick={toogleOpen}>
        <div></div>
        <div></div>
        <div></div>
      </MenuButton>
    </HeaderWrapper>
  );
};

export default Header;
