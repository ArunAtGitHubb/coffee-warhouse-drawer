import React from "react";
import { TabStrip, TabStripTab } from "@progress/kendo-react-layout";
import { RadioGroup, Checkbox, Switch } from "@progress/kendo-react-inputs"
import * as types from '../redux/actions/types'
import {connect, useSelector} from 'react-redux'

const Controller = (props) => {
    const [selected, setSelected] = React.useState(1);

    const handleSelect = (e) => {
    setSelected(e.selected);
    };

    const drawerData1 = [
        {
            label: "Enable",
            value: "enable"
        },
        {
            label: "Disable",
            value: "disable"
        },
    ]
    const drawerData2 = [
        {
            label: "Show",
            value: "show"
        },
        {
            label: "Hide",
            value: "hide"
        },
    ]

    let {
        leftDrawer, 
        rightDrawer, 
        leftDrawerExpand, 
        rightDrawerExpand,
        bottomDrawer,
        bottomDrawerTextOn,
        bottomDrawerToggle
    } = useSelector(state => state)

    return <>
        <div id="Profile" className="profile-page main-content">
            <div className="card-container">
                <div className="card-component">
                <TabStrip selected={selected} onSelect={handleSelect}>
                    <TabStripTab title="Left Drawer" >
                        <RadioGroup 
                            data={drawerData1} 
                            value={leftDrawer} 
                            onChange={(e) => props.onLeftDrawerChange(e.value)}/>
                        <Checkbox label={"Enabled"} checked={leftDrawer === "enable"} />
                        <RadioGroup 
                            data={drawerData2} 
                            value={leftDrawerExpand ? "show" : "hide"}
                            disabled={leftDrawer === "disable"} 
                            onChange={(e) => props.onLeftDrawerToggle(e.value)}/>
                    </TabStripTab>
                    <TabStripTab title="Right Drawer">
                        <RadioGroup 
                            data={drawerData1} 
                            value={rightDrawer} 
                            onChange={(e) => props.onRightDrawerChange(e.value)}/>
                        <Checkbox label={"Enabled"} checked={rightDrawer === "enable"}/>
                        <RadioGroup 
                            data={drawerData2} 
                            value={rightDrawerExpand ? "show" : "hide"}
                            disabled={rightDrawer === "disable"}
                            onChange={(e) => props.onRightDrawerToggle(e.value)}/>
                    </TabStripTab>
                    <TabStripTab title="Bottom Drawer">
                        <RadioGroup 
                            data={drawerData1} 
                            value={bottomDrawer} 
                            onChange={(e) => props.onBottomDrawer(e.value)}/>
                        <Switch 
                            disabled={bottomDrawer === "disable"}
                            checked={bottomDrawerToggle} 
                            onChange={(e) => props.onBottomDrawerToggle(e.value)} />
                        <p></p>
                        <Checkbox 
                            label={"Show Text"} 
                            disabled={bottomDrawer === "disable"}
                            checked={bottomDrawerTextOn} 
                            onChange={(e) => props.onBottomDrawerChange(e.value)} />
                    </TabStripTab>
                </TabStrip>
                </div>
            </div>
        </div>
    </>
}

const mapStateToProps = (state) => {
    return {
        ...state.toggle
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLeftDrawerChange: (value) => dispatch(types.onLeftDrawerChange(value)),
        onLeftDrawerToggle: (value) => dispatch(types.onLeftDrawerToggle(value)),
        onRightDrawerChange: (value) => dispatch(types.onRightDrawerChange(value)), 
        onRightDrawerToggle: (value) => dispatch(types.onRightDrawerToggle(value)), 
        onBottomDrawerChange: (value) => dispatch(types.onBottomDrawerChange(value)),
        onBottomDrawerToggle: (value) => dispatch(types.onBottomDrawerToggle(value)),
        onBottomDrawer: (value)  => dispatch(types.onBottomDrawer(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Controller)