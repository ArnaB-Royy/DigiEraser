# Secure Data Wiping Tool  

## Overview  
This project is a **secure, cross-platform data wiping application** designed to tackle India’s growing e-waste crisis. Millions of laptops and smartphones remain unused due to fear of data breaches, leading to hoarding of IT assets worth over ₹50,000 crore. This tool ensures **safe disposal and reuse of electronic devices** while maintaining user trust and transparency.  

## Features  
- **Cross-Platform Support**: Works on Windows, Linux, and Android devices.  
- **Secure Data Erasure**: Removes all user data, including hidden storage areas like HPA/DCO and SSD sectors.  
- **Tamper-Proof Wipe Certificates**: Generates digitally signed reports in PDF and JSON formats.  
- **User-Friendly Interface**: One-click operation suitable for general users.  
- **Offline Usability**: Can run from a bootable ISO/USB without internet access.  
- **Third-Party Verification**: Enables verification of wipe status by independent entities.  
- **Standards-Compliant**: Aligns with NIST SP 800-88 for secure data sanitization.  

## Installation  

### Backend Setup  
1. Navigate to the backend folder:  
   ```bash
   cd backend
   ```  
2. Initialize Node project:  
   ```bash
   npm init -y
   ```  
3. Install dependencies:  
   ```bash
   npm install express cors mongoose dotenv
   npm install --save-dev nodemon
   ```  
4. Create a `.env` file for environment variables (example):  
   ```
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   ```  
5. Create `server.js` with Express server code.  
6. Add scripts to `package.json`:  
   ```json
   "scripts": {
     "start": "node server.js",
     "dev": "nodemon server.js"
   }
   ```  
7. Start the backend server:  
   ```bash
   npm run dev
   ```  

### Frontend Setup  
1. Navigate to the frontend folder:  
   ```bash
   cd frontend
   ```  
2. Create a React project (Vite recommended):  
   ```bash
   npm create vite@latest .
   ```  
   - Choose **React** → **JavaScript**  
3. Install dependencies:  
   ```bash
   npm install
   ```  
4. Start the development server:  
   ```bash
   npm run dev   # (for Vite) OR npm start (for CRA)
   ```  

## Usage  
1. Launch the frontend application.  
2. Connect to the backend API.  
3. Select the device or storage to wipe.  
4. Click **Wipe Data**.  
5. Receive a **digitally signed wipe certificate** in PDF and JSON formats.  

## Tech Stack  
- **Frontend**: React.js (Vite / Create React App)  
- **Backend**: Node.js, Express  
- **Database**: MongoDB (for logging wipe actions, optional)  
- **Security**: NIST SP 800-88 compliant sanitization  
- **Offline Support**: Bootable ISO/USB  

## Impact  
This solution:  
- Encourages secure recycling of IT assets.  
- Reduces hoarding of electronic devices.  
- Promotes safe e-waste management.  
- Advances circular economy initiatives in India.  

## License  
This project is licensed under the **MIT License**.  

## References  
- [NIST SP 800-88 Guidelines for Media Sanitization](https://csrc.nist.gov/publications/detail/sp/800-88/rev-1/final)  
- Research on India’s e-waste management and IT asset hoarding.
