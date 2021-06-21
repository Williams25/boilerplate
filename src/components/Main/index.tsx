import * as S from "./styles";

export const Main = () => {
  return (
    <S.Wrapper>
      <S.Logo
        src="/img/logo.svg"
        alt="Imagem de um átomo e react avançado escrito ao lado"
      />
      <S.Title>React avançado</S.Title>
      <S.Description>TypeScript, React, NextJS</S.Description>
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="um desenvolver de frete ao computador"
      />
    </S.Wrapper>
  );
};
