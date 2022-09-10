class Book
{
    book()
    {
        //this.libro_id="";
        this.titulo="";
        this.nombre=""
        this.apellido="";
        this.categoria="";
        this.precio="";
        this.portada="";
    }
    /*setID(libro_id)
    {
        this.libro_id = libro_id;
    }
    getID()
    {
        return this.libro_id;
    }*/
    setTitulo(titulo)
    {
        this.titulo = titulo;
    }
    getTitulo()
    {
        return this.titulo;
    }
    setNombre(nombre)
    {
        this.nombre = nombre;
    }
    getNombre()
    {
        return this.nombre;
    }
    setApellido(apellido)
    {
        this.apellido = apellido;
    }
    getApellido()
    {
        return this.apellido;
    }
    setCategoria(categoria)
    {
        this.categoria = categoria;
    }
    getCategoria()
    {
        return this.categoria;
    }
    setPrecio(precio)
    {
        this.precio = precio;
    }
    getPrecio()
    {
        return this.precio;
    }
    /*getPortada(portada)           Posible get-set para la portada
    {
        this.portada = portada;
    }
    setPortada()
    {
        return this.portada;
    }*/
}
//Registrar evento click del ratón al presionar botones de envío
function iniciar()
{
    var showinfo = document.getElementById("mostrar");

    if(showinfo.addEventListener)
    {
        showinfo.addEventListener("click", function()
        {
            createObject(document.frmbook);
        }, false);
    }
    else if(showinfo.attachEvent)
    {
        showinfo.attachEvent("onclick", function()
        {
            createObject(document.frmbook);
        });
    }
}
// Creando el nuevo objeto
function createObject(form)
{
    const book = new Book();//generando la instancia de Book
    //book.setID(form.codigoLib.value);
    book.setTitulo(form.txttitulo.value);    //cargando el objeto
    book.setNombre(form.txtnombre.value);
    book.setApellido(form.txtapellido.value);
    book.setCategoria(form.txtcategoria.value);
    book.setPrecio(form.txtprecio.value);
    //book.setPortada(form.imgportada.value);       ¿Cómo se captura la imagen para el objeto?
    showProperties(book, "InfoBook");
}

const arrarObjetos = new Array; //arreglo en el que se guardarn todos los objetos creados

