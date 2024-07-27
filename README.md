# Movie Mania

Movie Mania is a simple video application built using Next.js, Tailwind CSS, and the TMDb API. It displays a list of movies, allows users to view details of each movie, the official trailer, related videos and includes a search functionality.

## Table of Contents

- [Project Setup](#project-setup)
- [Pages and Navigation](#pages-and-navigation)
- [Data Handling](#data-handling)
- [Search Functionality](#search-functionality)
- [Styling](#styling)
- [Additional Features](#additional-features)
- [Testing](#testing)
- [Approach and Trade-offs](#approach-and-trade-offs)
  - [Approach](#approach)
  - [Trade-offs](#trade-offs)
- [Deployment](#deployment)

## Project Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Fredasante/movie-mania.git
   cd movie-mania
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Add your TMDb API key:**

   - Create a `.env.local` file in the root of your project.
   - Add your API key:

   ```env
   NEXT_PUBLIC_TMDB_API_KEY=your_api_key_here
   ```

4. **Run the development server:**

   ```bash
   npm run dev
   ```

5. **Open** [http://localhost:3000](http://localhost:3000) **in your browser to view the application.**

## Pages and Navigation

- **Home Page (/):** Displays a list of top rated, upcoming, trending and popular movies.
- **Movie Detail Page (/movies/[id]):** Displays details of a single movie based on its ID.
- **Search Page (/search):** Allows users to search for movies by title.

## Data Handling

- The TMDb API was used to fetch movie data.
- Each movie displays the following information: id, title, overview, release_date, votes,poster_path and genre.
- Server-side rendering (SSR) was used for fetching and displaying movie data.

## Search Functionality

- Search functionality on homepage redirects to the Search Page with the search results.
- Client-side rendering (CSR) was used for displaying search results.

## Styling

- The application is responsive and looks good on both desktop and mobile devices.

## Additional Features

- Displays the official trailer and related videos on the single movie page.

## Testing

- The project uses Jest for testing.
- To run tests, execute:

  ```bash
  npm test
  ```

## Approach and Trade-offs

### Approach

The project follows modern web development practices and is optimized for performance. The application leverages Next.js for server-side rendering, ensuring that movie data is fetched and displayed efficiently. Tailwind CSS is used for styling, providing a responsive and visually appealing UI.

### Trade-offs

- **UI Library:** I decided against using any UI library to keep the project lightweight and to have more control over the design and styling. This decision required more effort in writing custom styles but allowed for a more tailored user experience.
- **Testing:** Limited testing has been implemented. More comprehensive testing could improve the reliability and maintainability of the application.

## Deployment

You can view the live demo of the application [here](https://movie-mania-fawn.vercel.app).
