import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './store';
import { getHealth } from './store/actions';
import * as Layout from './components/layout';
import { Main } from "./components/Main";
import * as Error from './components/error';

function App() {
  const dispatch = useAppDispatch();
  const { loading, health, config } = useAppSelector(state => state.master)

  useEffect(() => {
    dispatch(getHealth());
  }, [])

  return (
    <div id='scroll-container'>
      {loading && <Layout.Preloader />}
      <Layout.PageTransitionBar />
      {!health && <Error.Error500 />}
      {health && ((config as any).isUnderMaintenance === "true" ? <Error.Error503 /> : <Main />)}
    </div>
  )
}

export default App;