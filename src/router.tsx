import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import LayoutComponent from "./layout/layout.component";
import MainViewComponent from "./main/main-view/main-view.component";

function RouterComponent() {
    return (
        <Router>
            <Switch>
                <LayoutComponent>
                    <Route path="/">
                        <MainViewComponent />
                    </Route>
                </LayoutComponent>
            </Switch>
        </Router>
    )
}

export default RouterComponent
