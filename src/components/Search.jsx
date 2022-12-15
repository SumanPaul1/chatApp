import React from 'react';

const Search = () => {
    return (
        <div className='search'>
            <div className="search-form">
                <input type="text" placeholder='Search'/>
            </div>
            <div className="user-chat">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="" />
                <div className="user-chat-info">
                    <span>Aiony</span>
                </div>
            </div>
        </div>
    );
}

export default Search;
