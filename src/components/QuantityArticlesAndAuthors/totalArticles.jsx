
const TotalArticles = ({quantityArticles}) => {

    return quantityArticles ? (
        <div>
            <b>Quantity articles: </b><span>{quantityArticles}</span>
        </div>
    ) : null

}

export default TotalArticles;