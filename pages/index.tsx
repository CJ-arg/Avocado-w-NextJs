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
      <div className="grid grid-rows-2 grid-flow-col gap-2 ">
        {console.log(productList, 'return')}
        {productList &&
          productList.map((product) => (
            <div className="Card ">
              <div className="w-full gap-2">
                <div className="w-full h-3/5 rounded-t-lg ">
                  <img className=" " src={product.image} />
                </div>
              </div>
              <div className="p-1 w-full  bg-yellow-700 rounded-b-lg">
                <p className="text-black text-center font-extrabold">
                  {product.name}
                </p>
                <p className="text-black px-2 font-light">
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
