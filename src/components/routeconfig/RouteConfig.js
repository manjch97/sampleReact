import React from 'react';
import { HashRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import DashboardRef from "../d-board/Dashboard";
import Dashboard from "../dashboard/Dashboard";
import Landing from "../landing/Landing";
import MobileLanding from '../account/LoginM';
import ForgotPwd from '../account/login/ForgotPassword';
import ResetPwd from '../account/login/ResetPassword';
import Signup from "../account/signup/Signup";
import PageNotFound from "../error/PageNotFound";
import Membership from "../account/profile/membership/Membership";
import PaymentMain from '../payment/PaymentMain';
import ForumDetailsMain from '../forum/ForumDetailsMain';
import ForumMain from '../forum/ForumMain';
import Interests from "../account/profile/Interests";
import CustomerPreferences from "../account/profile/CustomerPreferences";
import useViewportSizes from 'use-viewport-sizes';
import { MOBILE_WIDTH } from '../../constants/CommonConstants';
import RouteListener from './RouteListener';
import { ToastContainer } from 'react-toastify';
import SearchPeople from '../search/SearchPeople';
import SearchAll from '../search/SearchAll';
import SearchLiveStream from '../search/SearchLiveStream';
import BoothMain from '../booth/BoothMain';
import ViewAllBooths from '../booth/ViewAllBooths';
import AllRequests from '../booth/rewards/RewardsGoalsMain';
import GameDemoMain from '../GameDemos/GameDemoMain';
import ShopMain from '../shop/ShopMain'
import ShowAllRequest from '../booth/navtabs/events/ShowAllRequest'
import People from '../booth/People/People';
import UserProfile from '../booth/UserProfile/UserProfile'
import All from '../leaderboard/All/All';
import LeaderBoardMain from '../leaderboard/LeaderBoardMain';
import Active from '../active/Active';
import Help from './../account/profile/Help';
import RewardsGoalsMain from '../booth/rewards/RewardsGoalsMain';
import Settings from '../account/profile/settings/Settings';
import MemberAvatar from '../account/avatar/MemberAvatar';
import Changeplan from '../account/profile/membership/Membership';
import SchedulesMain from '../People/schedules/SchedulesMain';
import Following from '../People/following/Following';
import SearchArticles from '../search/SearchArticles';
import CookieCompliance from '../common/cookie/CookieCompliance'
import EventsMain from '../events/EventsMain';
import TrendingMain from '../booth/trending/TrendingMain';
import skins from '../common/skins/skins';
import VideoStreaming from './../../components/dashboard/VideoStreaming';
import ShoppingCart from '../../components/shop/ShoppingCart'
import ShoppingTokens from '../../components/shop/Tokens'
import Setting from '../account/profile/settings/Setting'
import Favouritem from '../search/FavouriteContinueWatching'
import FriendList from '../friendlist/FriendList'
import Networking from '../networking/Networking'
import { isLoggedin } from '../../services/AuthService';
import SessionHelper from '../common/session/SessionHelper';

const RouteConfig = () => {
    const [vpWidth, vpHeight] = useViewportSizes(500);
    return (
        <Router>
            <RouteListener />
            <Switch>

                <Route exact path="/" component={Landing} />
                <Route exact path="/landing" component={Landing} />

                <Route path="/login">
                    <MobileLanding mobile={vpWidth <= MOBILE_WIDTH ? true : false}></MobileLanding>
                </Route>

                <Route path="/forgotPassword" component={ForgotPwd} />
                <Route path="/ResetPassword" component={ResetPwd} />

                <Route path="/signup/:signupCategory/:industryType">
                    <Signup mobile={vpWidth < MOBILE_WIDTH ? true : false}></Signup>
                </Route>

                <Route exact path="/signup/:signupCategory">
                    <Signup mobile={vpWidth < MOBILE_WIDTH ? true : false}></Signup>
                </Route>

                <ProtectedRoute auth={{ isLoggedIn : ()=> isLoggedin()}} path="/membership">
                    <Membership mobile={vpWidth < MOBILE_WIDTH ? true : false}></Membership>
                </ProtectedRoute>

                <ProtectedRoute auth={{ isLoggedIn : ()=> isLoggedin()}} path="/payment/:memId/:memType/:sku/:price">
                    <PaymentMain mobile={vpWidth < MOBILE_WIDTH ? true : false}></PaymentMain>
                </ProtectedRoute>

                <ProtectedRoute auth={{ isLoggedIn : ()=> isLoggedin()}} exact path="/forum" component={ForumMain} />

                <ProtectedRoute auth={{ isLoggedIn : ()=> isLoggedin()}} exact path="/forumdetails/:forumId">
                    <ForumDetailsMain mobile={vpWidth < MOBILE_WIDTH ? true : false}></ForumDetailsMain>
                </ProtectedRoute>

                <ProtectedRoute auth={{ isLoggedIn : ()=> isLoggedin()}} exact path="/dashboardRef" component={DashboardRef} />
                <ProtectedRoute auth={{ isLoggedIn : ()=> isLoggedin()}} exact path="/dashboard" component={Dashboard} />
                <ProtectedRoute auth={{ isLoggedIn : ()=> isLoggedin()}} exact path="/profile/avatar" component={MemberAvatar}/>

                <ProtectedRoute auth={{ isLoggedIn : ()=> isLoggedin()}} exact path="/profile/interests" component={Interests} />
                <ProtectedRoute auth={{ isLoggedIn : ()=> isLoggedin()}} exact path="/profile/preferences" component={CustomerPreferences} />
                <ProtectedRoute auth={{ isLoggedIn : ()=> isLoggedin()}} exact path="/profile/settings" component={Setting}/>
                
                <ProtectedRoute auth={{ isLoggedIn : ()=> isLoggedin()}} exact path="/search-people/:keyword" component={SearchPeople} />
                <ProtectedRoute auth={{ isLoggedIn : ()=> isLoggedin()}} exact path="/search-event/:keyword" component={SearchLiveStream} />
                <ProtectedRoute auth={{ isLoggedIn : ()=> isLoggedin()}} exact path="/search-article/:keyword" component={SearchArticles} />
                <ProtectedRoute auth={{ isLoggedIn : ()=> isLoggedin()}} exact path="/search-all" component={SearchAll} />
                <ProtectedRoute auth={{ isLoggedIn : ()=> isLoggedin()}} exact path="/favourite" component={Favouritem} />

                <ProtectedRoute auth={{ isLoggedIn : ()=> isLoggedin()}} exact path="/game-demos" component={GameDemoMain} />
                <ProtectedRoute auth={{ isLoggedIn : ()=> isLoggedin()}} exact path="/booths/:boothId/allrequests" component={ShowAllRequest} />
                <ProtectedRoute auth={{ isLoggedIn : ()=> isLoggedin()}} exact path="/booths/:boothId" key={"boothdetails"} component={BoothMain} />
                <ProtectedRoute auth={{ isLoggedIn : ()=> isLoggedin()}} exact path="/booths/:boothId/articles/:articleId" key={"articleDetails"}  component={BoothMain} />
                <ProtectedRoute auth={{ isLoggedIn : ()=> isLoggedin()}} exact path="/booths/:boothId/similararticles/:articleId" key={"similarArticleDetails"}  component={BoothMain} />
                <ProtectedRoute auth={{ isLoggedIn : ()=> isLoggedin()}} exact path="/booths/:boothId/featurearticles/:articleId" key={"featureArticleDetails"}  component={BoothMain} />
                <ProtectedRoute auth={{ isLoggedIn : ()=> isLoggedin()}} exact path="/booths" component={ViewAllBooths} />

                <ProtectedRoute auth={{ isLoggedIn : ()=> isLoggedin()}} path="/booths/:boothId/rewards-goals" component={RewardsGoalsMain} />

                <ProtectedRoute auth={{ isLoggedIn : ()=> isLoggedin()}} exact path="/global/people/following" component={Following} />
                <ProtectedRoute auth={{ isLoggedIn : ()=> isLoggedin()}} exact path="/global/people" component={People} />
                <ProtectedRoute auth={{ isLoggedIn : ()=> isLoggedin()}} exact path="/global/userdetails/:userId" component={UserProfile} />
                <ProtectedRoute auth={{ isLoggedIn : ()=> isLoggedin()}} exact path="/global/people/active" component={Active} />
                <ProtectedRoute auth={{ isLoggedIn : ()=> isLoggedin()}} exact path="/global/events/all" component={EventsMain} />

                <ProtectedRoute auth={{ isLoggedIn : ()=> isLoggedin()}} exact path="/customer/schedules" component={SchedulesMain} />
                <ProtectedRoute auth={{ isLoggedIn : ()=> isLoggedin()}} exact path="/allrequests" component={AllRequests} />
                <ProtectedRoute auth={{ isLoggedIn : ()=> isLoggedin()}} exact path="/All" component={All} />
                <ProtectedRoute auth={{ isLoggedIn : ()=> isLoggedin()}} exact path="/global/leader-board" component={LeaderBoardMain} />
                <ProtectedRoute auth={{ isLoggedIn : ()=> isLoggedin()}} exact path="/global/help" component={Help} />
                <ProtectedRoute auth={{ isLoggedIn : ()=> isLoggedin()}} exact path="/global/help/changeplan" component={Changeplan} />
                <ProtectedRoute auth={{ isLoggedIn : ()=> isLoggedin()}} exact path="/shop" component={ShopMain} />
                <ProtectedRoute auth={{ isLoggedIn : ()=> isLoggedin()}} exact path="/trending" component={TrendingMain} />


                <ProtectedRoute auth={{ isLoggedIn : ()=> isLoggedin()}} exact path="/skins" component={skins}/>
                <ProtectedRoute auth={{ isLoggedIn : ()=> isLoggedin()}} exact path="/global/video" component={VideoStreaming}/>
                <ProtectedRoute auth={{ isLoggedIn : ()=> isLoggedin()}} exact path="/shoppingcart" component={ShoppingCart}/>
                <ProtectedRoute auth={{ isLoggedIn : ()=> isLoggedin()}} exact path="/shoppingtokens" component={ShoppingTokens}/>
                <ProtectedRoute auth={{ isLoggedIn : ()=> isLoggedin()}} exact path="/friendlist" component={FriendList} />
                <ProtectedRoute auth={{ isLoggedIn : ()=> isLoggedin()}} exact path="/networking" component={Networking} />
                
                <Route path="*" component={PageNotFound} />

            </Switch>
            <ToastContainer role="alert" style={vpWidth < MOBILE_WIDTH ? { width: "100%" } : { width: "60%" }} />
            <RouteListener />
            <SessionHelper/>
        </Router>
    )
}

export const ProtectedRoute = ({ auth, ...props }) => {
    const isAllowed = auth.isLoggedIn();
    return isAllowed
        ? (<Route {...props} />)
        : (<Redirect to="/login" />)
};

export default RouteConfig;
