<template>
      <div id="app" style="font-family:Now Regular;font-size:larger;font-weight:bolder;" >
          <div id="MainPage">
    <section v-if="display">
      <section class="back-img">
      <div>
      <nav class="navbar border-bottom navbar-expand-sm fixed-top navbar-light pt-3 pb-0" data-aos="fade-out">
        <a class="navbar-brand" href="#">
         <span style="font-family:Jokerman;font-weight:900;color:white;" class="ml-3 pt-3">MUSIC-APP</span>
        </a>
        <button class="navbar-toggler d-lg-none text-white " id="b" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation">
          <span>
           <i class="fas fa-bars text-white p-2" style="font-size:1.5rem;"></i>
          </span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
          <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="nav-link active" href="C:/Users/SOLOMON/Desktop/node/public/explore.html">Home</a>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">About</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div> 
   
    <div class="pt-5"  style="margin-top:7.78%;">
        <div class="container  text-white pt-5" style="margin-top:8%;">
          <div class="ht">
            <h1 class="animated fadeInUp"  style="font-size:4rem;"><i class="fas fa-music m" style="font-size:4rem;"></i><span style="font-family:Elephant;" class="ml-3">Feel The Heart Beat...</span></h1>
            <p  class="animated fadeInDown" style="font-size:x-large;font-family:Comic Sans MS;;">Find More Innovative and Music Albums</p>
          </div>
          <br>
          <div class="mt-3">
            <span class="arrow"><i class="fas fa-angle-double-right animate"></i></span>
            <button id="hero-button" class="btn border text-white ml-2 pl-5 pr-5 pt-3 pb-3  animated fadeIn"><router-link to="/play" style="font-size:x-large; text-decoration:none;color:white;"> Explore Now </router-link></button>
          </div>
        </div>
    </div>    
    </section> 
    <section class="tours spad">
        <div class="container">
            <div class="row"  data-aos="fade-right" style="transition-delay:0.2s;">
                <div class="col-lg-3 order-lg-1">
                    <div class="tours__item__text">
                        <h1>Most Recent Playlists</h1>
                    </div>
                </div>
                <div class="col-lg-9 order-lg-2">
                    <div class="tours__item__pic">
                        <img style="border-top-left-radius:10%; border-bottom-right-radius: 10%;max-height:550px " src="~@/assets/black-man.jpg" alt="" class="img-fluid">
                    </div>
                </div>
                <div class="col-lg-3 order-lg-4" data-aos="fade-in">
                    <div class="tours__item__text tours__item__text--right">
                        <h1>Bests Beat Inspiration</h1>
                        <div class="tours__text__desc">
                            
                        </div>
                      
                    </div>
                </div>
                <div class="col-lg-9 order-lg-3" data-aos="fade-in">
                    <div class="tours__item__pic tours__item__pic--left">
                        <img  style="border-top-right-radius: 10%; border-bottom-left-radius: 10%;" src="~@/assets/whiteboy-on-headphone.jpg" alt="" class="img-fluid">
                    </div>
                </div>
                <div class="col-lg-3 order-lg-5" data-aos="fade-in">
                    <div class="tours__item__text">
                        <h1>Updated song operations</h1>
                        
                        <div class="tours__text__desc">
                            
                           
                        </div>
                       
                    </div>
                </div>
                <div class="col-lg-9 order-lg-6" data-aos="fade-in">
                    <div class="tours__item__pic tours__item__pic--last">
                        <img style="border-top-left-radius: 10%; border-bottom-right-radius: 10%;" src="~@/assets/girl-black.jpg" alt="" class="img-fluid">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <footer class="footer footer--normal spad set-bg" data-aos="fade-Up">
        <div class=" pt-5" >
            <div class="row text-white container" style="margin-top:5%;">
                <div class="col-lg-3 col-md-6 container mt-5">
                     <div class="footer__social mt-5">
                        <h2 style="font-family:Jokerman;" class="mt-3">MUSIC-APP</h2>
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
                        <form class="d-flex" action="#">
                            <input style="width:100%" type="text" placeholder="Email" class="pl-3 pr-3 pt-3 pb-3 rounded">
                            <button class="pt-3 pb-3 btn btn-danger ml-2" type="submit">Send<i class="fas fa-mail-bulk    "></i></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </section>

  </div>
      </div>  
</template>

<script>


