
function openNav() {
            document.getElementById("mySidenav").style.width = "200px";
            document.getElementById("main").style.marginLeft = "200px";
        }
                
function closeNav() {
            document.getElementById("mySidenav").style.width = "0";
            document.getElementById("main").style.marginLeft= "0";
        }
function myFunction() {
            document.getElementById("myDropdown").classList.toggle("show");
        }
        
function filterFunction() {
            var input, filter, ul, li, a, i;
            input = document.getElementById("myInput");
            filter = input.value.toUpperCase();
            div = document.getElementById("myDropdown");
            a = div.getElementsByTagName("a");
            for (i = 0; i < a.length; i++) {
                if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
                    a[i].style.display = "";
                } else {
                    a[i].style.display = "none";
                }
            }
        }

function openCity(evt, cityName) {
      var a, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (a = 0; a < tabcontent.length; a++) {
        tabcontent[a].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablinks");
      for (a = 0; a < tablinks.length; a++) {
        tablinks[a].className = tablinks[a].className.replace(" active", "");
      }
      document.getElementById(cityName).style.display = "block";
      evt.currentTarget.className += " active";
    }