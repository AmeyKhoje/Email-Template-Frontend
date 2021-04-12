import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'; 
import Dashboard from '../../pages/Dashboard';
import DashboardLayout from '../ui-elements/DashboardLayout';
import AuthLayout from '../ui-elements/AuthLayout';
import Login from '../../pages/Login';
import Register from '../../pages/Register';
import { connect } from 'react-redux';

const RouterComponent = props => {
    console.log("RC", props);
    let routes;

    if(!props.loggedIn) {
        return (
            <Switch>
                <RouterWrapper path="/login" exact component={Login} layout={AuthLayout} />
                <RouterWrapper path="/register" exact component={Register} layout={AuthLayout} />
                <Redirect to="/login" />
            </Switch>
        )
    }
    else {
        return (
            <Switch>
                <RouterWrapper path="/" exact component={Dashboard} layout={DashboardLayout} />
                <Redirect to="/" />
            </Switch>
        )
    }
};

const RouterWrapper = ({ component: Component, layout: Layout, ...rest }) => {
    return (
        <Route { ...rest } render={(props) => 
            <Layout {...props}>
                <Component {...props} />
            </Layout>} 
        />
    );
};

const mapStateToProps = state => {
    return state;
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(RouterComponent);