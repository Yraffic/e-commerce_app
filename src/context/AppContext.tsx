import { createContext, useEffect, useState } from "react"
import { api } from "../services/api"
import { IAppcontext, IProduct } from "../types"



export const AppContext = createContext({} as IAppcontext)

export const AppContextProvider = ({ children }: any) => {
  const [update, setUpdate] = useState<boolean>(false)
  const [listItem, setListItem] = useState<IProduct[]>([])
  const [itemClicked, setItemClicked] = useState<IProduct[]>([])
  const [valueSelect, setValueSelect] = useState('/products')
  
  const listProduct = async () => {
    try {
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
