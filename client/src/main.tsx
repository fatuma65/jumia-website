import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import {stores} from './redux/store.jsx'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <Provider store={stores}>
  <App />
  </Provider>
  
  </BrowserRouter>,
)
