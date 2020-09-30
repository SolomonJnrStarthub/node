<template >
  <div id="app" class="pb-5" >
   <div>
        <span class="text-dark mr-3"><i class="fas fa-home"></i><router-link to="/"  style="text-decoration:none;font-weight:600;">Home</router-link></span><span class="text-white" style="font-weight:900;">|</span>
        <span><router-link class="ml-3" to="/play"  style="text-decoration:none;font-weight:600;">PlayList</router-link></span>
    </div>
    <section class=" pb-5">
            <div class="container rounded pt-5 border  main pl-2" :style="bgs">
       <div class="row container-fluid pt-3 mx-auto text-dark">
        <div  class="col-sm-2 col-3 text-dark dropdown">
        <i style="cursor: pointer;" class="fas fa-bars text-light" id="triggerId ic" data-toggle="dropdown" aria-haspopup="true"
        aria-expanded="false"></i>
            <div class="dropdown-menu mr-5 bg-dark text-white animated bounceIn mt-5" aria-labelledby="triggerId" >
               <div class="playlist">
               <h2 class="text-center">My Songs</h2>
               <hr>
                <div class=" text-dark container pi">
                <p style="border-radius:30px;cursor:pointer; background:black;" class="text-white text-center mt-2" v-for="song in songs" :key="song.src" @click="play(song)" :class="(song.src == current.src) ? 'song playing' : 'song'">
                 <span><img style="height:50px; width:50px; border-radius:50% !important;border:3px solid black;" :src="song.img" alt=""></span>   {{song.title}} - {{song.artist}} 
            </p>
            </div>
    </div>
    </div>
        </div>
        <div  class="col-sm-8 text-center col-5 text-white">
            <h2 style="font-family:Lucida Calligraphy;font-weight:900;">Player</h2>
        </div>
       </div>
      <div class=" mt-4 text-center  rounded  p-2">
     <div class="text-center" :style="spin">
        <img id="img" class="rounded animated fadeIn turn" :src="current.img" style="height:170px; width:170px; border-radius:50% !important;border:3px solid black;">
     </div>
     <div class="mt-2">
        <h1 class="text-white" style="font-family:Lucida Calligraphy;font-weight:900;">
          {{ current.title }}
        </h1>
        <h4 class="text-primary">
            {{ current.artist }}
        </h4>
     </div>
     <div class="pt-2 pb-2 mt-3">
        <div id="line"></div>
     </div>
     <div class="text-center mt-5">
        <button class="mr-4" id="b"  @click="prev"><i class="fas fa-backward    "></i></button>
        <button id="c" style="border-radius:50% border:none; border:3px solid crimson;" class=" btn" @click="play" v-if="!isPlaying"><i class="fas fa-play text-danger" style="font-size:2rem; "></i></button>
        <button id="c" style="border-radius:50%;border:none; border:3px solid crimson;" class="btn" @click="pause" v-else><i class="fas fa-pause" style="font-size:2rem;  "></i></button>
        <button class="ml-4" id="b"  @click="next"><i class="fas fa-forward    "></i></button>
        </div>
     </div>
     </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
      
      
  },
  
  data(){
     return {
         bgs:{
            
         },
         spin : {
            
         },
        current:{},
        isPlaying:false,
        index:0,
        songs : [
      {
          artist:"Oxlade",
            title:"Away",
          src:require('C:/Users/SOLOMON/Desktop/node/src/assets/audio/OXLADE - AWAY.mp3'),
          img:require("C:/Users/SOLOMON/Desktop/node/src/assets/oxlade.jpg")
        },
        {
            artist:"Dav-ft-May",
            title:"BettyButter",
          src: require('C:/Users/SOLOMON/Desktop/node/src/assets/audio/BettyButter - DavftMay.mp3'),
          img:require("C:/Users/SOLOMON/Desktop/node/src/assets/DavftMay.jpg")
        },
        {
            artist:"Burna-boy",
            title:"Wonderful",
          src: require('C:/Users/SOLOMON/Desktop/node/src/assets/audio/burna-wonderful.mp3'),
          img:require("C:/Users/SOLOMON/Desktop/node/src/assets/burna.jpg")
        },
        {
            artist:"Unknown",
            title:"Tuale",
          src: require('C:/Users/SOLOMON/Desktop/node/src/assets/audio/tuale.mp3'),
          img:require("C:/Users/SOLOMON/Desktop/node/src/assets/girl-black.jpg")
        },
        {
            artist: "Chopsticks",
            title:"Hustle",
          src: require('C:/Users/SOLOMON/Desktop/node/src/assets/audio/Hustle- Chopsticks.mp3'),
          img:require("C:/Users/SOLOMON/Desktop/node/src/assets/cynthia.jpg")
        },
     ],
     player:new Audio()
     }
  },
  methods:{
      play(song){
          if(typeof song.src != "undefined"){
            this.current = song
            this.player.src = this.current.src;
            
        }
        this.player.play();
        this.player.addEventListener('ended', function(){
        this.index++;
        if(this.index > this.songs.length - 1){
            this.index = 0;
          }
        this.current = this.songs[this.index];
        this.play(this.current)
          }.bind(this))
        this.isPlaying = true;
        this.spin = "transform: rotate(9000deg);   transition-duration: 100s;"
      },
      pause(){
          this.player.pause();
          this.isPlaying = false ;
           this.spin = "transform: rotate(0deg);   transition-duration: 0s;"
      },
      next(){
        this.index++;
        if(this.index > this.songs.length - 1){
            this.index = 0;
          }
        this.current = this.songs[this.index];
        this.play(this.current)
      },
      prev(){
        this.index--;
        if(this.index < 0){
            this.index = this.songs.length -  1;
          }
        this.current = this.songs[this.index];
        this.play(this.current)
      }
  },
  created(){
    this.current = this.songs[this.index];
    this.player.src = this.current.src;
  }
  
}
</script>

