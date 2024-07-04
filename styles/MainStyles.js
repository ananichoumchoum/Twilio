import { StyleSheet, Platform } from 'react-native';

export const mainStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: '20%',
    justifyContent: 'center',
  },
  formContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    marginTop: 20,
  },
  physicianButtonContainer: {
    position: 'relative',
  },
  physicianSection: {
    marginVertical: 15,
  },
  physicianLabel: {
    fontSize: 16,
    marginBottom: 10,
  },
  photoOption: {
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
    marginTop: 20,
    color: '#cdd6da',
  },
  optionText2: {
    fontSize: 16,
    marginTop: 15,
    color: '#cdd6da',
  },
  icon: {
    alignSelf: 'center',
    color: '#cdd6da',
  },
  icon2: {
    alignSelf: 'center',
    color: '#cdd6da',
    marginTop:5,
  },
  lineDivider: {
    borderWidth: 0.5,
    borderColor: '#cdd6da',
    height: '100%',
  },
  photoOptions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  commentsLabel: {
    fontSize: 18,
    marginVertical: 10,
  },
  commentsInput: {
    height: 100,
    fontSize: 16,
    borderWidth: 1,
    borderColor: 'gray',
    marginVertical: 10,
    borderColor: '#D3D3D3',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },  
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  addButton: {
    backgroundColor: '#324260',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  cancelLink: { 
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:20,
  },
  cancelLinkText:{
    fontSize:20,
  },
  addButtonText: {
    color: 'white',
    fontSize: 20,
  },
  image: {
    width: 70, 
    height: 70, 
    borderRadius: 10, 
    marginRight: 10,
  },
  imageContainer: {
    position: 'relative',
    margin: 4, 
  },
  fileItemContainer: {
    flexDirection: 'row',
    alignItems: 'center', 
    margin: 10, 
    padding: 10, 
    borderWidth: 1, 
    borderColor: '#ccc', 
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  fileItemText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#000',
    flexShrink: 1,
  },
  imageRow: {
    flexDirection: 'row',
    alignItems: 'center', 
    marginVertical: 10,
  },
  deleteButtonX: {
    position: 'absolute',
    top: -10,
    left: 56,
    width: 30,
    height: 30, 
    backgroundColor: '#D22B2B',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: '900',
    fontFamily: Platform.OS === 'ios' ? 'HelveticaNeue-Bold' : 'Roboto-Bold',
  },
  container1: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  scrollView: {
    flex: 1,
  },
  title1: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  addButton1: {
    backgroundColor: '#324260',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  addButtonText1: {
    color: 'white',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchLabel: {
    marginRight: 10,
    fontSize:16,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  searchButton: {
    backgroundColor: '#324260',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  historyContainer: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius:10,
    backgroundColor: 'white',
    shadowColor: '#000', 
    shadowOffset: {
      width: 0,
      height: 2, 
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingTop: 10,
    paddingBottom: 10,
  },
  row1: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#324260',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  expandedRow: {
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  detailText: {
    // Style for the text in the expanded row
    marginVertical: 5,
  },
  uploadButton: {
    backgroundColor: '#cdd6da',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  billDetailsText:{
    color:"black"
  },
  headerCell: {
    padding: 12,
    fontWeight: 'bold',
    color: 'white',
  },
  dataCell: {
    padding: 8,
  },
  dateCell: {
    flex: 3, // more space for Date
  },
  drCell: {
    flex: 4, // more space for Physician Name
  },
  statusCell: {
    flex: 1.6,
  },
  statusAndIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 60,
  },
  expandIcon: {
    marginLeft: 5,
    paddingRight: 8,
  },
  statusIcon:{
    marginRight: 5,
    paddingRight: 8,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  closeButton: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  deleteButton: {
    backgroundColor: '#D22B2B',
    padding: 10,
    marginTop: 20,
    borderRadius:10,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  detailsContainer: {
    alignSelf: 'stretch',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  detailText: {
    fontSize: 16,
    marginVertical: 2,
    padding:5,
  },
  closeButtonText: {
    fontSize: 16,
    color: '#000',
  },
  deleteButtonText: {
    fontSize: 16,
    color: 'white',
  },
});

