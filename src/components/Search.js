import React, { useState } from "react";

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('')
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
        </div>
    )
}

export default Search