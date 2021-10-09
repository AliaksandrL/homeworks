export type LoadingType = {
    type: 'LOADING'
    loading: boolean
}

const initState = {
    isLoding: false
}

export const loadingReducer = (state = initState, action: LoadingType): typeof initState=> { // fix any
    switch (action.type) {
        case 'LOADING': {
            return {
                ...state,
                isLoding: action.loading
            }
        }
        default:
            return state
    }
}

export const loadingAC = (loading: boolean): LoadingType => {
    return {type: 'LOADING', loading}
} // fix any