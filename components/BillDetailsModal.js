import React from 'react';
import { Modal, View, Text, TouchableOpacity, Alert } from 'react-native';
import { mainStyles as styles } from '../styles/MainStyles';

function BillDetailsModal({ visible, onClose, onDelete, claim }) {
    const confirmDelete = () => {
      Alert.alert(
          "Confirm Delete",
          "Are you sure you want to delete this bill?",
          [
              {
                  text: "No",
                  onPress: () => {},
                  style: "cancel"
              },
              { 
                  text: "Yes", onPress: () => onDelete(claim.id) 
              }
          ],
          { cancelable: false }
      );
    };
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={onClose}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Text style={styles.closeButtonText}> X </Text>
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Bill Details</Text>
            
            {claim && (
              <View style={styles.detailsContainer}>
                <Text style={styles.detailText}>ID: {claim.id}</Text>
                <Text style={styles.detailText}>Date: {claim.date}</Text>
                <Text style={styles.detailText}>Physician: {claim.physician}</Text>
                <Text style={styles.detailText}>Status: {claim.status}</Text>
                <Text style={styles.detailText}>Uploaded by: {claim.uploadedBy}</Text>
                <Text style={styles.detailText}>Notes: {claim.notes}</Text>
                <Text style={styles.detailText}>File Names:</Text>
                {claim.fileNames.map((fileName, index) => (
                <Text key={index} style={styles.fileNameText}>{fileName}</Text>
                ))}
              </View>
            )}
            <TouchableOpacity style={styles.deleteButton} onPress={confirmDelete}>
                <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }
  export default BillDetailsModal;