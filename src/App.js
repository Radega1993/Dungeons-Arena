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

    <div className="App">
      <div className="container login__container animate__animated animate__fadeInLeft">
        <div className="row">

          <div className="col-md-12 login__form-2">
            <h1>Calculadora de daño</h1>
            <form onSubmit={ handleRegister }>
              <div className="form-row">
                <div className="form-group col">
                  <select required className="form-control login__yellow_inputs" name="rLevel" defaultValue={'DEFAULT'} onChange={handleLevel}>
                    <option value="DEFAULT" disabled>Nivel*</option>
                    <option value="1">1-3</option>
                    <option value="4">4-7</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
        {rLevel === "1" ? (
          <DadosUno/>
        ) : rLevel === "4" ? (
          <DadosCuatro/>
        ) : (
          <h2>Escoge Nivel</h2>
        )}
        
    </div>
  );
}

export default App;