export default {
  name: 'App',
  components: {
  },
  computed: {
    username() {
      return this.$route.params.username
    }
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    },
  },
  data(){
    return{
      display:true,

    }
  },

  
}
</script>

<style scoped>
.tours {
	padding-top: 150px;
	padding-bottom: 60px;
}

.tours__item__text {
	padding-right: 30px;
	margin-bottom: 100px;
  
}

.tours__item__text.tours__item__text--right {
	padding-left: 30px;
	padding-right: 0;
}

.tours__item__text h2 {
	font-size: 42px;
	color: #111111;
	text-transform: uppercase;
	margin-bottom: 24px;
}

.tours__item__text .tours__text__widget {
	overflow: hidden;
	border-bottom: 2px solid #f2f2f2;
	padding-bottom: 38px;
}

.tours__item__text .tours__text__widget ul {
	float: left;
}

.tours__item__text .tours__text__widget ul li {
	list-style: none;
	font-size: 15px;
	color: #111111;
	padding-left: 35px;
	position: relative;
	margin-bottom: 10px;
}

.tours__item__text .tours__text__widget ul li:last-child {
	margin-bottom: 0;
}

.tours__item__text .tours__text__widget ul li i {
	color: #5c00ce;
	position: absolute;
	left: 0;
	top: 3px;
}

.tours__item__text .tours__text__widget ul li span {
	display: inline-block;
	padding-right: 8px;
	position: relative;
	margin-right: 5px;
}

.tours__item__text .tours__text__widget ul li span:last-child {
	padding-right: 0;
	margin-right: 0;
}

.tours__item__text .tours__text__widget ul li span:last-child:after {
	display: none;
}

.tours__item__text .tours__text__widget ul li span:after {
	position: absolute;
	right: 0;
	top: 0;
	content: "|";
}

.tours__item__text .tours__text__widget .price {
	font-size: 18px;
	color: #ffffff;
	font-weight: 700;
	display: inline-block;
	padding: 14px 25px 12px 30px;
	background: #5c00ce;
	float: right;
}

.tours__item__text .tours__text__desc {
	padding-top: 40px;
	margin-bottom: 65px;
}

.tours__item__text .tours__text__desc p {
	color: #111111;
	margin-bottom: 20px;
}

.tours__item__text .tours__text__desc p:last-child {
	margin-bottom: 0;
}

.tours__item__pic {
	position: relative;
	z-index: 1;
	padding-right: 50px;
	margin-bottom: 110px;
	padding-left: 30px;
}

.tours__item__pic.tours__item__pic--left {
	padding-left: 50px;
	padding-right: 0;
}

.tours__item__pic.tours__item__pic--left:after {
	left: 0;
}

.tours__item__pic.tours__item__pic--last {
	margin-bottom: 0;
}

.tours__item__pic:after {
	position: absolute;
	left: 50px;
	top: -50px;
	width: calc(100% - 50px);
	height: 100%;
	border: 20px solid rgba(9, 53, 247, 0.1);
	content: "";
	z-index: -1;
}

.tours__item__pic img {
	min-width: 100%;
}

.back-img{
  background-image:linear-gradient(to right,rgba(2, 6, 41, 1),rgba(2, 6, 41, 0.9),rgba(35, 35, 49, 0)), url('~@/assets/black.jpg');
  background-position:center;
  background-size:cover;
  background-repeat: no-repeat;
  height: 740px;
  max-width: 100%;
}
.card-img-top{
height: 500px;
}
#hero-button{
  background-image: linear-gradient(to right,rgba(2, 6, 41, 1),crimson);
}
.navbar{
  background-image:linear-gradient(to right,rgba(2, 6, 41, 1),rgba(2, 6, 41, 0.9));
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
  .arrow{
    position: relative;
    animation-name: show;
    animation-delay: 0s;
    animation-duration: 1.2s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }
  @keyframes show{
    from{
      right: 6px;
    }
    to{
      left: 0px;
        
    }
  }
  
  @media screen and (max-width:600px){
    #b{
      font-size: 10px;
    }
  .ht h1{
    font-size: 2.6rem !important;
  }
  #hero-button{
    font-size: 1.2rem;
  }
  .navbar-nav li{
    margin: 5px;
    font-size: 16px;
  }
  }
  footer{
    background-image: url('~@/assets/footer-bg.png');
 background-position:center;
  background-size:cover;
  background-repeat: no-repeat;
  max-width: 100%;
  }
  
</style>