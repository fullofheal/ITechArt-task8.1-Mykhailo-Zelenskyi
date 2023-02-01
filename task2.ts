// There is a union (union) of order types in different states
// You need to replace FIXME with a type that will get all possible states from Order (state)

type FIXME = NonNullable<string>


enum OrderState {
    State1 = 'initial',
    State2 = 'inWork',
    State3 = 'buyingSupplies',
    State4 = 'producing',
    State5 = 'fullfilled'
}

type Order =
    | {
    state: OrderState.State1
    sum: number
}
    | {
    state: OrderState.State2
    sum: number
    workerId: number
}
    | {
    state: OrderState.State3
    sum: number
    workerId: number
    suppliesSum: number
}
    | {
    state: OrderState.State4
    sum: number
    workerId: number
    suppliesSum: number
    produceEstimate: Date
}
    | {
    state: OrderState.State5
    sum: number
    workerId: number
    suppliesSum: number
    produceEstimate: Date
    fullfillmentDate: Date
}

export const getOrderState = (order: Order): FIXME => order.state;