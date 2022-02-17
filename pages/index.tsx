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
      <div className="grid grid-rows-2 grid-flow-col gap-y-12">
        {console.log(productList, 'return')}
        {productList &&
          productList.map((product) => (
            <div className="Card">
              <div className="">
                <div className="  ">
                  <img className="rounded-sm mb-2" src={product.image} />
                </div>
              </div>
              <div className="p-1 bg-yellow-700 rounded-lg">
                <p className="text-black text-center font-extrabold">
                  {product.name}
                </p>
                <p className="text-black px-2 font-normal">
                  {product.productor}
                </p>
              </div>
            </div>
          ))}
      </div>
    </>
  )
}

export default Home
