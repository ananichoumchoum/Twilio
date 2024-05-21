# Simple Billing/Claims Application
## Introduction
This application is a front-end React Native app designed for managing billing and claims. It features a user-friendly form for adding new bills to the dashboard, enhancing the efficiency of tracking and managing financial operations. The app integrates various functionalities including image and document picking, and custom selection inputs, leveraging libraries such as MaterialIcons, ImagePicker, DocumentPicker, RNPickerSelect, and FontAwesome icons for a comprehensive user experience.

## Features
Add new bills to the dashboard with ease.  
Pick images and documents from your device.  
Filtrer and Search through claims.  
## Getting Started
### Prerequisites
Before running the app, ensure you have the following installed:

Node.js  
npm (Node Package Manager)  
Expo CLI (if you're using Expo for React Native development)  
### Setup
#### Clone the Repository

Start by cloning the repository to your local machine:


` git clone https://github.com/ananichoumchoum/DirectMedical.git `  

` cd DirectMedical `

#### Install Dependencies

Inside the project directory, run the following command to install the necessary dependencies:


`npm install`  

This will install React Native Vector Icons, Expo Image Picker, Expo Document Picker, React Native Picker Select, FontAwesome, and other dependencies required by the app.

#### Expo Permissions

If you're using Expo, ensure you have the necessary permissions for image and document picking in your app.json:

```javascript
{
  "expo": {
    "ios": {
      "infoPlist": {
        "NSPhotoLibraryUsageDescription": "This app uses the photo library to select images.",
        "NSCameraUsageDescription": "This app uses the camera to capture images.",
        "NSDocumentPickerUsageDescription": "This app uses the document picker to select files."
      }
    },
    "android": {
      "permissions": ["CAMERA", "READ_EXTERNAL_STORAGE", "WRITE_EXTERNAL_STORAGE"]
    }
  }
}
```

#### Running the App

To start the app, run:

`npm start`  

Or if you're using Expo:  

`expo start`  

Follow the instructions in the terminal to open the app in an emulator, your device, or a web browser.  

## Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

```markdown
  1. Fork the Project
  2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
  3. Commit your Changes (`git commit -m 'Add some AmazingFeature`)
  4. Push to the Branch (`git push origin feature/AmazingFeature`)
  5. Open a Pull Request
