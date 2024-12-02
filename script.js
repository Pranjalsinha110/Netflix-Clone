var detail = document.querySelector('.detail');
var second_question =  document.querySelector('.second-question');
var third_question = document.querySelector(".third-question");
var forth_question = document.querySelector(".forth-question");
var fifth_question = document.querySelector(".fifth-question");
var sixth_question = document.querySelector(".sixth-question");
var sixth_section  = document.querySelector(".sixth_section");

var after_faq = document.querySelector(".after_faq");
var call =  document.querySelector(".call");
var foot = document.querySelector(".foot");
var footer_lang_change = document.querySelector(".footer_lang_change");


var isMobile = window.matchMedia("(max-width: 556px)").matches; 
var isTablet = window.matchMedia("(max-width:992px)").matches;
var is_mini_laptop = window.matchMedia("(max-width:1100px)").matches;
function adjustLayout() {
                                                             // [this function is used in only in 1st question]
  
    if (isMobile) {
        second_question.style.top = '465px';
        third_question.style.top = "475px";
        forth_question.style.top = "485px";
        fifth_question.style.top = "495px";
        sixth_question.style.top = "505px";
        after_faq.style.top =  "520px";
        call.style.top = "530px";
        foot.style.top = "580px";
        footer_lang_change.style.top = "565px";
     
       

                                                    //@media query manipulating;
    } else if(isTablet) {
        second_question.style.top = "265px";
        third_question.style.top = "275px";
        forth_question.style.top = "285px";
        fifth_question.style.top = "295px";
        sixth_question.style.top ="305px";
        footer_lang_change.style.top = "400px";
        


    }else if( is_mini_laptop){
        second_question.style.top = "263px";
        
    }
    else{
        second_question.style.top = '250px';
    }
    
}
function adjustLayout_2nd() {
                                                          // [this function is used in only in 2nd question]
        if (isMobile) {
            third_question.style.top ="300px";
            forth_question.style.top = "310px";
            fifth_question.style.top = "320px";
            sixth_question.style.top = "330px";
            after_faq.style.top ="350px";
            call.style.top = "360px";
            foot.style.top = "410px";
            footer_lang_change.style.top = "405px";
          

            }

    
}

function adjustLayout_3rd() {
            if(isMobile){               //only for 3rd FAQ questions
                forth_question.style.top = "578px";
                fifth_question.style.top = "590px";
                sixth_question.style.top = "603px";
                after_faq.style.top = "610px";
                call.style.top = "620px";
                foot.style.top = "670px";
                footer_lang_change.style.top = "680px";
            }else if(isTablet){
                forth_question.style.top = "310px";
                fifth_question.style.top = "320px";
            }
}

function adjustLayout_4th() {
        if(isMobile){               //only for 4th FAQ questions
            fifth_question.style.top = "328px";  
            sixth_question.style.top = "338px";
            after_faq.style.top = "350px";
            call.style.top = "360px";
            foot.style.top = "410px";
            footer_lang_change.style.top = "410px";
            
        }
}

function adjustLayout_5th() {
    
            if(isMobile){            // only for 5th FAQ question
                detail_5th.style.height = "180px"; 
                sixth_question.style.top = "318px";
                after_faq.style.top ="330px";
                call.style.top = "340px";
                foot.style.top = "390px";
                footer_lang_change.style.top = "390px";
            }
}

function adjustLayout_6th() {
    if (isMobile) {
        detail_6th.style.height = "330px";
        after_faq.style.top = "480px";
        call.style.top = "490px";
        foot.style.top = "540px";
        footer_lang_change.style.top = "550px";
    }
}




