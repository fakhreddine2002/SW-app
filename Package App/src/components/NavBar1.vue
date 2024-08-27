<template>
  <div id="container1">
    <div class="item1" v-on:click="ClickComp">Component</div>
    <div class="item1" v-on:click="ClickHome">Home</div>
    <div v-if="!user" class="item1" v-on:click="ClickSign">Sign In</div>
    <div v-if="user">
      <img class="ident" :src="`https://robohash.org/${username}`" alt="image user">
    </div>
  </div>
  <div v-if="user" class="logout-container">
    <a class="logout-button" href="#" v_on:click="logout">
      <img class="logout-icon" src="../assets/image.png" alt="Logout">
      <div class="logout-text" v-on:click="logout">LOGOUT</div>
    </a>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'NavBar1',
  data() {
    return {
      user: null,
      username: '',
    };
  },
  mounted() {
    this.loadUserInfo();
  },
  methods: {
    async loadUserInfo() {
      const userInfo = JSON.parse(localStorage.getItem('user-info'));
      if (userInfo && userInfo.user && userInfo.user.length > 0) {
        this.user = userInfo.user[0]; // Set the user object
        this.username = this.user.username; // Extract the username
      } else {
        this.user = null;
        this.username = '';
      }
    },
    ClickComp() {
      this.$router.push({ name: 'Components' });
    },
    ClickSign() {
      this.$router.push({ name: 'SignIn' });
    },
    ClickHome() {
      this.$router.push({ name: 'Home' });
    },
    async logout() {
      try {
        await axios.post('http://localhost:8099/clear');
        localStorage.removeItem("user-info");
        this.user = null; // Update the user data to null
        this.username = ''; // Clear the username
        this.$router.push({ name: 'SignIn' });
      } catch (error) {
        console.error("Error clearing user data:", error);
      }
    }
  },
  watch: {
    '$route'(to, from) {
      // Reload user info when the route changes
      this.loadUserInfo();
    }
  }
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
    width: 700px;
    margin-bottom: 60px;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.5);
    border-bottom-left-radius: 30px; 
    border-bottom-right-radius: 30px;
    position: fixed;
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
  .logout-container {
  top: 50px;
  right: 30px;
  opacity: 0.7  ;
}

.logout-button {
  text-decoration: none;
  display: flex;
  align-items: center;
  background-color: black;
  color: white;
  padding: 10px;
  margin: 15px;
  border-radius: 25px;
  overflow: hidden;
  transition: transform 0.35s, width 0.35s;
  position: absolute;
  top: 10px; /* Adjust as needed */
  right: 10px; /* Adjust as needed */
  transform: translateX(0);
}

.logout-icon {
  width: 25px;
  height: 25px;
  border-radius: 10%;
  margin-right: 10px;
  transition: opacity 0.35s;
}

.logout-text {
  font-size: 0.8em;
  font-family: 'Oswald', sans-serif;
  opacity: 0;
  transition: opacity 0.35s;
}

.logout-button:hover {
  transform: translateX(-30px); /* Adjust the distance as needed */
  width: 120px; /* Adjust the width as needed */
}

.logout-button:hover .logout-text {
  opacity: 1;
}
.ident{
  width: 50px;
  height: 5%;
  background-color: white ;
  border-radius: 50%;
}
  </style>
