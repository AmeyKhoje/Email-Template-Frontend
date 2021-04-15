import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom"
import Button from "../form-elements/Button"
import { handleLoading } from "../store/actions";
import { logoutUser } from "../store/actions/userActions";

const DashboardLayout = props => {

    const logout = () => {
        console.log(props);
        props.onChangeLoading(true);
        localStorage.setItem("isLoggedIn", false);
        localStorage.setItem("userId", null)
        props.onLogout();
        props.onChangeLoading(false);
    };

    return (
        <div className="main-flex">
            <div className="main-flex_left-panel">
                <div className="navbar-left">
                    <div className="profile-container">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo11Zte3fuhQvRiKks2mvf7DhP-aXSeu7PZQ&usqp=CAU" alt="profile, person"/>
                        <div className="profile-info">
                            <h5>Scarlet Johnson</h5>
                            <p>scarletj@gmail.com</p>
                            <p>Student</p>
                            <Link to="/">
                                Edit Profile
                            </Link>
                        </div>
                    </div>
                    <div className="nav-menu">
                        <ul className="nav-menu_list">
                            <li className="nav-menu_list-item">
                                <NavLink to="/" className="nav-menu_list-item-link">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-menu_list-item">
                                <NavLink to="/login" className="nav-menu_list-item-link">
                                    Sent Emails
                                </NavLink>
                            </li>
                            <li className="nav-menu_list-item">
                                <NavLink to="/register" className="nav-menu_list-item-link">
                                    Faculty List
                                </NavLink>
                            </li>
                            <li className="nav-menu_list-item">
                                <NavLink to="/students/mca" className="nav-menu_list-item-link">
                                    Student List
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="logout-user">
                        {/* <NavLink to="/" className="logout-btn">
                            Logout
                        </NavLink> */}
                        <Button primary fullWidth onClick={logout}>
                            Logout
                        </Button>
                    </div>
                </div>
            </div>
            <div className="main-flex_right-panel">
                <div className="navbar-right">
                    <ul className="navbar-right_list">
                        <li className="navbar-right_list-item">
                            <Link className="navbar-right_list-item-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="65" viewBox="0 0 70 65" fill="none">
                                    <path d="M55.4167 8.125H14.5542C11.3167 8.125 8.77917 10.5625 8.77917 13.5417L8.75 51.4583C8.75 54.4375 11.3167 56.875 14.5542 56.875H55.4167C58.625 56.875 61.25 54.4375 61.25 51.4583V13.5417C61.25 10.5625 58.625 8.125 55.4167 8.125ZM55.4167 40.625H43.75C43.75 45.1208 39.8125 48.75 35 48.75C30.1875 48.75 26.25 45.1208 26.25 40.625H14.5542V13.5417H55.4167V40.625ZM46.6667 27.0833H40.8333V18.9583H29.1667V27.0833H23.3333L35 37.9167L46.6667 27.0833Z" fill="#2D4F6F"/>
                                </svg>
                            </Link>
                        </li>
                        <li className="navbar-right_list-item">
                            <Link className="navbar-right_list-item-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="63" height="52" viewBox="0 0 63 52" fill="none">
                                    <path d="M18.9 26C24.9933 26 29.925 20.9117 29.925 14.625C29.925 8.33828 24.9933 3.25 18.9 3.25C12.8067 3.25 7.875 8.33828 7.875 14.625C7.875 20.9117 12.8067 26 18.9 26ZM26.46 29.25H25.643C23.5955 30.2656 21.3216 30.875 18.9 30.875C16.4784 30.875 14.2144 30.2656 12.157 29.25H11.34C5.07937 29.25 0 34.4906 0 40.95V43.875C0 46.5664 2.11641 48.75 4.725 48.75H33.075C35.6836 48.75 37.8 46.5664 37.8 43.875V40.95C37.8 34.4906 32.7206 29.25 26.46 29.25ZM47.25 26C52.4672 26 56.7 21.6328 56.7 16.25C56.7 10.8672 52.4672 6.5 47.25 6.5C42.0328 6.5 37.8 10.8672 37.8 16.25C37.8 21.6328 42.0328 26 47.25 26ZM51.975 29.25H51.6009C50.2327 29.7375 48.7856 30.0625 47.25 30.0625C45.7144 30.0625 44.2673 29.7375 42.8991 29.25H42.525C40.5169 29.25 38.6662 29.8492 37.042 30.8141C39.4439 33.4852 40.95 37.0297 40.95 40.95V44.85C40.95 45.0734 40.9008 45.2867 40.8909 45.5H58.275C60.8836 45.5 63 43.3164 63 40.625C63 34.3383 58.0683 29.25 51.975 29.25Z" fill="#2D4F6F"/>
                                </svg>
                            </Link>
                        </li>
                        <li className="navbar-right_list-item">
                            <Link className="navbar-right_list-item-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="66" height="62" viewBox="0 0 66 62" fill="none">
                                    <path d="M57.75 15.5H52.25V38.75H16.5V43.9167C16.5 45.3375 17.7375 46.5 19.25 46.5H49.5L60.5 56.8334V18.0834C60.5 16.6625 59.2625 15.5 57.75 15.5ZM46.75 31V7.75002C46.75 6.32919 45.5125 5.16669 44 5.16669H8.25C6.7375 5.16669 5.5 6.32919 5.5 7.75002V43.9167L16.5 33.5834H44C45.5125 33.5834 46.75 32.4209 46.75 31Z" fill="#2D4F6F"/>
                                </svg>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="dashboard-inner">
                    {props.children}
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return state;
};

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(logoutUser()),
        onChangeLoading: (value) => dispatch(handleLoading(value))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardLayout);