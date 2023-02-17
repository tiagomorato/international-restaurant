            function ifChecked(){
                 var checked = document.getElementById("cart").checked;

                 if (checked) {
                   document.getElementById("sidebar").style.visibility = "visible";
                 } else {
                   document.getElementById("sidebar").style.visibility = "hidden";
                 }
            }