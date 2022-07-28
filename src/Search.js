import React, {useRef} from 'react'

function Search(props) {
    console.log(props)


    const inputEl =useRef("")

    const getSearchTerm =() => {
        
        props.searchKeyword(inputEl.current.value)
    }

  return (
    <div className="searchWrapper">
    <input ref={inputEl} type="search" className="search" value={props.term} onChange={getSearchTerm}></input>
    <button>Search here</button> 

    </div>
  )
}

export default Search