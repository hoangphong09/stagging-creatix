# Creatix Technology Website

This repository contains the source code for the Creatix Technology company website, built using Next.js and Tailwind CSS.

## Project Setup

- **Technology:** Next.js, Tailwind CSS, TypeScript
- **Package Manager:** npm

## Development

1.  **Install Dependencies:**
    ```bash
    npm install
    ```
2.  **Run Development Server:**
    ```bash
    npm run dev
    ```
3.  **Build for Production:**
    ```bash
    npm run build
    ```
4.  **Start Production Server:**
    ```bash
    npm start
    ```

## Structure

- `app/`: Contains the Next.js app directory structure, including pages and components.
  - `blog/`: Blog-related pages.
  - `careers/`: Careers-related pages.
  - `product/`: Product-related pages.
- `components/`: Reusable UI components like `Header` and `Footer`.
- `public/`: Static assets such as images and icons.
- `tailwind.config.js`: Tailwind CSS configuration file.
- `postcss.config.js`: PostCSS configuration file.
- `package.json`: Project dependencies and scripts.
- `tsconfig.json`: TypeScript configuration file.

## Deployment

This project includes a `Dockerfile` and `cloudbuild.yaml` for containerized deployment. Use the `deploy.sh` script for automated deployment.