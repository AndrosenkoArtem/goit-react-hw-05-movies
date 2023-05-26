import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout.jsx';
// import Home from 'pages/HomePage.jsx';
// import Film from 'pages/FilmPage.jsx';
// import Cast from 'pages/CastPage.jsx';
// import Reviews from 'pages/ReviewsPage.jsx';
// import Movies from 'pages/MoviesPage.jsx';

import { lazy } from 'react';

const Home = lazy(() => import('pages/HomePage.jsx'));
const Film = lazy(() => import('pages/FilmPage.jsx'));
const Cast = lazy(() => import('pages/CastPage.jsx'));
const Reviews = lazy(() => import('pages/ReviewsPage.jsx'));
const Movies = lazy(() => import('pages/MoviesPage.jsx'));

export const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="movies" element={<Movies />} />
      <Route path="movies/:movieId" element={<Film />}>
        <Route path="cast" element={<Cast />}></Route>
        <Route path="reviews" element={<Reviews />}></Route>
      </Route>
    </Route>
  </Routes>
);
