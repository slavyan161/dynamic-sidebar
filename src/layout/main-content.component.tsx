import SideBarComponent from './side-bar.component'

export interface IMainContent {
    children: any
}

function MainContentComponent(props: IMainContent) {
    return (
        <div className="flex-container">
            <div>
                <SideBarComponent />
            </div>
            <div className="main-content">
                {props.children}
            </div>
        </div>
    )
}

export default MainContentComponent
