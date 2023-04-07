export const setItem = (key: string, isLogged:string ): void=>{
    return localStorage.setItem(key, isLogged)
}

export const getItem = (key: string): string | null =>{
    return localStorage.getItem(key)
}

export const remove = (): void=>{
    return localStorage.clear()
}