
import {DestinationImage,Name,DestinationItemList} from './styled'

const DestinationItem=(props)=>{
    const {eachItem}=props 
    const {imgUrl,name}=eachItem 

    return(
        <DestinationItemList>
            <DestinationImage src={imgUrl} alt={name}/>
             <Name>{name}</Name>

        </DestinationItemList>
    )

}

export default DestinationItem