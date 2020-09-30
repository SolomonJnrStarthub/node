<template >
  <div id="app" style="font-family:Now Regular;font-size:larger;" >
   <div>
      <nav class="navbar navbar-expand-sm fixed-top" data-aos="zoomIn">
        <a class="navbar-brand" href="#">
         <span style="font-family:Jokerman;font-weight:900;color:white;" class="ml-3"><router-link to="/" style="text-decoration:none;color:white;">MUSIC-APP</router-link></span>
        </a>
        <button class="navbar-toggler d-lg-none text-white" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation">
          <span>
           <i class="fas fa-bars text-white p-2" style="font-size:1.5rem;"></i>
          </span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
          <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <router-link class="nav-link active" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">About</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div> 
    <!-- <div style="margin-top:7%;" class=" pt-5 p-2">
        <span class="text-dark"><i class="fas fa-home"></i><router-link to="/"  style="text-decoration:none;font-weight:600;">Home</router-link></span>|
        <span><router-link to="/about"  style="text-decoration:none;font-weight:600;">About</router-link></span>
    </div> -->
    <section style="margin-top:6%;" class="p-3  pt-5">
        <div class="row  mx-auto p-0 m-0 justify-content-center">
                <div class="col-sm-6 col-12 p-0 ">
                    <div class="skills__content ">
                        <div class="section-title text-white">
                            <h1 class=" text-white">MUSIC-APP</h1>
                        </div>
                        <p> This is a simple music player basically for non-sophisticated operations.It contains basic controls and trust us, it's simplicity is worth it.
                          </p>
                        <div class="skill__bar__item text-center  justify-content-center mx-auto">
                            <span class="text-white" style="font-size:larger;font-weight:700;">Simplicity</span>  <br>
                             <span class="text-white">74%</span>
                           <div id="con1" class=" mx-auto">
                                <div id="sh1" class="text-center justify-content-center "></div>
                            </div>
                        </div>
                        <div class="skill__bar__item text-center">
                            <span class="text-white" style="font-size:larger;font-weight:700;">Commercial Use</span> <br>
                             <span class="text-white">50%</span>
                            <div id="con2" class="mx-auto">
                                <div id="sh2" class="text-center justify-content-center "></div>
                            </div>
                        </div>
                        <div class="skill__bar__item text-center">
                            <span class="text-white" style="font-size:larger;font-weight:700;">Functionality</span> <br>
                             <span class="text-white">96%</span>
                            <div id="con3" class="mx-auto">
                                <div id="sh3" class="text-center justify-content-center "></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-12 p-0 i">
                   <img src="~@/assets/black.jpg" class="play-btn video-popup" width="100%" height="100%">
                </div>
            </div>
     </section>
     <section class="pt-5 mt-5 mb-5 pb-5">
        <div class="row container mx-auto">
            <div class="col-sm-5 col-12 text-center" data-aos="fade-right">
                <img  class="d-block mx-auto" src="~@/assets/woman.png" alt="" width="100%" height="100%">
            </div>
            <div class="col-sm-7 col-12 mt-5 mx-auto" data-aos="fade-right">
                <h2 class="text-center" style="font-weight:900; font-size:2rem;"> A COLLABORATIVE PRODUCT OF GROUP3 IN THE PROJECTCREATE SCHOOL OF CODING..</h2>
                <p style="font-size:larger;">Music many say is life, some say it's a soothing spirit, others say it's inspiration.. We have the  collection of the best playlist with spanking new and trending music genres,songs etc.</p>
            </div>
        </div>
     </section>
     <footer class="footer footer--normal spad pb-5 set-bg mt-5" data-aos="fade-Up">
        <div class="mt-5">
            <div class="row text-white container p-5">
                <div class="col-lg-3 col-md-6 container mt-5">
                     <div class="footer__social">
                        <h2 style="font-family:Jokerman;">MUSIC-APP</h2>
                    </div>
                </div>
                <div class="col-lg-4 offset-lg-1 col-md-6 mt-5">
                    <div class="footer__address">
                        <ul style="list-style:none;">
                            <li>
                                <i class="fa fa-phone"></i>
                                <p>Phone</p>
                                <h6>+234-677-1242-427</h6>
                            </li>
                            <li>
                                <i class="fa fa-envelope"></i>
                                <p>Email</p>
                                <h6>SolomonStartHub@gmail.com</h6>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3 offset-lg-1 col-md- mt-5">
                    <div class="footer__newslatter">
                        <h4>Stay With me</h4>
                        <form class="d-flex mt-5" action="#">
                            <input style="max-width:100%;" type="text" placeholder="Email" class="pl-3 pr-3 pt-3 pb-3 rounded">
                            <button class="pt-3 pb-3 pl-3 pr-3 btn btn-danger ml-2" type="submit">Send<i class="fas fa-mail-bulk    "></i></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
      
  },
  
  data(){
     return {}
   
}
}
</script>

<style scoped>
footer{
   background-image: url('~@/assets/footer-bg.png');
   background-position:center;
  background-size:cover;
  background-repeat: no-repeat;
  height: fit-content;
  max-width: 100%;
  }
#con1{
    width: 400px;
    height: 10px;
    background-color:  #332049;
}
#sh1{
    width: 74%;
    height: 10px;
    background-color: white;
    animation-name: moveOne;
    animation-delay: 0s;
    animation-duration: 5s;
    animation-iteration-count: 2s;
    animation-timing-function: 1;
}
@keyframes moveOne{
    from{
        width: 20%;
    }
    to{
        width: 74%;
    }
}
#con2{
    width: 400px;
    height: 10px;
    background-color:  #332049;
}
#sh2{
    width: 50%;
    height: 10px;
    background-color: white;
     animation-name: moveTwo;
    animation-delay: 0s;
    animation-duration: 5s;
    animation-iteration-count: 2s;
    animation-timing-function: 1;
}
@keyframes moveTwo{
    from{
        width: 20%;
    }
    to{
        width: 50%;
    }
}
#con3{
    width: 400px;
    height: 10px;
    
    background-color:  #332049;
}
#sh3{
    width: 96%;
    height: 10px;
    background-color: white;
     animation-name: moveThree;
    animation-delay: 0s;
    animation-duration: 5s;
    animation-iteration-count: 2s;
    animation-timing-function: 1;
}
@keyframes moveThree{
    from{
        width: 20%;
    }
    to{
        width: 96%;
    }
}

    .skills {
	padding-bottom: 0
}

.skills__content {
	background: #5c00ce;
	height: 533px;
	padding: 100px 70px 60px;
}

.skills__content .section-title h2 {
	color: #ffffff;
}

.skills__content .section-title h1 {
	text-align: center;
}

.skills__content p {
	color: #ffffff;
	margin-bottom: 32px;
}
.skill__bar__item p {
	font-size: 15px;
	font-weight: 500;
	color: #ffffff;
	margin-bottom: 10px;
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
@media screen and (max-width:600px){
    .ht h1{
    font-size: 2.6rem !important;
  }
    .navbar-nav li{
    margin: 5px;
    font-size: 16px;
  }
#con1{
    max-width: 200px;
}

#con2{
    max-width: 200px;
}

#con3{
    max-width: 200px;
}
.i{
    margin-top:20px;
}
.skills__content {
	margin: 0 !important;
    padding: 0 !important;
    text-align: center;
    justify-content: center;
    align-self:center;
    justify-items: center;
    text-justify: center;
	min-height: 400px;
}
  }




</style>