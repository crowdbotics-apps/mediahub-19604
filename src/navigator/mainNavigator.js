import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial91048Navigator from '../features/Tutorial91048/navigator';
import NotificationList91020Navigator from '../features/NotificationList91020/navigator';
import Settings91019Navigator from '../features/Settings91019/navigator';
import Settings91011Navigator from '../features/Settings91011/navigator';
import UserProfile91009Navigator from '../features/UserProfile91009/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial91048: { screen: Tutorial91048Navigator },
NotificationList91020: { screen: NotificationList91020Navigator },
Settings91019: { screen: Settings91019Navigator },
Settings91011: { screen: Settings91011Navigator },
UserProfile91009: { screen: UserProfile91009Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
