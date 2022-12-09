import React, { memo, useCallback, useEffect, useState } from 'react'
import Tippy from '@tippyjs/react/headless';
import { FaKeyboard, FaMicrophone, FaSearch,FaMinus } from 'react-icons/fa'
import useDebounce from '../../customHook/useDebounce'
import styles from "./search.module.scss"
import {fetchingAPI} from "../../fetchingAPI"
import { Link } from 'react-router-dom'
import Wrapper from '../Wrapper/wrapper';
import { IconButton, Tooltip } from '@mui/material';

const Search = () => {
    const [searchValue,setSearchValue] = useState('')
    const [searchResult,setSearchResult] = useState([])
    const debounce = useDebounce(searchValue,500)
    const [check,setCheck] = useState(true)
    useEffect(() => {
        fetchingAPI(`search?part=snippet&type=video&maxResults=10&q=${debounce}`)
            .then(res => {
                setSearchResult(res.items)
            })
            .catch(error => console.log(error))
      },[debounce])
    const handleClear = useCallback(() =>{
        setSearchValue('')
        setSearchResult([])
    },[])
    const handleHide = useCallback(() => {
        setCheck(false)
    },[])
    console.log(searchResult)
  return (
        <>  
         
                <div className={styles.search}>
                    <Tippy
                        placement="bottom-start"
                        interactive
                        visible={check && searchResult.length > 0 && searchValue !== ''}
                        render={attrs => (
                        <div className={styles.searchResult} tabIndex="-1" {...attrs}>
                            <Wrapper>
                                {searchResult.map(item => {
                                    return (
                                        <div onClick={handleClear} key={item.etag}>
                                            <Link to={`/video/${item.id.videoId}`} key={item.etag} className={styles.result}>
                                                <FaSearch/>
                                                <span>{item.snippet.channelTitle}</span>
                                            </Link> 
                                        </div>
                                    )
                                })}
                            
                            </Wrapper>
                        </div>
                        )}
                        onClickOutside = {handleHide}
                    >
                        <input 
                            type="text" 
                            placeholder="Tìm kiếm"
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            onFocus={() => setCheck(true)}
                        />
                     </Tippy>    
                    <p><FaKeyboard/></p>
                    {searchValue ? <p onClick={handleClear}><FaMinus/></p> : null }
                                <Link to={`search?${debounce}`} className={styles.btnSearch}>
                                    <FaSearch/>
                                </Link>
                    <button className={styles.mix}>
                    <Tooltip title="Tìm kiếm bằng giọng nói">
                        <IconButton aria-label="delete">
                            <FaMicrophone className="icon"/>
                        </IconButton>
                    </Tooltip>
                        </button>
                </div>   
        </>
    
  )
}

export default memo(Search)