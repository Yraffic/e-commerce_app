import { createContext, useEffect, useState } from "react"
import { Category, IAppcontext, Product } from "../types"
import { api } from "../services/api"



export const AppContext = createContext({} as IAppcontext)

export const AppContextProvider = ({ children }: any) => {
   const [isLogged, setIsLogged] = useState<boolean>(false)
   const [listItem, setListItem] = useState<Product[]>([])
   const [itemClicked, setItemClicked] = useState<Product[]>([])
   const [categorys, setCategorys] = useState<Category[]>([])


  const getCategory = async()=>{
    try {
      const category = await api.get<Category[]>('/category')
      return setCategorys(category.data)
    } catch (error) {
      console.log(error)
    }
  }

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
    getCategory()
  }, [])

  const values = { 
    isLogged, 
    setIsLogged, 
    listItem, 
    itemClicked, 
    setItemClicked,
    categorys 
  }

   return (
      <AppContext.Provider value={values}>
         {children}
      </AppContext.Provider>
   )
}
