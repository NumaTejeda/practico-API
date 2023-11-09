import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function Grafico({ data }) {

  const hourlyData = data?.hourly || {}; //Si data no existe devuleve un objeto vacio

  /*Crea un array de longitud 9 porque son 9 las horas que muestro cada 2hs, el segundo aprametro es un funcion que toma
   que se llama por cada elemento del array, en este caso recibe dos argumentos, el valor del elemento que no
   se utiliza y el index que es utilizado para calcular las horas.
  */
  const dataObject = Array.from({ length: 9 }, (_, index) => {
    const hour = index * 2 + 7;
    const temp = hourlyData.temperature_2m && hourlyData.temperature_2m[hour]; //Si no existe devuleve undefined
    const lluvia = hourlyData.precipitation_probability && hourlyData.precipitation_probability[hour];

    return {
      hora: `${hour.toString().padStart(2, '0')}:00`, //padStart verifica que la longitud se de 2, si no lo es agrega un cero.
      temp,
      lluvia: lluvia ? lluvia / 2 : 0, //Divido la probabilidad de lluvia por 2 para mantener laproporcion del grafico
    };
  });


  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={700}
        height={300}
        data={dataObject}
        margin={{
          top: 30,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="0.5 10" />
        <XAxis dataKey="hora" tick={{ fill: 'white' }}/>
        <YAxis dataKey="" tick={{ fill: 'white'}}/>
        <Tooltip />
        <Legend />
        <Bar dataKey="temp" fill="blueViolet" activeBar={<Rectangle fill="red" stroke="blue" />} />
        <Bar dataKey="lluvia" fill="blue" activeBar={<Rectangle fill="gold" stroke="purple" />} />
      </BarChart>
    </ResponsiveContainer>
  );
}
export default Grafico;