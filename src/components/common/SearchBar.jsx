import React from 'react'
import { Input } from 'antd'
const { Search } = Input;

const SearchBar = () => {
  return (
    <Search placeholder="input search text" enterButton="Search" size="medium" loading />
  )
}

export default SearchBar
