import styled from "styled-components";
export const AppWrapper = styled.div`
  background: ${({ theme }) => theme.colors.background.normal};
  flex-wrap: wrap;
  padding-top: ${({ theme }) => `${theme.spacing.xl}px`};
  padding-bottom: ${({ theme }) => `${theme.spacing.xl}px`};
  padding-left: ${({ theme }) => `${theme.spacing.s}px`};
  padding-right: ${({ theme }) => `${theme.spacing.s}px`};
  min-height: 100vh;
`;