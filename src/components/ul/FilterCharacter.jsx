import { useState } from "react"
import {debounce} from 'lodash'
const FilterData =(filtereddata)=>{
    
    const [query, setQuery] = useState("")
    
    const handlerEvent = debounce((value) =>{
        setQuery(value)
        filtereddata(value)
    },500)
    
    return (
        <div className="search">
            <input type='text' value={query} onChange={(e)=> handlerEvent(e.target.value)}/>
        </div>
    )
}
export default FilterData