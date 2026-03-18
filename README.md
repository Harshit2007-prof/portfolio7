# Harshit Gupta Portfolio

This project is a modern, clean, and professional personal portfolio for Harshit Gupta, a graphic designer.

## Deployment on Vercel

To deploy this project on Vercel, follow these steps:

1.  **Push to GitHub**: Push your code to a GitHub repository.
2.  **Connect to Vercel**:
    -   Go to [Vercel](https://vercel.com).
    -   Click "Add New" -> "Project".
    -   Import your GitHub repository.
3.  **Configure Settings**:
    -   **Framework Preset**: Vite (automatically detected).
    -   **Build Command**: `npm run build` (automatically detected).
    -   **Output Directory**: `dist` (automatically detected).
4.  **Environment Variables**:
    -   If you are using the Gemini AI features, add `GEMINI_API_KEY` to the Environment Variables section in Vercel.
5.  **Deploy**: Click "Deploy".

## Project Structure

-   `src/App.tsx`: Main application component.
-   `src/index.css`: Global styles with Tailwind CSS.
-   `vercel.json`: Configuration for SPA routing on Vercel.