<style scoped>
.pi p:hover{
    color: black !important;
    background: white !important;
    transition: all 0.7s;
    
}
#app{
     background-color:rgb(11, 11, 37);
    background-position:center;
    background-size:cover;
    background-repeat: no-repeat;
    height: 109vh;
}
    .playlist{
        width: 400px;
        height: 400px;
    }
    .playlist p{
        font-weight: 800;
        margin-top: 10px;
        font-size: x-large;
        border: 2px solid black;
    }
    #line{
        padding: 0 !important;
        margin: 0 !important;
        height: 5px;
        width: 100%;
        background: black;
    }
    .main{
    background-image:linear-gradient(to bottom,rgba(11, 11, 37,0.9),rgba(9, 14, 61)), url('~@/assets/black-headphone.jpg');
    background-position:center;
    background-size:cover;
    background-repeat: no-repeat;
    height: 623px;
    width: 500px;
    }
 #b{
     height: 50px;
     width: 50px;
     border: none;
     border: 1px solid grey;
     border-radius: 50%;
     background-color: transparent;
     box-shadow: none !important;
 }
 #b:active{
    box-shadow: none !important;
    border: none;
 }
 #b .fas{
     font-size: 13px;
     color: grey;
   
 }
 #c{
     height: 100px;
     width: 100px;
     border-radius: 50%;
     box-shadow: none !important;
 }
 
  .pl{
      background-image:linear-gradient(to right,rgba(2, 6, 41, 1),rgba(2, 6, 41, 0.9),rgba(35, 35, 49, 0));
       width: 580px;
       font-weight: 900;
       font-size:1.9rem;
        margin-top:10px;
  }
  .navbar{
  background-image: linear-gradient(to bottom,rgba(0, 0, 0, 0.5),rgba(0, 0, 0,0.5));
}
  .navbar-nav li{
    font-size: 22px;
    margin:15px;
  }
  .navbar-nav a{
    color: white !important;
     border: 5px solid transparent;
  }
  #logo{
    font-size: 25px;
  }
  .fas{
    font-size: 40px;
    border-radius: 50%;
  }
  .navbar-nav a:hover{
    transition: all ease 1s;
    border-bottom: 5px solid  #28a745;  
  }
  footer{
     background-image: linear-gradient(to right,rgba(2, 6, 41, 0.8),rgba(26, 61, 90, 0.2));
  height: 300px;
  max-width: 100%;
  }
  @media screen and (max-width:600px){
      .pl{
          max-width: 290px;
          
      }
      .navbar-nav li{
    margin: 5px;
    font-size: 16px;
  }
  #c{
     height: 60px;
     width: 60px;
     border-radius: 50%;
 }
 
 #ic{
     font-size: 30px;
 }
 #b{
     height: 30px;
     width: 30px;
     border: none;
     border: 1px solid grey;
     border-radius: 50%;
     background-color: transparent;
 }
  .main{
    max-width: 92vw;
    }
    .playlist{
        max-width: 80vw;
        height: 500px;
    }
  }
</style>