import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getData } from '../../Redux/Actions/actions';
import './loadMoreButton.css';

const LoadMoreButton = () => {
    const dispatch = useDispatch();
    const [id, setId] = useState(12);
    const loadMore = () => {
        dispatch(getData(`https://pokeapi.co/api/v2/pokemon/?limit=12&&offset=${id}`));
        setId(id + 12);
    }
    return (
        <div className={'button'} onClick={loadMore}>
            Load More
        </div>
    )
}

export default LoadMoreButton;