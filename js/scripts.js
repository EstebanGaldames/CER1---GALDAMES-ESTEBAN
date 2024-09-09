/*Función que hace elegir las subcategorías*/
document.addEventListener('DOMContentLoaded', function() {
    const selectMaterial = document.getElementById('material');
    
    // Obtener todas las secciones de opciones
    const opcionesMaterial = document.querySelectorAll('.material-options');
  
    // Evento que detecta cuando cambia la selección del material
    selectMaterial.addEventListener('change', function() {
      // Ocultar todas las opciones
      opcionesMaterial.forEach(function(option) {
        option.style.display = 'none';
      });
  
      // Mostrar la sección correcta basada en la selección
      const selectedValue = selectMaterial.value;
      if (selectedValue) {
        const selectedOption = document.getElementById(selectedValue);
        if (selectedOption) {
          selectedOption.style.display = 'block';
        }
      }
    });
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const errorDiv = document.getElementById("error-messages");

    const nombres = document.getElementById("nombres");
    const correo = document.getElementById("correo");
    const direccion = document.getElementById("direccion");
    const cantidadRes = document.getElementById("cantidadRes");
    const material = document.getElementById("material");
    const btnEnviar = document.getElementById("btn-enviar");

    // Validar cuando el usuario hace clic en el botón "Enviar"
    btnEnviar.addEventListener("click", function(event) {
        event.preventDefault();  // Evitar el envío del formulario

        let isValid = true;
        errorDiv.innerHTML = "";  // Limpiar mensajes de error previos

        // Validar todos los campos
        if (!validateNombre()) isValid = false;
        if (!validateCorreo()) isValid = false;
        if (!validateDireccion()) isValid = false;
        if (!validateCantidad()) isValid = false;
        if (!validateMaterial()) isValid = false;

        // Si todo es válido, mostrar un mensaje de éxito
        if (isValid) {
            errorDiv.innerHTML = "<span style='color: green;'>Formulario enviado correctamente!</span>";
        }
    });

    // Función para validar el nombre
    function validateNombre() {
        const value = nombres.value.trim();
        if (value === "") {
            showError("El campo Nombre no puede estar vacío.");
            return false;
        }
        return true;
    }

    // Función para validar el correo
    function validateCorreo() {
        const value = correo.value.trim();
        if (value === "") {
            showError("El campo Correo no puede estar vacío.");
            return false;
        } else if (!validateEmail(value)) {
            showError("El formato del correo es inválido.");
            return false;
        }
        return true;
    }

    // Función para validar la dirección
    function validateDireccion() {
        const value = direccion.value.trim();
        if (value === "") {
            showError("El campo Dirección no puede estar vacío.");
            return false;
        }
        return true;
    }

    // Función para validar la cantidad de residuos
    function validateCantidad() {
        const value = cantidadRes.value.trim();
        if (value === "" || parseInt(value) < 1) {
            showError("Debe ingresar una cantidad válida de residuos.");
            return false;
        }
        return true;
    }

    // Función para validar el tipo de material
    function validateMaterial() {
        const value = material.value;
        if (value === "") {
            showError("Debe seleccionar un tipo de residuo.");
            return false;
        }
        return true;
    }

    // Función para mostrar mensajes de error
    function showError(message) {
        errorDiv.innerHTML = message;
    }

    // Función para validar el formato de correo
    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(email);
    }
});