
class ResourceLoader{

    constructor(){
        this.datos={
            "ESP":datos_ESP,
            "ENG":datos_ENG
        };
        this.datosIntra={};
        this.general={
            "ESP":data_general_ESP,
            "ENG":data_general_ENG
        };
        //this.callback=callback;
        //this.changeLanguage(language);
        
    }

    getResource(data, key, language){
        var resource = this[data][language][key];
        if(resource==undefined)
            resource="Recurso no encontrado o no traducido";
        return resource;
    }

    changeLanguage(language){
        //this.fetchFile("datos",language);
        //this.fetchFile("datosIntra",language);
        this.fetchFile("general",language);
    }

    fetchFile(data, language){

        var path = "archivos/recursos/"+data+"/"+data+"_"+language+".json";
        fetch(path)
                    .then((response)=>{
                        console.log(response);
                        var result = response.json();
                        console.log(result)
                        return result;
                        })
                    .then((archivo)=>{
                        this[data]=archivo;
                        this.callback();
                    })
    }

    
}