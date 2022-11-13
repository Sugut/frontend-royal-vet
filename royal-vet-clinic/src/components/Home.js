import React from 'react';
import Search from "./Search"

function Home({allpatients}) {
    return (
        <div>
        <h1 className='header'>Hello!</h1>
        <p id='sub-header'>Which patient are we working on today?</p>
        <Search patients={allpatients}/>
        </div>
    );
}

export default Home;