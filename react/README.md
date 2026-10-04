# Airbnb Clone (React Practice)

Welcome to my React learning journey! This project is an Airbnb clone built completely from scratch. 
My main intuition here was not just to build a clone, but to deeply understand the core concepts of React, how things work under the hood, and how to structure a modern frontend application.

## 🚀 Core React Concepts Learned & Implemented

Through building this project, I've practically applied the following foundational React concepts:

### 1. Functional Components & JSX
- Broke down a complex UI into small, reusable pieces (e.g., `<Header />`, `<Body />`, `<Listcards />`).
- Used JSX to seamlessly combine HTML structures with JavaScript logic.

### 2. Props & Destructuring
- Passed dynamic data (like pricing, rating, location) from parent components to child components via `props`.
- Used JavaScript destructuring `const { type, image, price } = props.data` to write cleaner, more readable code inside components.

### 3. Hooks: `useState` (Reactivity)
- Managed local state within components. For example, the `saved` state (❤️ / 🤍) on individual cards allows independent reactivity without re-rendering the whole page!
- Used state for the search text and filtered lists. Learned that **React batches state updates** to optimize re-renders!

### 4. Hooks: `useEffect` (Side Effects & Data Fetching)
- Handled API calls to external services.
- Learned about the component lifecycle: fetching data *after* the initial render and using dependency arrays `[]` to ensure the API is only called once.
- Implemented robust error handling (`try/catch`) and loading states.

### 5. Conditional Rendering & Shimmer UI
- Implemented **Skeleton/Shimmer UI** to improve user experience while data is loading over the network.
- Handled empty states gracefully (e.g., showing a "No places!!" message when a search yields 0 results).

### 6. Client-Side Routing (`react-router-dom`)
- Configured a `createBrowserRouter` to enable fast, single-page application (SPA) navigation.
- Maintained a persistent Layout (Header & Footer stay constant, only the body changes) using the `<Outlet />` component.
- Used `useParams()` and dynamic routing (`/user/:id`) to navigate into specific dynamic detail pages without hardcoding routes.

## 🛠️ Tech Stack
- **React 19**
- **Parcel** (Zero-config blazing fast bundler)
- **Vanilla CSS** (Flexbox, CSS Grid, UI polishing)
- **React Router v6** (For seamless navigation)

---
*This repo marks my progress in mastering React, from basic `React.createElement` to dynamic routing and API handling.*
