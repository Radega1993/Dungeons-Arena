
import React from 'react';
import Swal from 'sweetalert2';

import { useForm } from '../../hooks/useForm';

export const DadosUno = () => {


  let [ formRegisterValues, handleRegisterInputChange ] = useForm({
    aUno: '',
    aDos: '',
    aTres: '',
    nUno: '',
    nDos: '',
    nTres: '',
    rUno: '',
    rDos: '',
    rTres: '',
    lUno: '',
    lDos: '',
    lTres: '',
  });


  let {
    aUno,
    aDos,
    aTres,
    nUno,
    nDos,
    nTres,
    rUno,
    rDos,
    rTres,
    lUno,
    lDos,
    lTres,
   } = formRegisterValues;

   let resultado = 0;


  const handleRegister = ( e ) => {
    e.preventDefault();
    aUno = Number(aUno)
    aDos = Number(aDos)
    aTres = Number(aTres)
    nUno = Number(nUno)
    nDos = Number(nDos)
    nTres = Number(nTres)
    rUno = Number(rUno)
    rDos = Number(rDos)
    rTres = Number(rTres)
    lUno = Number(lUno)
    lDos = Number(lDos)
    lTres = Number(lTres)

    // AMARILLOS
    if (aUno >= 0 && aUno <= 6) {
      if (aUno === 1 || aUno === 6){
        resultado = resultado + 0;
      }
      if (aUno >= 2 && aUno <= 5){
        resultado = resultado + 1;
      }
    }

    if (aDos >= 0 && aDos <= 6) {
      if (aDos === 1 || aDos === 6){
        resultado = resultado + 0;
      }
      if (aDos >= 2 && aDos <= 5){
        resultado = resultado + 1;
      }
    }

    if (aTres >= 0 && aTres <= 6) {
      if (aTres === 1 || aTres === 6){
        resultado = resultado + 0;
      }
      if (aTres >= 2 && aTres <= 5){
        resultado = resultado + 1;
      }
    }

    // NARANJA
    if (nUno >= 0 && nUno <= 6) {

      if (nUno === 5 || nUno === 3){
        resultado = resultado + 2;
      } else {
        resultado = resultado + 1;
      }
    }

    if (nDos >= 0 && nDos <= 6) {
      if (nDos === 5 || nDos === 3){
        resultado = resultado + 2;
      } else {
        resultado = resultado + 1;
      }
    }

    if (nTres >= 0 && nTres <= 6) {
      if ( nTres === 5 || nTres === 3 ){
        resultado = resultado+2;
      } else {
        resultado = resultado+1;
      }
    }

    // ROJO
    if (rUno >= 0 && rUno <= 6) {

      if (rUno === 1){
        resultado = resultado + 0;
      } 
      if (rUno === 4) {
        resultado = resultado + 1;
      }
      if (rUno === 2 || rUno === 3|| rUno === 6) {
        resultado = resultado + 2;
      }
      if (rUno === 5) {
        resultado = resultado + 3;
      }
    }

    if (rDos >= 0 && rDos <= 6) {
      if (rDos === 1){
        resultado = resultado + 0;
      } 
      if (rDos === 4) {
        resultado = resultado + 1;
      }
      if (rDos === 2 || rDos === 3|| rDos === 6) {
        resultado = resultado + 2;
      }
      if (rDos === 5) {
        resultado = resultado + 3;
      }
    }

    if (rTres >= 0 && rTres <= 6) {
      if (rTres === 1){
        resultado = resultado + 0;
      } 
      if (rTres === 4) {
        resultado = resultado + 1;
      }
      if (rTres === 2 || rTres === 3|| rTres === 6) {
        resultado = resultado + 2;
      }
      if (rTres === 5) {
        resultado = resultado + 3;
      }
    }

    // LILA
    if (lUno >= 0 && lUno <= 6) {

      if (lUno === 2 || lUno === 6){
        resultado = resultado + 3;
      } else {
        resultado = resultado + 2;
      }
    }

    if (lDos >= 0 && lDos <= 6) {
      if (lDos === 2 || lDos === 6){
        resultado = resultado + 3;
      } else {
        resultado = resultado + 2;
      }
    }

    if (lTres >= 0 && lTres <= 6) {
      if (lTres === 2 || lTres === 6){
        resultado = resultado + 3;
      } else {
        resultado = resultado + 2;
      }
    }

    Swal.fire('Bien hecho', `Tu daño es: ${resultado}`, 'success');
  }

    return (
      <div>
      <div className="container login__container animate__animated animate__fadeInLeft">
          <div className="row">

              <div className="col-md-12 login__form-2">
                  <h3>Calculadora de daño</h3>
                  <form onSubmit={ handleRegister }>
                    <div className="form-row">
                      <h3>Amarillos</h3>
                      <div className="form-group col">
                        <input
                            type="number"
                            className="form-control login__yellow_inputs"
                            placeholder="Amarillo1"
                            name="aUno"
                            value={ aUno }
                            onChange={ handleRegisterInputChange }
                        />
                      </div>
                      <div className="form-group col">
                          <input
                              type="number"
                              className="form-control login__yellow_inputs"
                              placeholder="Amarillo2"
                              name="aDos"
                              value={ aDos }
                              onChange={ handleRegisterInputChange }
                          />
                      </div>
                      <div className="form-group col">
                          <input
                              type="number"
                              className="form-control login__yellow_inputs"
                              placeholder="Amarillo3"
                              name="aTres"
                              value={ aTres }
                              onChange={ handleRegisterInputChange }
                          />
                      </div>
                    </div>

                    <div className="form-row">
                      <h3>Naranja</h3>
                      <div className="form-group col">
                        <input
                            type="number"
                            className="form-control login__yellow_inputs"
                            placeholder="Naranja3"
                            name="nUno"
                            value={ nUno }
                            onChange={ handleRegisterInputChange }
                        />
                      </div>
                      <div className="form-group col">
                          <input
                              type="number"
                              className="form-control login__yellow_inputs"
                              placeholder="Naranja3"
                              name="nDos"
                              value={ nDos }
                              onChange={ handleRegisterInputChange }
                          />
                      </div>
                      <div className="form-group col">
                          <input
                              type="number"
                              className="form-control login__yellow_inputs"
                              placeholder="Naranja3"
                              name="nTres"
                              value={ nTres }
                              onChange={ handleRegisterInputChange }
                          />
                      </div>
                    </div>

                    <div className="form-row">
                      <h3>Rojo</h3>
                      <div className="form-group col">
                        <input
                            type="number"
                            className="form-control login__yellow_inputs"
                            placeholder="Rojo1"
                            name="rUno"
                            value={ rUno }
                            onChange={ handleRegisterInputChange }
                        />
                      </div>
                      <div className="form-group col">
                          <input
                              type="number"
                              className="form-control login__yellow_inputs"
                              placeholder="Rojo2"
                              name="rDos"
                              value={ rDos }
                              onChange={ handleRegisterInputChange }
                          />
                      </div>
                      <div className="form-group col">
                          <input
                              type="number"
                              className="form-control login__yellow_inputs"
                              placeholder="Rojo3"
                              name="rTres"
                              value={ rTres }
                              onChange={ handleRegisterInputChange }
                          />
                      </div>
                    </div>

                    <div className="form-row">
                      <h3>Lila</h3>
                      <div className="form-group col">
                        <input
                            type="number"
                            className="form-control login__yellow_inputs"
                            placeholder="Lila1"
                            name="lUno"
                            value={ lUno }
                            onChange={ handleRegisterInputChange }
                        />
                      </div>
                      <div className="form-group col">
                          <input
                              type="number"
                              className="form-control login__yellow_inputs"
                              placeholder="Lila2"
                              name="lDos"
                              value={ lDos }
                              onChange={ handleRegisterInputChange }
                          />
                      </div>
                      <div className="form-group col">
                          <input
                              type="number"
                              className="form-control login__yellow_inputs"
                              placeholder="Lila3"
                              name="lTres"
                              value={ lTres }
                              onChange={ handleRegisterInputChange }
                          />
                      </div>
                    </div>

                    <br/>
                    <div className="form-group text-center">
                        <input
                            type="submit"
                            className="btnSubmit login__yellow_inputs"
                            value="Calcular Daño" />
                    </div>
                    
                </form>
              </div>
          </div>
      </div>
    </div>
  )
}

