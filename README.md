Survey Form

This is a simple React component that represents a survey form. The form includes fields for gathering information such as name, education level, skills, gender, phone number, and email.

Installation

Ensure you have Node.js and npm installed. Then, follow these steps:

Clone the repository:
bash
Copy code
git clone <repository-url>
Change to the project directory:
bash
Copy code
cd <project-directory>
Install dependencies:
bash
Copy code
npm install
Run the application:
bash
Copy code
npm start
Usage

Open the survey form in your web browser.
Fill in the required information such as name, education level, skills, gender, phone number, and email.
Click the "Submit" button to submit the form.
To reset the form, click the "Reset" button.
Form Structure

Name: Input field for the respondent's name.
Education Level: Checkboxes for selecting the respondent's education level (Graduation, Post Graduation, PhD).
Skills: Autocomplete field for selecting skills from a predefined list.
Gender: Radio buttons for selecting the respondent's gender (Female, Male, Other).
Phone Number: Input field for the respondent's phone number. Only numeric input is allowed.
Email ID: Input field for the respondent's email address.
State Management

The form state is managed using React hooks. The resetValues function resets all form fields to their initial values.

Dependencies

React
Material-UI (TextField, Autocomplete, Grid, Stack, FormControlLabel, Checkbox, FormControl, Radio, RadioGroup, FormLabel)
Node.js and npm
Feel free to customize and extend the form according to your specific survey requirements.