import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ClaimHistory from '../components/ClaimHistory';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = ({ username, ...props }) => {
  const navigation = useNavigation();

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to Logout?',
      [
        {
          text: 'No',
          onPress: () => {
            // Do nothing, the user decided not to logout
          },
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => {
            // Add your logout logic here
            // For example, you can clear user credentials and navigate back to the login page
            navigation.navigate('LogIn');
          },
        },
      ]
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 18 }}>Welcome, {username}</Text>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={{ marginVertical: 20, paddingHorizontal: 16 }}>
        <DrawerItem
          label="Logout"
          onPress={handleLogout}
          icon={() => <Icon name="sign-out" size={24} color="#0096FF" />}
        />
      </View>
    </View>
  );
};

function Main({ route }) {
  const username = route.params?.username ?? 'Guest';
  return (
    <Drawer.Navigator
      initialRouteName="ClaimHistory"
      drawerContent={(props) => <CustomDrawerContent {...props} username={username} />}
    >
      <Drawer.Screen name="ClaimHistory" component={ClaimHistory} options={{
        title: 'Direct-Medical',
        headerStyle: {
          backgroundColor: '#324260'
        },
        headerTitleStyle: {
          color: 'white'
        },
        headerTintColor: 'white',
      }}/>
    </Drawer.Navigator>
  );
}

export default Main;
