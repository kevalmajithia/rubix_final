$("#bot3b").hide();
$("#bot3b2").hide();
$("#user3b").hide();
$("#bot2b").hide();
$("#bot2c").hide();
$("#bot2d").hide();
$("#user2b").hide();
$("#user2c").hide();
$("#bot4a").hide();


$(document).ready(function(){
   
    var user1ans2 = document.querySelector(".user1ans2");
    user1ans2.addEventListener("click",function(){
        setTimeout(function(){
       
            $("#bot2b").show();
            $("#user2b").show();
        },500);
    })

        var helpline = document.querySelector(".helpline");
        helpline.addEventListener("click",function(){
        setTimeout(function(){
       
            $("#bot3b").show();
        },500);
       
    })  
    var suggestions = document.querySelector(".suggestions");
    suggestions.addEventListener("click",function(){
    setTimeout(function(){
   
        $("#bot3b2").show();
    },500);
   
    })  

})

$(document).ready(function(){
   
        var user1ans7 = document.querySelector(".user1ans7");
        user1ans7.addEventListener("click",function(){
            setTimeout(function(){
           
                $("#bot2c").show();

            },500);
        })
    
           
})  

$(document).ready(function(){
   
    var user1ans1 = document.querySelector(".user1ans1");
    user1ans1.addEventListener("click",function(){
        setTimeout(function(){
       
            $("#bot4a").show();

        },500);
    })

       
})  

$(document).ready(function(){
   
            var user1ans8 = document.querySelector(".user1ans8");
            user1ans8.addEventListener("click",function(){
                setTimeout(function(){
               
                    $("#bot2d").show();
    
                },500);
            })
        
               
})  