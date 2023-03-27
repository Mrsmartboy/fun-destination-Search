import {useState,useRef,useEffect} from 'react'
import DestinationItem from '../DestinationItem'
import {DestinationSearchContainer,Header,SearchContainer,SearchInput,ImageIcon,ListContainer} from './styled'

const DestinationSearch=(props )=>{
    const {destinationsList}=props 
    const [searchInput,setSearchInput] = useState("")
    const data=useRef(null)

    useEffect(()=>{
        data.current.focus()
        
    },[])

    const onChangeInput=(event)=>{
        setSearchInput(event.target.value)
    }

    const filteredResults= destinationsList.filter(eachItem=>(
        eachItem.name.toLowerCase().includes(searchInput.toLowerCase())
    ))

 
    return(
        <DestinationSearchContainer>
            <Header>Destination Search</Header>
            <SearchContainer>
                <SearchInput type="search" placeholder="Search" onChange={onChangeInput} ref={data}/>
                <ImageIcon alt="Search Icon" src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"/>
            </SearchContainer>
            <ListContainer>
             {filteredResults.map(eachItem=>(
                <DestinationItem eachItem={eachItem} key={eachItem.id}/>
             ))}
            </ListContainer>
        </DestinationSearchContainer>
    )


}

export default DestinationSearch