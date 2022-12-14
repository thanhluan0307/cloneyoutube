/* eslint-disable react-hooks/exhaustive-deps */
import { FaKeyboard, FaMicrophone, FaSearch,FaMinus } from 'react-icons/fa'
import React, { memo, useCallback, useContext, useEffect, useState } from 'react'
import Tippy from '@tippyjs/react/headless';
import useDebounce from '../../customHook/useDebounce'
import styles from "./search.module.scss"
import { IconButton, Tooltip } from '@mui/material';
import {fetchingAPI} from "../../fetchingAPI"
import { Link } from 'react-router-dom'
import Wrapper from '../Wrapper/wrapper';
import { VideoContext } from '../../videoContext';

const Search = () => {
    const [searchValue,setSearchValue] = useState('')
    const [searchResult,setSearchResult] = useState([])
    const {setListSeachVideo} = useContext(VideoContext)
    const debounce = useDebounce(searchValue,1000)
    const [check,setCheck] = useState(true)
    useEffect(() => {
        if(!debounce.trim()) {
            setSearchResult([])
            return
          }
        fetchingAPI(`search?part=snippet&type=video&maxResults=10&q=${debounce}`)
            .then(res => {
                setListSeachVideo(res.items)
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
                                const valueData = item.snippet.title.toLowerCase()
                                console.log('--------',valueData)
                                let searchValue = ''
                                if(valueData.includes(searchValue)) {

                                    const index = valueData.indexOf(debounce.toLowerCase())
                                    if (index>0) {
                                        searchValue = valueData.slice(index) 
                                    }else {
                                        searchValue = valueData.slice(0)
                                    }
                                }
                                return (
                                    <div onClick={handleClear} key={item.etag} style={{padding:'4px 0'}}>
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
                        placeholder="T??m ki???m"
                        value={searchValue}
                        onChange={handleChange}
                        onFocus={() => setCheck(true)}
                    />
                </Tippy>    
                <p><FaKeyboard/></p>
                {searchValue ? <div style={{display: 'flex',alignItems: 'center',paddingRight:'8px',cursor:'pointer'}} onClick={handleClear}><FaMinus/></div> : null }
                <Link to={`/search?q=${searchValue}`} className={styles.btnSearch}>
                    <FaSearch/>
                </Link>
                <div className={styles.mix}>
                    <Tooltip title="T??m ki???m b???ng gi???ng n??i">
                        <IconButton aria-label="delete">
                            <FaMicrophone className="icon"/>
                        </IconButton>
                    </Tooltip>
                </div>
            </div>   
        </>
    
  )
}

export default memo(Search)