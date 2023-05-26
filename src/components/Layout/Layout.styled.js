import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  &.active {
    color: red;
  }
`;
export const Ul = styled.ul`
  display: flex;
  list-style: none;
`;
export const Li = styled.li`
  font-weight: 600;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;
