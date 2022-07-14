
import * as React from 'react';
import {connect} from 'react-redux'
import { useLocalization } from '@progress/kendo-react-intl';
import * as types from '../redux/actions/types'

import headerBg from '../assets/header-bg.png';

const Header = (props) => {
    const { onRightDrawerToggle, onLeftDrawerToggle, leftDrawerExpand, rightDrawerExpand } = props;
    const localizationService = useLocalization();

    let style = {
        fontSize: "2rem"
    }

    return (
        <header className="header" style={{ backgroundImage: `url(${headerBg})` }}>
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
                <div className="menu-button">
                    <span 
                        className={'k-icon k-i-envelop-box'} 
                        style={style} 
                        onClick={() => onRightDrawerToggle(rightDrawerExpand ? "hide" : "show")}/>
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