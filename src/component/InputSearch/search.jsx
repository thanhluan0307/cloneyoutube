import React, { useEffect, useState } from 'react'
import Tippy from '@tippyjs/react/headless';
import { FaKeyboard, FaMicrophone, FaSearch } from 'react-icons/fa'
import useDebounce from '../../customHook/useDebounce'
import styles from "./search.module.scss"
import {fetchingAPI} from "../../fetchingAPI"
import { Link } from 'react-router-dom'
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
      const handleChange =(e) => {
        const searchValue = e.target.value
         if(!searchValue.startsWith(' ')) {
           setSearchValue(searchValue)
         } 
       }
    
  return (
        <>  
            <div className={styles.search}>
                <input 
                    type="text" 
                    placeholder="Tìm kiếm"
                    value={searchValue}
                    onChange={handleChange}
                />
                <p><FaKeyboard/></p>
                <Link to={`search/${debounce}`} className={styles.btnSearch}><FaSearch/></Link>
                <button className={styles.mix}><FaMicrophone/></button>
            </div>

        </>
    
  )
}

export default Search