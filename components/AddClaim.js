import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, TextInput, Alert } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { mainStyles } from '../styles/MainStyles';
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';
import RNPickerSelect from 'react-native-picker-select';
import { useNavigation } from '@react-navigation/native';
import claimsData from '../data/ClaimData';
import { useClaims } from '../contexts/ClaimsContext';

const AddClaim = () => {
  const [comments, setComments] = useState('');
  const [images, setImages] = useState([]);
  const [selectedPhysician, setSelectedPhysician] = useState('');
  const [physicianError, setPhysicianError] = useState('');
  const [uploadError, setUploadError] = useState('');
  const { addClaim } = useClaims();
  const { claims, setClaims } = useClaims();
  const currentDateTime = new Date();
  const addClaimDate = currentDateTime.toISOString().split('T')[0]; // Extract date in YYYY-MM-DD format
  const addClaimTime = currentDateTime.toTimeString().split(' ')[0]; // Extract time in HH:MM:SS format

  const physicians = ['Physician 1', 'Physician 2', 'Physician 3']; // Replace with list of physicians
  const navigation = useNavigation();

  const pickerItems = physicians.map((physician) => ({
    label: physician,
    value: physician,
  }));
  
  const handlePhysicianSelect = (value) => {
    setSelectedPhysician(value);
  };

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        // Handle the scenario where camera permissions are not granted
      }
    })();
  }, []);

  const selectFromLibrary = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false, // typically, multi-select doesn't work with editing
      aspect: [4, 3],
      quality: 1,
      allowsMultipleSelection: true, // Enable multiple selection
    });

    if (!result.canceled && result.assets) {
      const newItems = result.assets.map(fileOrImage);
      setImages(images.concat(newItems));
    }
  };


  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: '*/*',
        multiple: true, // If your document picker supports multiple selections
      });

      if (result.type === 'success' || (result.type === undefined && result.assets)) {
        result.assets.forEach((document) => {
          handleDocumentSelection(document);
        });
      }
    } catch (err) {
      // Handle the error case
    }
  };

  const fileOrImage = (item) => {
    if (item.uri.match(/\.(jpeg|jpg|gif|png)$/)) {
      return { type: 'image', uri: item.uri };
    } else {
      return { type: 'file', uri: item.uri, name: item.name, mimeType: item.mimeType };
    }
  };

  const handleDocumentSelection = (documentDetails) => {
    const newDocument = {
      type: 'file',
      uri: documentDetails.uri,
      name: documentDetails.name,
      mimeType: documentDetails.mimeType,
    };

    setImages(prevImages => [...prevImages, newDocument]);
  };

  const removeImage = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };

  const handleAddClaim = () => {
      // Reset error messages
  setPhysicianError('');
  setUploadError('');

  // Check if physician is selected
  if (!selectedPhysician) {
    setPhysicianError('Please select a physician.');
    return; // Stop the function
  }

  // Check if any images or documents are selected
  if (images.length === 0) {
    setUploadError('Uploading at least one bills is required.');
    return; // Stop the function
  }
    const newClaim = {
      id: String(claimsData.length + 1), // Mock ID
      date: addClaimDate,
      time: addClaimTime,
      physician: selectedPhysician,
      status: 'N', // New claim status
      uploadedBy: 'User A', // Mocked username
      notes: comments,
      fileNames: images.map(image => image.name || 'image') // Extract file names from images
    };

    setClaims([...claims, newClaim]);
    navigation.navigate('Main', { updatedClaims: [...claims, newClaim] });
  };

  const handleCancel = () => {
    Alert.alert(
      'Cancel',
      'Are you sure you want to cancel?',
      [
        {
          text: 'No',
          onPress: () => {
            // Do nothing, the user decided not to cancel
          },
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => {
            navigation.navigate('Main');
          },
        },
      ]
    );
  };

  return (
    <View style={mainStyles.container}>
      <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{ flexGrow: 1 }}>
        <View style={mainStyles.formContainer}>
          <Text style={mainStyles.title}>Upload bills</Text>
          <View style={mainStyles.physicianSection}>
            <Text style={mainStyles.physicianLabel}>Choose a physician:</Text>
            <View style={mainStyles.pickerContainer}>
              <RNPickerSelect
                items={pickerItems}
                onValueChange={handlePhysicianSelect}
                placeholder={{ label: 'Select a physician', value: null }}
                value={selectedPhysician}
                style={mainStyles.pickerText}
              />
            </View> 
          </View>
          <Text style={mainStyles.commentsLabel}>Notes:</Text>
          <TextInput style={mainStyles.commentsInput} value={comments} onChangeText={setComments} multiline={true} />
          <View style={mainStyles.photoOptions}>
            <TouchableOpacity style={mainStyles.photoOption} onPress={pickDocument}>
              <MaterialIcons name="add-photo-alternate" size={70} style={mainStyles.icon} />
              <Text style={mainStyles.optionText2}>  Select files   </Text>
            </TouchableOpacity>
            <View style={mainStyles.lineDivider} />
            <TouchableOpacity style={mainStyles.photoOption} onPress={selectFromLibrary}>
              <MaterialIcons name="add-a-photo" size={60} style={mainStyles.icon2} />
              <Text style={mainStyles.optionText}>Select photos</Text>
            </TouchableOpacity>
          </View>
          {images.map((item, index) => {
            return (
              <View key={index} style={mainStyles.imageRow}>
                {item.mimeType === 'application/pdf' ? (
                  <View style={mainStyles.fileItemContainer}>
                    <MaterialIcons name="picture-as-pdf" size={60} color="#D32F2F" />
                    <Text style={mainStyles.fileItemText}>{item.name}</Text>
                  </View>
                ) : (
                  <Image source={{ uri: item.uri }} style={mainStyles.image} />
                )}
                <TouchableOpacity onPress={() => removeImage(index)} style={mainStyles.deleteButtonX}>
                  <Text style={mainStyles.deleteButtonText}>X</Text>
                </TouchableOpacity>
              </View>
            );
          })}
            {physicianError ? <Text style={mainStyles.errorText}>{physicianError}</Text> : null}
            {uploadError ? <Text style={mainStyles.errorText}>{uploadError}</Text> : null}
          <View style={mainStyles.buttonContainer}>
            <TouchableOpacity style={mainStyles.cancelLink} onPress={handleCancel}>
              <Text style={mainStyles.cancelLinkText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={mainStyles.addButton} onPress={handleAddClaim}>
              <Text style={mainStyles.addButtonText}>Submit bills</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AddClaim;
