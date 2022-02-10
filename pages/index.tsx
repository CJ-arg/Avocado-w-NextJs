import React, { useEffect, useState } from 'react'

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
      {console.log(productList, 'return')}
      {productList &&
        productList.map((product) => (
          <div className="w-64 h-64 ">
            <p>{product.name}</p>
            <p>{product.productor}</p> <img src={product.image} />
          </div>
        ))}
    </div>
  )
}

export default Home
