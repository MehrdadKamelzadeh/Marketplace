export default function currentItem(state = {
    id: '',
    itemNumber: '',
    variantNumber: '',
    basePrice: 0,
    discountPrice: 0,
    qty: 0,
    dateFrom: new Date(),
    dateTo: new Date()
}, action) {
    switch (action.type) {
        case 'SELECT_CURRENT_ITEM':
            return action.payload;
    }
    return state;
}