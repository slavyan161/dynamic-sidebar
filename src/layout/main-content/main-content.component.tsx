import './main-content.css'

export interface IMainContent {
    children: any
}

function MainContentComponent(props: IMainContent) {
    return (
      <div className="main-content">
          {props.children}
      </div>
    )
}

export default MainContentComponent
