import * as types from '../actions/types'

const initialState = {
    leftDrawer: "disable",
    rightDrawer: "disable",
    leftDrawerExpand: false,
    rightDrawerExpand: false,
    bottomDrawerTextOn: true,
    bottomDrawerToggle: false,
    bottomDrawer: "disable"
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case types.LEFT_DRAWER_ON:
            return{
                ...state,
                leftDrawer: action.value
            }
        case types.RIGHT_DRAWER_ON:
            return {
                ...state,
                rightDrawer: action.value
            }
        case types.LEFT_DRAWER_EXPAND:
            return {
                ...state,
                leftDrawerExpand: action.value
            }
        case types.RIGHT_DRAWER_EXPAND:
            return {
                ...state,
                rightDrawerExpand: action.value
            }
        case types.BOTTOM_DRAWER_ON:
            return {
                ...state,
                bottomDrawer: action.value
            }
        case types.BOTTOM_DRAWER_TEXT_ON:
            return{
                ...state,
                bottomDrawerTextOn: action.value
            }
        case types.BOTTOM_DRAWER_TOGGLE:
            return {
                ...state,
                bottomDrawerToggle: action.value
            }
        
        default:
            return state
    }
}