import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'

const Home = () => {
  const [productList, setProductList] = useState<TProduct[]>([])

  useEffect(() => {
    window
      .fetch('/api/avo/')
      .then((response) => response.json())
      .then(({ data, length }) => {
        setProductList(data)
        console.log(productList, data)
      })
  }, [])

  return (
    <div>
      <Navbar />
      {console.log(productList, 'return')}
      {productList && productList.map((product) => <p>{product.name}</p>)}
      <h1>HOLA MUNDO!!!</h1>
    </div>
  )
}

export default Home
