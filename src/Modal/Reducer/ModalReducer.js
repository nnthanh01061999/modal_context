export const ModalReducer = (state, action) => {
    const { type, payload } = action
    switch (type) {
        case 'OPEN_MODAL':
            return {
                ...state,
                openedModals: [...state.openedModals, payload.name,],
                modalData: {
                    ...state.modalData,
                    [payload.name]: payload.data
                }
            }
        case 'CLOSE_MODAL':
            return {
                ...state,
                openedModals: state.openedModals?.filter(item => item !== payload.name),
                modalData: {
                    ...state.modalData,
                    [payload.name]: undefined,
                }
            }
        case 'CLOSE_ALL_MODAL':
            return {
                ...state,
                openedModals: [],
                modalData: {}
            }
        default:
            return state;
    }
}