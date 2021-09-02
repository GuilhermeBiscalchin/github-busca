import React from 'react';
import Header from '../../components/Header';
import * as S from './styled'

const NoSearch = () =>{
return(
    <>
    <Header/>
    <S.Wrapper>
    <h1>Ainda não pesquisou Usuário</h1>
    </S.Wrapper>
    </>
)
}

export default NoSearch