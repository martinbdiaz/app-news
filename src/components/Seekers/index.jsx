import { useState } from "react"
import {getNews, getHeadlines } from "../../request/request"
import Categories from "../../utils/categories"
import Countries from "../../utils/countries"
import lupa from  '../../assets/magnifying-glass-thumbnail.png'
import "./index.css"

const Seekers = ({search,setSearch,setArticles,setQuantityArticles}) =>{
    const [category, setCategory] = useState('')
    const [country, setCountry] = useState('co')
    const [loading, setLoading] = useState(false)
    const [page,setPage] = useState(1)
    const [headline,setHeadline] = useState(false)

    const handleChange = (e) => {
        setSearch(e.target.value); 
    }

    const searchQuery = async (search) =>{
        setLoading(true)
        const response = await getNews(search,page)
        setLoading(false)
        setArticles(response.articles)
        setQuantityArticles(response.totalResults)
    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          // 👇 Get input value
          searchQuery(search);
        }
    };

    const searchHeadlines = async (country, category) =>{
        setLoading(true)
        const response = await getHeadlines(country, category)
        setLoading(false)
        setArticles(response.articles)
        setQuantityArticles(response.totalResults)
    }
    
    return <>
        <div className="searchContainer">
            <div className="searchContent">
                {!headline?<input type="search" className="searchInput" placeholder="Search articles" value={search} onChange={handleChange} onKeyDown={handleKeyDown}></input> :
                <div className="searchFilter">    
                    <Countries  country={country} setCountry={setCountry}/>
                    <Categories category={category} setCategory={setCategory} />
                </div>}
                <button className={`searchButton  ${loading&&"lds-dual-ring"}`} onClick={()=>{
                    !loading && !headline ? searchQuery(search) : searchHeadlines(country,category)
                    
                }}>                
                {!loading&&<img src={lupa} alt="" />}
                </button>
            </div>
            <span className="linkSearch" onClick={()=>setHeadline(!headline?true:false)}>{!headline?"View headlines by country or category":"Search by keyword"}</span>
                       
        </div> 

    </>
}

export default Seekers