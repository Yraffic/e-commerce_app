import { ReactNode } from "react"

export interface Product {
    id: number
    name: string
    description: string
    value: number
    image: string
    categoryId?: number
    item: Product
}

export interface Props {
    children: ReactNode 
}

export interface IAppcontext {
    update: boolean
    setUpdate: ( isLoggedIn: boolean)=> void
    listItem: Product[]
    itemClicked: Product[]
    setItemClicked: (itemCliked: Product[])=> void
    setValueSelect: (value: string) => void
}

export interface Category {
    id: number
    name: string
}

export interface Usuario {
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