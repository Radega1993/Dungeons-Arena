
import React from 'react';
import Swal from 'sweetalert2';

import { useForm } from '../../hooks/useForm';

export const DadosCuatro = () => {


  const [ formRegisterValues, handleRegisterInputChange ] = useForm({
    rName: '',
    rSurname: '',
  });


  const {
    rName,
    rSurname,
   } = formRegisterValues;


  const handleRegister = ( e ) => {
    e.preventDefault();
    Swal.fire('Bien hecho', 'Tu daño es:', 'success');
  }

    return (
      <div>
      <div className="container login__container animate__animated animate__fadeInLeft">
          <div className="row">

              <div className="col-md-12 login__form-2">
                  <h3>Calculadora de daño</h3>
                  <form onSubmit={ handleRegister }>
                    <div className="form-row">
                      <div className="form-group col">
                        <input
                            type="text"
                            className="form-control login__yellow_inputs"
                            placeholder="Nombre*"
                            name="rName"
                            value={ rName.trim() }
                            onChange={ handleRegisterInputChange }
                        />
                      </div>
                      <div className="form-group col">
                          <input
                              type="text"
                              className="form-control login__yellow_inputs"
                              placeholder="Apellido*"
                              name="rSurname"
                              value={ rSurname.trim() }
                              onChange={ handleRegisterInputChange }
                          />
                      </div>
                    </div>

                    <div className="form-group text-center">
                        <input
                            type="submit"
                            className="btnSubmit login__yellow_inputs"
                            value="Crear cuenta" />
                    </div>
                    
                </form>
              </div>
          </div>
      </div>
    </div>
  )
}

