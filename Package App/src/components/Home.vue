<template>
    <div class="container">
        <h1 id="title1">welcome to the</h1>
        <h1 id="title2">Web components libary</h1>
        <div class="BtnContainer">
            <button>Add Component</button>
            <button>Get Component</button>
        </div>
    </div>

</template>



<script>
    export default{
        name:'Home'
    }
</script>

<style>
    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0px;
    }
    #title1{
        color: rgb(0, 0, 0);
        font-size: 50px;
    }
    #title2{
        color: rgb(0, 13, 255);
        font-size: 60px;
        font-family:Georgia, 'Times New Roman', Times, serif;
    }
    .BtnContainer{
        display: flex;
        gap: 100px;
    }
    .BtnContainer button{
        background-color: rgb(255, 255, 255);
        border: 3px solid rgb(0, 0, 0);
        padding-left: 50px;
        padding-right: 50px;
        padding-top: 20px;
        padding-bottom: 20px;
        border-radius: 60px;
        margin-top: 80px;
        font-family: Georgia, 'Times New Roman', Times, serif;
        font-size: 30px;
        cursor: pointer;
        transition: all 0.3s ease;  
    }
    .BtnContainer button:hover {
        border: 3px solid rgb(0, 8, 255); 
        background-color: rgba(0, 255, 255, 0.2); 
        /* color: rgb(0, 8, 255);  */
        box-shadow: 0 0 15px rgba(0, 8, 255, 0.5); 
        transform: scale(1.05); 
        transition: all 0.3s ease; 
    }

</style>