function showProperties(objeto, objName)
{
    var infBook = "";
    var cardBook = "";
    var info = document.getElementById('infolibro');    //Espacio donde se pintaran los objetos

    for(var i in objeto)
    {
        infBook = infBook + objName + "." + i + " = " + objeto[i] + "\n";
    }

    if(!confirm(infBook + "\n\n¿Es esta información correcta?"))
    {
        //frmbook.codigoLib.value = "";
        frmbook.txttitulo.value = "";
        frmbook.txtnombre.value = "";
        frmbook.txtapellido.value = "";
        frmbook.txtcategoria.value = "";
        frmbook.txtprecio.value = "";
        //frmbook.imgportada.value = "";
    }
    arrarObjetos.push(objeto);  //agregamos los objetos al arreglo

    let id=1;   //Se pintara en la tabla como el identificador 
    let posicion=0; //servira para definirle posicion a los objetos

    arrarObjetos.forEach(element =>{
        cardBook += "\t\t<div class='card' style='width: 18rem;'>\n";
        cardBook += "\t\t\t<img class='card-img-top' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADgCAMAAAAt85rTAAAAM1BMVEX////O0NLP0dPS1Nb19fb8/Pz5+fr39/jt7u/Z29zp6uvU1tfz8/P///7Y2dvn6Ong4uJDV6wKAAADYklEQVR4nO3b6W6rMBCGYTaDWQrc/9WWBEKMzWpBGar3kc6PEzVRPnliD2AHAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACCKSpNOZksdare7I00kbV7n+fvfWdqmujvVSLXhJfLs7mSDi/KFYSkjob4qXzeGIn6J+XUBQ313uE4SXRgwvztdMFZoXJe22H3FEdmmAeP07nhjwEa5i56zLjqSRXUfMLk73jfgyR87BBSwGF4UMJceUFW60JX/NJ/LLlFV1K/pIioL34hDQAFL/VzArB7nQd9uRPQIpqUx03smlBxQTXub2qtKJQe0m1OvfktwQGU3p15DKC5gMb6QxlZAr35LcECn+458VmvBAav/HjBzStTnWwoOqEo74MZvsJh7UUzAHyegc4+mXf+EZnYdEXO5NBPQmmWi9VZGR2E8s45IDtiNiWn9QiqL5sdYdMBJka7nU7X77rch4P1XE7MBg+Izk5azM8hXu1TG9a756Q/MBwzSIi/jut26HCw+4+zcAZUesCs+lW72oNV3ybTfLz/gDmbXGlnTyX8IOL3ssIr0oQET8wtbDcF0un1mQBUb9+Lt6+JpkT4y4Ksm208lus80SrNIHxnwXZOfrmXmoZRZpE8M2JgxZp+aGl23mIDu5dLiHw41Gelg6ampUaRiAqq9AY3fXLX4UHHsun8eFzD93uwOY13PhJsWafmwgGox0tSY6GkBd+/E+BTpwwI2K5Eswwc9K+CRnSZRn+lRASv7RuKqvut+UsDUvo+44d0JCA9ofi/nYcym1/0L2QF1bDRdx7eyvT5LXEDz5m13pR6N/z8wgX683is5YF+Tw5D6bNWTHtC8akgOTaDPCDiOWZcw9dqpJzug8fSsOT6BCgxYTAOaVw2hT31KD3jG/mb9uj0lNGCx8r2PBPwRGvBY17kSUOgIOjtIvAPKHEHPSfM5AZtoa0f2DqHgEk0qa+N15UFrnUodwTM/9r8HlLfQN8snBHrumQL3HIJBzAh+euvNycM5E+IcEzFPksR9lz63g+avZVce7dnYJPU3LjtdF8o4nOVunzyP33bv0112gLC8fyNXT5/TgtpqKfm6taIpN/uvo2Itoz57auWg3G6Tji3JJOUDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAguAXLpIvOW/ZAVEAAAAASUVORK5CYII=' alt='Card image cap'>\n";
        cardBook += "\t\t\t<div class='card-body'>";
        cardBook += "\t\t\t\t<p class='card-text'>" + 'Titulo: ' + element.getTitulo() + "</p>";
        cardBook += "\t\t\t\t<p class='card-text'>" + 'Categoria: ' + element.getCategoria() + "</p>";
        cardBook += "\t\t\t\t<p class='card-text'>" + 'Autor: ' + element.getNombre() + ' ' + element.getApellido() + "</p>";
        cardBook += "\t\t\t\t<p class='card-text'>" + 'Precio: $' + element.getPrecio() + "</p>";
        cardBook += "\t\t\t</div>";
        cardBook += "\t\t<div>";
    });

    info.innerHTML = cardBook;
}