function toggleDetail() {
    var summary = document.querySelector('.summary');
    if (detail.style.display === 'none') {
        detail.style.display = 'block'; 
        summary.style.display = 'block';
        detail_2nd.style.display = 'none';
        detail_3rd.style.display = "none";
        detail_4th.style.display = "none";
        detail_5th.style.display = "none";
        detail_6th.style.display = "none";

        rot.style.transform = 'rotate(45deg)';
        rot_2nd.style.transform = 'rotate(90deg)';
        rot_4th.style.transform = "rotate(90deg)";
        rot_3rd.style.transform = "rotate(90deg)";
        rot_5th.style.transform = "rotate(90deg)";
        rot_6th.style.transform = "rotate(90deg)";

        second_question.style.top = '255px';
        second_question.style.borderTop = '5px solid black';
       
        third_question.style.top = "255px";
        forth_question.style.top ="260px";
        fifth_question.style.top = "265px";
        sixth_question.style.top = "270px";
        after_faq.style.top = "300px";
        call.style.top = "300px";
        foot.style.top = "380px";
        footer_lang_change.style.top = "430px";
       

        third_question.style.transition= "0.2s";
        forth_question.style.transition= "0.2s";
        fifth_question.style.transition = "0.2s";
        second_question.style.transition= '0.2s';
        sixth_question.style.transition = "0.2s";
        after_faq.style.transition= "0.2s";
        call.style.transition = "0.2s";
        foot.style.transition="0.2s";
        footer_lang_change.style.transition = "0.2s";
        
       
        adjustLayout();  
       
        
       
    } else {
        detail.style.display = 'none';
        summary.style.display = 'block';
        rot.style.transform = 'rotate(90deg)';
        second_question.style.top = '105px';
        third_question.style.top = "115px";
        forth_question.style.top ="125px";
        fifth_question.style.top = "135px";
        sixth_question.style.top = "145px";
        after_faq.style.top = "160px";
        call.style.top = "170px";
        foot.style.top = "230px";
        footer_lang_change.style.top = "280px";
     
     
    }
 }
    





var rot = document.querySelector('.plus');
function rotation() {
    if(rot.style.transform === 'rotate(90deg)') {
        rot.style.transform = 'rotate(-45deg)';
        rot_2nd.style.transform = 'rotate(90deg)';
        
    }else{
        rot.style.transform = 'rotate(90deg)';
       
    }
    
}
var detail_2nd = document.querySelector('.detail_2nd');
function toggleDetail_2nd() {
    var summary_2nd = document.querySelector('.summary_2nd');
    if (detail_2nd.style.display==='none') {
        detail_2nd.style.display= 'block';
        // summary_2nd.style.display = 'block';
        detail.style.display= 'none';
        detail_3rd.style.display = "none";
        detail_4th.style.display = "none";
        detail_5th.style.display = "none";
        detail_6th.style.display = "none";

        rot_2nd.style.transform = 'rotate(45deg)';
        rot.style.transform = 'rotate(90deg)';
        rot_4th.style.transform = "rotate(90deg)";
        rot_5th.style.transform = "rotate(90deg)";
        rot_3rd.style.transform = "rotate(90deg)";
        rot_6th.style.transform = "rotate(90deg)";

        second_question.style.top = '110px';
        second_question.style.transition='0.2s';
        third_question.style.top = "200px";
        forth_question.style.top = "210px";
        fifth_question.style.top = "220px";
        sixth_question.style.top = "230px";
        after_faq.style.top = "280px";
        call.style.top = "280px";
        foot.style.top = "350px";
        footer_lang_change.style.top = "400px";
      

        third_question.style.transition = "0.2s";
        forth_question.style.transition= "0.2s";
        fifth_question.style.transition = "0.2s";
        sixth_question.style.transition = "0.2s";
        after_faq.style.transition = "0.2s";
        call.style.transition = "0.2s";
        foot.style.transition = "0.2s";
        footer_lang_change.style.transition = "0.2s";
      

        rot_3rd.style.transform = "rotate(90deg)";
        adjustLayout_2nd(); 

    }else{
            detail_2nd.style.display = 'none';
            summary_2nd.style.display = 'block';
            rot_2nd.style.transform = 'rotate(90deg)';
            third_question.style.top ="120px";
            forth_question.style.top ="130px";
            fifth_question.style.top = "140px";
            sixth_question.style.top = "150px";
            after_faq.style.top = "160px";
            call.style.top = "170px";
            foot.style.top = "230px";
            footer_lang_change.style.top = "280px";
         

          
    }
}

