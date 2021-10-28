import React, { useState } from 'react'
import ToggleSwitchComponent from '../../app/base-component/toogle-switch/toggle-switch.component';
import './main-view.css';

export interface IMainViewComponent {

}

function MainViewComponent(props: IMainViewComponent) {

    const [isChecked, setIsChecked] = useState(false);

    function toggleHandler(e?: any) {
        setIsChecked(e?.target?.checked);
    }

    return (
        <div>
            <ToggleSwitchComponent isRound={false} onChange={(e) => toggleHandler(e)} value={isChecked} />
        </div>
    )
}

export default MainViewComponent
