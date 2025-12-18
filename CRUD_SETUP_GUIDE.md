# CRUD Application with React Router & Firebase Firestore - Setup Guide

## Project Overview

This project implements a complete CRUD (Create, Read, Update, Delete) application using:
- **React Router DOM** for SPA routing and navigation
- **Firebase Firestore** for real-time database operations
- **Bootstrap** for responsive UI
- **Vite** as the build tool

## Features Implemented

### ✅ Task 1: SPA Routing with React Router DOM
- Configured React Router DOM for seamless SPA navigation
- Multiple routes with no page reloads:
  - `/` - ItemList (View All Items)
  - `/create` - CreateItem (Create New)
  - `/item/:id` - ViewItem (View Single Item - Dynamic Route)
  - `/edit/:id` - EditItem (Edit Item - Dynamic Route)
- Consistent Navbar layout across all routes
- Proper back navigation and link handling

### ✅ Task 2: CRUD Application with Firebase Firestore

#### a. **Create (CreateItem Component)**
- Form to collect item data (name, description, category, price)
- Validation for required fields
- Data stored in Firebase Firestore collection `items`
- Redirect to view item after successful creation

#### b. **Read All Items (ItemList Component)**
- Fetches all documents from Firestore `items` collection
- Displays items in a responsive card layout
- Shows item name, description, category, and price
- Sorted by creation date (newest first)

#### c. **Read Single Item (ViewItem Component)**
- Uses React Router dynamic routing: `/item/:id`
- Fetches specific Firestore document by ID
- Displays full item details
- Shows creation and update timestamps

#### d. **Update (EditItem Component)**
- Uses React Router dynamic routing: `/edit/:id`
- Pre-fills form with existing item data
- Updates Firestore document on submission
- Navigates to view item after update

#### e. **Delete (ItemList Component)**
- Delete button on each item card
- Confirmation dialog before deletion
- UI updates immediately after deletion
- Error handling included

## Setup Instructions

### 1. **Configure Firebase**

Update the Firebase configuration in `src/firebase.js` with your own credentials:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123def456"
};
```

**To get these credentials:**
1. Go to [Firebase Console](https://console.firebase.google.com)
2. Create a new project or select existing one
3. Go to Project Settings
4. Under "Your apps", select your web app
5. Copy the config object
6. Paste it into `src/firebase.js`

### 2. **Create Firestore Collection**

1. Go to Firebase Console
2. Navigate to Firestore Database
3. Create a new collection named `items`
4. Set rules to allow read/write (development only):

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /items/{document=**} {
      allow read, write: if true;
    }
  }
}
```

### 3. **Install Dependencies**

```bash
npm install
```

### 4. **Run Locally**

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

### 5. **Build for Production**

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── pages/
│   │   ├── ItemList.jsx         # View all items
│   │   ├── ItemList.css         # Item list styles
│   │   ├── CreateItem.jsx       # Create new item form
│   │   ├── ViewItem.jsx         # View single item (dynamic route)
│   │   ├── EditItem.jsx         # Edit item form (dynamic route)
│   │   └── ... (other pages)
│   ├── layouts/
│   │   ├── navbar.jsx           # Navigation bar
│   │   └── footer.jsx           # Footer
│   └── common/
│       └── Button.jsx           # Reusable button
├── services/
│   └── firestoreService.js      # CRUD operations
├── firebase.js                  # Firebase configuration
├── App.jsx                      # Main app with routes
├── main.jsx                     # Entry point
└── index.css                    # Global styles
```

## API Reference - Firestore Service

Located in `src/services/firestoreService.js`:

### Create Item
```javascript
createItem(itemData) → Promise<string>
```
Creates a new item in Firestore and returns the document ID.

### Get All Items
```javascript
getAllItems() → Promise<Array>
```
Fetches all items sorted by creation date (newest first).

### Get Single Item
```javascript
getItemById(id) → Promise<Object>
```
Fetches a specific item by its ID.

### Update Item
```javascript
updateItem(id, itemData) → Promise<void>
```
Updates an existing item's data.

### Delete Item
```javascript
deleteItem(id) → Promise<void>
```
Deletes an item from Firestore.

## Routing Routes

| Route | Component | Purpose |
|-------|-----------|---------|
| `/` | ItemList | View all items |
| `/create` | CreateItem | Create new item form |
| `/item/:id` | ViewItem | View single item details |
| `/edit/:id` | EditItem | Edit item form |
| `/menu` | Menu | (Existing) |
| `/about` | About | (Existing) |
| `/contact` | Contact | (Existing) |

## Item Data Structure

```javascript
{
  id: string,              // Auto-generated by Firestore
  name: string,            // Required
  description: string,     // Optional
  category: string,        // Optional
  price: number,           // Optional
  createdAt: timestamp,    // Auto-generated
  updatedAt: timestamp     // Auto-updated
}
```

## Deployment on Vercel

1. Push code to GitHub
2. Connect repository to Vercel
3. Vercel will automatically detect build settings
4. Deploy!

For production, update Firebase security rules to restrict access:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /items/{document=**} {
      allow read: if true;
      allow create, update, delete: if request.auth != null;
    }
  }
}
```

## Error Handling

All components include:
- Try-catch error handling
- User-friendly error messages
- Loading states
- Confirmation dialogs for destructive actions

## Performance Features

- Lazy loading of routes
- Firestore queries ordered by date
- Responsive Bootstrap design
- Optimized component re-renders

## Future Enhancements

- Add authentication (Firebase Auth)
- Add image upload support
- Add search and filtering
- Add pagination for large datasets
- Add data export functionality
- Add user-specific items

---

**Need Help?**
- Firebase Docs: https://firebase.google.com/docs
- React Router Docs: https://reactrouter.com/
- Firebase Firestore Docs: https://firebase.google.com/docs/firestore
