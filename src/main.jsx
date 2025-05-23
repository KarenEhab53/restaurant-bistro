import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import {BlogProvider} from './context/BlogContext.jsx'; // No curly braces

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
<BlogProvider>
      <App />
</BlogProvider>
  </BrowserRouter>

)
