import { StyleSheet, View, Image, Text, Dimensions } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { WelcomeScreenNavigationProp } from '@src/types/WelcomeScreen';

const WelcomeScreen = () => {
  //here I get the height dynamically
  const windowHeight = Dimensions.get('window').height;

  const navigation: WelcomeScreenNavigationProp = useNavigation();

  const navigateToEventScreen = () => {
    navigation.navigate('EventsScreen');
  };

  /* I normally would like to use external styling and keep my styles in separete folders but I didn't use 
  heavy styling in my components and my project size is quite minimal. Therefore, I would like to use internal styling
  for the project. However, this is definitely not the best practice. I normally always would like to separete my styles
  in different folders depending on the project architecture.
  */

  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['#99ccff', '#99ccff']}
        style={styles.background}
      />
      <View style={{ position: 'absolute', top: windowHeight / 3 }}>
        <Image
          source={require('../assets/logo.png')}
          style={{
            borderRadius: 20
          }}
        />
        <TouchableOpacity
          style={{
            display: 'flex'
          }}
          onPress={navigateToEventScreen}
        >
          {/* I personally like linear gradients in my personal projects */}
          <LinearGradient
            colors={['#ffaf67', '#e54a2d']}
            style={{
              display: 'flex',
              marginTop: 20,
              height: 30,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 3
            }}
          >
            <Text style={{ color: '#fff', fontWeight: 'bold' }}>
              Let's Explore!
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  background: {
    width: '100%',
    height: '100%'
  }
});
