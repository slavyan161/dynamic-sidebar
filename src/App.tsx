import './App.css';
import { mainMenuState, onInit } from './app/slice/main-menu.slice';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LayoutComponent from "./layout/layout.component";
import MainViewComponent from "./main/main-view/main-view.component";

function App() {
  const dispatch = useAppDispatch();
  const mainMenuSelector = useAppSelector(mainMenuState);

  useEffect(() => {
    if (mainMenuSelector && mainMenuSelector.length < 1) {
      const menuData = require('./assets/dummy-menu.json');
      dispatch(onInit(menuData))
    };
  })
  return (
    <div className="App">
      <Router>
        <Switch>
          <LayoutComponent>
            <Route path="/">
              <MainViewComponent items={mainMenuSelector} depth={0} />
            </Route>
          </LayoutComponent>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
