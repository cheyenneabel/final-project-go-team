import { Route, Switch } from 'react-router-dom';
import MainPage from './components/MainPage';
import TennisSchedulePage from './components/TennisSchedulePage';
import UserPage from './components/UserPage';
import PostAMatchPage from './components/PostAMatchPage';


import AboutUsPage from './components/AboutUsPage';


//import all components (minus header and footer)

const PageSwitch = () => {

    return (
        <Switch>
            <Route exact path = "/" component={MainPage} />
            <Route exact path = "/tennisSchedule" component={TennisSchedulePage} />
            <Route exact path = "/postATennisMatch" component={PostAMatchPage} />
            <Route exact path= '/user' component={UserPage}/>
            <Route exact path = "/aboutUs" component={AboutUsPage} />

        </Switch>
    )
}

export default PageSwitch;