## React Netflix Clone with Trailer Playback 

This React project recreates the Netflix experience, leveraging Vite for a smooth development experience. It showcases your skills in using React hooks, custom components, and external APIs to deliver features like:

* **Dynamic Content:** Automatically fetches and displays the latest and most popular movies and TV shows from various genres and categories using the TMDB API.
* **Seamless Trailer Playback:** Hovering over any movie or TV show poster elegantly presents their trailer using the YouTube API, enhancing the user experience.
* **React Skills Showcase:** Demonstrates your proficiency in React hooks, custom components, and external API integration.


**Technologies Used:**

* **Frontend:** React, Vite
* **APIs:** TMDB (The Movie Database), YouTube
* **Optional:** Styling libraries (Styled Components, Emotion, etc.)
* **Environment Variables**: For storing sensitive data like API keys


**Getting Started:**

1. **Prerequisites:** Node.js (version 18 or later) and npm installed on your system.


   ```

3. **Install Dependencies:**

   Navigate to the project directory and install dependencies:

   ```bash
   cd OTT-Platform
   npm install
   ```

4. **Set up Environment Variables:**

   - **Create a `.env` file:** In the project root directory, create a file named `.env`. **Important:** **Do not** commit this file to version control.
   - **Add API keys:** Add the following lines to your `.env` file, replacing the placeholders with your actual API keys:

     ```
     REACT_APP_TMDB_API_KEY=YOUR_TMDB_API_KEY
     REACT_APP_YOUTUBE_API_KEY=YOUR_YOUTUBE_API_KEY
     ```

   - **Optional:** You can also include other environment variables for configuration purposes.

5. **Create a Constants File:**

   - **Create a `src/constants` folder:** If it doesn't exist already, create a new folder named `constants` inside the `src` directory.
   - **Create a `constant.js` file:** Inside the `src/constants` folder, create a new file named `constant.js`.
   - **Add configuration constants:** Add the following code to the `constant.js` file:

     ```javascript
     export const BaseUrl = 'https://api.themoviedb.org/3';
     export const ImgUrl = 'https://image.tmdb.org/t/p/';

     // Access API keys from environment variables
     export const ApiKey = process.env.REACT_APP_TMDB_API_KEY;
     ```

6. **Run the Development Server:**

   Start the development server using npm:

   ```bash
   npm run dev
   ```

This will typically launch the application at http://localhost:5173

