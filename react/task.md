# Airbnb Clone - React Practice Roadmap (Namaste React Ep 1-7)

This document consolidates all tasks, concepts, dummy APIs, code snippets, and structured mock datasets discussed across your sessions over the past week (Sept 23 – Sept 30, 2026).

---

## 📌 Context & Concept Mapping (Namaste React Ep 1-7)

| Episode | Title & Topic | Practical Application in Airbnb Clone |
|---|---|---|
| **Ep 1** | Inception | React CDN, `React.createElement`, fundamentals |
| **Ep 2** | Igniting our App | `npm`, Parcel bundler, `node_modules`, dependencies |
| **Ep 3** | Laying the Foundation | JSX, Babel transpilation, Functional Components, nested JSX |
| **Ep 4** | Talk is Cheap, Show Me the Code | Passing `props`, destructuring, `.map()` rendering with unique `key`s |
| **Ep 5** | Let's Get Hooked! | `useState`, reactivity, search filter, active category selection |
| **Ep 6** | Exploring the World | `useEffect`, `fetch()` API calls, Shimmer / Loading UI, conditional rendering |
| **Ep 7** | Finding the Path | `react-router-dom`, `createBrowserRouter`, `RouterProvider`, `Outlet`, `useParams`, `<Link>` |

---

## 🚀 Completed Milestones (Tasks 1 – 4)
- **Project Setup:** Working parcel bundler & React module architecture.
- **Component Design:** Created reusable `Listcards` component accepting dynamic `props`.
- **Dynamic Rendering:** Successfully mapping over lists using stable `key`s.
- **API Fetching:** Implemented `useEffect` for initial data fetching.
- **Loading State:** Smooth Shimmer skeleton UI handles the network flight time.

---

## 🎯 Next Challenge: Production-Ready Resilience & Interactivity
*Focus on handling real-world scenarios gracefully without explicitly being told how.*

### 🛡️ TASK 5: The "What If It Fails?" Scenario (Network Error Handling)
**The Scenario:** What happens if the backend server crashes or the user's WiFi drops mid-request? Right now, an unhandled rejection leaves the screen hanging forever.
**Your Goal:**
1. Safely wrap your network call to handle unexpected async failures gracefully (Hint: try-catch).
2. Keep track of whether an error has occurred.
3. If it fails, stop the shimmer and render a friendly error banner: *"Oops! Something went wrong loading listings."*
4. Include a `"Retry"` button to re-trigger the fetch without reloading the whole browser page!
**Hint:** *Think about what JavaScript blocks handle failures, and how the UI can "remember" that a failure occurred.*

### 📭 TASK 6: The Empty State Challenge
**The Scenario:** What if the server successfully returns an empty list?
**Your Goal:** If data arrives with 0 items, display a clear, friendly UI: *"No places available in this area right now."*

### 🔍 TASK 7: Search & Dual-State Gymnastics
**The Challenge:**
1. Add an `<input>` search bar and a "Top Rated (⭐ 4.9+)" filter button above your cards.
2. When the user types `"Goa"`, only Goa cards should remain visible.
3. When the user clears the text, **all original cards must reappear!**
**The Junior Trap:** *If you overwrite your main list with the filtered results, where did the original data go when the search is cleared? How can you keep a pristine copy while showing a dynamic list?*

### ❤️ TASK 8: Interactive Card "Favorite" Toggle
**The Challenge:**
1. Add a small heart icon (🤍 / ❤️) on each card.
2. Clicking the heart toggles its visual state between saved and unsaved.
**Hint:** *Should the whole page re-render when one card's heart is clicked, or does that memory belong somewhere more specific?*

### 🗺️ TASK 9: Client-Side Routing Layout
**The Challenge:**
1. Set up navigation between `Home`, `About Us`, and `Contact` using a routing library.
2. Keep the Header and Footer sticky and present on all pages, while only the middle content changes.
3. Page navigation should be smooth and instant (no full browser refresh).

### ⭐ TASK 10: Dynamic Listing Detail Page
**The Challenge:**
1. Clicking any listing card should navigate to a dedicated route (e.g., `/listing/:id`).
2. Read the unique ID parameter from the URL.
3. Render dedicated details for that specific home (you can just display the ID on the screen for now).

## 🔗 Dummy APIs & Mock Endpoints

### 1. Ready-to-Use Public APIs

* **DummyJSON Products (Closest to Airbnb listings with price, rating, title, photos):**
  ```text
  https://dummyjson.com/products
  ```
* **JSONPlaceholder Photos (Simple card structures):**
  ```text
  https://jsonplaceholder.typicode.com/photos
  ```

---

