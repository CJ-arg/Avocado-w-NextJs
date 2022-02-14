import React, { useEffect, useState } from 'react'

const Home = () => {
  const [productList, setProductList] = useState<TProduct[]>([])

  useEffect(() => {
    window
      .fetch('/api/avo/')
      .then((response) => response.json())
      .then(({ data, length }) => {
        setProductList(data)
      })
  }, [])

  return (
    <>
      <div id="tab_bar"></div>
      <div className="grid grid-rows-2 grid-flow-col gap-2">
        {console.log(productList, 'return')}
        {productList &&
          productList.map((product) => (
            <div className="w-56">
              <img className=" rounded-sm" src={product.image} />
              <p>{product.name}</p>
              <p>{product.productor}</p>
            </div>
          ))}
      </div>
    </>
  )
}

export default Home
