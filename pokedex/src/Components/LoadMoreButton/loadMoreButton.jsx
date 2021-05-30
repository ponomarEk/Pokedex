import React, { useState } from 'react';
import './loadMoreButton.css';

const LoadMoreButton = (props) => {
    const { getData } = props;
    const [id, setId] = useState(12)
    const loadMore = () => {
        getData(`https://pokeapi.co/api/v2/pokemon/?limit=12&&offset=${id}`);
        setId(id + 12);
    }
    return (
        <div className={'button'} onClick={loadMore}>
            Load More
        </div>
    )
}

export default LoadMoreButton;