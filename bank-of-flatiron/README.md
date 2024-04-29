#PROJECT TITLE
THE BANK OF FLATIRON

###project By : James Mbugua

###Date : 28.04.2024

##DESCRIPTION
React application that displays a list of your recent bank transactions, among other features.

##Imports:
useState and useEffect hooks from React for managing state and side effects.
Individual components for Header, Search bar, Transaction table, and Add new transaction form.

##Process
###Top level component:
Manages several states using useState:
transactions: An array to hold all transaction data.
isLoading: A boolean to indicate if data is still fetching.
formData: An object to store data for a new transaction.
filter: A string to filter displayed transactions in the table.
Fetches initial transactions data using fetchTransactions on component mount (useEffect).
Displays "Loading..." while data is being fetched.
Defines functions for handling user interactions:
handleChange: Updates formData based on user input in the new transaction form.
handleFormSubmit: Creates a new transaction by sending a POST request with form data and updates the transactions state.
handleFilter: Updates the filter state based on user input in the search bar.
Renders the application layout with imported components:
Header component likely displays the application title or logo.
Search bar component allows filtering transactions.
Add new transaction form allows users to enter details for a new transaction.
Transaction table component displays the list of transactions based on current data and filter.

##Technologies Used
Html
Css
React.js
Vanilla Javascript

