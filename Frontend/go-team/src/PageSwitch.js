import { Route, Switch } from 'react-router-dom';
import AboutUsPage from './components/AboutUsPage';
import MainPage from './components/MainPage';
import TennisSchedulePage from './components/TennisSchedulePage';
import UserPage from './components/UserPage';
import PostAMatchPage from './components/PostAMatchPage';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import DescriptionPage from './components/DescriptionPage';

import SportsPage from './components/SportsPage';



const PageSwitch = () => {

    return (
        <Switch>
            <Route exact path = "/main" component={MainPage} />
            <Route exact path = "/tennisSchedule" component={TennisSchedulePage} />
            <Route exact path = "/postATennisMatch" component={PostAMatchPage} />
            <Route exact path= '/user' component={UserPage}/>
            <Route exact path = "/aboutUs" component={AboutUsPage} />
            <Route exact path = "/loginPage" component={LoginPage} />
            <Route exact path = "/signUpPage" component={SignUpPage} />
            <Route exact path = "/" component={DescriptionPage} />

            <Route exact path = "/sports" component={SportsPage} />


        </Switch>
    )
}

export default PageSwitch;