import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import FetchProducts from '../actions/FetchProducts'
import Pagination from '../components/Pagination'

const Products = () => {
  const [record, setRecord] = useState([])
  const [showPerPage, setShowPerPage] = useState(4);
  const [paging, setPaging] = useState({
      start: 0,
      end: showPerPage,
  })

  useEffect(() => {
    const data= FetchProductDetail()   
   }, [])

 const FetchProductDetail = async() => {   
  const data= await FetchProducts()
  setRecord(data.data)
  return data
 }

 const onPaginationChange = (start, end) => {
    setPaging({ start: start, end: end })
 }

  return (
    <>
       <h1>All Products</h1>
        <br/>   
        <Table striped bordered hover>
          <thead>
            <tr>  
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
          {record.slice(paging.start, paging.end).map(Item => (
            <tr key= {Item.id}> 
              <td>{Item.first_name}</td>
              <td>{Item.last_name}</td>
              <td>{Item.email}</td>
            </tr>
          
              ))} 
              
          </tbody>
        </Table>
        <Pagination showPerPage={showPerPage} 
            onPaginationChange={onPaginationChange}
            total={record.length}
        /> 
    </>
  )
}

export default Products
