import styled from 'styled-components'

export const DestinationSearchContainer=styled.div`
display: flex;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;

`

export const Header=styled.h1`
  color: #252627;
  font-size: 30px;
  font-weight: bold;
`

export const SearchContainer=styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #f1f5f9;
  padding: 5px;
  border-radius: 8px;
  
`

export const SearchInput=styled.input`
   background-color: transparent;
   border: none;
   outline: none;

`
export const ImageIcon=styled.img`
      width: 32px;
      height: 32px;
      border-radius:10px ;

      
`

export const ListContainer=styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style-type: none;
  justify-content: center;
  align-items: center;
  width: 100%;
`