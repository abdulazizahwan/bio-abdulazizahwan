function mostrar(e) {
    if (e.classList.contains("fa-moon-o")) { //se tem lua
        e.classList.remove("fa-moon-o"); //remove classe icone lua
        e.classList.add("fa-sun-o"); //coloca classedo sol
        e.style.color = "rgb(225, 225, 0)";
        document.body.style.background = 'rgb(25, 36, 41)';
        document.querySelector('#userName').style.color = '#fff';

        let links = document.querySelectorAll('.link');
        // Pega apenas o primeiro do array
        links[0].style.background = 'rgb(45, 56, 61)';
        // pega todos
        for (let i = 0; i < links.length; i++) {
            links[i].style.background = 'rgb(45, 56, 61)';
        }

        let circulos = document.querySelectorAll('.circulo');
        // Pega apenas o primeiro do array
        circulos[0].style.filter = 'grayscale(100%)';
        // pega todos
        for (let i = 0; i < circulos.length; i++) {
            circulos[i].style.filter = 'grayscale(100%)';
        }

    } else { //senão
        e.classList.remove("fa-sun-o"); //remove classe icone lua
        e.classList.add("fa-moon-o"); //coloca classedo sol
        e.style.color = "#585858";
        document.body.style.background = 'rgb(243, 242, 242)';
        document.querySelector('#userName').style.color = 'rgb(99, 99, 99)';

        let links = document.querySelectorAll('.link');
        // Pega apenas o primeiro do array
        links[0].style.background = 'rgb(58, 171, 231)';
        $('.link').hover(function () {
            $(this).css("color", "rgb(58, 171, 231)");
            $(this).css("background-color", "rgb(255, 255, 255)");
        });
        // pega todos
        for (let i = 0; i < links.length; i++) {
            links[i].style.background = 'rgb(58, 171, 231)';
        }

        let circulos = document.querySelectorAll('.circulo');
        // Pega apenas o primeiro do array
        circulos[0].style.filter = 'grayscale(0%)';
        // pega todos
        for (let i = 0; i < circulos.length; i++) {
            circulos[i].style.filter = 'grayscale(0%)';
        }
    }

}