# Candidate Application Platform

This repository contains the implementation of a candidate application platform, fulfilling the requirements outlined in the assignment provided by Weekday.

## Functionality

The platform allows users to view job listings, filter jobs based on various criteria, and implement infinite scroll for a seamless browsing experience.

### Features:

- **Job Cards**: Each job listing is displayed as a card containing the following information:
  - Job title
  - Company name
  - Location
  - Job description
  - Experience required
  - Apply button
- **Filters**: Users can refine job listings based on various criteria including:

  - Minimum experience
  - Company name
  - Location
  - Remote (location)
  - Role
  - Minimum base pay

- **Infinite Scroll**: The platform fetches and displays additional job listings automatically as the user scrolls down the page.

## Running the Application

To run the application locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies by running:
   ```
   npm install
   ```
4. Start the development server by running:
   ```
   npm run dev
   ```
5. Open your web browser and visit `http://localhost:5173` to view the application.

## Tech Stack

The following technologies were used in this project:

- ReactJs
- Redux
- CSS
- Material UI
- Vite

## Additional Notes

- Null values in the API response have been handled appropriately.
- Filters are applied on the frontend without making additional API calls.
- Tailwind CSS was not used; vanilla CSS was preferred for this assignment.

## Evaluation

The assignment meets the specified requirements in terms of functionality, code quality, user interface, responsiveness, and performance.

## Future Improvements

- Implement pagination for better performance with large datasets.
- Enhance UI/UX design for a more visually appealing experience.
- Add unit tests to ensure code reliability and maintainability.

Please feel free to reach out if you have any questions or need further clarification on any aspect of the assignment.

**Thank you for your consideration!**

