<template>
    <div id="container">
      <h1 id="title1">welcome to the</h1>
      <a href="https://www.linkedin.com/company/swconsultings/?originalSubdomain=tn"><img src="../assets/1630604444607.jpeg" alt="SWConsulting"></a>
      <h1 id="title2">Web components library</h1>
      <!-- <div id="BtnContainer">
        <button>Add Component</button>
        <button>Get Component</button>
      </div> -->
    </div>
  </template>
  
  <script>
  import {MyButton} from'@malekboubaker/my-components'
  import {ButtonHover} from '@fakhreddine/my-component-library'
  import '@fakhreddine/my-component-library/dist/bundle.css';
  import '@malekboubaker/my-components/dist/bundle.css';
  
  export default {
    name: 'Home',
    components: {
      MyButton,
      ButtonHover,
    },
  };
  </script>
  
  <style>
  #container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding-top: 130px;
  }
  
  #title1 {
    font-size: 50px;
    margin: 30px;
    background: linear-gradient(180deg, #2b51b4, #0c9fc7);  
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  #title2 {
    background: linear-gradient(180deg, #2b51b4, #0c9fc7); 
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 60px;
    font-family: Georgia, 'Times New Roman', Times, serif;
  }
  
  #BtnContainer {
    display: flex;
    gap: 100px;
  }
  
  #BtnContainer button {
    background-color: #2c2c2c; 
    border: 3px solid #444444;
    padding-left: 50px;
    padding-right: 50px;
    padding-top: 20px;
    padding-bottom: 20px;
    border-radius: 60px;
    margin-top: 80px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 30px;
    color: #ffffff; 
    cursor: pointer;
    transition: all 0.3s ease;  
  }
  
  #BtnContainer button:hover {
    border: 3px solid #5a5a5a; 
    box-shadow: 0 0 15px #1aa4bc; 
    transform: scale(1.05); 
    transition: all 0.3s ease; 
  }
  
  img {
    border-radius: 50%;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5); 
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  img:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.7); 
  }
  </style>
  