function eliminar(valor)    //funcion para eliminar los elementos del arreglo
{
    var confirmacion=confirm("Esta seguro de eliminar este registro id = "+ valor);
    if(confirmacion)
    {
        arrarObjetos.splice(parseInt(valor) , 1);   //definimos que eliminaremos un elemento desde la posicion dada
        var cardBook = "";
        var info = document.getElementById('infolibro');

        let id=1;
        let posicion=0;
        
        arrarObjetos.forEach(element => {   //se vuelve a pintar la tabla para ver el resultado
            cardBook += "\t\t<div class='card' style='width: 18rem;'>\n";
            cardBook += "\t\t\t<img class='card-img-top' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADgCAMAAAAt85rTAAAAM1BMVEX////O0NLP0dPS1Nb19fb8/Pz5+fr39/jt7u/Z29zp6uvU1tfz8/P///7Y2dvn6Ong4uJDV6wKAAADYklEQVR4nO3b6W6rMBCGYTaDWQrc/9WWBEKMzWpBGar3kc6PEzVRPnliD2AHAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACCKSpNOZksdare7I00kbV7n+fvfWdqmujvVSLXhJfLs7mSDi/KFYSkjob4qXzeGIn6J+XUBQ313uE4SXRgwvztdMFZoXJe22H3FEdmmAeP07nhjwEa5i56zLjqSRXUfMLk73jfgyR87BBSwGF4UMJceUFW60JX/NJ/LLlFV1K/pIioL34hDQAFL/VzArB7nQd9uRPQIpqUx03smlBxQTXub2qtKJQe0m1OvfktwQGU3p15DKC5gMb6QxlZAr35LcECn+458VmvBAav/HjBzStTnWwoOqEo74MZvsJh7UUzAHyegc4+mXf+EZnYdEXO5NBPQmmWi9VZGR2E8s45IDtiNiWn9QiqL5sdYdMBJka7nU7X77rch4P1XE7MBg+Izk5azM8hXu1TG9a756Q/MBwzSIi/jut26HCw+4+zcAZUesCs+lW72oNV3ybTfLz/gDmbXGlnTyX8IOL3ssIr0oQET8wtbDcF0un1mQBUb9+Lt6+JpkT4y4Ksm208lus80SrNIHxnwXZOfrmXmoZRZpE8M2JgxZp+aGl23mIDu5dLiHw41Gelg6ampUaRiAqq9AY3fXLX4UHHsun8eFzD93uwOY13PhJsWafmwgGox0tSY6GkBd+/E+BTpwwI2K5Eswwc9K+CRnSZRn+lRASv7RuKqvut+UsDUvo+44d0JCA9ofi/nYcym1/0L2QF1bDRdx7eyvT5LXEDz5m13pR6N/z8wgX683is5YF+Tw5D6bNWTHtC8akgOTaDPCDiOWZcw9dqpJzug8fSsOT6BCgxYTAOaVw2hT31KD3jG/mb9uj0lNGCx8r2PBPwRGvBY17kSUOgIOjtIvAPKHEHPSfM5AZtoa0f2DqHgEk0qa+N15UFrnUodwTM/9r8HlLfQN8snBHrumQL3HIJBzAh+euvNycM5E+IcEzFPksR9lz63g+avZVce7dnYJPU3LjtdF8o4nOVunzyP33bv0112gLC8fyNXT5/TgtpqKfm6taIpN/uvo2Itoz57auWg3G6Tji3JJOUDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAguAXLpIvOW/ZAVEAAAAASUVORK5CYII=' alt='Card image cap'>\n";
            cardBook += "\t\t\t<div class='card-body'>";
            cardBook += "\t\t\t\t<p class='card-text'>" + 'Titulo: ' + element.getTitulo() + "</p>";
            cardBook += "\t\t\t\t<p class='card-text'>" + 'Categoria: ' + element.getCategoria() + "</p>";
            cardBook += "\t\t\t\t<p class='card-text'>" + 'Autor: ' + element.getNombre() + ' ' + element.getApellido() + "</p>";
            cardBook += "\t\t\t\t<p class='card-text'>" + 'Precio: $' + element.getPrecio() + "</p>";
            cardBook += "\t\t\t</div>";
            cardBook += "\t\t<div>";
        });

        info.innerHTML = cardBook;
    }
}

function mostrar_img()
{
    var archivo = document.getElementById("portada").files[0];
    var reader = new FileReader();
    if (portada) 
    {
        reader.readAsDataURL(archivo);
        reader.onloadend = function () 
        {
            document.getElementById("img-show").src = reader.result;
        }
    }
}
//Asociando función que manejará el evento load al cargar la página
if(window.addEventListener)
{
    window.addEventListener("load", iniciar, false);
}
else if(window.attachEvent)
{
    window.attachEvent("onload", iniciar);
}