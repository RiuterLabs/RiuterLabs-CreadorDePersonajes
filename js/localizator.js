class Localizator{
    constructor(){
        this.idiomaSeleccionado="ESP";
        this.idiomas=["ESP","ENG"];
        this.resourceLoader=new ResourceLoader(this.idiomaSeleccionado);
        this.localizar();
    }

    clearElement(id){
        var div = document.getElementById(id);
        while(div.firstChild){
            div.removeChild(div.firstChild);
        }
    }

    localizar(){
        this.localizarTitulo();
        this.crearBotonesIdioma();
        this.updateCargarYDescargar();
        this.localizarNombre();
        this.localizarColores();
        this.localizarPuntos();
    }
    localizarTitulo(){
        this.setText("creatorTitle", "general", "creatorTitle");
        this.setText("logrosTitle","general","logros");
        this.setValue("toggleLogros", "general","logros");
        this.setText("implementacionTitle","general","nombreImplementacion")
    }

     getResource(data, id){
        return this.resourceLoader.getResource(data,id, this.idiomaSeleccionado);
    }

    cambiarIdioma(idioma){
        this.idiomaSeleccionado=idioma;
        this.localizar();
    }

    crearBotonesIdioma(){
        var data = this.idiomas;
        this.clearElement("botonesIdioma");
        var seccionBotones = $("#botonesIdioma");
        var title = document.createElement("h3");
        title.textContent = this.resourceLoader.getResource("general","tituloBtIdioma", this.idiomaSeleccionado);
        seccionBotones.append(title);
        for (var i = 0; i<data.length; i++){
            var element = data[i];
            var boton = document.createElement("button");
            boton.id = "cambiarIdioma"+element;
            boton.textContent=this.resourceLoader.getResource("general","bt"+element, this.idiomaSeleccionado);
            boton.addEventListener("click",this.cambiarIdioma.bind(this, element));
            seccionBotones.append(boton);
        }
    }

    updateCargarYDescargar(){
        this.setText("cargaYDescargaTitle", "general", "tituloCargar");
        this.setValue("cargaYDescargaDescarga", "general", "descargar");
        this.setText("cargaYDescargaCargaLabel", "general", "importarDesc");

    }
    localizarColores(){
        this.setText("coloresTitulo","general", "coloresTitulo");
        this.setText("colorPielLabel","general", "colorPiel");
        this.setText("colorPeloLabel","general", "colorPelo");
        this.setText("colorOjosLabel","general", "colorOjos");
    }


    localizarNombre(){
        this.setText("nombreTitulo","general","nombreTitulo");
    }
    
    localizarPuntos(){
        this.setText("puntosTitulo","general","puntosTitulo");
    }

    setText(id, archivo ,codigo){
         var title = $("#"+id+"")[0];
        title.textContent=this.getResource(archivo, codigo);
    }

    setValue(id, archivo ,codigo){
         var title = $("#"+id+"")[0];
        title.value=this.getResource(archivo, codigo);
    }
    
}