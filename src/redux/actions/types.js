export const LEFT_DRAWER_ON = "left drawer on"
export const RIGHT_DRAWER_ON = "right drawer on"
export const BOTTOM_DRAWER_ON = "bottom drawer on"
export const LEFT_DRAWER_EXPAND = "left drawer expand"
export const RIGHT_DRAWER_EXPAND = "right drawer expand"
export const BOTTOM_DRAWER_TEXT_ON = "botton drawer text on"
export const BOTTOM_DRAWER_TOGGLE = "bottom drawer toggle"

export const onLeftDrawerChange = (value) => {
    return {
        type: LEFT_DRAWER_ON,
        value: value
    }
}

export const onLeftDrawerToggle = (value) => {
    return {
        type: LEFT_DRAWER_EXPAND,
        value: value === "show"
    }
}

export const onRightDrawerChange = (value) => {
    return {
        type: RIGHT_DRAWER_ON,
        value: value
    }
}

export const onRightDrawerToggle = (value) => {
    return {
        type: RIGHT_DRAWER_EXPAND,
        value: value === "show"
    }
}

export const onBottomDrawer = (value) => {
    return {
        type: BOTTOM_DRAWER_ON,
        value: value
    }
}

export const onBottomDrawerChange = (value) => {
    return {
        type: BOTTOM_DRAWER_TEXT_ON,
        value: value
    }
}

export const onBottomDrawerToggle = (value) => {
    return {
        type: BOTTOM_DRAWER_TOGGLE,
        value: value
    }
}

