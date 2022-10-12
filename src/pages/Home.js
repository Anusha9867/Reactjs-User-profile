import React from 'react';

const Home = (props) => {
    return (
        <div>
            {props.name ? 'Hi ' + props.name + ' Welcome to the website': props.message}
        </div>
    );
};

export default Home;
