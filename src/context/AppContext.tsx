import { createContext, useEffect, useState } from "react"
import { IAppcontext, Product } from "../types"
import { api } from "../services/api"



export const AppContext = createContext({} as IAppcontext)

export const AppContextProvider = ({ children }: any) => {
   const [isLogged, setIsLogged] = useState<boolean>(false)
   const [listItem, setListItem] = useState<Product[]>([])
   const [itemClicked, setItemClicked] = useState<Product[]>([])

  const listProduct = async () => {
    try {
      const products = await api.get('/products')

      setListItem(products.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    listProduct()
  }, [])
   return (
      <AppContext.Provider value={{ isLogged, setIsLogged, listItem, itemClicked, setItemClicked }}>
         {children}
      </AppContext.Provider>
   )
}
