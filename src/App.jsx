import { useState } from 'react'
import './App.css'
import Seekers from './components/Seekers';
import Articles from "./components/Articles"
import QuantityArticlesAndAuthors from "./components/QuantityArticlesAndAuthors"
// import Contenido from './components/Contenido';

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function App() {
  //const [opcion,setOpcion]=useState(0)
  const [search, setSearch] = useState('')
  const [articles, setArticles] = useState([])
  const [quantityArticles, setQuantityArticles] = useState(0)
  
  return (
      <div className="App">
        <h3>NEWS</h3>

        <div id="contenidopestanas">
          <Routes>
            <Route path="/" element={<Seekers 
              search={search}
              setSearch={setSearch}
              setArticles={setArticles}
              setQuantityArticles={setQuantityArticles}
            />}></Route>
          </Routes>
          

          <div className={'content'}>
            
            <Articles articles={articles} />
            <QuantityArticlesAndAuthors 
              articles={articles}
              quantityArticles={quantityArticles} 
            />
          </div>

        </div>


          

      </div>
  );
}

export default App;