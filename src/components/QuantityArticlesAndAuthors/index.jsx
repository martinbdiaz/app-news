import QuantityAuthors from "../QuantityArticlesAndAuthors/quantityAuthors"
import TotalArticles from "./totalArticles";

const QuantityArticlesAndAuthors = ({articles, quantityArticles}) => {
    
    return (articles.length> 0) ? (
    <>
            <TotalArticles quantityArticles={quantityArticles} />
            <QuantityAuthors articles={articles} />
        </>
    ): null
    
} 

export default QuantityArticlesAndAuthors;