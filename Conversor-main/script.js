
const monedasOrigen = document.getElementById('monedasOrigen');
const monedasCambio = document.getElementById('monedasCambio');
const cantidadConvertir = document.getElementById('cantAConvertir');
const btnCalcular = document.getElementById('btnCalcular');
const cantidadCalculada = document.getElementById('cantCalculada');

//Fetch para calcular el cambio de modena. Actualizar los datos del DOM.
function calculate(){
    const monedaOri = monedasOrigen.value;
    const monedaACambiar = monedasCambio.value;
    console.log(monedasOrigen);
    console.log(monedasCambio);

    //El fetch es el que trae la api y nos deja hacer las peticiones. El then sirve para tener las respuestas. Le mandamos el valor de modenaOrigen refiriendonos a la moneda con la cual queremos hacer la conversion
    fetch(`https://api.exchangerate-api.com/v4/latest/${monedaOri}`)
    .then(res =>  res.json()).then(data =>{
        console.log(data);
    })

    // fetch(`https://criptobot-br.p.rapidapi.com/v1/exchange/binance/market/${monedasOrigen}}/${monedasCambio}`)
    // .then(res =>  res.json()).then(data =>{
    //     console.log(data);
    // })

    const options = {
        method: 'GET',
        url: 'https://criptobot-br.p.rapidapi.com/v1/exchange/binance/market/ltc/btc',
        headers: {
          'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
          'X-RapidAPI-Host': 'criptobot-br.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          console.log(response.data);
      } catch (error) {
          console.error(error);
      }

 // .then(data => {
    //     const tasa = data.rates[monedaACambiar];

    //     // cantidadCalculada.innerText = `1 ${monedasOrigen} = ${tasa} ${monedasCambio}`;
        
    //     btnCalcular.addEventListener('click', () =>{
    //         cantidadCalculada.value = (cantidadConvertir.value * tasa).toFixed();
       
    //    })
    // } );
    
}


monedasOrigen.addEventListener('change', calculate)
monedasCambio.addEventListener('change', calculate)
cantidadConvertir.addEventListener('input', calculate)
cantidadCalculada.addEventListener('input', calculate)

calculate();