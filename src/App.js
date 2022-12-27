import { useContext } from 'react';
import { RouterProvider } from 'react-router-dom';
import { AuthContext } from './Authentication/AuthProvider';
import Loader from './components/Loader';
import router from './Routes/Routes/Routes';

function App() {
  const {loadingState} = useContext(AuthContext)
  if(loadingState){
    return <Loader></Loader>
  }
  return (
    <section>
      <RouterProvider router={router}></RouterProvider>
    </section>
  );
}

export default App;
