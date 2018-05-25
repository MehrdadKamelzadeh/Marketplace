const defaultItems = [
    { id: "1", itemNumber: "AA0001", variantNumber: "GEC0001", basePrice: "50000", discountPrice: "40000", qty: 2, dateFrom: new Date(), dateTo:  new Date() },
    { id: "2", itemNumber: "AA0002", variantNumber: "GEC0001", basePrice: "50000", discountPrice: "40000", qty: 2, dateFrom:  new Date(), dateTo:  new Date() },
    { id: "3", itemNumber: "AA0003", variantNumber: "GEC0001", basePrice: "50000", discountPrice: "40000", qty: 2, dateFrom:  new Date(), dateTo:  new Date() },
];
export default function itemsList(state = defaultItems, action) {
    switch (action.type) {
        case 'ADD_NEW_ITEM':
        if(!state.includes(action.payload))
            return [action.payload, ...state];
        
        return state;
        case 'DELETE_CURRENT_ITEM':
            return state.filter(a=>a.id!==action.payload);
    }
    return state;
}