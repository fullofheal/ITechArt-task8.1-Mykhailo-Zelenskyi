type FIXME = any

type OrderState = 'initial' | 'inWork' | 'buyingSupplies' | 'producing' | 'fullfilled'

// Hint: with type guards return type can be removed
export const getUserOrderStates = (orderStates: OrderState[]):Omit<OrderState[], 'buyingSupplies' | 'producing'> => {
    return orderStates.filter((state) => state !== 'buyingSupplies' && state !== 'producing')
}