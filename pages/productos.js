
const Productos = ({status, body}) => {

   console.log(status, body)

   return(
      <main className='productos-page'>
         <table>
            <thead>
               <tr>
                  <th>Codigo</th>
                  <th>Nombre</th>
                  <th>Creado el:</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td></td>
                  <td></td>
                  <td></td>
               </tr>
            </tbody>
         </table>
      </main>
   )
}

export async function getServerSideProps(ctx) {
   const results = await fetch('http://localhost:3000/api/productos')

   return {
      props: {
         status: results.status,
         body: await results.json()
      },
   }
}

export default Productos;
