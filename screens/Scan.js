import React, { useState, useEffect } from 'react';
import { Button, Image, View, Text, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {Permissions} from 'expo';


const url = "https://melapi.herokuapp.com/v1/models/melanoma:predict";
const myurl = "http://192.168.0.106:5000/predict"; 



const SkinScan = ({navigation}) => {
  const [image, setImage] = useState(null);
  const [resp, setResponse] = useState("Results will appear here");

  const preds = null;
  //---------------------------------------
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleProgress = event => {
    setUploadProgress(Math.round((event.loaded * 100) / event.total));
  };

  const onClickUpload = () => {
    const xhr = new XMLHttpRequest();
    const formData = new FormData();
    setResponse("Preparing...");

    formData.append('file', {
      uri: image,
      type: 'image/jpeg',
      name: 'photo.jpg',
    });
    xhr.upload.addEventListener('progress', handleProgress);
    xhr.addEventListener('load', () => {
      setUploadProgress(100);
      setResponse(xhr.response);
      console.log("Response: ", xhr.response);
    });
    xhr.open('POST', myurl);
    // xhr.setRequestHeader('Authorization', UPLOAD_PROGRESS_HEADER);
    xhr.send(formData);
  };
  //---------------------------------------


  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };


  const takePic = async () => {
    await Permissions.askAsync(Permissions.CAMERA);
    const { cancelled, uri} = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
    });
    if (!cancelled) {
      setImage(uri);
    }

  }


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}


        <Text></Text>
        <Button title="Pick Image" onPress={pickImage} />
        <Text></Text>
        {/* <Button title="Take pic" onPress={takePic} /> */}
        <Text></Text>
        <Button title="Upload Photo" onPress={onClickUpload} />
        <Text>Uploaded {uploadProgress}%</Text>
        <TextInput
          style={{
            height: 100,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          value={resp}
        />
        {/* <Text>Response is: {resp}</Text> */}
    </View>
  );
}


export default SkinScan;