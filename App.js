import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NavbarComponent from './Components/NavbarComponent';
import StoriesComponent from './Components/StoriesComponent';
import PostComponet from './Components/PostComponet';
import FooterComponent from './Components/FooterComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <NavbarComponent/>
      <StoriesComponent/>
      <PostComponet/>
      <FooterComponent/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
