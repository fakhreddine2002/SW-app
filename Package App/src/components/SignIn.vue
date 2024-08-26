<template>
    <div class="container">
      <h2>Sign In</h2>
      <form @submit.prevent="signIn">
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" v-model="name" placeholder="Enter your username" required>
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" v-model="email" placeholder="Enter your email" required>
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" v-model="password" placeholder="Enter your password" required>
        </div>
        <button v-on:click="signIn" class="button-85">Sign In</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'SignIn',
    data() {
      return {
        name: '',
        email: '',
        password: ''
      };
    },
  
    methods: {
      async signIn() {
        if (!this.name || !this.email || !this.password) {
          alert('All fields are required.');
          return;
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(this.email)) {
          alert("Please enter a valid email address.");
          return;
        }
        try {
          const response = await axios.post('http://localhost:8099/signup', {
            username: this.name,
            email: this.email,
            password: this.password
          });
          console.log(response.data); // Handle successful response
          localStorage.setItem("user-info", JSON.stringify(response.data));
          this.$router.push({ name: 'Home' });
        } catch (error) {
          console.error("There was an error!", error.response ? error.response.data : error.message);
          alert(error.response ? error.response.data.error : 'An error occurred.');
        }
      }
    },
    mounted() {
      let user= localStorage.getItem("user-info");
      if (user) {
        this.$router.push({name: 'Home'});
      }
    }
  }
  </script>
  
  <style scoped>
  body, h2, p {
    margin: 0px;
    padding: 0px;
  }
  
  body {
    font-family: 'Roboto', sans-serif;
    height: 100vh;
  }
  
  .container {
    width: 300px;
    margin: auto;
    padding: 40px 20px;
    padding-bottom: 60px;
    box-shadow: 4px 10px 8px rgba(0, 0, 0, 0.1);
    max-width: 400px;
  }
  
  h2 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 24px;
    color: #ccc;
  }
  
  .form-group {
    margin-bottom: 35px;  
  } 
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color: #666;
  }
  
  input[type="text"], input[type="email"], input[type="password"] {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 14px;
  }
  
  .button-85 {
    width: 100%;
    padding: 0.6em 2em;
    border: none;
    outline: none;
    color: rgb(255, 255, 255);
    background: #111;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    font-size: 16px;
  }
  
  .button-85:before {
    content: "";
    background: linear-gradient(
      45deg,
      #48ff00,
      #00ffd5,
      #002bff
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    -webkit-filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing-button-85 20s linear infinite;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }
  
  @keyframes glowing-button-85 {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
  
  .button-85:after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #222;
    left: 0;
    top: 0;
    border-radius: 10px;
  }
  
  p {
    text-align: center;
    margin-top: 20px;
    font-size: 14px;
  }
  
  p a {
    color: #007bff;
    text-decoration: none;
    font-weight: bold;
  }
  
  p a:hover {
    text-decoration: underline;
  }
  </style>
  
  
  