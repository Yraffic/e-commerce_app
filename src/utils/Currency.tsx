
export const  transformToUSD = (value: number) => {
    if (isNaN(Number(value))) return "R$ 0,00"
  
    return value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'USD'
    });
  }