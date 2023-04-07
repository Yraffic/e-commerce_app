import { createContext, useEffect, useState } from "react"
import { api } from "../services/api"
import { IAppcontext, Product } from "../types"



export const AppContext = createContext({} as IAppcontext)

export const AppContextProvider = ({ children }: any) => {
  const [update, setUpdate] = useState<boolean>(false)
  const [listItem, setListItem] = useState<Product[]>([])
  const [itemClicked, setItemClicked] = useState<Product[]>([])
  const [valueSelect, setValueSelect] = useState('/products')
  
  
  const listProduct = async () => {
    try {
      /* let filter = '/products' */

      /* if(valueSelect === '1'){
        filter ='/products?categoryID=1'
      } else if (valueSelect === '2'){
        filter = '/products?categoryID=2'
      } else if(valueSelect === '3'){
        filter = '/products?categoryID=3'
      } */

      const products = await api.get(`${valueSelect}`)

      setListItem(products.data)
    } catch (error) {
      alert('error serve')
      console.log(error)
    }
  }

  useEffect(() => {
    listProduct()
  }, [valueSelect])

  const values = {
    update,
    setUpdate,
    listItem,
    itemClicked,
    setItemClicked,
    setValueSelect ,
    setListItem
  }

  return (
    <AppContext.Provider value={values}>
      {children}
    </AppContext.Provider>
  )
}
