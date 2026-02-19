# 🛒 Shopping Forms Lab

A React-based Shopping List application demonstrating controlled components, dynamic search functionality, category filtering, and form handling using modern React concepts.

This lab focuses on mastering React forms, state management, event handling, and component communication.

---

## 🚀 Project Overview

The Shopping Forms Lab extends a basic Shopping List application by adding:

- Dynamic search functionality (updates while typing)
- Category filtering
- A controlled form to add new items
- Proper state management using React Hooks
- Component-based architecture
- Automated test compatibility (Jest & React Testing Library)

---

## 🧰 Technologies Used

- React
- JavaScript (ES6+)
- React Hooks (`useState`)
- CSS
- Jest
- React Testing Library
- Node.js
- Git & GitHub

---

## 📁 Project Structure

src/
├── components/
│ ├── SearchBar.jsx
│ ├── Filter.jsx
│ ├── ItemForm.jsx
│ ├── ItemList.jsx
│ └── ShoppingItem.jsx
├── data/
│ └── initialItems.js
├── App.jsx
├── main.jsx
└── index.css


---

## ✨ Features

### 🔎 Dynamic Search

- Filters items in real time while typing
- Case-insensitive matching
- Controlled input component

### 🏷 Category Filter

- Dropdown selection
- Filters items based on category
- Works together with search functionality

### ➕ Add New Items

- Controlled form inputs
- Validates empty input
- Automatically updates list
- Resets form after submission

### 📋 Dynamic List Rendering

- Uses `.map()` to render items
- Displays fallback message when no items match

---

## 🧠 Core React Concepts Practiced

- Initializing state with `useState`
- Controlled components
- Handling form submission
- Preventing default form behavior
- Lifting state up
- Passing data and callback functions as props
- Conditional rendering
- Filtering arrays
- Event handling

---
