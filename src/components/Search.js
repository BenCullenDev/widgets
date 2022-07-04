import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('Programming')
    const [results, setResults] = useState([])
    
    console.log(results)

    useEffect(()=> {
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: searchTerm,
                }
            });

            setResults(data.query.search)
        }

        search()
    }, [searchTerm])

    const renderedResults = results.map((result) => {

            const regex = /(<([^>]+)>)/gi;  //NEW
            const cleanSnippet = result.snippet.replace(regex, ""); //NEW 

        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a className="ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`}>Go</a>
                </div>
                <div className="content">
                    <div className="header">{result.title}</div>
                    {cleanSnippet}
                </div>
            </div>
        )
    })


    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input 
                    className="input"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>
            <div className="ui celled list">{renderedResults}</div>
        </div>
    )
}

export default Search