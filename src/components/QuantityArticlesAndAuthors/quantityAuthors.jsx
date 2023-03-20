const QuantityAuthors = ({articles }) => {
    const authorsTemp=articles?.map(actual=>actual.author)
    const uniqueAuthors = authorsTemp?.filter(function (element,index,author) {
        return author.indexOf(element) === index;
    });

    return (articles.length>0) ? (
        <div className="quantityAuthors">
            <span><b>Quantity of authors: </b>{uniqueAuthors.length}</span>
        </div>
    ) : null
}

export default QuantityAuthors;