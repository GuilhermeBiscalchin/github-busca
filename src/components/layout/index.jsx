import React from "react";
import Header from "../Header/index";
import * as S from "./styled";



const Layout = ({ children }) => {
 
  return (
    <S.WrapperLayout>
      <Header  />
      {children}
    </S.WrapperLayout>
  );
};

export default Layout;