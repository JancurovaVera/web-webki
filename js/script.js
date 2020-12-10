function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }
  
  function openForm() {
    document.getElementById("myForm").style.width = "100%";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.width = "0%";
  }
  
  function openCons() {
    document.getElementById("myCons").style.width = "100%";
  }
  
  function closeCons() {
    document.getElementById("myCons").style.width = "0%";
  }

  function openMes() {
    document.getElementById("myMes").style.width = "100%";
  }
  
  function closeMes() {
    document.getElementById("myMes").style.width = "0%";
  }


var image_tracker = 'img1';
  function swap()
  
  {  
    var image1 = document.getElementById('pic1');
    var image2 = document.getElementById('pic2');
    var image3 = document.getElementById('pic3');
    if(image_tracker=='img1'){
    image1.src='/images/pic2.png';
    image2.src='/images/pic3.png';
    image3.src='/images/pic4.png';
    image_tracker='img2';
    }
    else if(image_tracker == 'img2'){
    image1.src='/images/pic3.png';
    image2.src='/images/pic4.png';
    image3.src='/images/pic1.png';
    image_tracker='img3';
    }
    else if(image_tracker == 'img3'){
    image1.src='/images/pic4.png';
    image2.src='/images/pic1.png';
    image3.src='/images/pic2.png';
    image_tracker='img4';
    }
    else if(image_tracker == 'img4'){
        image1.src='/images/pic1.png';
        image2.src='/images/pic2.png';
        image3.src='/images/pic3.png';
        image_tracker='img1';
        }
    
    }


    function swapLeft()
  
  {  
    var image1 = document.getElementById('pic1');
    var image2 = document.getElementById('pic2');
    var image3 = document.getElementById('pic3');
    if(image_tracker=='img1'){
    image1.src='/images/pic4.png';
    image2.src='/images/pic1.png';
    image3.src='/images/pic2.png';
    image_tracker='img2';
    }
    else if(image_tracker == 'img2'){
    image1.src='/images/pic3.png';
    image2.src='/images/pic4.png';
    image3.src='/images/pic1.png';
    image_tracker='img3';
    }
    else if(image_tracker == 'img3'){
    image1.src='/images/pic2.png';
    image2.src='/images/pic3.png';
    image3.src='/images/pic4.png';
    image_tracker='img4';
    }
    else if(image_tracker == 'img4'){
        image1.src='/images/pic1.png';
        image2.src='/images/pic2.png';
        image3.src='/images/pic3.png';
        image_tracker='img1';
        }
    
    }


   

