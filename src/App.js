import './App.css';
import { DadosUno } from './components/dados/DadosUno';
import { DadosCuatro } from './components/dados/DadosCuatro';
import Swal from 'sweetalert2';
import { useForm } from './hooks/useForm';


function App() {

  const [ formLevel, handleLevel ] = useForm({
    rLevel: '',
  });


  const {
    rLevel,
   } = formLevel;

   const handleRegister = ( e ) => {
    e.preventDefault();
    Swal.fire('Bien hecho', 'Tu daño es:', 'success');
  }


  return (

    <div className="container">
      <div className=" login__container d-flex justify-content-center">
        <div className="row">

          <div className="col-md-12 login__form-2">
            <h1 className='text-center mt-5'>Calculadora de daño</h1>
            <div className='d-flex aligns-items-center justify-content-center'>
              <form onSubmit={ handleRegister }>
                <div className="form-row">
                  <div className="form-group mt-4 col">
                    <h2 className='text-center'>Escoge Nivel</h2>
                    <select required className="form-control className='text-center'" name="rLevel" defaultValue={'DEFAULT'} onChange={handleLevel}>
                      <option className='text-center' value="DEFAULT" disabled>Nivel*</option>
                      <option className='text-center' value="1">1-3</option>
                      <option className='text-center' value="4">4-7</option>
                    </select>
                    {rLevel === "1" ? (
                      <DadosUno/>
                    ) : rLevel === "4" ? (
                      <DadosCuatro/>
                    ) : (
                      <h3 className='text-center'>Nivel no escogido</h3>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
