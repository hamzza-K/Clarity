import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  View,
  StyleSheet,
  Button,
  Modal,
  Image,
  Text,
  TouchableOpacity,
  Animated,
} from 'react-native';

import { images } from '../constants';

const ModalPopup = ({visible, children}) => {
  const [showModal, setShowModal] = React.useState(visible);
  const scaleValue = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    toggleModal();
  }, [visible]);
  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShowModal(false), 200);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };
  return (
    <Modal transparent visible={showModal}>
      <View style={styles.modalBackGround}>
        <Animated.View
          style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

const Popup = ({visi, navigation}) => {
  const [visible, setVisible] = React.useState(visi);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
      <ModalPopup visible={visible}>
        <View style={{alignItems: 'center'}}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <Image
                source={require('../assets/icons/cross-small.png')}
                style={{height: 30, width: 30}}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* CHILDREN */}
        <View style={{alignItems: 'center'}}>
          <Image
            source={images.UserProfile6}
            style={{height: 150, width: 150, marginVertical: 10, padding: 20}}
          />
          <Button title="Logout" onPress={() => {navigation.navigate("login")}} style={{marginVertical: 20}}/>
        </View>

        <Text style={{marginVertical: 30, fontSize: 20, textAlign: 'center'}}>
          You are currently logged in. 
        </Text>
        {/* END CHILDREN */}
      </ModalPopup>
      <TouchableOpacity onPress={() => {setVisible(true)}}>

                        <Image source={images.UserProfile6} 
                        style={{width:40, height: 40, borderRadius:20}} />
                        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  modalBackGround: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
  },
  header: {
    width: '100%',
    height: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});

export default Popup;