function consulta() { 

const cep = document.querySelector("#cep")
const numeroCEP = cep.value
const showData = (result)=>{
    for(const campo in result){
        if(document.querySelector("#"+campo)){
            document.querySelector("#"+campo).value = result[campo]
        }
    }
}
const option = {
    method: 'GET',
   // mode: 'cors',
    cache: 'default'
}
    
fetch(`https://viacep.com.br/ws/${numeroCEP}/json/`, option)
.then((response)=>{response.json()
    .then(data => showData(data))
})
.catch(error => {
    if (error.response == undefined){
        window.alert("errou")
        cep.value = ""
    }
     
})}

