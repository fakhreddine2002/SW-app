<template>
  <div id="container">
    <h1 id="title1">welcome to the</h1>
    <a href="https://www.linkedin.com/company/swconsultings/?originalSubdomain=tn"><img class="sw" src="../assets/1630604444607.jpeg" alt="SWConsulting"></a>
    <h1 id="title2">Web components library</h1>
  </div>
</template>

  
<script>
import axios from 'axios';
import '@fakhreddine/my-component-library/dist/bundle.css';
import '@malekboubaker/my-components/dist/bundle.css';

export default {
  name: 'Home',
  methods: {
    logout() {
      axios.post('http://localhost:8099/clear')
      .then(() => {
        localStorage.removeItem("user-info");
        this.isSignedIn = false;
        this.$router.push({ name: 'SignIn' });
      })
      .catch(error => console.error("Error clearing user data:", error));
    }
  },
  mounted() {
    // const user = JSON.parse(localStorage.getItem('user-info'));
    // if (!user) {
    //   this.$router.push({ name: 'SignIn' });
    // }
  }
};
</script>
  
<style>
@import url('https://fonts.googleapis.com/css?family=Oswald:400');
#container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin-top: 70px;
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

.sw {
  border-radius: 50%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5); 
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.sw:hover {
  transform: scale(1.1);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.7); 
} 
</style>
