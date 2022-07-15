
import * as React from 'react';
import {connect, useSelector} from 'react-redux'
import { useLocalization } from '@progress/kendo-react-intl';
import * as types from '../redux/actions/types'

import headerBg from '../assets/header-bg.png';
import { Avatar } from '@progress/kendo-react-layout';
import userAvatar from '../assets/user-avatar.jpg'
import { useHistory } from 'react-router-dom';

const Header = (props) => {
    const { onLeftDrawerToggle } = props

    let {leftDrawerExpand  } = useSelector(state => state);
    const localizationService = useLocalization();
    const history = useHistory()

    let style = {
        fontSize: "2rem"
    }

    const onClick = () => {
        history.push("/profile")
    }

    return (
        <header className="header" style={{ backgroundImage: `url(${headerBg})`, zIndex: "1000" }}>
            <div className="nav-container">
                <div className="menu-button">
                    <span 
                        className={'k-icon k-i-menu'} 
                        style={style} 
                        onClick={() => onLeftDrawerToggle(leftDrawerExpand ? "hide" : "show")}/>
                </div>
                <div className="title">
                    <h1>{localizationService.toLanguageString('custom.warehouse')}</h1>
                </div>
                <div className="menu-button" onClick={onClick} style={{cursor: "pointer"}}>
                    <Avatar style={{width: 50, height: 50, flexBasis: 50, boxShadow: "inherit"}} shape={'circle'} type={'image'}>
                        <img style={{borderRadius: "100px"}} src={userAvatar} alt="user-avatar"/>
                    </Avatar>
                </div>
            </div>
        </header>
    );
}

const mapStateToProps = (state) => {
    return{
        ...state.toggle
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onRightDrawerToggle: (value) => dispatch(types.onRightDrawerToggle(value)),
        onLeftDrawerToggle: (value) => dispatch(types.onLeftDrawerToggle(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)