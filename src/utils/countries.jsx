const Countries = ({country, setCountry}) => {
    console.log(country)
    const handleChange = (e) => {
        setCountry(e.target.value); 
    }

    return <>
        <select className="countrySelect" value={country} onChange={handleChange}>
            <option value="co">Select a country</option>
            <option value="ar">Argentina</option>
            <option value="at">Austria</option>
            <option value="au">Australia</option>
            <option value="be">Bélgica</option>
            <option value="br">Brasil</option>
            <option value="ca">Canadá</option>
            <option value="ch">Suiza</option>
            <option value="cn">China</option>
            <option value="co">Colombia</option>
            <option value="cu">Cuba</option>
            <option value="de">Alemania</option>
            <option value="eg">Egipto</option>
            <option value="fr">Francia</option>
            <option value="gb">Reino Unido</option>
            <option value="gr">Grecia</option>
            <option value="hk">Hong Kong</option>
            <option value="hu">Hungría</option>
            <option value="ie">Irlanda</option>                    
            <option value="il">Israel</option>
            <option value="in">India</option>                    
            <option value="it">Italia</option>
            <option value="jp">Japón</option>
            <option value="ma">Marruecos</option>
            <option value="mx">México</option>
            <option value="nz">Nueva Zelanda</option>
            <option value="pt">Portugal</option>
            <option value="ru">Rusia</option>
            <option value="sg">Singapur</option>
            <option value="tr">Turquía</option>
            <option value="us">Estados Unidos de América</option>
            <option value="ve">Venezuela</option>
            <option value="za">Sudáfrica</option>
        </select>
    </>
}

export default Countries;