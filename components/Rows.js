import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { mainStyles as styles } from '../screens/MainStyles';

export function ExpandedRow({ id, status, uploadedBy, notes, fileNames, onShowDetails }) {
  
    const getFullStatusText = (status) => {
      switch (status) {
        case 'N':
          return 'New';
        case 'R':
          return 'Received';
        default:
          return 'Unknown'; // Fallback for unknown status
      }
    };
    return (
      
      <View style={styles.expandedRow}>
        <Text style={styles.detailText}>ID: {id}</Text>
        <Text style={styles.detailText}>Status: {getFullStatusText(status)}</Text> 
        <Text style={styles.detailText}>Uploaded by: {uploadedBy}</Text>
        <Text style={styles.detailText}>Notes: {notes}</Text>
        <View>
          <Text style={styles.detailText}>Files:</Text>
          {fileNames.map((fileNames, index) => (
            <Text key={index} style={styles.fileNameText}>{fileNames}</Text>
          ))}
        </View>
        <TouchableOpacity style={styles.uploadButton} onPress={onShowDetails}>
          <Text style={styles.billDetailsText} >Bill details</Text>
        </TouchableOpacity>
      </View>
    );
  }
  
export function ClaimRow({ id, date, time, physician, status, uploadedBy, notes, fileNames, onShowDetails }) {
    const [expanded, setExpanded] = useState(false);
    
    const getStatusIconColor = (status) => {
      switch (status) {
        case 'N': // New
          return '#FAD02C';
        case 'R': // Received
          return '#00A300';
        default:
          return 'red';
      }
    };
    
    return (
      <>
        <TouchableOpacity style={styles.row} onPress={() => setExpanded(!expanded)}>
          <View style={[styles.dataCell, styles.dateCell]}>
            <Text>{date}</Text>
            <Text>{time}</Text>
          </View>
          <Text style={[styles.dataCell, styles.drCell]}>{physician}</Text>
          <View style={styles.statusAndIcon}>
          <Icon
              name="circle"
              size={25}
              color={getStatusIconColor(status)}
              style={styles.statusIcon}
            />
            <Icon
              name={expanded ? "minus" : "plus"}
              size={16}
              color="grey"
              style={styles.expandIcon}
            />
          </View>
        </TouchableOpacity>
        {expanded && (
          <ExpandedRow 
            id={id} 
            status={status}
            uploadedBy={uploadedBy} 
            notes={notes} 
            fileNames={fileNames} 
            onShowDetails={onShowDetails} 
          />
        )}
      </>
    );
  }
  