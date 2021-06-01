import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html{
        font-size: 62.5%;
    }

    body{
        background-color:#2b6684;
        color:white;
    }
`;

export const Contenedor = styled.main`
    text-align: center;
    margin-left:auto;
    margin-right:auto;
    margin-top:10rem;
    width:50rem;
    height:35rem;
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
`;

export const Titulo = styled.h1`
    font-size:5rem;

    ${props => props.principal && css`
        grid-row:1;
        grid-column:1/3;
    `};

    ${props => props.subTitulo && css`
        font-size: 3rem;
    `};
`;

export const Seccion = styled.section`
    ${props => props.corteTiempo && css`
        grid-column:1;
        grid-row:2;
    `};

    ${props => props.sesionTiempo && css`
        grid-column:2;
        grid-row:2;
    `};

    ${props => props.relojTiempo && css`
        grid-row:3;
        grid-column:1/3;
    `};
`;

export const Borde = styled.div`
    margin-left:auto;
    margin-right:auto;
    border:1rem;
    border-radius:6rem;
    border-style:solid;
    border-color:#032e42;
    width:25rem;  
`;

export const Numeros = styled.span`
    font-size:3rem;
`;

export const Botones = styled.button`
    border: none;
    font-size:3rem;
    font-weight: bold;
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: inherit;
    margin:1rem;
`;

export const Reloj = styled.p`
    font-size:7rem;
`;