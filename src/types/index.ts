import { ReactNode } from "react"

export interface IProduct {
    id: number
    name: string
    description: string
    value: number
    image: string
    categoryId?: number
    item: IProduct
}

export interface IProps {
    children: ReactNode 
}

export interface IAppcontext {
    update: boolean
    setUpdate: ( isLoggedIn: boolean)=> void
    listItem: IProduct[]
    itemClicked: IProduct[]
    setItemClicked: (itemCliked: IProduct[])=> void
    setValueSelect: (value: string) => void
}


export interface IUsuario {
    id: number
    email: string
    password:string
    isLogged: boolean
}

export interface ICart {
    id: number
    name: string
    description: string
    productId: number
    amount: number
    categoryID: number
    userId: number
    value: number
}