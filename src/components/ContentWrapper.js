import React, { useState, useEffect } from 'react'
import TopBar from './TopBar'
import ContentRowTop from './ContentRowTop'
import Footer from './Footer'
import '../index.css'

function ContentWrapper() {
  const [users, setUsers] = useState()
  const [products, setProducts] = useState()
  const [productsData, setProductsData] = useState([])
  const [productsCategory, setProductsCategory] = useState()

  let APIUrlUser = 'http://localhost:3000/api/listarUsuario'
  let APIUrlProduct = 'http://localhost:3000/api/listarProducto'

  useEffect(() => {
    fetch(APIUrlUser, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      cache: 'default',
    })
      .then((res) => res.json())
      .then((users) => {
        setUsers(users.count)
      })
  }, [users])

  useEffect(() => {
    fetch(APIUrlProduct, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      cache: 'default',
    })
      .then((res) => res.json())
      .then((products) => {
        setProducts(products.totalProducts)
        setProductsCategory(products.countByCategorie.length)
        setProductsData([...products.products])
        console.log(productsData);
        console.log(products);
      })
  }, [products])

  return (
    <React.Fragment>
      <div id="content-wrapper" className="d-flex flex-column fondo">
        <div id="content">
          <TopBar />
          <ContentRowTop
            users={users}
            products={products}
            productsCategory={productsCategory}
            productsData={productsData}
          />
          <Footer />
        </div>
      </div>
    </React.Fragment>
  )
}
export default ContentWrapper
