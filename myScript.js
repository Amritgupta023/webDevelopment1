var myfunction1 = function(color, temp) {

    if (temp == 1) {
        console.log("hello world.");
        document.getElementsByClassName('abc')[0].style.backgroundColor = color;
        document.getElementsByClassName('abc')[1].style.backgroundColor = color;
        document.getElementById('names').innerHTML="Jon Doe/CFO of Loremptus";

      document.getElementsByClassName('abcd')[0].style.backgroundColor = 'white';
        document.getElementsByClassName('abcd')[1].style.backgroundColor = 'white';  

        document.getElementsByClassName('abcde')[0].style.backgroundColor = 'white';
        document.getElementsByClassName('abcde')[1].style.backgroundColor = 'white';
    }

    
    if (temp == 2) {
        
        document.getElementById('names').innerHTML="Sara/COO of Loremptus";
        document.getElementsByClassName('abc')[0].style.backgroundColor = 'white';
        document.getElementsByClassName('abc')[1].style.backgroundColor = 'white';
        document.getElementById('names').innerHTML="ABCDEF";

      document.getElementsByClassName('abcd')[0].style.backgroundColor = color;
        document.getElementsByClassName('abcd')[1].style.backgroundColor = color;  

        document.getElementsByClassName('abcde')[0].style.backgroundColor = 'white';
        document.getElementsByClassName('abcde')[1].style.backgroundColor = 'white';

    }

    if (temp == 3) {
        document.getElementsByClassName('abc')[0].style.backgroundColor = 'white';
        document.getElementsByClassName('abc')[1].style.backgroundColor = 'white';
        document.getElementById('names').innerHTML="GHIIIII";

      document.getElementsByClassName('abcd')[0].style.backgroundColor = 'white';
        document.getElementsByClassName('abcd')[1].style.backgroundColor = 'white';  

        document.getElementsByClassName('abcde')[0].style.backgroundColor = color;
        document.getElementsByClassName('abcde')[1].style.backgroundColor = color;
    }

}

