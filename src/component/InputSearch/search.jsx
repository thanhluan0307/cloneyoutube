import { FaKeyboard, FaMicrophone, FaSearch,FaMinus } from 'react-icons/fa'
import React, { memo, useCallback, useEffect, useState } from 'react'
import Tippy from '@tippyjs/react/headless';
import useDebounce from '../../customHook/useDebounce'
import styles from "./search.module.scss"
import { IconButton, Tooltip } from '@mui/material';
import {fetchingAPI} from "../../fetchingAPI"
import { Link } from 'react-router-dom'
import Wrapper from '../Wrapper/wrapper';

const Search = () => {
    const [searchValue,setSearchValue] = useState('')
    const [searchResult,setSearchResult] = useState([])
    const debounce = useDebounce(searchValue,500)
    const [check,setCheck] = useState(true)
    useEffect(() => {
        if(!debounce.trim()) {
            setSearchResult([])
            return
          }
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
    const handleChange =(e) => {
        const searchValue = e.target.value
        if(!searchValue.startsWith(' ')) {
            setSearchValue(searchValue)
        } 
    }
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
                                const valueData = item.snippet.title
                                let searchValue = ''
                                if(valueData.includes(searchValue)) {
                                    const index = valueData.toLowerCase().indexOf(searchValue)
                                    searchValue = `${valueData.slice(index,searchValue.length + 30)}...` 
                                }
                                return (
                                    <div onClick={handleClear} key={item.etag}>
                                        <Link to={`/video/${item.id.videoId}`} key={item.etag} className={styles.result}>
                                            <FaSearch/>
                                            <span>{searchValue.toLowerCase()}</span>
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
                        onChange={handleChange}
                        onFocus={() => setCheck(true)}
                    />
                    </Tippy>    
                <p><FaKeyboard/></p>
                {searchValue ? <p onClick={handleClear}><FaMinus/></p> : null }
                <Link to={`/search?q=${searchValue}`} className={styles.btnSearch}>
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