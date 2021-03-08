
import React from 'react';
import { StyleSheet, SafeAreaView, Alert, Platform, StatusBar } from 'react-native';
import {
  useDeviceOrientation
} from '@react-native-community/hooks';
import WelcomeScreen from './screens/WelcomeScreen';
import ViewImageScreen from './screens/ViewImageScreen';
import AppButton from './components/Buttons/AppButton';
import AppCard from './components/Card/AppCard';
import colors from './config/colors';
import ListingDetailScreen from './screens/ListingDetail/ListingDetailScreen';
import ListItem from './components/ListItem/ListItem';
import MessagesScreen from './screens/Messages/MessagesScreen';

export default function App() {
  const handleOnPress = () => console.log("btn clicked");
  const handleOnPress2 = () => Alert.prompt("My title", "My message", (text) => console.log(text));
  const { landscape } = useDeviceOrientation();


  return (
    <SafeAreaView style={styles.container}>
      {/* <WelcomeScreen /> */}
      {/* <ViewImageScreen /> */}
      {/* <AppButton color={colors.primary} onPress={() => console.log("Tapped")}>LOGIN</AppButton> */}
      {/* <AppCard subTitle="$100" title="Red jacket for sale!" /> */}
      {/* <ListingDetailScreen profile={{ name: "Mosh Hamedani", listing_number: "5" }} subTitle="$100" title="Red jacket for sale!" /> */}
      <MessagesScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f4f4',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    alignItems: 'center',
    justifyContent: 'center',

  },
});
