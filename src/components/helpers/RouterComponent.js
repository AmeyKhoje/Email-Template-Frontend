import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import Dashboard from '../../pages/Dashboard';
import DashboardLayout from '../ui-elements/DashboardLayout';
import { render } from 'react-dom'
import AuthLayout from '../ui-elements/AuthLayout';
import Login from '../../pages/Login';
const RouterComponent = props => {
    return (
        // <Router>
            <Switch>
                <RouterWrapper path="/" exact component={Dashboard} layout={DashboardLayout} />
                <RouterWrapper path="/login" exact component={Login} layout={AuthLayout} />
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