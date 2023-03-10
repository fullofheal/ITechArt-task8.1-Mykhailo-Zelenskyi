// There is a union (union) of order types in different states
// and the filterOnlyInitialAndInWorkOrder function that accepts orders in any state
// A returns only initial and inWork
// Need to replace FIXME with the correct type computed based on Order

type Order1 = {
    state: 'initial'
    sum: number
}

type Order2 = {
    state: 'inWork'
    sum: number
    workerId: number
}

type Order3 = {
    state: 'buyingSupplies'
    sum: number
    workerId: number
    suppliesSum: number
}

type Order4 = {
    state: 'producing'
    sum: number
    workerId: number
    suppliesSum: number
    produceEstimate: Date
}

type Order5 = {
    state: 'fullfilled'
    sum: number
    workerId: number
    suppliesSum: number
    produceEstimate: Date
    fullfillmentDate: Date
}

type Order = Order1 | Order2 | Order3 | Order4 | Order5

type ExtractedOrders = Order1 | Order2

type FIXME = Extract<Order, ExtractedOrders> | null

export const filterOnlyInitialAndInWorkOrder = (order: Order): FIXME => {
    if (order.state === 'initial' || order.state === 'inWork') {
        return order
    }

    return null
}