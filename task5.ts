// NOT FINISHED YET
// type FIXME = any

type OrderState = 'initial' | 'inWork' | 'buyingSupplies' | 'producing' | 'fullfilled'

// type FilteredStates = 'initial' | 'inWork' | 'fullfilled'

function filteredStates(state: string): state is ('initial' | 'inWork' | 'fullfilled') {
    return typeof state === "string";
}

// Hint: with type guards return type can be removed
export const getUserOrderStates = (orderStates: OrderState[]) => {
    
    return orderStates.filter(filteredStates)
}
