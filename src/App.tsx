import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './store';
import { getHealth } from './store/actions';
import * as Layout from './components/layout';
import { Main } from "./components/Main";
import * as Error from './components/error';

function App() {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { loading, health, config } = useAppSelector(state => state.master)

  useEffect(() => {
    dispatch(getHealth());
  }, [])

  return (
    <Routes location={location} key={location.pathname}>
      <Route path='/*' element={
        <div id='scroll-container'>
          {loading && <Layout.Preloader />}
          <Layout.PageTransitionBar />
          {!health && <Error.Error500 />}
          {health && ((config as any).isUnderMaintenance === "true" ? <Error.Error503 /> : <Main />)}
        </div>} />
    </Routes>
  )
}

export default App;
