import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'; 
import Dashboard from '../../pages/Dashboard';
import DashboardLayout from '../ui-elements/DashboardLayout';
import AuthLayout from '../ui-elements/AuthLayout';
import Login from '../../pages/Login';
import Register from '../../pages/Register';
import { connect } from 'react-redux';
import Starred from '../../pages/Starred';
import Received from '../../pages/Received';

const RouterComponent = props => {
    return (
        <Switch>
            <RouterWrapper path="/sent" exact component={Dashboard} layout={DashboardLayout} />
            <RouterWrapper path="/received" exact component={Received} layout={DashboardLayout} />
            <RouterWrapper path="/starred" exact component={Starred} layout={DashboardLayout} />
            <Redirect to="/sent" />
        </Switch>
    )
    
};

export const RouterWrapper = ({ component: Component, layout: Layout, ...rest }) => {
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