import React, { useState } from 'react'
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router';
import { useStateValue } from '../store/StateProvider';
import { actionTypes } from '../store/reducer';

function Search({ hideButtons = false }) {
    const [{ term }, dispatch] = useStateValue();

    const [input, setInput] = useState(term || '');
    const history = useHistory();
    const search = e => {
        e.preventDefault();
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        });
        history.push('/search');
    }
    return (
        <form className='search'>
            <div className="search_input">
                <SearchIcon className='search_inputIcon' />
                <input value={input} onChange={e => setInput(e.target.value)} />
                <MicIcon />
            </div>
            <div className="search_buttons">
                <Button type='submit' onClick={search} variant='outlined' className={`${hideButtons && 'search_buttonsHidden'}`}>
                    Google Search
                </Button>
                <Button variant='outlined' className={`${hideButtons && 'search_buttonsHidden'}`}>
                    I'm Feeling Lucky
                </Button>
            </div>
        </form>
    )
}

export default Search
