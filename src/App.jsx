import { DataProvider } from './components/Context/DataContext';
import Home from './components/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {


  return (
    <>
      <DataProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>


        </BrowserRouter>
      </DataProvider>



    </>
  )
}

export default App
