import React from "react";
import { useRouter } from "next/router";

const ProductItem = () => {
  const {
    query: { id },
  } = useRouter();
  return (
    <section>
      <h1>PAGINA DE PRDUCTO : {id}</h1>
    </section>
  );
};

export default ProductItem;