var rot_2nd = document.querySelector('.plus_2nd');
function rotation_2nd() {
    if (rot_2nd.style.transform==='rotate(90deg)') {
        rot_2nd.style.transform = 'rotate(45deg)';
        rot.style.transform = 'rotate(90deg)';

        
    } else {
        rot_2nd.style.transform = 'rotate(90deg)';

    }
}


var detail_3rd = document.querySelector(".detail_3rd");
function toggleDetail_3rd() {
    var summary_3rd = document.querySelector("summary_3rd");
        if (detail_3rd.style.display==="none") {
                detail_3rd.style.display="block";
                detail.style.display  = "none";
                detail_2nd.style.display = "none";
                detail_4th.style.display = "none";
                detail_5th.style.display = "none";
                detail_6th.style.display = "none";

                rot_3rd.style.transform = "rotate(45deg)";
                rot_4th.style.transform = "rotate(90deg)";
                rot_2nd.style.transform = 'rotate(90deg)';
                rot.style.transform = 'rotate(90deg)';
                rot_5th.style.transform = "rotate(90deg)";
                rot_6th.style.transform = "rotate(90deg)";

                second_question.style.top= "110px";
                third_question.style.top= "120px";
                forth_question.style.top= "330px";
                fifth_question.style.top = "338px";
                sixth_question.style.top = "345px";
                after_faq.style.top = "390px";
                call.style.top = "390px";
                foot.style.top = "450px";
                footer_lang_change.style.top = "500px"
                
                forth_question.style.transition= "0.2s";
                fifth_question.style.transition = "0.2s";
                sixth_question.style.transition = "0.2s";
                after_faq.style.transition = "0.2s";
                call.style.transition="0.2s";
                foot.style.transition = "0.2s";
                footer_lang_change.style.transition = "0.2s";
              

                adjustLayout_3rd();
                
               
             
        } else {
            detail_3rd.style.display="none";
            rot_3rd.style.transform = "rotate(90deg)";
             forth_question.style.top= "130px"
             fifth_question.style.top = "140px";
             sixth_question.style.top = "150px";
             after_faq.style.top = "160px";
             call.style.top = "170px";
             foot.style.top = "230px";
             footer_lang_change.style.top = "280px";
         

        }
    
}
var rot_3rd = document.querySelector(".plus_3rd");
function rotation_3rd() {
        if (rot_3rd.style.transform == "rotate(90deg)") {
            rot_3rd.style.transform = "rotate(45deg)";

            
        } else {
            rot_3rd.style.transform = "rotate(90deg)";
        }
    
}



var detail_4th = document.querySelector(".detail_4th");
function toggleDetail_4th() {
    if(detail_4th.style.display== "none"){
        detail_4th.style.display = "block";
        detail_5th.style.display = "none";
        detail_3rd.style.display = "none";
        detail_2nd.style.display = "none";
        detail.style.display= "none";
        detail_6th.style.display = "none";

        rot.style.transform = "rotate(90deg)";
        rot_2nd.style.transform = "rotate(90deg)";
        rot_3rd.style.transform = "rotate(90deg)";
        rot_4th.style.transform = "rotate(45deg)";
        rot_5th.style.transform = "rotate(90deg)";
        rot_6th.style.transform = "rotate(90deg)";

        fifth_question.style.transition = "0.2s";
        sixth_question.style.transition = "0.2s";
        after_faq.style.transition = "0.2s";
        call.style.transition="0.2s";
        foot.style.transition = "0.2s";
        footer_lang_change.style.transition = "0.2s";
       

        second_question.style.top= "110px";
        third_question.style.top= "120px";
        forth_question.style.top ="130px";
        fifth_question.style.top = "240px";
        sixth_question.style.top = "250px";
        after_faq.style.top = "300px";
        call.style.top = "300px";
        foot.style.top = "350px";
        footer_lang_change.style.top = "400px";
       

            adjustLayout_4th();
        
        
    }else{
        detail_4th.style.display= "none";
        rot_4th.style.transform = "rotate(90deg)";
        fifth_question.style.top = "140px";
        sixth_question.style.top  = "150px";
        after_faq.style.top = "160px";
        call.style.top = "170px";
        foot.style.top = "230px";
        footer_lang_change.style.top = "280px";
      
    }
    
}
var rot_4th = document.querySelector(".plus_4th");
function rotation_4th() {
    if (rot_4th.style.transform=="rotate(90deg)") {

        rot_4th.style.transform = "rotate(45deg)";
        
    } else {
        rot_4th.style.transform = "rotate(90deg)";
    }
    
}

