// An array of order states comes to the function and is filtered
// You need to replace FIXME with a type that is calculated on the basis of OrderState

type FIXME = Exclude<OrderState, OrderStateToExclude>;

type OrderState = 'initial' | 'inWork' | 'buyingSupplies' | 'producing' | 'fullfilled'

type OrderStateToExclude = 'buyingSupplies' | 'producing';

export const getUserOrderStates = (orderStates: OrderState[]): FIXME[] => {
    const filteredStates: FIXME[] = []
    orderStates.forEach((element) => {
        if (element !== 'buyingSupplies' && element !== 'producing') {
            filteredStates.push(element)
        }
    })
    return filteredStates
}