class Localizator{
    constructor(){
        this.idiomaSeleccionado="ESP";
        this.idiomas=["ESP","ENG"];
        this.dataCats={
            datos:[],
            datosIntra:[]
        };
        this.intraCats=[];
        this.cardsID={
            general:[],
            datos:[],
            datosIntra:[]
        };
        this.intraCardsID=[];
        this.resourceLoader=new ResourceLoader(this.idiomaSeleccionado);
        this.localizar();
    }
    addCardID(id, type){
        if(!this.cardsID[type].includes(id)){
            this.cardsID[type].push(id);
        }
    }
    setDataCats(cats, type){
        this.dataCats[type]=cats;
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
        this.localizarPronombres();
        this.localizarColores();
        this.localizarPuntos();
        this.localizarSeccionesData("datos");
        this.localizarSeccionesData("datosIntra");
        this.localizarCards("datos");
        this.localizarCards("datosIntra");
        this.localizarEdad();
    }

    localizarEdad(){
        this.setText("nombreLabel","general","labelNombre");
        this.setText("edadTitulo","general", "edadTitulo");
        this.setText("dayLabel", "general","dias");
        this.setText("mesLabel", "general","mes");
        this.setText("edadLabel", "general","edad");
    }

    localizarSeccionesData(type){
        for(var i =0; i<this.dataCats[type].length; i++){
            var id = this.dataCats[type][i];
            var buttonID = "toggle"+id;
            this.setText(buttonID, type, id);
        }
    }


    localizarCards(type){
        for(var i =0; i<this.cardsID[type].length; i++){
            var id = this.cardsID[type][i];
            this.setText("title"+id, type, id+"title");
            this.setText("desc"+id,type, id+"desc");
            this.setAlt("img"+id,type, id+"desc");
        }
    }

    localizarTitulo(){
        this.setText("creatorTitle", "general", "creatorTitle");
        this.setText("logrosTitle","general","logros");
        this.setText("toggleLogros", "general","logros");
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

    localizarPronombres(){
        this.setText("pronombresLabel","general","pronombres");
    }
    
    localizarPuntos(){
        this.setText("puntosTitulo","general","puntosTitulo");
    }

    setText(id, archivo ,codigo){
         var title = $("#"+id+"")[0];
         var resource = this.getResource(archivo, codigo);
         if(resource!="Recurso no encontrado o no traducido" && resource!=undefined)
            title.textContent=this.getResource(archivo, codigo);
    }

    setValue(id, archivo ,codigo){
         var title = $("#"+id+"")[0];
         var resource = this.getResource(archivo, codigo);
         if(resource!="Recurso no encontrado o no traducido" && resource!=undefined)
            title.value=this.getResource(archivo, codigo);
    }
     setAlt(id, archivo ,codigo){
         var title = $("#"+id+"")[0];
         var resource = this.getResource(archivo, codigo);
         if(resource!="Recurso no encontrado o no traducido" && resource!=undefined)
            title.alt=this.getResource(archivo, codigo);
    }
    
}