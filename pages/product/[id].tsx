import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Navbar from 'components/Navbar/Navbar'

const ProductItem = () => {
  const [product, setProduct] = useState()
  const { query } = useRouter()
  useEffect(() => {
    window
      .fetch(`/api/avo/${query.id}`)
      .then((response) => response.json())
      .then((reponse) => {
        console.log(reponse)
        setProduct(reponse)
      })
  }, [query.id])

  return (
    <section>
      <Navbar />
      <h1>Página producto: {query.id}</h1>
      <div>Nombre: {query.name}</div>
    </section>
  )
}

export default ProductItem
