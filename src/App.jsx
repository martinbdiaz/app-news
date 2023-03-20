import { useState } from 'react'
import './App.css'
import Seekers from './components/Seekers';
import Articles from "./components/Articles"
import QuantityArticlesAndAuthors from "./components/QuantityArticlesAndAuthors"

function App() {
  const [search, setSearch] = useState('')
  const [articles, setArticles] = useState([])
  const [quantityArticles, setQuantityArticles] = useState(0)
  
  return (
      <div className="App">
        <h3>NEWS</h3>

        <div id="contenidopestanas">
          
          <div className={'container'}>
          <Seekers 
              search={search}
              setSearch={setSearch}
              setArticles={setArticles}
              setQuantityArticles={setQuantityArticles}
            />
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