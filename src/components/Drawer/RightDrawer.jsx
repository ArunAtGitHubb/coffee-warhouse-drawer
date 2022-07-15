import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { Drawer, DrawerContent } from '@progress/kendo-react-layout';
import {connect, useSelector} from 'react-redux'
import Chats from '../Chats';
import * as types from '../../redux/actions/types'

    const items = [{
        text: 'Inbox',
        icon: 'k-i-inbox',
        selected: true,
        route: '/'
        }, {
        separator: true
        }, {
        text: 'Calendar',
        icon: 'k-i-calendar',
        route: '/planning'
        }, {
        separator: true
        }, {
        text: 'Attachments',
        icon: 'k-i-hyperlink-email',
        route: '/profile'
        }, {
        text: 'Favourites',
        icon: 'k-i-star-outline',
        route: '/info'
        }];

    const RightDrawer = props => {

    const onSelect = e => {
        props.history.push(e.itemTarget.props.route);
    };

    const setSelectedItem = pathName => {
        let currentPath = items.find(item => item.route === pathName);

        if (currentPath.text) {
            return currentPath.text;
        }
    };

    let selected = setSelectedItem(props.location.pathname);

    let {rightDrawerExpand} = useSelector(state => state)

    return <div>
        <Drawer 
            expanded={rightDrawerExpand} 
            position={'end'} 
            mode={'push'} 
            mini={true} 
            items={items.map(item => ({ ...item,
                selected: item.text === selected
            }))} 
            onSelect={onSelect}>
            <DrawerContent>
                <Chats expanded={rightDrawerExpand} />
            </DrawerContent>
        </Drawer>
        </div>;
    };


    const mapStateToProps = (state) => {
        return {
            ...state.toggle
        }
    }

    const mapDispatchToProps = (dispatch) => {
        return {
            onRightDrawerToggle: (value) => dispatch(types.onRightDrawerToggle(value))
        }
    }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RightDrawer));