### 2. Custom Free Hosted Mock API via [npoint.io](https://www.npoint.io)
Because Airbnb's direct backend blocks external browser requests via CORS, you can host your own live API bin in 10 seconds:
1. Open [npoint.io](https://www.npoint.io).
2. Click **New Bin**.
3. Paste the **Airbnb Mock JSON Dataset** provided below.
4. Click **Save** and copy your generated endpoint:
   ```text
   https://api.npoint.io/<YOUR_UNIQUE_BIN_ID>
   ```

---

## 📦 Full Airbnb Mock JSON Dataset

You can copy and save this into `npoint.io` or into a local file `src/utils/airbnbData.json`:

```json
{
  "sections": [
    {
      "id": "north-goa",
      "title": "Popular homes in North Goa",
      "seeAllUrl": "https://www.airbnb.co.in/s/North-Goa/homes",
      "listings": [
        {
          "id": "ng-1",
          "type": "Villa",
          "location": "Arpora",
          "price": 23000,
          "duration": "2 nights",
          "rating": 5.0,
          "isGuestFavourite": true,
          "image": "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400"
        },
        {
          "id": "ng-2",
          "type": "Apartment",
          "location": "Arpora",
          "price": 9740,
          "duration": "2 nights",
          "rating": 5.0,
          "isGuestFavourite": false,
          "image": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400"
        },
        {
          "id": "ng-3",
          "type": "Flat",
          "location": "Candolim",
          "price": 12500,
          "duration": "2 nights",
          "rating": 5.0,
          "isGuestFavourite": false,
          "image": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400"
        },
        {
          "id": "ng-4",
          "type": "Flat",
          "location": "Siolim",
          "price": 10180,
          "duration": "2 nights",
          "rating": 5.0,
          "isGuestFavourite": false,
          "image": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400"
        },
        {
          "id": "ng-5",
          "type": "Apartment",
          "location": "Vagator",
          "price": 16000,
          "duration": "2 nights",
          "rating": 4.93,
          "isGuestFavourite": true,
          "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400"
        },
        {
          "id": "ng-6",
          "type": "Flat",
          "location": "North Goa",
          "price": 12499,
          "duration": "2 nights",
          "rating": 5.0,
          "isGuestFavourite": true,
          "image": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400"
        },
        {
          "id": "ng-7",
          "type": "Flat",
          "location": "Candolim",
          "price": 9000,
          "duration": "2 nights",
          "rating": 5.0,
          "isGuestFavourite": true,
          "image": "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=400"
        },
        {
          "id": "ng-8",
          "type": "Apartment",
          "location": "Calangute",
          "price": 8500,
          "duration": "2 nights",
          "rating": 4.88,
          "isGuestFavourite": false,
          "image": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400"
        }
      ]
    },
    {
      "id": "mysore",
      "title": "Available in Mysore this weekend",
      "seeAllUrl": "https://www.airbnb.co.in/s/Mysore/homes",
      "listings": [
        {
          "id": "mys-1",
          "type": "Guest house",
          "location": "Mysore",
          "price": 2051,
          "duration": "1 night",
          "rating": 4.83,
          "isGuestFavourite": true,
          "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400"
        },
        {
          "id": "mys-2",
          "type": "Home",
          "location": "Mysore",
          "price": 5320,
          "duration": "1 night",
          "rating": 5.0,
          "isGuestFavourite": true,
          "image": "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400"
        },
        {
          "id": "mys-3",
          "type": "Hotel",
          "location": "Mysore",
          "price": 2200,
          "duration": "1 night",
          "rating": 4.88,
          "isGuestFavourite": false,
          "image": "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400"
        },
        {
          "id": "mys-4",
          "type": "Room",
          "location": "Mysore",
          "price": 2100,
          "duration": "1 night",
          "rating": 4.97,
          "isGuestFavourite": true,
          "image": "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=400"
        },
        {
          "id": "mys-5",
          "type": "Home",
          "location": "Mysore",
          "price": 5696,
          "duration": "1 night",
          "rating": 5.0,
          "isGuestFavourite": true,
          "image": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400"
        },
        {
          "id": "mys-6",
          "type": "Flat",
          "location": "Mysore",
          "price": 3800,
          "duration": "1 night",
          "rating": 4.85,
          "isGuestFavourite": true,
          "image": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400"
        },
        {
          "id": "mys-7",
          "type": "Room",
          "location": "Basavanahalli",
          "price": 2000,
          "duration": "1 night",
          "rating": 4.83,
          "isGuestFavourite": true,
          "image": "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400"
        },
        {
          "id": "mys-8",
          "type": "Flat",
          "location": "Mysore",
          "price": 2399,
          "duration": "1 night",
          "rating": 4.82,
          "isGuestFavourite": true,
          "image": "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=400"
        }
      ]
    },
    {
      "id": "puducherry",
      "title": "Stay in Puducherry",
      "seeAllUrl": "https://www.airbnb.co.in/s/Puducherry/homes",
      "listings": [
        {
          "id": "pud-1",
          "type": "Flat",
          "location": "Puducherry",
          "price": 14898,
          "duration": "2 nights",
          "rating": 4.94,
          "isGuestFavourite": false,
          "image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400"
        },
        {
          "id": "pud-2",
          "type": "Home",
          "location": "Raj Bhavan",
          "price": 28000,
          "duration": "2 nights",
          "rating": 4.91,
          "isGuestFavourite": true,
          "image": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400"
        },
        {
          "id": "pud-3",
          "type": "Home",
          "location": "Puducherry",
          "price": 22012,
          "duration": "2 nights",
          "rating": 4.82,
          "isGuestFavourite": false,
          "image": "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=400"
        },
        {
          "id": "pud-4",
          "type": "Apartment",
          "location": "Puducherry",
          "price": 14234,
          "duration": "2 nights",
          "rating": 4.89,
          "isGuestFavourite": true,
          "image": "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400"
        },
        {
          "id": "pud-5",
          "type": "Flat",
          "location": "Puducherry",
          "price": 18350,
          "duration": "2 nights",
          "rating": 5.0,
          "isGuestFavourite": true,
          "image": "https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?w=400"
        },
        {
          "id": "pud-6",
          "type": "Home",
          "location": "Puducherry",
          "price": 6100,
          "duration": "2 nights",
          "rating": 5.0,
          "isGuestFavourite": true,
          "image": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400"
        }
      ]
    },
    {
      "id": "madikeri",
      "title": "Available in Madikeri this weekend",
      "seeAllUrl": "https://www.airbnb.co.in/s/Madikeri/homes",
      "listings": [
        {
          "id": "mad-1",
          "type": "Guest house",
          "location": "Madikeri",
          "price": 3600,
          "duration": "1 night",
          "rating": 5.0,
          "isGuestFavourite": true,
          "image": "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=400"
        },
        {
          "id": "mad-2",
          "type": "Home",
          "location": "Madikeri",
          "price": 1261,
          "duration": "1 night",
          "rating": 4.9,
          "isGuestFavourite": true,
          "image": "https://images.unsplash.com/photo-1464146072230-91cabc968266?w=400"
        },
        {
          "id": "mad-3",
          "type": "Flat",
          "location": "Madikeri",
          "price": 2200,
          "duration": "1 night",
          "rating": 4.8,
          "isGuestFavourite": false,
          "image": "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400"
        },
        {
          "id": "mad-4",
          "type": "Home",
          "location": "Madikeri",
          "price": 2377,
          "duration": "1 night",
          "rating": 4.88,
          "isGuestFavourite": true,
          "image": "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=400"
        },
        {
          "id": "mad-5",
          "type": "Home",
          "location": "Madikeri",
          "price": 3395,
          "duration": "1 night",
          "rating": 4.9,
          "isGuestFavourite": true,
          "image": "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=400"
        },
        {
          "id": "mad-6",
          "type": "Room",
          "location": "Madikeri",
          "price": 2275,
          "duration": "1 night",
          "rating": 5.0,
          "isGuestFavourite": true,
          "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400"
        },
        {
          "id": "mad-7",
          "type": "Home",
          "location": "Gonikoppal",
          "price": 5166,
          "duration": "1 night",
          "rating": 4.96,
          "isGuestFavourite": true,
          "image": "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=400"
        },
        {
          "id": "mad-8",
          "type": "Villa",
          "location": "Madikeri",
          "price": 5358,
          "duration": "1 night",
          "rating": 4.87,
          "isGuestFavourite": false,
          "image": "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=400"
        }
      ]
    }
  ]
}
```

---

## 🕵️ DevTools Network Tab Cheat Sheet (From Discussion)

When inspecting live production websites like Airbnb:
1. **Open DevTools (`F12`) FIRST**, before navigating to the URL.
2. Select the **Network** tab and toggle the **Fetch/XHR** filter button.
3. Don't look at `AutoSuggestions` (which only supplies the search bar drop-down recommendations).
4. Look for the large POST requests named `GetBrowsePage`, `ExploreSearch`, or `browse_page`.
5. Check the **Preview** tab to trace down into `data -> presentation -> explore -> sections -> items`.
6. To avoid CORS blocks in local development, copy the payload and host it on **npoint.io** or a local JSON file.
