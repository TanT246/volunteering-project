Volunteer Management Frontend:
This is the frontend application for the Volunteer Management System, a platform where users can register, manage profiles, get event notifications, and more. The application is built using React.js with React Router for routing and Material UI for UI components.

Features:
User Registration: Users can create an account using a registration form.
Login: Users can log in with their credentials.
Volunteer Matching Form: A feature for matching volunteers to available events based on their preferences.
Event Manager: Users can view and manage upcoming events.
Profile Manager: Users can edit and update their profiles.
Notifications: View notifications related to volunteer activities and event assignments.
Volunteering History: Users can view their past volunteer assignments and contributions.
Navigation: A navigation bar for easy access to the different sections of the app.

Tech Stack:
Frontend: React.js, React Router DOM
UI Framework: Material-UI (MUI)
HTTP Client: Axios for making API calls
CSS: Custom styling and Material-UI components
Backend: Communicates with a Node.js/MongoDB backend (through APIs)
Other Tools: CORS, Nodemon for backend, Mongoose for database management

Project Structure:
VOLUNTEERING-PROJECT/
├── build/                          # Compiled production-ready files
├── node_modules/                   # Installed dependencies
├── public/                         # Public assets like index.html
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── src/                            # Source code for the application
│   ├── component/                  # Reusable UI components
│   │   ├── NavBar.css              # Styling for the navigation bar
│   │   └── NavBar.js               # Navigation bar component
│   ├── css/                        # Global and page-specific styles
│   │   ├── notif.css               # CSS for Notifications page
│   │   ├── volunteerhistory.css    # CSS for Volunteering History page
│   │   ├── styles.css              # Shared styling across the application
│   └── Pages/                      # Individual pages and their corresponding styles
│       ├── AboutUs.css             # Styling for About Us page
│       ├── AboutUs.js              # About Us page component
│       ├── EventManager.css        # Styling for Event Manager page
│       ├── EventManager.js         # Event Manager page component
│       ├── Header.js               # Header component
│       ├── Home.js                 # Home page component
│       ├── Login.css               # Styling for Login page
│       ├── Login.js                # Login page component
│       ├── MultiselectDropdown.css # Styling for MultiSelectDropdown component
│       ├── MultiSelectDropdown.js  # MultiSelectDropdown component
│       ├── Notification.js         # Notification page component
│       ├── UserProfileManager.js   # User Profile Manager component
│       ├── UserRegistrationForm.js # User Registration Form component
│       ├── VolunteerHistory.js     # Volunteering History page component
│       └── VolunteerMatchingForm.js# Volunteer Matching Form component
├── App.css                         # Global styles for the App
├── App.js                          # Main application component (routing)
├── App.test.js                     # Test file for App component
├── index.css                       # Global styles
├── index.js                        # Entry point for React app
├── logo.svg                        # Logo asset
├── reportWebVitals.js              # Performance reporting
├── setupTests.js                   # Jest test setup
├── README.md                       # Project documentation
└── package.json                    # Project metadata and dependencies

Getting Started:
Prerequisites:
Make sure you have Node.js and npm (Node Package Manager) installed on your system. You can download them from here.

Installation:
Clone the repository:

bash:
git clone https://github.com/TanT246/volunteer_project_frontend.git
cd volunteer_project_frontend

Install dependencies:
Run the following command to install all necessary dependencies listed in package.json:
bash:
npm install

Running the App:
To start the development server, run:

bash:
npm start
This will start the app on http://localhost:3000.

Building for Production:
To create an optimized production build, run:
bash:
npm run build
This will create a build/ folder with the compiled files ready for deployment.

Testing:
You can run unit tests using the following command:
bash:
npm test

Running with the Backend:
Make sure you have the backend running on http://localhost:5000 or the appropriate API base URL. The frontend app will communicate with this backend to fetch data and send requests for user authentication, event management, and notifications.

Available Routes
The following are the main routes of the application:

Route	                Component	            Description
/                       Home	                Displays the home page
/about	                AboutUs	                Shows information about the organization
/Header	                Header	                Header page
/Login	                Login	                Login page for users
/UserRegistrationForm	UserRegistrationForm	User registration form
/volunteer-match	    VolunteerMatchingForm	Form to match volunteers with events
/event-manager	        EventManager	        Manage events as an organizer
/user-profile-manager	UserProfileManager	    Manage user profile
/notif	                Notif	                Notifications page for volunteers
/volunteer-history	    VolunteeringHistory	    Shows user’s past volunteer activities

Dependencies:
This project relies on the following key dependencies:
React.js: A JavaScript library for building user interfaces.
React Router DOM: For routing and navigation between different pages.
Axios: A promise-based HTTP client for making API requests.
Material-UI (MUI): A popular React UI framework.
Date-fns: A modern JavaScript date utility library.
React DatePicker: A date picker component for React.
Nodemon: A tool that helps develop Node.js apps by automatically restarting the server when changes are detected.

Environment Variables
You can define environment variables in a .env file to manage backend URL configurations, like the following:
arduino:
REACT_APP_BACKEND_URL=http://localhost:5000
This will allow Axios to make API requests to the correct backend URL.

Contributing:
Feel free to fork the repository and submit pull requests. Contributions are welcome!

Steps to Contribute:
Fork the repository
Create a new branch (git checkout -b feature-branch)
Make your changes
Commit your changes (git commit -m 'Add some feature')
Push to the branch (git push origin feature-branch)
Open a pull request
License
This project is licensed under the MIT License.

Contact
For any questions or feedback, feel free to reach out to the project maintainer:

Name: Xavier A Mares, Tan Huy Tran, Shinelle Rose Barretto, Widyan Mohammed Hussien