import SideBarItemComponent from './side-bar-item.component';
import './side-bar.css'
import { mainMenuState } from './../../app/slice/main-menu.slice';
import { useAppSelector } from '../../app/hooks';
export interface ISideBarItem {
    id: string,
    isShowed: boolean,
    isAllowed: boolean,
    childs?: ISideBarItem[]
}

function SideBarComponent() {
    const mainMenuSelector = useAppSelector(mainMenuState);
    return (
        <div className="sidebar-container">
            <div className="sidebar">
                <div className="text-left justify-content-start">
                    <img src='assets/img/logo.png' alt="avana-logo" style={{ width: '60%', paddingTop: "20px", paddingLeft: "10px", paddingRight: "10px" }} />
                </div>
                <ul>
                    {mainMenuSelector.map((sidebarItem: ISideBarItem, index) => (
                        <SideBarItemComponent
                            {...sidebarItem}
                            key={index}
                        />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default SideBarComponent