<template>
    <div id="components-page">
      <div id="sidebar">
        <h2>Components</h2>
        <ul>
          <li>Component 1</li>
          <li>Component 2</li>
          <li>Component 3</li>
          <!-- Add more components here -->
        </ul>
      </div>
      <div id="content">
        <div class="component-wrapper">
          <MyButton />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { MyButton } from '@malekboubaker/my-components';
  import '@malekboubaker/my-components/dist/bundle.css';
  
  export default {
    name: 'Components',
    components: {
      MyButton,
    },
  };
  </script>
  
  <style scoped>
  #components-page {
    display: flex;
    height: 100vh;
  }
  
  #sidebar {
    width: 250px;
    background-color: #2a7ccd;
    color: #ffffff;
    padding: 20px;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
    position: fixed; /* Make the sidebar fixed */
    top: 0;
    left: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    height: 100vh; /* Ensure it extends the full height of the viewport */
  }
  
  #sidebar h2 {
    margin-top: 0;
  }
  
  #sidebar ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  #sidebar ul li {
    margin: 15px 0;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 10px;
  }
  
  #sidebar ul li:hover {
    background-color: #34495e;
    border-radius: 5px;
  }
  
  #content {
    margin-top: 20px; /* Adjust margin to create space for fixed navbar */
    margin-left: 250px; /* Align content to the right of the sidebar */
    padding: 20px;
    flex: 1; /* Allow content area to grow and fill available space */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .component-wrapper {
    border: 3px solid black;
    border-radius: 8px;
    padding: 100px; /* Optional: Add padding inside the border */
  }
  </style>
  