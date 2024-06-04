# The Nice Gadget Multi-page shop

**Please note**: project is deployed from develop branch.

This project is a multi-page website designed for selling electronic devices. It boasts the following features:

- **Product Categorization**: Items are categorized into three main sections: phones, tablets, and accessories.
- **Unique Product Pages**: Each product has a dedicated detailed information page.
- **User Authentication**: Implemented user login/logout functionality with user registration. Each user is assigned a unique ID stored in the database, and JWT token is utilized for server communication.
- **User Interaction**: Registered users can add products to Cart and Favorites stored in the database.
- **Category-wise Search**: Integrated search functionality for each category.
- **Product Sorting**: Implemented sorting options based on price, name, and novelty.
- **Pagination**: Enabled pagination with options for displaying 4, 6, 8, or 16 products per page.

## Frontend Technologies:

- **React**: Used as the main frontend framework for building interactive user interfaces.
- **MUI(Material UI)**: Utilized for designing consistent and visually appealing components.
- **TypeScript**: Employed for type safety and enhanced developer experience.
- **Vite**: Chosen for fast and efficient development and bundling.
- **Lodash(for debounce)**: Integrated for debouncing search input to enhance performance.
- **React Router DOM**: Employed for hash routing to manage navigation within the application.
- **Swiper.js**: Used for creating dynamic and engaging banner sliders on the home page.
- **Axios**: Employed for fetching data from the API efficiently.
- **GH-pages**: Utilized for publishing the website.
- **Dotlottie React-Player**: Integrated for adding captivating animations to the user interface.

## To run the project locally:
**To run the project you need to have Node.js v18 and higher.**

- Clone repo to your local folder: `git clone https://github.com/hattoriKanto/react-todo-app-with-db.git`
- Install all dependencies: `npm i`
- To run the project locally you must use this command: `npm run dev`

## Links

**Please note**: Due to limitations on render.com where the website is deployed, there may be a delay of 1-2 minutes upon accessing the site as the server initializes.

- [DESIGN](<https://www.figma.com/file/7JTa0q8n3dTSAyMNaA0u8o/Phone-catalog-(V2)-Rounded-Style-3?type=design&node-id=0-1&mode=design>)
- [DEMO LINK](https://fs-jan24-midnight-coup.github.io/react_phone-catalog)
- [BACKEND REPO](https://github.com/hattoriKanto/express_phone-catalog)
