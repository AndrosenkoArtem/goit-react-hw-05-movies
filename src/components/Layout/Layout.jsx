import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { StyledLink, Ul, Li } from './Layout.styled';

export const Layout = () => (
  <>
    <header>
      <nav>
        <Ul>
          <Li>
            <StyledLink to="/">Home</StyledLink>
          </Li>
          <Li>
            <StyledLink to="movies">Movies</StyledLink>
          </Li>
        </Ul>
      </nav>
    </header>
    <main>
      <Suspense>
        <Outlet />
      </Suspense>
    </main>
  </>
);
