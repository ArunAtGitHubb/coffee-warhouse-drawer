import React from 'react'
import {connect} from 'react-redux'
import { BottomNavigation } from '@progress/kendo-react-layout'
import * as types from '../../redux/actions/types'


const BottomDrawer = (props) => {

    let {bottomDrawerTextOn, leftDrawerExpand, rightDrawerExpand} = props

    const content = [
        {
            text: bottomDrawerTextOn ? "Home" : null,
            icon: "home",
            selected: true,
        },
        {
            text: bottomDrawerTextOn ? "Library" : null,
            icon: "folder",
        },
        {
            text: bottomDrawerTextOn ? "Search" : null,
            icon: "search",
        },
        ]
    const [positionMode, setPositionMode] = React.useState({
        title: "Fixed",
        value: "fixed",
    });
    const [selectedIndex, setSelectedIndex] = React.useState(
        content.findIndex((x) => x.selected === true)
    );

    const handleChange = (e) => {
        setPositionMode(e.value);
    };

    const handleSelect = (e) => {
        setSelectedIndex(e.itemIndex);
    };

    let expandedStyle = {
        position: "absolute", 
        width: leftDrawerExpand || rightDrawerExpand ? "87.5%" : undefined, 
        width: leftDrawerExpand && rightDrawerExpand ? "75%" : undefined,
        left: leftDrawerExpand ? "12.5%" : undefined,
        right: rightDrawerExpand ? "12.5%" : undefined,
    }

    return (
        <div className="example">
        <div className={"example-wrapper"}>
            <div className={"page"}>
            <BottomNavigation
                style={
                    expandedStyle
                }
                items={content.map((item, index) => ({
                ...item,
                selected: index === selectedIndex,
                }))}
                onSelect={handleSelect}
            />
            </div>
        </div>
        <style>{`my-app { padding: 0 !important; }
                .content { margin: 20px; }
                .content.fixed { padding-bottom: 70px}`}</style>
        </div>
    );
}

const mapStateToProps = (state) => {
    return{
        ...state.toggle
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        onTextHide: () => dispatch(types.onBottomDrawerChange())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BottomDrawer)