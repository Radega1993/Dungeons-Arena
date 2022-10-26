
import React from 'react';
import Swal from 'sweetalert2';

import { useForm } from '../../hooks/useForm';

export const DadosUno = () => {


  let [ formRegisterValues, handleRegisterInputChange ] = useForm({
    aUno: '',
    aDos: '',
    aTres: '',
    aCuatro: '',
    aCinco: '',
    nUno: '',
    nDos: '',
    nTres: '',
    nCuatro: '',
    nCinco: '',
    rUno: '',
    rDos: '',
    rTres: '',
    rCuatro: '',
    rCinco: '',
    lUno: '',
    lDos: '',
    lTres: '',
    lCuatro: '',
    lCinco: '',
  });


  let {
    aUno,
    aDos,
    aTres,
    aCuatro,
    aCinco,
    nUno,
    nDos,
    nTres,
    nCuatro,
    nCinco,
    rUno,
    rDos,
    rTres,
    rCuatro,
    rCinco,
    lUno,
    lDos,
    lTres,
    lCuatro,
    lCinco,
   } = formRegisterValues;

   let resultado = 0;


  const handleRegister = ( e ) => {
    e.preventDefault();
    resultado = 0;

    // AMARILLOS
    if (aUno && Number(aUno) >= 0 && Number(aUno) <= 6) {
      if (Number(aUno) === 1 || Number(aUno) === 6){
        resultado = resultado + 0;
      } 
      if (Number(aUno) ===2 || Number(aUno) === 3 || Number(aUno) === 4 || Number(aUno) === 5){
        resultado = resultado + 1;
      }
    }
    
    if (aDos && Number(aDos) >= 0 && Number(aDos) <= 6) {
      if (Number(aDos) === 1 || Number(aDos) === 6){
        resultado = resultado + 0;
      } 
      if (Number(aDos) ===2 || Number(aDos) === 3 || Number(aDos) === 4 || Number(aDos) === 5){
        resultado = resultado + 1;
      }
    }

    if (aTres && Number(aTres) >= 0 && Number(aTres) <= 6) {
      if (Number(aTres) === 1 || Number(aTres) === 6){
        resultado = resultado + 0;
      } 
      if (Number(aTres) ===2 || Number(aTres) === 3 || Number(aTres) === 4 || Number(aTres) === 5){
        resultado = resultado + 1;
      }
    }

    if (aCuatro && Number(aCuatro) >= 0 && Number(aCuatro) <= 6) {
      if (Number(aCuatro) === 1 || Number(aCuatro) === 6){
        resultado = resultado + 0;
      } 
      if (Number(aCuatro) ===2 || Number(aCuatro) === 3 || Number(aCuatro) === 4 || Number(aCuatro) === 5){
        resultado = resultado + 1;
      }
    }

    if (aCinco && Number(aCinco) >= 0 && Number(aCinco) <= 6) {
      if (Number(aCinco) === 1 || Number(aCinco) === 6){
        resultado = resultado + 0;
      } 
      if (Number(aCinco) ===2 || Number(aCinco) === 3 || Number(aCinco) === 4 || Number(aCinco) === 5){
        resultado = resultado + 1;
      }
    }

    // NARANJA
    if (nUno && Number(nUno) >= 0 && Number(nUno) <= 6) {
      if (Number(nUno) === 5 || Number(nUno) === 3){
        resultado = resultado + 2;
      } 
      if (Number(nUno) ===1 || Number(nUno) === 2 || Number(nUno) === 4 || Number(nUno) === 6){
        resultado = resultado + 1;
      }
    }

    if (nDos && Number(nDos) >= 0 && Number(nDos) <= 6) {
      if (Number(nDos) === 5 || Number(nDos) === 3){
        resultado = resultado + 2;
      } 
      if (Number(nDos) ===1 || Number(nDos) === 2 || Number(nDos) === 4 || Number(nDos) === 6){
        resultado = resultado + 1;
      }
    }
    
    if (nTres && Number(nTres) >= 0 && Number(nTres) <= 6) {
      if (Number(nTres) === 5 || Number(nTres) === 3){
        resultado = resultado + 2;
      } 
      if (Number(nTres) ===1 || Number(nTres) === 2 || Number(nTres) === 4 || Number(nTres) === 6){
        resultado = resultado + 1;
      }
    }

    if (nCuatro && Number(nCuatro) >= 0 && Number(nCuatro) <= 6) {
      if (Number(nCuatro) === 5 || Number(nCuatro) === 3){
        resultado = resultado + 2;
      } 
      if (Number(nCuatro) ===1 || Number(nCuatro) === 2 || Number(nCuatro) === 4 || Number(nCuatro) === 6){
        resultado = resultado + 1;
      }
    }

    if (nCinco && Number(nCinco) >= 0 && Number(nCinco) <= 6) {
      if (Number(nCinco) === 5 || Number(nCinco) === 3){
        resultado = resultado + 2;
      } 
      if (Number(nCinco) ===1 || Number(nCinco) === 2 || Number(nCinco) === 4 || Number(nCinco) === 6){
        resultado = resultado + 1;
      }
    }

    // ROJO
    if (rUno && Number(rUno) >= 0 && Number(rUno) <= 6) {
      if (Number(rUno) === 1){
        resultado = resultado + 0;
      } 
      if (Number(rUno) === 4) {
        resultado = resultado + 1;
      }
      if (Number(rUno) === 2 || Number(rUno) === 3|| Number(rUno) === 6) {
        resultado = resultado + 2;
      }
      if (Number(rUno) === 5) {
        resultado = resultado + 3;
      }
    }

    if (rDos && Number(rDos) >= 0 && Number(rDos) <= 6) {
      if (Number(rDos) === 1){
        resultado = resultado + 0;
      } 
      if (Number(rDos) === 4) {
        resultado = resultado + 1;
      }
      if (Number(rDos) === 2 || Number(rDos) === 3|| Number(rDos) === 6) {
        resultado = resultado + 2;
      }
      if (rDos === 5) {
        resultado = resultado + 3;
      }
    }

    if (rTres && Number(rTres) >= 0 && Number(rTres) <= 6) {
      if (Number(rTres) === 1){
        resultado = resultado + 0;
      } 
      if (Number(rTres) === 4) {
        resultado = resultado + 1;
      }
      if (Number(rTres) === 2 || Number(rTres) === 3|| Number(rTres) === 6) {
        resultado = resultado + 2;
      }
      if (Number(rTres) === 5) {
        resultado = resultado + 3;
      }
    }

    if (rCuatro && Number(rCuatro) >= 0 && Number(rCuatro) <= 6) {
      if (Number(rCuatro) === 1){
        resultado = resultado + 0;
      } 
      if (Number(rCuatro) === 4) {
        resultado = resultado + 1;
      }
      if (Number(rCuatro) === 2 || Number(rCuatro) === 3|| Number(rCuatro) === 6) {
        resultado = resultado + 2;
      }
      if (Number(rCuatro) === 5) {
        resultado = resultado + 3;
      }
    }

    if (rCinco && Number(rCinco) >= 0 && Number(rCinco) <= 6) {
      if (Number(rCinco) === 1){
        resultado = resultado + 0;
      } 
      if (Number(rCinco) === 4) {
        resultado = resultado + 1;
      }
      if (Number(rCinco) === 2 || Number(rCinco) === 3|| Number(rCinco) === 6) {
        resultado = resultado + 2;
      }
      if (Number(rCinco) === 5) {
        resultado = resultado + 3;
      }
    }

    // LILA
    if (lUno && Number(lUno) >= 0 && Number(lUno) <= 6) {
      if (Number(lUno) === 2 || Number(lUno) === 6){
        resultado = resultado + 3;
      } 
      if (Number(lUno) !== 2 || Number(lUno) !== 6){
        resultado = resultado + 2;
      }
    }

    if (lDos && Number(lDos) >= 0 && Number(lDos) <= 6) {
      if (Number(lDos) === 2 || Number(lDos) === 6){
        resultado = resultado + 3;
      } 
      if (Number(lDos) !== 2 || Number(lDos) !== 6){
        resultado = resultado + 2;
      }
    }

    if (lTres && Number(lTres) >= 0 && Number(lTres) <= 6) {
      if (Number(lTres) === 2 || Number(lTres) === 6){
        resultado = resultado + 3;
      }
      if (Number(lTres) !== 2 || Number(lTres) !== 6){
        resultado = resultado + 2;
      }
    }

    if (lCuatro && Number(lCuatro) >= 0 && Number(lCuatro) <= 6) {
      if (Number(lCuatro) === 2 || Number(lCuatro) === 6){
        resultado = resultado + 3;
      }
      if (Number(lCuatro) !== 2 || Number(lCuatro) !== 6){
        resultado = resultado + 2;
      }
    }

    if (lCinco && Number(lCinco) >= 0 && Number(lCinco) <= 6) {
      if (Number(lCinco) === 2 || Number(lCinco) === 6){
        resultado = resultado + 3;
      }
      if (Number(lCinco) !== 2 || Number(lCinco) !== 6){
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
                      <div className="form-group col">
                          <input
                              type="number"
                              className="form-control login__yellow_inputs"
                              placeholder="Amarillo4"
                              name="aCuatro"
                              value={ aCuatro }
                              onChange={ handleRegisterInputChange }
                          />
                      </div>
                      <div className="form-group col">
                          <input
                              type="number"
                              className="form-control login__yellow_inputs"
                              placeholder="Amarillo5"
                              name="aCinco"
                              value={ aCinco }
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
                            placeholder="Naranja1"
                            name="nUno"
                            value={ nUno }
                            onChange={ handleRegisterInputChange }
                        />
                      </div>
                      <div className="form-group col">
                          <input
                              type="number"
                              className="form-control login__yellow_inputs"
                              placeholder="Naranja1"
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
                      <div className="form-group col">
                          <input
                              type="number"
                              className="form-control login__yellow_inputs"
                              placeholder="Naranja4"
                              name="nCuatro"
                              value={ nCuatro }
                              onChange={ handleRegisterInputChange }
                          />
                      </div>
                      <div className="form-group col">
                          <input
                              type="number"
                              className="form-control login__yellow_inputs"
                              placeholder="Naranja5"
                              name="nCinco"
                              value={ nCinco }
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
                      <div className="form-group col">
                          <input
                              type="number"
                              className="form-control login__yellow_inputs"
                              placeholder="Rojo4"
                              name="rCuatro"
                              value={ rCuatro }
                              onChange={ handleRegisterInputChange }
                          />
                      </div>
                      <div className="form-group col">
                          <input
                              type="number"
                              className="form-control login__yellow_inputs"
                              placeholder="Rojo5"
                              name="rCinco"
                              value={ rCinco }
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
                      <div className="form-group col">
                          <input
                              type="number"
                              className="form-control login__yellow_inputs"
                              placeholder="Lila4"
                              name="lCuatro"
                              value={ lCuatro }
                              onChange={ handleRegisterInputChange }
                          />
                      </div>
                      <div className="form-group col">
                          <input
                              type="number"
                              className="form-control login__yellow_inputs"
                              placeholder="Lila4"
                              name="lCinco"
                              value={ lCinco }
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

