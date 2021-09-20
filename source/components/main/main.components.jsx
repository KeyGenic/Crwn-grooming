import React from 'react';
import './main.styles.scss';
import  MenULists from '../menu-lists/menu-lists-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getMainData } from '../../Redux/main-reducer/main-selector';

    const Main = ({sections}) => {
        return(
            <div className ="menu">
                {sections.map(({id,...Othersections}) => {
                    return(
                     <MenULists key = {id} {...Othersections} />
                    )
                })}
                </div>
        )
}

const mapStateProps = createStructuredSelector({
    sections : getMainData
})

export default connect(mapStateProps)(Main)
