# 📋 Kanban Board

A minimalist, dark-themed productivity tool built with **HTML5**, **CSS3 (Flexbox)**, and **Vanilla JavaScript**. Organizes your workflow with a sleek, drag-and-drop interface.

## 🕹️ Features

* **Drag & Drop Interface:** Move tasks seamlessly between "To Do", "In Progress", and "Done" columns.
* **Persistent Storage:** Uses `localStorage` to ensure your tasks remain saved even after a page refresh.
* **Dynamic Task Counters:** Real-time tracking of the number of tasks in each stage of your workflow.
* **Glassmorphic UI:** A modern dark-mode aesthetic featuring backdrop-blur effects and responsive transitions.
* **Task Management:** Quick-add modal for new entries and one-click deletion for completed items.

## 🚀 Quick Start

1.  Clone or download the repository.
2.  Open `index.html` in any modern web browser.
3.  Click **Add New Task**, enter your details, and start organizing!

## 🔗 Live Demo

Check out the working project here: 
👉 **[https://kanban-board-piyush.vercel.app]**

---

### 🛠️ Technical Overview
* **State Management:** Syncs a JavaScript object (`tasksData`) with the DOM and LocalStorage.
* **Events:** Utilizes the Native HTML5 Drag and Drop API (`dragstart`, `dragover`, `drop`).
* **Styling:** Fully responsive layout using CSS Custom Properties (Variables) for easy theme skinning.

**Made by [https://github.com/PiyushMishraX]**