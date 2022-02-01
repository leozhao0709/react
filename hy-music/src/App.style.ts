import styled from '@emotion/styled';
import { AppProps } from './App.props';

export const AppWrapper = styled.div<AppProps>`
  width: 200px;
  height: 100px;
  background-color: ${(prop) => prop.backgroundColor || 'pink'};
`;
