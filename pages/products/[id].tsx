import { GetStaticProps, NextPage } from "next";
import { ProductType, fetchProductByID } from "../../src/services/products";
import { ReactNode } from "react";

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id

  if(typeof id === 'string'){
    const product = fetchProductByID(id)

    return {
      props: {
        product
      }
    }
  }

  return {
    redirect: {
      destination: "/products",
      permanent: false
    }
  }
}


const Product: NextPage = (props: {
  children?: ReactNode
  product?: ProductType
}) => {
  return(
    
  )
}