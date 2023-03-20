const Categories = ({category, setCategory}) => {

    const handleChange = (e) => {
        setCategory (e.target.value); 
    }

    return <>
        <select className="categorySelect" value={category} onChange={handleChange}>
            <option value="">select a category</option>
            <option value="business">Business</option>
            <option value="entertainment">Entertainment</option>
            <option value="health">Health</option>
            <option value="sports">Sports</option>
            <option value="technology">Technology</option>
            <option value="general">General</option>
            <option value="science">Science</option>
        </select>
    </>
}

export default Categories;