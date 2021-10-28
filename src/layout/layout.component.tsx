import FooterComponent from "./footer/footer.component"
import MainContentComponent from "./main-content/main-content.component"
import SideBarComponent from "./side-bar/side-bar.component"
import './../style.css'
import './layout.css'

export interface ILayout {
    children: any;
}

function LayoutComponent(props: ILayout) {
    return (
        <div className="flex-container flex-row layout-container">
            <div className="layout-sidebar">
                <SideBarComponent />
            </div>
            <div className="layout-main-content">
                <div className="flex-container flex-column">
                    <div>
                        <MainContentComponent>
                            {props.children}
                        </MainContentComponent>
                    </div>
                    <div>
                        <FooterComponent />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LayoutComponent