var detail_5th = document.querySelector(".detail_5th");
function toggleDetail_5th() {
            if (detail_5th.style.display=="none") {
                    detail_5th.style.display = "block";
                    detail.style.display = "none";
                    detail_2nd.style.display = "none";
                    detail_3rd.style.display = "none";
                    detail_4th.style.display = "none";
                    detail_6th.style.display = "none";
                
                    rot_5th.style.transform = "rotate(45deg)";
                    rot.style.transform = "rotate(90deg)";
                    rot_2nd.style.transform = "rotate(90deg)";
                    rot_3rd.style.transform = "rotate(90deg)";
                    rot_4th.style.transform = "rotate(90deg)";
                    rot_6th.style.transform = "rotate(90deg)";
            
                    second_question.style.top= "110px";
                    third_question.style.top= "120px";
                    forth_question.style.top ="130px";
                    fifth_question.style.top = "140px";
                    sixth_question.style.top = "250px";
                    after_faq.style.top = "280px";
                    call.style.top = "280px";
                    foot.style.top = "320px";
                    footer_lang_change.style.top = "370px";
                   


                    after_faq.style.transition = "0.2s";
                    call.style.transition = "0.2s";
                    foot.style.transition = "0.2s";
                    footer_lang_change.style.transition = "0.2s";
                   

                 
                    adjustLayout_5th();

            } else {
                detail_5th.style.display = "none";
                rot_5th.style.transform = "rotate(90deg)";
                sixth_question.style.top = "150px";
                after_faq.style.top = "160px";
                call.style.top = "170px";
                foot.style.top = "230px";
                footer_lang_change.style.top = "280px";
         
            }

    
}
var rot_5th= document.querySelector(".plus_5th");
function rotation_5th() {
    if (rot_5th.style.transform == "rotate(90deg)") {

        rot_5th.style.transform = "rotate(45deg)";
        
    } else {
        rot_5th.style.transform = "rotate(90deg)";
    }
}






var detail_6th = document.querySelector(".detail_6th");
function toggleDetail_6th() {
    if (detail_6th.style.display=="none") {
                detail_6th.style.display = "block";
                detail_5th.style.display = "none";
                detail.style.display = "none";
                detail_2nd.style.display = "none";
                detail_3rd.style.display = "none";
                detail_4th.style.display = "none";

                rot_6th.style.transform="rotate(45deg)";
                rot.style.transform = "rotate(90deg)";
                rot_2nd.style.transform = "rotate(90deg)";
                rot_3rd.style.transform = "rotate(90deg)";
                rot_4th.style.transform = "rotate(90deg)";
                rot_5th.style.transform = "rotate(90deg)";

                second_question.style.top = "110px";
                third_question.style.top = "120px";
                forth_question.style.top = "130px";
                fifth_question.style.top = "140px";
                sixth_question.style.top = "150px";
                after_faq.style.top = "320px";
                call.style.top = "320px";
                foot.style.top = "370px"
                footer_lang_change.style.top = "420px";
              
                sixth_question.style.transition = "0.2s";
                after_faq.style.transition = "0.2s";
                call.style.transition = "0.2s";
                foot.style.transition = "0.2s";
                footer_lang_change.style.transition = "0.2s";
               
                adjustLayout_6th();
                
    } else {
        detail_6th.style.display = "none";
        rot_6th.style.transform="rotate(90deg)";
        after_faq.style.top = "160px";
        call.style.top = "170px";
        foot.style.top = "230px";
        footer_lang_change.style.top = "280px"
       
    }
}

var rot_6th = document.querySelector(".plus_6th");
function rotation_6th() {
            if (rot_6th.style.transform == "rotate(90deg)") {
                        rot_6th.style.transform="rotate(45deg)";
            } else {
                rot_6th.style.transform="rotate(90deg)";
            }
}
