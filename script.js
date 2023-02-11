async function consulta() { 
    const cep = document.querySelector("#cep")
    const numeroCEP = (cep.value).replace("-","")
    if (cep.length > 9) {
        window.alert("[Erro] - Por favor digite o formato de cep, são apenas 8 dígitos");
        cep.value = "";
    }
    const showData = (result) => {
        for(const campo in result){
            if(document.querySelector("#"+campo)){
                document.querySelector("#"+campo).value = result[campo]
            }
        }
    }
    const option = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    try {
        
        const response = await fetch(`https://viacep.com.br/ws/${numeroCEP}/json/`, option);
        const data = await response.json();
        console.log(data)
        if (!data || data.erro == true) {
            
            throw new Error("Não foi possível encontrar um endereço com esse CEP");
            
        }
        showData(data);
    } catch (error) {
        
        window.alert("[ERRO-] - " + error.message);
        cep.value = ""
        window.location.href = 'https://marcos-rodrigues-js.github.io/consulta-cep/index.html'
    }
}
