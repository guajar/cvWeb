var form = document.getElementById("form-contact");

var tel = document.getElementById("telefono");
var valSelector = document.getElementById("otherSelector");

var inputOtros = document.createElement("input");
inputOtros.setAttribute("id", "input_otros");
inputOtros.setAttribute("class", "other");
inputOtros.setAttribute("type", "text");
inputOtros.setAttribute("name", "otros");
inputOtros.setAttribute("placeholder", "Introduce a través de que o quién...");
inputOtros.setAttribute("required", "");

$(document).ready(function() {
    $("#telefono").keydown(function (e) {
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
            (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||              
            (e.keyCode >= 35 && e.keyCode <= 40)) {
                 return;
        }
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
});

$(document).ready(function(){
  $("#otherSelector").change(function(){
    $("#otherSelector option:selected").each(function() {			
        if (this.id == "tipo_otros") {
           $('#divSel').append(inputOtros);    
        } else {                  
            $('#input_otros').remove();
        }			
    }); 
  });		 	
});

$(document).ready(function() {
    $('#comment').on('keyup', function() {
        var words = this.value.match(/\S+/g).length;  
        if (words > 150) {
            var trimmed = $(this).val().split(/\s+/, 150).join(" ");
            $(this).val(trimmed + " ");
        }
        else {
            $('#display_count').text(words);
            $('#word_left').text(150-words);
        }
    });
 }); 

form.addEventListener("submit", function(event){
    var inputNombre = document.getElementById("nombre");    
    var emailInput = document.getElementById("email");
    var telef = document.getElementById("telefono");
    var selHowto = document.getElementById("otherSelector");

    if(inputNombre.checkValidity() == false) {
        alert("Escribe tu nombre");
        inputNombre.focus();
        event.preventDefault();
        return false;
    }

    if(email.checkValidity() == false) {
        alert("Escribe tu email correcto");
        email.focus();
        event.preventDefault();
        return false;
    }

    if(telef.checkValidity() == false) {
        alert("Escribe el teléfono correcto");
        telef.focus();
        event.preventDefault();
        return false;
    }

    var index = selHowto.selectedIndex;
    if( index == null || index == 0 ) {
        alert("Selección válida");
        selHowto.focus();
        event.preventDefault();
        return false;
    }

    if(document.getElementById("input_otros")) {
        if(document.getElementById("input_otros").checkValidity() == false){
            alert("Escribe como me conociste");
            document.getElementById("input_otros").focus();
            event.preventDefault();
            return false;
        }
    }

    event.preventDefault();

    setTimeout(function() {
    	sendNotification("Formulario recibido", "En breve tendrás respuesta");
    }, 1000);
});

