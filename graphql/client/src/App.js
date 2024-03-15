import React from 'react'
import {  gql, useQuery } from '@apollo/client';
const query=gql`
query getTodos{
  getTodos {
    title
    user {
      name
    }
  }

}`
const App = () => {
const {data,loading,error}=useQuery(query)
if(loading){
  return <h1>Loading</h1>}
  else if(error){
    console.log(error)
  }
  return (
    <div>{JSON.stringify(data)}</div>
  )
}

export default App