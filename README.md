DRC Mobile Network Tower Mapping Application
https://img.shields.io/badge/version-2.0.0-blue
https://img.shields.io/badge/React-18.2.0-61dafb
https://img.shields.io/badge/Leaflet-1.9.4-green
https://img.shields.io/badge/license-MIT-orange

Project Overview
A comprehensive web application for mapping and managing mobile network tower sites across the Democratic Republic of Congo. This application visualizes over 3,500 tower sites with interactive maps, advanced filtering, and data management capabilities.

Key Features
Feature	Description
Interactive Map	DRC map with provincial boundaries and custom markers
3,500+ Tower Sites	Complete dataset from ARPTC with all tower information
Dual Icon Styles	Round dots (clean) or antenna icons (detailed)
Advanced Filtering	Filter by operator, province, and search by name/SAP ID
Add New Sites	Complete form with all data fields
Delete & Restore	Trash bin with restore and permanent delete options
Excel Import	Bulk import data from Excel/CSV files
Data Table View	Comprehensive table with sorting and selection
Multiple Map Styles	Streets, Satellite, and Terrain views
Responsive Design	Works on desktop, tablet, and mobile
Live Demos
Version	Link	Description
Version 1 (Classic)	drctowermap.netlify.app	Original round dot markers
Version 2 (Enhanced)	drctower.netlify.app	New antenna icons with glass effects
Technology Stack
Frontend
React 18 - UI library

Leaflet - Interactive maps

React-Leaflet - React components for Leaflet

XLSX - Excel file processing

CSS3 - Custom styling with animations

Deployment
Netlify - Hosting and continuous deployment

GitHub - Source code management

Project Structure

drc-tower-map/
├── frontend/                 # React application
│   ├── public/               # Static assets
│   │   ├── data/             # JSON data files
│   │   ├── logo.png          # Client logo
│   │   └── index.html        # HTML template
│   ├── src/                  # Source code
│   │   ├── components/       # React components
│   │   │   ├── Map.js        # Interactive map
│   │   │   ├── SiteTable.js  # Data table
│   │   │   ├── AddSiteForm.js # Add new sites
│   │   │   ├── ImportData.js # Excel import
│   │   │   ├── TrashBin.js   # Deleted items
│   │   │   ├── LayerManager.js # Layer controls
│   │   │   └── DeleteModal.js # Confirmation modal
│   │   ├── App.js            # Main application
│   │   ├── App.css           # Styles
│   │   └── index.js          # Entry point
│   └── package.json          # Dependencies
├── database/                  # Database schemas
│   └── schema.sql            # PostgreSQL schema
├── documentation/             # Project docs
│   ├── deployment-guide.md   # Deployment instructions
│   └── api-docs.md           # API documentation
└── README.md                 # This file
Getting Started
Prerequisites
Node.js 18+

npm or yarn

Git

Installation
Clone the repository


git clone https://github.com/JoLukashala/CartographieApp.git
cd CartographieApp
Install dependencies


cd frontend
npm install
Run development server


npm start
The app will open at http://localhost:3000

Build for production


npm run build
Map Features
Icon Styles
Round Dots: Clean, minimalist design (Version 1)

Antenna Icons: Detailed antennas with glow effects (Version 2)

Map Styles
Streets - Standard OpenStreetMap view

Satellite - Aerial imagery

Terrain - Topographic view

Interactive Elements
Click markers for detailed popups

Hover effects on all interactive elements

Zoom-dependent icon detail (auto-scales)

Data Management
Adding Sites
Click "Ajouter" tab

Fill in all required fields

Submit to add to map and table

Importing Excel
Click "Importer" tab

Choose data type (Antennes, Tours, etc.)

Upload Excel/CSV file

Preview and confirm import

Deleting Sites
Select sites via checkboxes or map clicks

Click "Supprimer" to move to trash

Restore from trash or delete permanently

Configuration
Environment Variables
Create a .env file in the frontend directory:

text
REACT_APP_MAP_CENTER="-2.5,23.5"
REACT_APP_DEFAULT_ZOOM="6"
Data File
Place your tower data in frontend/public/data/tower-sites.json

Responsive Design
The application is fully responsive and works on:

Desktop (1920x1080)

Laptop (1366x768)

Tablet (768x1024)

Mobile (375x667)

Contributing
This project is developed for ARPTC (Autorité de régulation de la postes et des télécommunications du Congo). For contributions or issues, please contact the development team.

License
This project is proprietary and owned by ARPTC. All rights reserved.

Developer
Abdul Malik Lakho

GitHub: lakho0543-spec

Acknowledgments
ARPTC for providing the tower data

OpenStreetMap for map tiles

React and Leaflet communities

© 2026 ARPTC - République Démocratique du Congo


