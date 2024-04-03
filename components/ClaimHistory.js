import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ClaimRow, ExpandedRow } from './Rows';
import Icon from 'react-native-vector-icons/FontAwesome';
import BillDetailsModal from './BillDetailsModal';
import { mainStyles as styles } from '../screens/MainStyles';
import { useClaims } from '../contexts/ClaimsContext';

const ClaimHistory = ({ route }) => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedClaim, setSelectedClaim] = useState(null);
  const { claims, setClaims } = useClaims();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredClaims, setFilteredClaims] = useState(claims);

  useEffect(() => {
    if (route.params?.updatedClaims) {
      setClaims(route.params.updatedClaims);
    }
  }, [route.params?.updatedClaims, setClaims]);

  const handleAddClaimButtonPress = () => {
    navigation.navigate('AddClaim');
  };

  const handleSearch = () => {
    const lowercasedSearchTerm = searchTerm.toLowerCase();
    const filtered = claims.filter(claim =>
      claim.id.toLowerCase().includes(lowercasedSearchTerm)
      || claim.date.toLowerCase().includes(lowercasedSearchTerm)
      || claim.physician.toLowerCase().includes(lowercasedSearchTerm)
      || claim.status.toLowerCase().includes(lowercasedSearchTerm)
      || claim.uploadedBy.toLowerCase().includes(lowercasedSearchTerm)
    );
    setFilteredClaims(filtered);
  };
  
  useEffect(() => {
    setFilteredClaims(claims);
  }, [claims]);
  

  const handleSearchChange = (text) => {
    setSearchTerm(text);
  };

  const handleDelete = (id) => {
    const updatedClaims = claims.filter(claim => claim.id !== id);
    setClaims(updatedClaims);
    setModalVisible(false);
  };

  // When showing details, set the selected claim
  const showDetails = (claim) => {
    setSelectedClaim(claim);
    setModalVisible(true);
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
    <View style={styles.container1}>
      <Text style={styles.title1}>Physician Upload</Text>
      <TouchableOpacity style={styles.addButton1} onPress={handleAddClaimButtonPress}>
        <Text style={styles.addButtonText1}>Upload Bills</Text>
      </TouchableOpacity>
      <View style={styles.searchContainer}>
        <Text style={styles.searchLabel}>Search:</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          placeholderTextColor="#aaa"
          value={searchTerm}
          onChangeText={handleSearchChange}
        />
        <TouchableOpacity style={styles.searchButton} onPress={() => {handleSearch();}}>
          <Icon name="search" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.historyContainer}>
          <View style={styles.row1}>
            <Text style={[styles.headerCell, styles.dateCell]}>Date</Text>
            <Text style={[styles.headerCell, styles.drCell]}>Physician</Text>
            <Text style={[styles.headerCell, styles.statusCell]}>Status</Text>
          </View>
          {filteredClaims.map((claim, index) => (
            <ClaimRow 
              key={index}
              id={claim.id} 
              date={claim.date} 
              time={claim.time}
              physician={claim.physician} 
              status={claim.status} 
              uploadedBy={claim.uploadedBy}
              notes={claim.notes}
              fileNames={claim.fileNames}
              onShowDetails={() => showDetails(claim)} 
            />
          ))}
        </View>
      </ScrollView>
      <BillDetailsModal 
        visible={modalVisible} 
        onClose={() => setModalVisible(false)} 
        onDelete={handleDelete} 
        claim={selectedClaim}
      />
    </View>
    </TouchableWithoutFeedback>
  );
}
export default ClaimHistory;