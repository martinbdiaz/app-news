import axios from 'axios';

const URLs = {
  search: 'https://newsapi.org/v2/everything?q=',
  headlines: 'https://newsapi.org/v2/top-headlines',
};

const apiKey= 'ec5e517a67be47798aaa0966e7cfb48d';

const headers= {
    'Content-Type': 'application/json',
    Accept: 'application/json',
};

export const getNews = async(query,page) => {
    try {
        const response = await axios.get(`${URLs['search']}${query}`,{
            params:{
                apiKey: apiKey,
                pageSize:20,
                page: page
            },
            headers
        })
        return await response.data;
   } catch(err) {
        console.log(err)
   }
}

export const getHeadlines = async(country, category) => {    
    const params=(category=="") ? {apiKey: apiKey, country: country} : 
    {apiKey: apiKey, country: country, category: category}
    try {
        const response = await axios.get(`${URLs['headlines']}`,{
            params: params,
            headers
        })
        return await response.data;
   } catch(err) {
        console.log(err)
   }
}