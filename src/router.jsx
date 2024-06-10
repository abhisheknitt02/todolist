import {
  Route,
  createRoutesFromElements,
  createBrowserRouter
} from 'react-router-dom'
import App from './App'
import { FourOFour, LogIn } from './Components';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      <Route path='/' element={<div>Home</div>} />
      <Route path='signup' element={<div>SignUp</div>} />
      <Route path='login' element={<LogIn />} />
      <Route path='*' element={<FourOFour />} />
    </Route>
  )
);