import React from 'react';

class Nav extends React.Component {
    render() {
        return (
            <nav className='nav'>
                <ul>
                    <li>
                        Home
                    </li>
                    <li>
                        New Question
                    </li>
                    <li>
                        Leader Board
                    </li>
                </ul>
                <ul>
                    <li>
                        Hello, Tyler
                    </li>
                    <li className='avatar-logo'>
                        <img></img>
                    </li>
                    <li>
                        Logout
                    </li>
                </ul>
            </nav>
        );
    }
};

export default Nav;