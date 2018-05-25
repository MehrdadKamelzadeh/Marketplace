export function addNewItemAction(item) {
    return {
        type: 'ADD_NEW_ITEM',
        payload: item
    };
}

export function deleteCurrentItem(itemId) {
    return {
        type: 'DELETE_CURRENT_ITEM',
        payload: itemId
    };
}

export function selectCurrentItem(item) {
    return {
        type: 'SELECT_CURRENT_ITEM',
        payload: item
    };
}