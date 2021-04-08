import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import Dashboard from '../../pages/Dashboard';
import DashboardLayout from '../ui-elements/DashboardLayout';
import AuthLayout from '../ui-elements/AuthLayout';
import Login from '../../pages/Login';
import Register from '../../pages/Register';

const RouterComponent = props => {
    return (
        // <Router>
            <Switch>
                <RouterWrapper path="/" exact component={Dashboard} layout={DashboardLayout} />
                <RouterWrapper path="/login" exact component={Login} layout={AuthLayout} />
                <RouterWrapper path="/register" exact component={Register} layout={AuthLayout} />
            </Switch>
        // </Router>
    )
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

export default RouterComponent;