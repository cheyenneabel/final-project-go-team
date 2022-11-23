import { Route, Switch } from 'react-router-dom';
import MainPage from './components/MainPage';
import TennisSchedulePage from './components/TennisSchedulePage';
import AboutUsPage from './components/AboutUsPage';

//import all components 

const PageSwitch = () => {

    return (
        <Switch>
            <Route exact path = "/" component={MainPage} />
            <Route exact path = "/tennisSchedule" component={TennisSchedulePage} />
            <Route exact path = "/aboutUs" component={AboutUsPage} />
        </Switch>
    )
}

export default PageSwitch;