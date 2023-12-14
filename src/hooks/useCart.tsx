import { createContext } from "react"
import { ProductType } from "../services/products"


type CartContextType = {
  cart: ProductType[]
  addProduct: (product: ProductType) => void
  removeProduct: (productId: number) => void
}

const CartContext = createContext<CartContextType>({} as CartContextType)

