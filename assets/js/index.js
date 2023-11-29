//creo arreglo para contener las monedas con un dummy
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
        //rescato las monedas y las guardo en el arreglo
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

        listado_monedas.splice(0,1) //elimino el elemento dummy
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
        element.innerHTML = texto_de_paso //lleno el select

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

/////////////////////////////////////////////////////////////////////////////////

async function getAndCreateDataToChart(moneda) {
    try{
        enlace_moneda="https://mindicador.cl/api/"+moneda;//se carga la dirección segun la moneda
        console.log(moneda);
        const res = await fetch(enlace_moneda);
        const undata = await res.json();
        let sismos=undata.serie//se traspasa el arreglo de datos
        const labels = sismos.map((sismo) => {
                    return sismo.fecha;
                    });
        const data = sismos.map((sismo) => {
                      return sismo.valor;
                                });
        const datasets = [{
                            label: moneda,
                            borderColor: "rgb(255, 99, 132)",
                            data
                            }
        ];
        return { labels, datasets };//se carga dataset y labels

    } 
    catch (error){
        const texto_html=document.querySelector(".error")
        let texto_de_paso=""
    
        texto_de_paso=`<br><br><p>Error página con problemas de conexión. Intentar en 24 horas.</p><br><br>`
        texto_html.innerHTML=texto_de_paso
    }
}

//getAndCreateDataToChart();/*
let myChart;
async function renderGrafica(moneda) {//se prepara la carga de datos desde la API
    const data = await getAndCreateDataToChart(moneda);
    const config = {
    type: "line",
    data
    };
    if(myChart){
        myChart.clear();
        myChart.destroy();
    }
    myChart = document.getElementById('myChart');

    myChart.style.backgroundColor = "white";
    myChart = new Chart(myChart, config);
}
/////////////////////////////////////////////////////////////////////////////////



function buscarMoneda(){//si doy click en buscar, entonces se disparan los calculos.
    const monedaOrigen=document.querySelector(".montoOriginal").value;
    const tipoDestino=document.querySelector(".tiposdeCambio").value;
    const texto_html=document.querySelector(".user");
    let texto_de_paso=""
    let total
    for (let item_moneda of listado_monedas){
        if(item_moneda.codigo===tipoDestino){//para la moneda elegida se genera el calculo de la conversión a pesos
            total = monedaOrigen/item_moneda.valor;
            texto_de_paso=`<p>Moneda Origen : ${monedaOrigen}</p><br>
            <p>Moneda Destino : ${tipoDestino}</p><br>
            <p>Tipo de Cambio : ${item_moneda.valor}</p><br>
            <p>Valor final    : ${total}</p>`
        }
    }
  

    texto_html.innerHTML=texto_de_paso //se despliega en un texto los datos que verifican el calculo

    renderGrafica(tipoDestino);//se llama a la función que contiene los datos del mes de la moneda

}

