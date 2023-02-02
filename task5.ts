type FIXME = 'initial' | 'inWork' | 'fullfilled'

type OrderState = 'initial' | 'inWork' | 'buyingSupplies' | 'producing' | 'fullfilled'


function filteredStates(state: string): state is FIXME {
    return state !== 'buyingSupplies' && state !== 'producing';
}

// Hint: with type guards return type can be removed
export const getUserOrderStates = (orderStates: OrderState[]) => {
    
    return orderStates.filter(filteredStates)
}
