import { Route, Switch} from 'react-router-dom';
import MainPage from './components/MainPage';
import TennisSchedulePage from './components/TennisSchedulePage';
import Team200ContactPage from './components/Team200ContactPage';
import UserPage from './components/UserPage';


//import all components (minus header and footer)

const PageSwitch = () => {

    return (
        <Switch>
            <Route exact path = "/" component={MainPage} />
            <Route exact path = "/tennisSchedule" component={TennisSchedulePage} />
            <Route exact path = "/team200" component={Team200ContactPage} />
            <Route excat path={'/user'} component={UserPage}/>
        </Switch>
    )
}

export default PageSwitch;