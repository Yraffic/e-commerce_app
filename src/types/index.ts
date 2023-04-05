import { ReactNode } from "react"

export interface Product {
    id: number
    name: string
    description: string
    value: number
    image: string
}

export interface Props {
    children: ReactNode 
}


