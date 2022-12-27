import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes/Routes';

function App() {
  return (
    <section>
      <RouterProvider router={router}></RouterProvider>
    </section>
  );
}

export default App;
