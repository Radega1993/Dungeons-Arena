
import React from 'react';
import Swal from 'sweetalert2';

import { useForm } from '../../hooks/useForm';

export const DadosCuatro = () => {


  let [ formRegisterValues, handleRegisterInputChange ] = useForm({
    lUno: '',
    lDos: '',
    lTres: '',
    lCuatro: '',
    lCinco: '',
    vUno: '',
    vDos: '',
    vTres: '',
    vCuatro: '',
    vCinco: '',
    mUno: '',
    mDos: '',
    mTres: '',
    mCuatro: '',
    mCinco: '',
    gUno: '',
    gDos: '',
    gTres: '',
    gCuatro: '',
    gCinco: '',
    rUno: '',
    rDos: '',
    rTres: '',
    rCuatro: '',
    rCinco: '',
  });


  let {
    lUno,
    lDos,
    lTres,
    lCuatro,
    lCinco,
    vUno,
    vDos,
    vTres,
    vCuatro,
    vCinco,
    mUno,
    mDos,
    mTres,
    mCuatro,
    mCinco,
    gUno,
    gDos,
    gTres,
    gCuatro,
    gCinco,
    rUno,
    rDos,
    rTres,
    rCuatro,
    rCinco,
   } = formRegisterValues;

   let resultado = 0;


  const handleRegister = ( e ) => {
    e.preventDefault();
    resultado = 0;

    // LILA
    if (lUno && Number(lUno) >= 0 && Number(lUno) <= 6) {
      if (Number(lUno) === 2 || Number(lUno) === 6){
        resultado = resultado + 3;
      } 
      if (Number(lUno) === 1 || Number(lUno) === 3 || Number(lUno) === 4 || Number(lUno) === 5){
        resultado = resultado + 2;
      }
    }
    
    if (lDos && Number(lDos) >= 0 && Number(lDos) <= 6) {
      if (Number(lDos) === 2 || Number(lDos) === 6){
        resultado = resultado + 3;
      } 
      if (Number(lDos) === 1 || Number(lDos) === 3 || Number(lDos) === 4 || Number(lDos) === 5){
        resultado = resultado + 2;
      }
    }

    if (lTres && Number(lTres) >= 0 && Number(lTres) <= 6) {
      if (Number(lTres) === 2 || Number(lTres) === 6){
        resultado = resultado + 3;
      } 
      if (Number(lTres) === 1 || Number(lTres) === 3 || Number(lTres) === 4 || Number(lTres) === 5){
        resultado = resultado + 2;
      }
    }

    if (lCuatro && Number(lCuatro) >= 0 && Number(lCuatro) <= 6) {
      if (Number(lCuatro) === 2 || Number(lCuatro) === 6){
        resultado = resultado + 3;
      } 
      if (Number(lCuatro) === 1 || Number(lCuatro) === 3 || Number(lCuatro) === 4 || Number(lCuatro) === 5){
        resultado = resultado + 2;
      }
    }

    if (lCinco && Number(lCinco) >= 0 && Number(lCinco) <= 6) {
      if (Number(lCinco) === 2 || Number(lCinco) === 6){
        resultado = resultado + 3;
      } 
      if (Number(lCinco) === 1 || Number(lCinco) === 3 || Number(lCinco) === 4 || Number(lCinco) === 5){
        resultado = resultado + 2;
      }
    }

    // Violeta
    if (vUno && Number(vUno) >= 0 && Number(vUno) <= 6) {
      if (Number(vUno) === 5 || Number(vUno) === 6){
        resultado = resultado + 4;
      } 
      if (Number(vUno) === 4 || Number(vUno) === 3){
        resultado = resultado + 2;
      } 
      if (Number(vUno) === 1 || Number(vUno) === 2){
        resultado = resultado + 0;
      } 
    }

    if (vDos && Number(vDos) >= 0 && Number(vDos) <= 6) {
      if (Number(vDos) === 5 || Number(vDos) === 6){
        resultado = resultado + 4;
      } 
      if (Number(vDos) === 4 || Number(vDos) === 3){
        resultado = resultado + 2;
      } 
      if (Number(vDos) === 1 || Number(vDos) === 2){
        resultado = resultado + 0;
      } 
    }
    
    if (vTres && Number(vTres) >= 0 && Number(vTres) <= 6) {
      if (Number(vTres) === 5 || Number(vTres) === 6){
        resultado = resultado + 4;
      } 
      if (Number(vTres) === 4 || Number(vTres) === 3){
        resultado = resultado + 2;
      } 
      if (Number(vTres) === 1 || Number(vTres) === 2){
        resultado = resultado + 0;
      } 
    }

    if (vCuatro && Number(vCuatro) >= 0 && Number(vCuatro) <= 6) {
      if (Number(vCuatro) === 5 || Number(vCuatro) === 6){
        resultado = resultado + 4;
      } 
      if (Number(vCuatro) === 4 || Number(vCuatro) === 3){
        resultado = resultado + 2;
      } 
      if (Number(vCuatro) === 1 || Number(vCuatro) === 2){
        resultado = resultado + 0;
      } 
    }

    if (vCinco && Number(vCinco) >= 0 && Number(vCinco) <= 6) {
      if (Number(vCinco) === 5 || Number(vCinco) === 6){
        resultado = resultado + 4;
      } 
      if (Number(vCinco) === 4 || Number(vCinco) === 3){
        resultado = resultado + 2;
      } 
      if (Number(vCinco) === 1 || Number(vCinco) === 2){
        resultado = resultado + 0;
      } 
    }

    // MAGENTA
    if (mUno && Number(mUno) >= 0 && Number(mUno) <= 6) {
      if (Number(mUno) === 1 || Number(mUno) === 6){
        resultado = resultado + 6;
      } 
      if (Number(mUno) === 2 || Number(mUno) === 3|| Number(mUno) === 4 || Number(mUno) === 5) {
        resultado = resultado + 2;
      }
    }

    if (mDos && Number(mDos) >= 0 && Number(mDos) <= 6) {
      if (Number(mDos) === 1 || Number(mDos) === 6){
        resultado = resultado + 6;
      } 
      if (Number(mDos) === 2 || Number(mDos) === 3|| Number(mDos) === 4 || Number(mDos) === 5) {
        resultado = resultado + 2;
      }
    }

    if (mTres && Number(mTres) >= 0 && Number(mTres) <= 6) {
      if (Number(mTres) === 1 || Number(mTres) === 6){
        resultado = resultado + 6;
      } 
      if (Number(mTres) === 2 || Number(mTres) === 3|| Number(mTres) === 4 || Number(mTres) === 5) {
        resultado = resultado + 2;
      }
    }

    if (mCuatro && Number(mCuatro) >= 0 && Number(mCuatro) <= 6) {
      if (Number(mCuatro) === 1 || Number(mCuatro) === 6){
        resultado = resultado + 6;
      } 
      if (Number(mCuatro) === 2 || Number(mCuatro) === 3|| Number(mCuatro) === 4 || Number(mCuatro) === 5) {
        resultado = resultado + 2;
      }
    }

    if (mCinco && Number(mCinco) >= 0 && Number(mCinco) <= 6) {
      if (Number(mCinco) === 1 || Number(mCinco) === 6){
        resultado = resultado + 6;
      } 
      if (Number(mCinco) === 2 || Number(mCinco) === 3|| Number(mCinco) === 4 || Number(mCinco) === 5) {
        resultado = resultado + 2;
      }
    }

    // GRANATE
    if (gUno && Number(gUno) >= 0 && Number(gUno) <= 6) {
      if (Number(gUno) === 1 || Number(gUno) === 2 || Number(gUno) === 3){
        resultado = resultado + 3;
      } 
      if (Number(gUno) === 4 || Number(gUno) === 5){
        resultado = resultado + 5;
      }
      if (Number(gUno) === 6){
        resultado = resultado + 0;
      }
    }

    if (gDos && Number(gDos) >= 0 && Number(gDos) <= 6) {
      if (Number(gDos) === 1 || Number(gDos) === 2 || Number(gDos) === 3){
        resultado = resultado + 3;
      } 
      if (Number(gDos) === 4 || Number(gDos) === 5){
        resultado = resultado + 5;
      }
      if (Number(gDos) === 6){
        resultado = resultado + 0;
      }
    }

    if (gTres && Number(gTres) >= 0 && Number(gTres) <= 6) {
      if (Number(gTres) === 1 || Number(gTres) === 2 || Number(gTres) === 3){
        resultado = resultado + 3;
      } 
      if (Number(gTres) === 4 || Number(gTres) === 5){
        resultado = resultado + 5;
      }
      if (Number(gTres) === 6){
        resultado = resultado + 0;
      }
    }

    if (gCuatro && Number(gCuatro) >= 0 && Number(gCuatro) <= 6) {
      if (Number(gCuatro) === 1 || Number(gCuatro) === 2 || Number(gCuatro) === 3){
        resultado = resultado + 3;
      } 
      if (Number(gCuatro) === 4 || Number(gCuatro) === 5){
        resultado = resultado + 5;
      }
      if (Number(gCuatro) === 6){
        resultado = resultado + 0;
      }
    }

    if (gCinco && Number(gCinco) >= 0 && Number(gCinco) <= 6) {
      if (Number(gCinco) === 1 || Number(gCinco) === 2 || Number(gCinco) === 3){
        resultado = resultado + 3;
      } 
      if (Number(gCinco) === 4 || Number(gCinco) === 5){
        resultado = resultado + 5;
      }
      if (Number(gCinco) === 6){
        resultado = resultado + 0;
      }
    }

    // ROSA
    if (rUno && Number(rUno) >= 0 && Number(rUno) <= 6) {
      if (Number(rUno) === 1 || Number(rUno) === 2){
        resultado = resultado + 4;
      } 
      if (Number(rUno) === 3 || Number(rUno) === 4){
        resultado = resultado + 7;
      }
      if (Number(rUno) === 5){
        resultado = resultado + 9;
      }
      if (Number(rUno) === 6){
        resultado = resultado + 10;
      }
    }

    if (rUno && Number(rUno) >= 0 && Number(rUno) <= 6) {
      if (Number(rUno) === 1 || Number(rUno) === 2){
        resultado = resultado + 4;
      } 
      if (Number(rUno) === 3 || Number(rUno) === 4){
        resultado = resultado + 7;
      }
      if (Number(rUno) === 5){
        resultado = resultado + 9;
      }
      if (Number(rUno) === 6){
        resultado = resultado + 10;
      }
    }

    if (rDos && Number(rDos) >= 0 && Number(rDos) <= 6) {
      if (Number(rDos) === 1 || Number(rDos) === 2){
        resultado = resultado + 4;
      } 
      if (Number(rDos) === 3 || Number(rDos) === 4){
        resultado = resultado + 7;
      }
      if (Number(rDos) === 5){
        resultado = resultado + 9;
      }
      if (Number(rDos) === 6){
        resultado = resultado + 10;
      }
    }

    if (rTres && Number(rTres) >= 0 && Number(rTres) <= 6) {
      if (Number(rTres) === 1 || Number(rTres) === 2){
        resultado = resultado + 4;
      } 
      if (Number(rTres) === 3 || Number(rTres) === 4){
        resultado = resultado + 7;
      }
      if (Number(rTres) === 5){
        resultado = resultado + 9;
      }
      if (Number(rTres) === 6){
        resultado = resultado + 10;
      }
    }

    if (rCuatro && Number(rCuatro) >= 0 && Number(rCuatro) <= 6) {
      if (Number(rCuatro) === 1 || Number(rCuatro) === 2){
        resultado = resultado + 4;
      } 
      if (Number(rCuatro) === 3 || Number(rCuatro) === 4){
        resultado = resultado + 7;
      }
      if (Number(rCuatro) === 5){
        resultado = resultado + 9;
      }
      if (Number(rCuatro) === 6){
        resultado = resultado + 10;
      }
    }

    if (rCinco && Number(rCinco) >= 0 && Number(rCinco) <= 6) {
      if (Number(rCinco) === 1 || Number(rCinco) === 2){
        resultado = resultado + 4;
      } 
      if (Number(rCinco) === 3 || Number(rCinco) === 4){
        resultado = resultado + 7;
      }
      if (Number(rCinco) === 5){
        resultado = resultado + 9;
      }
      if (Number(rCinco) === 6){
        resultado = resultado + 10;
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
                              placeholder="Lila5"
                              name="lCinco"
                              value={ lCinco }
                              onChange={ handleRegisterInputChange }
                          />
                      </div>
                    </div>

                    <div className="form-row">
                      <h3>Violeta</h3>
                      <div className="form-group col">
                        <input
                            type="number"
                            className="form-control login__yellow_inputs"
                            placeholder="Violeta1"
                            name="vUno"
                            value={ vUno }
                            onChange={ handleRegisterInputChange }
                        />
                      </div>
                      <div className="form-group col">
                          <input
                              type="number"
                              className="form-control login__yellow_inputs"
                              placeholder="Violeta2"
                              name="vDos"
                              value={ vDos }
                              onChange={ handleRegisterInputChange }
                          />
                      </div>
                      <div className="form-group col">
                          <input
                              type="number"
                              className="form-control login__yellow_inputs"
                              placeholder="Violeta3"
                              name="vTres"
                              value={ vTres }
                              onChange={ handleRegisterInputChange }
                          />
                      </div>
                      <div className="form-group col">
                          <input
                              type="number"
                              className="form-control login__yellow_inputs"
                              placeholder="Violeta4"
                              name="vCuatro"
                              value={ vCuatro }
                              onChange={ handleRegisterInputChange }
                          />
                      </div>
                      <div className="form-group col">
                          <input
                              type="number"
                              className="form-control login__yellow_inputs"
                              placeholder="Violeta5"
                              name="vCinco"
                              value={ vCinco }
                              onChange={ handleRegisterInputChange }
                          />
                      </div>
                    </div>

                    <div className="form-row">
                      <h3>Magenta</h3>
                      <div className="form-group col">
                        <input
                            type="number"
                            className="form-control login__yellow_inputs"
                            placeholder="Magenta1"
                            name="mUno"
                            value={ mUno }
                            onChange={ handleRegisterInputChange }
                        />
                      </div>
                      <div className="form-group col">
                          <input
                              type="number"
                              className="form-control login__yellow_inputs"
                              placeholder="Magenta2"
                              name="mDos"
                              value={ mDos }
                              onChange={ handleRegisterInputChange }
                          />
                      </div>
                      <div className="form-group col">
                          <input
                              type="number"
                              className="form-control login__yellow_inputs"
                              placeholder="Magenta3"
                              name="mTres"
                              value={ mTres }
                              onChange={ handleRegisterInputChange }
                          />
                      </div>
                      <div className="form-group col">
                          <input
                              type="number"
                              className="form-control login__yellow_inputs"
                              placeholder="Magenta4"
                              name="mCuatro"
                              value={ mCuatro }
                              onChange={ handleRegisterInputChange }
                          />
                      </div>
                      <div className="form-group col">
                          <input
                              type="number"
                              className="form-control login__yellow_inputs"
                              placeholder="Magenta5"
                              name="mCinco"
                              value={ mCinco }
                              onChange={ handleRegisterInputChange }
                          />
                      </div>
                    </div>

                    <div className="form-row">
                      <h3>Granate</h3>
                      <div className="form-group col">
                        <input
                            type="number"
                            className="form-control login__yellow_inputs"
                            placeholder="Granate1"
                            name="gUno"
                            value={ gUno }
                            onChange={ handleRegisterInputChange }
                        />
                      </div>
                      <div className="form-group col">
                          <input
                              type="number"
                              className="form-control login__yellow_inputs"
                              placeholder="Granate2"
                              name="gDos"
                              value={ gDos }
                              onChange={ handleRegisterInputChange }
                          />
                      </div>
                      <div className="form-group col">
                          <input
                              type="number"
                              className="form-control login__yellow_inputs"
                              placeholder="Granate3"
                              name="gTres"
                              value={ gTres }
                              onChange={ handleRegisterInputChange }
                          />
                      </div>
                      <div className="form-group col">
                          <input
                              type="number"
                              className="form-control login__yellow_inputs"
                              placeholder="Granate4"
                              name="gCuatro"
                              value={ gCuatro }
                              onChange={ handleRegisterInputChange }
                          />
                      </div>
                      <div className="form-group col">
                          <input
                              type="number"
                              className="form-control login__yellow_inputs"
                              placeholder="Granate5"
                              name="gCinco"
                              value={ gCinco }
                              onChange={ handleRegisterInputChange }
                          />
                      </div>
                    </div>

                    <div className="form-row">
                      <h3>Rosa</h3>
                      <div className="form-group col">
                        <input
                            type="number"
                            className="form-control login__yellow_inputs"
                            placeholder="Rosa1"
                            name="rUno"
                            value={ rUno }
                            onChange={ handleRegisterInputChange }
                        />
                      </div>
                      <div className="form-group col">
                          <input
                              type="number"
                              className="form-control login__yellow_inputs"
                              placeholder="Rosa2"
                              name="rDos"
                              value={ rDos }
                              onChange={ handleRegisterInputChange }
                          />
                      </div>
                      <div className="form-group col">
                          <input
                              type="number"
                              className="form-control login__yellow_inputs"
                              placeholder="Rosa3"
                              name="rTres"
                              value={ rTres }
                              onChange={ handleRegisterInputChange }
                          />
                      </div>
                      <div className="form-group col">
                          <input
                              type="number"
                              className="form-control login__yellow_inputs"
                              placeholder="Rosa4"
                              name="rCuatro"
                              value={ rCuatro }
                              onChange={ handleRegisterInputChange }
                          />
                      </div>
                      <div className="form-group col">
                          <input
                              type="number"
                              className="form-control login__yellow_inputs"
                              placeholder="Rosa5"
                              name="rCinco"
                              value={ rCinco }
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

