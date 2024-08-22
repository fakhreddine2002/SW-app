<template>
    <div class ="CS" id="container">
        <h1 id="title1">welcome to the</h1>
        <img src="../assets/1630604444607.jpeg" alt="SWConsulting">
        <h1 id="title2">Web components libary</h1>
        <div class="CS" id="BtnContainer">
            <button>Add Component</button>
            <button>Get Component</button>
        </div>
        <MyButton />
        <ButtonHover />
    </div>

</template>

<script>
    import {MyButton} from'@malekboubaker/my-components'
    import {ButtonHover} from '@fakhreddine/my-component-library'
    import '@fakhreddine/my-component-library/dist/bundle.css';
    import '@malekboubaker/my-components/dist/bundle.css';
    export default{
        name:'Home',
        components:{
            MyButton ,
            ButtonHover          
        }
    }
</script>

<style>
    
.CS {
    width: 100%;
    height: 100vh;
    background-color: #1c1c1c;
    background-image: linear-gradient(135deg, rgba(255, 255, 255, 0.02) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.02) 50%, rgba(255, 255, 255, 0.02) 75%, transparent 75%, transparent);
    background-size: 10px 10px; 
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Arial, sans-serif;
    font-size: 20px;
  color: #dddddd;
    text-align: center;
    padding: 20px;
    box-sizing: border-box;
}

#container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
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

