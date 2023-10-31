import React from 'react';
import {Link} from "react-router-dom";


function HomePage() {
    return (
        <div>
            <h1>Home Page</h1>
            <ul>
                <li><Link to="rickandmorty">Rick and Morty</Link></li>
                <li><Link to="moviepage">Movie Page</Link></li>
                <li><Link to="pokeApi">Pokemon Page</Link></li>
                <li><Link to="json">Blog</Link></li>
                <li><Link to="randomuser">Random User</Link></li>
                <li><Link to="fakestore">Fake Store</Link></li>
                <li><Link to="other">Other Page</Link></li>
            </ul>
        </div>
    );
}

export default HomePage;