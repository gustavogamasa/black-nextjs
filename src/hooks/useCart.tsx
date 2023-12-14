
import { ReactNode, useContext, useEffect, useState } from "react"
import { ProductType } from "../services/products"



export const CartContextProvider = (props: {
  children: ReactNode
}) => {
  const [cart, setCart] = useState<ProductType[]>([])

  useEffect(() => {
    const storedCart = localStorage.getItem('shopping-cart')

    if (storedCart) {
      setCart(JSON.parse(storedCart))
    }
  }, [])

  const addProduct = (product: ProductType) => {
    const updatedCart = [...cart, product]
    localStorage.setItem('shopping-cart', JSON.stringify(updatedCart))
    setCart(updatedCart)
  }

  const removeProduct = (productId: number) => {
    const productIndex = cart.findIndex(product => product.id === productId)

    if (productIndex !== -1) {
      const updatedCart = [...cart]
      updatedCart.splice(productIndex, 1)
      localStorage.setItem('shopping-cart', JSON.stringify(updatedCart))
      setCart(updatedCart)
    }
  }

  return (
    <CartContextProvider
      value={{ cart, addProduct, removeProduct }}
    >
      {props.children}
    </CartContextProvider>
  );
}

export const useCart = () => useContext(CartContext)