const listado_monedas = [
    {   id: 0,
        codigo: '',
        fecha:'',
        nombre:'',
        unidad_medida:'',
        valor:0}
]

async function getCambioMoneda() {
    try{
        const res = await
        fetch("https://mindicador.cl/api");
        const data = await res.json();
        const element = document.querySelector(".tiposdeCambio")
        let indicadorDiario=data

        listado_monedas.push({id:1,codigo:indicadorDiario.bitcoin.codigo,fecha:indicadorDiario.bitcoin.fecha,nombre:indicadorDiario.bitcoin.nombre, unidad_medida:indicadorDiario.bitcoin.unidad_medida, valor:indicadorDiario.bitcoin.valor})
        listado_monedas.push({id:2,codigo:indicadorDiario.dolar.codigo,fecha:indicadorDiario.dolar.fecha,nombre:indicadorDiario.dolar.nombre, unidad_medida:indicadorDiario.dolar.unidad_medida, valor:indicadorDiario.dolar.valor})
        listado_monedas.push({id:3,codigo:indicadorDiario.dolar_intercambio.codigo,fecha:indicadorDiario.dolar_intercambio.fecha,nombre:indicadorDiario.dolar_intercambio.nombre, unidad_medida:indicadorDiario.dolar_intercambio.unidad_medida, valor:indicadorDiario.dolar_intercambio.valor})
        listado_monedas.push({id:4,codigo:indicadorDiario.euro.codigo,fecha:indicadorDiario.euro.fecha,nombre:indicadorDiario.euro.nombre, unidad_medida:indicadorDiario.euro.unidad_medida, valor:indicadorDiario.euro.valor})
        listado_monedas.push({id:5,codigo:indicadorDiario.imacec.codigo,fecha:indicadorDiario.imacec.fecha,nombre:indicadorDiario.imacec.nombre, unidad_medida:indicadorDiario.imacec.unidad_medida, valor:indicadorDiario.imacec.valor})
        listado_monedas.push({id:6,codigo:indicadorDiario.ipc.codigo,fecha:indicadorDiario.ipc.fecha,nombre:indicadorDiario.ipc.nombre, unidad_medida:indicadorDiario.ipc.unidad_medida, valor:indicadorDiario.ipc.valor})
        listado_monedas.push({id:7,codigo:indicadorDiario.ivp.codigo,fecha:indicadorDiario.ivp.fecha,nombre:indicadorDiario.ivp.nombre, unidad_medida:indicadorDiario.ivp.unidad_medida, valor:indicadorDiario.ivp.valor})

        listado_monedas.splice(0,1)
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

function buscarMoneda(){
    const monedaOrigen=document.querySelector(".montoOriginal").value;
    const tipoDestino=document.querySelector(".tiposdeCambio").value;
    const texto_html=document.querySelector(".user");
    let texto_de_paso=""

    texto_de_paso=`<p>Moneda Origen : ${monedaOrigen}</p><br>
                <p>Moneda Destino : ${tipoDestino}</p><br>
                <p>valor : no hay valor</p>`
    texto_html.innerHTML=texto_de_paso

}

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