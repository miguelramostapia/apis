
async function getAndCreateDataToChart() {
    try{
        let parte2="euro"
        let parte1="https://mindicador.cl/api/"
        let parte = parte1+parte2
        console.log(parte);
        const res = await fetch(parte);
        //const res = await fetch("https://api.gael.cloud/general/public/sismos");
        const undata = await res.json();
        const element = document.querySelector(".user")
        let sismos=undata.serie
       // console.log(sismos);
       // const sismos = await res.json();
        const labels = sismos.map((sismo) => {
                    return sismo.fecha;
                    });
        const data = sismos.map((sismo) => {
                    //const magnitud = sismo.Magnitud.split(" ")[0];
                      //          return Number(magnitud);
                      return sismo.valor;
                                });
        const datasets = [{
                            label: "Sismo",
                            borderColor: "rgb(255, 99, 132)",
                            data
                            }
        ];
        return { labels, datasets };

    } 
    catch (error){
        const texto_html=document.querySelector(".error")
        let texto_de_paso=""
    
        texto_de_paso=`<br><br><p>Error página con problemas de conexión. Intentar en 24 horas.</p><br><br>`
        texto_html.innerHTML=texto_de_paso
    }
}

//getAndCreateDataToChart();/*
async function renderGrafica() {
    const data = await getAndCreateDataToChart();
    const config = {
    type: "line",
    data
    };
    const myChart = document.getElementById('myChart');
    myChart.style.backgroundColor = "white";
    new Chart(myChart, config);
}

renderGrafica();

//getCambioMoneda();

/*function buscarMoneda(){
    const ctx = document.getElementById('myChart');
    new Chart(
        ctx,
        {   type: 'line',
            data:{
                labels:['10-21-2023','10-22-2023','10-23-2023','10-24-2023','10-25-2023'],
                datasets:[{
                    label:'numero de votos',
                    data:[12,19,3,5,2,3],
                    borderwidth:1
                }]
            },
            options:{
                scales:{
                    y:{beginAtZero:true}
                }
            }
        }
    );
}*/