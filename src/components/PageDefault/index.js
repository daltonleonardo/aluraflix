import React from 'react';
import Menu from '../Menu';
import styled, { css } from 'styled-components';
import Footer from '../Footer';

const Main = styled.main`
background-color:VAR(--black);
color:VAR(--white);
flex:1;
padding-top: 50px;
padding-left: 5%;
padding-right: 5%;
${({ paddingAll }) => css`
    padding: ${paddingAll};
`}
`;

// fragment tag <> </> ou <React.Fragment> </React.Fragment>
function PageDefault({ children, paddingAll }) {
    return (
        <>
            <Menu paddingAll={paddingAll} />
            <Main>
                {children}
            </Main>
            <Footer />
        </>
    );
}

export default PageDefault;