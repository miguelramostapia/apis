async function getCambioMoneda() {
    try{
        const res = await
        fetch("https://mindicador.cl/api");
        const data = await res.json();
        const element = document.querySelector(".tiposdeCambio")
        let indicadorDiario=data
        let texto_de_paso=""
        texto_de_paso=` <select>
                        <option>${indicadorDiario.bitcoin.codigo}</option><br>
                        <option>${indicadorDiario.dolar.codigo}</option><br>
                        <option>${indicadorDiario.dolar_intercambio.codigo}</option><br>
                        <option>${indicadorDiario.euro.codigo}</option><br>
                        <option>${indicadorDiario.imacec.codigo}</option><br>
                        <option>${indicadorDiario.ipc.codigo}</option><br>
                        <option>${indicadorDiario.ivp.codigo}</option><br>
                        </select>
        `
        element.innerHTML = texto_de_paso

        console.log(data);
    } 
    catch (error){
        const texto_html=document.querySelector(".error")
        let texto_de_paso=""
    
        texto_de_paso=`<br><br><p>Error página con problemas de conexión. Intentar en 24 horas.</p><br><br>`
        texto_html.innerHTML=texto_de_paso
    }
}

getCambioMoneda();
/*
<option>${indicadorDiario.dolar.codigo}</option><br>
<option>${indicadorDiario.dolarintercambio.codigo}</option><br>
<option>${indicadorDiario.euro.codigo}</option><br>
<option>${indicadorDiario.imacec.codigo}</option><br>
<option>${indicadorDiario.ipc.codigo}</option><br>
<option>${indicadorDiario.ivp.codigo}</option><br>*/


/*
async function getRandomUser(){
    const res = await fetch("https://randomuser.me/api")
    const data = await res.json()
    console.log(data)
    const element = document.querySelector(".user")
    element.innerHTML = data.results[0]['email']
    const texto_html=document.querySelector(".user")
    let texto_de_paso=""

    texto_de_paso=`<p>correo electrónico : ${data.results[0].email}</p><br>
                <p>número de celular : ${data.results[0].cell}</p><br>
                <p>nombre completo : ${data.results[0].name.title}</p><br>
                <p>nombre completo : ${data.results[0].name.first}</p><br>
                <p>nombre completo : ${data.results[0].name.last}</p><br>
                <p>ciudad : ${data.results[0].location.city}</p><br>
                <p><img src="${data.results[0].picture.thumbnail}" alt="ejemplo de imagen"</p>`
    texto_html.innerHTML=texto_de_paso
}
getRandomUser()
*/