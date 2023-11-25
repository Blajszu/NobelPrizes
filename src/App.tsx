import Home from './components/Home/Home.tsx'
import Prizes from './components/PrizesList/PrizesList.tsx'
import Page404 from './components/Page404.tsx'
import { Route, Routes, Navigate  } from 'react-router-dom';


function App() {
    return (
        <Routes>
          <Route path="/:lang" element={<Home />} />
          <Route path="/:lang/nagrody/:year" element={<Prizes />} />
          <Route path="/" element={<Navigate replace to="/en" />} />
          <Route path="/404" element={<Page404 />} />
          <Route path="*" element={<Navigate replace to="/404" />} />
        </Routes>
    )
  }
  
  export default App