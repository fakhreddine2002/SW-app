<template>
    <div id="components-page">
      <div id="sidebar">
        <h2>Components</h2>
        <ul>
          <li v-for="component in components" :key="component.name" @click="selectComponent(component)">
            {{ component.name }}
          </li>
        </ul>
      </div>
      <div id="content">
        <div v-if="selectedComponent" class="component-wrapper">
          <component :is="componentMap[selectedComponent.name]" />
        </div>
        <p v-else>Select a component to view</p>
        <div v-if="selectedComponent" id="info">
            <div>
              <h2 class="title">Insta<span class="effect">llation</span></h2>
              <div class="information">npm install <span class="library">{{ selectedComponent.library }}</span></div>
            </div>
            <div>
              <div class="title">How to<span class="effect">use it</span></div>
              <div class="information"><span class="purple">import</span> { <span class="blue">{{ selectedComponent.name }}</span> } <span class="purple">from</span> <span class="orange">"{{ selectedComponent.library }}"</span> <br> <span class="gris">...</span> <br> <span class="gris"><</span><span class="blue">{{ selectedComponent.name }}</span> <span class="gris">/></span></div>
            </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ButtonHover } from '@fakhreddine/my-component-library';
  import { ButtonHoverColor } from '@fakhreddine/my-component-library';
  import { NavBar } from '@fakhreddine/my-component-library';
  import { MyButton } from '@malekboubaker/my-components';
  import '@fakhreddine/my-component-library/dist/bundle.css';
  import '@malekboubaker/my-components/dist/bundle.css';
  
  export default {
    name: 'Components',
    data() {
      return {
        components: [], // This will hold the fetched data
        selectedComponent: null, // This will hold the selected component
        componentMap: { // Map component names to their imported components
          'ButtonHover': ButtonHover,
          'MyButton': MyButton,
          'ButtonHoverColor': ButtonHoverColor,
          'NavBar': NavBar,
        }
      };
    },
    mounted() {
      fetch('http://localhost:3000')
        .then(response => response.json()) 
        .then(data => {
          this.components = data; 
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    },
    methods: {
      selectComponent(component) {
        this.selectedComponent = component;
      }
    }
  }
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
    margin-top: 100px; /* Adjust margin to create space for fixed navbar */
    margin-left: 250px; /* Align content to the right of the sidebar */
    padding: 20px;
    flex: 1; /* Allow content area to grow and fill available space */
    display: flex;
    width: 1000px;
    height: 600px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 3px solid black;
  }
  
  .component-wrapper {
    display:flex;
    flex-direction: column;
    /* border: 3px solid black; */
    border-radius: 8px;
    /* background-color: rgba(0, 0, 255, 0.181); */
    padding: 20px; /* Adjust padding as needed */
  }
  #info{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 100px;
    padding-top: 60px;
  }
  .information{
    /* width: 200px;
    height: 30px; */
    background-color :#000000;
    padding: 10px;
    margin-top: 30px ;
    font-size: 15px;
    transition: box-shadow 0.3s ease-in-out;
  }
  .information:hover{
    box-shadow: 1px 1px 10px #2a7ccd;
  }
  .library{
    color: rgb(255, 13, 0);
  }
  .purple{
    color: rgb(204, 0, 204);
  }
  .blue{
    color: #2a7ccd;
  }
  .orange{
    color: orange;
  }
  .gris{
    color: gray;
  }
  .title{
    font-size: 2rem; /* Example size, adjust as needed */
    font-weight: bold;
    color: #ffffff; /* Example style, adjust as needed */

  }
  .effect{
    font-size: 2rem; /* Example size, adjust as needed */
    font-weight: bold;
    color: #bdb8bd; 
  }
  </style>
  