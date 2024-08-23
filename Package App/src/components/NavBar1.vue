<template>
    <div id="container1">
      <div class="item1">Component</div>
      <div class="item1">Sign In</div>
      
    </div>
  </template>
  
  <script>
  export default {
    name: 'NavBar1',
  };
  </script>
  
  <style scoped>
  #container1 {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 40px;
    background-color: rgba(0, 0, 0, 0.6);
    height: 60px;
    width: 100%;
    margin-bottom: 6    0px; /* Add space below the navbar if needed */
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.5);
    border-bottom-left-radius: 30px; /* Remove border-radius to fit the full width */
    border-bottom-right-radius: 30px;
  }
  
  .item1 {
    color: rgb(0, 94, 255);
    font-size: 18px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    position: relative;
    cursor: pointer;
    padding: 5px 10px;
    transition: color 0.3s ease, transform 0.3s ease;
  }
  
  .item1::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: rgb(1, 247, 255);
    bottom: -3px;
    left: 0;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.3s ease-out;
  }
  
  .item1:hover::before {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
  
  .item1:hover {
    color: rgb(1, 247, 255);
    transform: translateY(-3px);
  }
  </style>
  