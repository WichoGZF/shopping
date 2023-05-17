# Shopping Front-End Page

This project is a shopping front-end page that interacts with a public API to display products and allow users to browse and add items to their shopping cart. The application is built using Mantine, React, Typescript, and React Router, providing a responsive and user-friendly shopping experience.

## Project Features

- Product Listing: Displays a list of products fetched from a public API, including details such as product name, price, and description.
- Product Filtering: Allows users to filter products based on various criteria, such as price range, category, or availability.
- Product Search: Provides a search functionality to find products based on keywords or specific terms.
- Product Details: Displays detailed information about a selected product, including additional images, specifications, and customer reviews.
- Shopping Cart: Allows users to add products to their shopping cart and manage the quantities of items.
- Checkout Process: Guides users through the checkout process, providing a summary of the order and collecting necessary information for purchase.
- Responsive Design: The project is built using Mantine and React, ensuring a responsive layout that adapts to different screen sizes.

## Technologies Used

- Mantine: React components and hooks library used for building the user interface and styling.
- React: JavaScript library for building user interfaces.
- TypeScript: Superset of JavaScript that provides static typing and improved tooling.
- React Router: Library used for handling routing and navigation within the application.
- Axios: HTTP client used for making API calls to fetch product data.
- CSS (with Mantine): Styling language used to customize the appearance and layout of the components.

## Installation Instructions

1. Clone the repository: `git clone https://github.com/WichoGZF/shopping.git`
2. Navigate to the project directory: `cd shopping`
3. Install dependencies: `npm install`
4. Start the development server: `npm run dev`
5. Access the application locally via: `http://localhost:3000`

## Usage Examples

**Homepage:**

![image](https://github.com/WichoGZF/shopping/assets/27252445/a522909d-2b2d-49af-bc1c-5509018b59db)

**All products:**

![image](https://github.com/WichoGZF/shopping/assets/27252445/d174cafd-9d34-48c0-b973-247999133d92)

**Single product:**

![image](https://github.com/WichoGZF/shopping/assets/27252445/746b52f2-2a01-4f9c-ba44-497897f36bbc)

**Categories:**

![image](https://github.com/WichoGZF/shopping/assets/27252445/5f420fae-32b9-4c54-8d09-8b6cf558ffa3)

## Code Structure and Organization

The project's codebase is organized as follows:

├── src/
│ ├── assets/ # Contains images 
│ ├── components/ # Contains the components used in the application
│ ├── services/ # Contains API service functions
│ ├── types/ # Contains TypeScript type definitions
│ ├── App.tsx # Entry point of the application
│ ├── index.tsx # Initializes the React application
│ └── ...
├── public/ # Contains public assets and index.html
└── ...
