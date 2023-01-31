// An array of order states comes to the function and is filtered
// You need to replace FIXME with a type that is calculated on the basis of OrderState

// type FIXME = any;

type OrderState = 'initial' | 'inWork' | 'buyingSupplies' | 'producing' | 'fullfilled'

type UserOrderState = 'initial' | 'inWork' | 'fullfilled';

export const getUserOrderStates = (orderStates: OrderState[]): UserOrderState[] => {
    const filteredStates: UserOrderState[] = []
    orderStates.forEach((element) => {
        if (element !== 'buyingSupplies' && element !== 'producing') {
            filteredStates.push(element)
        }
    })
    return filteredStates
}