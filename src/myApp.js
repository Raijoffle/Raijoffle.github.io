import $ from "jquery";

var setOp = {
  homeVueJs() {},
  aboutVueJs() {},
  loginVueJs() {},
  signupVueJs() {},
  footerVueJs() {
    $(document).ready(function () {
      $("#footerVueJsLink").attr("href", "https://vuejs.org/");
      $("#footerVueJsLink").attr("target", "_blank");
    });
  },
  headerVueJs() {
    // $(document).ready(function() {
    //     $('#nav-icon3').click(function(){
    //         $(this).toggleClass('open');
    //     });
    //     window.addEventListener('resize', function () {
    //         var wWidth = window.innerWidth;
    //     if (wWidth <= 1050)
    //     {
    //         $('#nav-icon3').css("display","inline-block");
    //         $('#nav').hide();
    //         $('#headerIcon').hide();
    //         $("#avatarCircle").hide;
    //          $('.userAvatar').hide();
    //     }
    //     else{
    //         $('#nav-icon3').css("display","none");
    //         $('#nav').show();
    //         $('#headerIcon').show();
    //         $("#avatarCircle").show();
    //         $('.userAvatar').show();
    //     }
    //     });
    //     $('#nav-icon3').on('click',function(){
    //         $("#phoneMenu").append( "<div class='' >s <div class='phoneMenuIcon'>d</div> <button onclick='closeNav()'>X</button> <section id='avatarCircle'>j</section> <div id='nav'>k</div> </div>" );
    //         $("#nav-icon3").hide();
    //     });
    //     function closeNav() {
    //     $('#nav-icon3').show();
    //     };
    //     console.log(closeNav);
    // });
  },

  getInTouch() {},
  PhoneNav() {
    $(document).ready(function () {
      window.addEventListener("resize", function () {
        var wWidth = window.innerWidth;
        if (wWidth < 1050) {
          $("#pNavMenu").show();
          $("#nav").hide();
          $("#headerIcon").hide();
          $("#avatarCircle").hide;
          $(".userAvatar").hide();
        } else {
          $("#pNavMenu").hide();
          $("#nav").show();
          $("#headerIcon").show();
          $("#avatarCircle").show();
          $(".userAvatar").show();
        }
      });
    });
  },
};

export default setOp;
