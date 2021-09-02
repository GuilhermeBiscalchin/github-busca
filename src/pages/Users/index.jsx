import React from 'react';
import Header from '../../components/Header';
import useGithub from '../../hooks/github-hooks'
import * as S from './styled'

const Users = () => {
const {githubState} = useGithub();
    return(
        <>
        <Header/>
        <S.Wrapper>
            <S.WrapperImage src = {githubState} alt="Avatar do usuário"/>
            <S.WrapperInfoUser>
                <div>
                    <h1>{githubState}</h1>
                    <S.WrapperUserGeneric>
                        <h3>Username:</h3>
                        <a href = {githubState} target='_blank'
                        rel='noreferrer'>{githubState}</a>
                    </S.WrapperUserGeneric>
                    <S.WrapperUserGeneric>
                        <h3>Company:</h3>
                        <span>{githubState}</span>
                    </S.WrapperUserGeneric>
                    <S.WrapperUserGeneric>
                        <h3>Location:</h3>
                        <span>{githubState}</span>
                    </S.WrapperUserGeneric>
                    <S.WrapperUserGeneric>
                        <h3>Blog:</h3>
                        <a href = {githubState} target="_blank" rel='noreferrer'>{githubState}</a>
                    </S.WrapperUserGeneric>
                </div>
                <S.WrapperStatusCount>
                    <div>
                        <h4>Follwers</h4>
                        <span>{githubState}</span>
                    </div>
                    <div>
                        <h4>Followings</h4>
                        <span>{githubState}</span>
                    </div>
                    <div>
                        <h4>Gists</h4>
                        <span>{githubState}</span>
                    </div>
                    <div>
                        <h4>Repos</h4>
                        <span>{githubState}</span>
                    </div>
                </S.WrapperStatusCount>
            </S.WrapperInfoUser>
        </S.Wrapper>
        </>
    )
}

export default Users