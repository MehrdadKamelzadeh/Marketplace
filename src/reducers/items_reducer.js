
const defaultItems = [
    { id: "1", itemNumber: "AA0001", variantNumber: "GEC0001", basePrice: "50000", discountPrice: "40000", qty: 2, dateFrom: "1/1/2018", dateTo: "1/5/2018" },
    { id: "2", itemNumber: "AA0002", variantNumber: "GEC0001", basePrice: "50000", discountPrice: "40000", qty: 2, dateFrom: "1/1/2018", dateTo: "1/5/2018" },
    { id: "3", itemNumber: "AA0003", variantNumber: "GEC0001", basePrice: "50000", discountPrice: "40000", qty: 2, dateFrom: "1/1/2018", dateTo: "1/5/2018" },
];
export default function itemsList(state = defaultItems, action) {
    switch (action.type) {
        case 'ADD_NEW_ITEM':
            return [action.payload, ...state];
    }
    return state;
}