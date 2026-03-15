DRC Tower Map - Frontend Application
This is the React frontend for the DRC Mobile Network Tower Mapping application.

Quick Start

# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
Folder Structure

frontend/
├── public/
│   ├── data/
│   │   └── tower-sites.json    # All tower data
│   ├── logo.png                # Client logo
│   └── index.html              # HTML template
├── src/
│   ├── components/
│   │   ├── Map.js              # Main map component
│   │   ├── SiteTable.js        # Data table
│   │   ├── AddSiteForm.js      # Add new sites
│   │   ├── ImportData.js       # Excel import
│   │   ├── TrashBin.js         # Deleted items
│   │   ├── LayerManager.js     # Layer controls
│   │   └── DeleteModal.js      # Confirmation modal
│   ├── App.js                  # Main app
│   ├── App.css                 # Styles
│   └── index.js                # Entry point
└── package.json                # Dependencies
Available Components
Component	Description
Map	Interactive Leaflet map with markers
SiteTable	Comprehensive data table with sorting
AddSiteForm	Form for adding new tower sites
ImportData	Excel/CSV file import interface
TrashBin	Manage deleted sites
LayerManager	Toggle different data layers
DeleteModal	Confirmation dialog
Key Features Implemented
Interactive DRC map with 3,500+ markers

Dual icon styles (round dots / antenna icons)

Filter by operator (7 operators)

Filter by province

Search by site name or SAP ID

Add new sites with all fields

Delete with trash bin

Restore deleted items

Permanent deletion

Import Excel/CSV data

Data table view

Multiple map styles

Responsive design

French interface

Red/Blue/White theme

Client logo integration

Dependencies
json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-leaflet": "^4.2.1",
  "leaflet": "^1.9.4",
  "xlsx": "^0.18.5",
  "react-scripts": "5.0.1"
}
Deployment
Deploy to Netlify

npm run build
# Drag and drop build folder to Netlify
Deploy to Vercel

npm install -g vercel
vercel
Environment Variables
Create .env file:

REACT_APP_MAP_CENTER="-2.5,23.5"
REACT_APP_DEFAULT_ZOOM="6"
Available Scripts
Script	Description
npm start	Start dev server at localhost:3000
npm run build	Build for production
npm test	Run tests
npm run eject	Eject from Create React App
© 2026 ARPTC - République Démocratique du Congo

