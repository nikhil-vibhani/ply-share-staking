import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import ChoiceStaking from '../pages/ChoiceStaking/ChoiceStaking';
import Home from '../pages/Home/Home';
import MysteryBoxes from '../pages/MysteryBoxes/MysteryBoxes';
import Staking from '../pages/Staking/Staking';
import StakingList from '../pages/StakingList/StakingList';
import TokenSales from '../pages/TokenSales/TokenSales';
import ScrollToTop from './ScrollToTop'

const AppRoutes = () => {

  return (
    <Router>
      <Header />
      <ScrollToTop>
        <Switch>
          <Route exact path="/" component={ChoiceStaking} />
        </Switch>
      </ScrollToTop>
      {/* <Footer /> */}
    </Router>

  )
}

export default AppRoutes;
