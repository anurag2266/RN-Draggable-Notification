import React, {useState} from 'react';
import {
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Card from '../TestingApp/src/Card';

function App(): React.JSX.Element {
  const [open, setOpen] = useState(true);

  return (
    <>
      <SafeAreaView style={styles.backgroundStyle}>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={styles.header}>
            <Text style={styles.title}>
              React Native Draggable Notification Card
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.subtitle}>A notification</Text>
            <Text style={styles.paragraph}>
              Click the button below to show the notification card
            </Text>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.button}
              onPress={() => setOpen(true)}>
              <Text style={styles.buttonText}>Show Notification</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.section}>
      
          </View>
        </ScrollView>
      </SafeAreaView>
      {open && <Card onOut={() => setOpen(false)} />}
    </>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#e1e7f0',
  },
  header: {
    margin: 25,
    marginVertical: 120,
  },
  title: {
    color: 'black',
    fontSize: 40,
    fontWeight: 'bold',
  },
  subtitle: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop: 30,
  },
  paragraph: {
    color: 'black',
    marginBottom: 15,
    fontSize: 16,
  },
  section: {
    backgroundColor: 'white',
    paddingHorizontal: 25,
    paddingTop: 5,
  },
  button: {
    borderRadius: 20,
    backgroundColor: '#f3ca62',
    height: 50,
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;