import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom'; 
import { Link } from 'react-router-dom';
import './LoginPage.css';
import ShowPassword from './assets/ShowPassword.png';
import Info from './assets/Info.png'
import GoBack from '../../assets/GoBack.png'

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // const handleFormSubmit = (event) => {
  //   event.preventDefault();
  //   history.push('/main_page'); 
  // };
  

  return (
    <div className="LoginPage">
      <div className="ImagePart">
        <a href = ""><img id = "go-back" src = {GoBack} alt = "go-back"></img></a>
        <h1 className="ImagePartText">заповніть вхід до облікового запису</h1>
      </div>
      <div id = "FormPart">
        <form>
          <label>
            Електронна пошта або мобільний номер
            <input type="email" />
            <small>
              By entering your mobile number and one-time code sign-in option, you agree to receive a one-time
              verification code via SMS from IKEA. Message and data rates may apply.
            </small>
            <a href=""><small>More info about Privacy Policy</small></a>
          </label>
            
          <label>
              Пароль
              <div className='password-input'>

                  <input id = "password-input-form" type={showPassword ? "text" : "password"} />
                  <img id = 'show-password' src={ShowPassword} alt="show-password" onClick={handleShowPassword} />
              </div>
              <a href = ""><small id = "forgot-password">Забули свій пароль?</small></a>
          </label>
          

          <div id = "save-data-div">
            <input type="checkbox" id="save-data" name="save-data" value="Зберегти інформацію"></input>
            <label id = "save-label" for="save-data">Зберегти інформацію </label><br></br>
            <img id = "info-button" src = {Info} alt="info-button" />
          </div>

          <button type="submit" id="continue-button">ПРОДОВЖИТИ</button>
        
        </form>

      <small id = "create-acc">У вас ще немає облікового запису? Створіть його:</small>
      <Link to="/registration">
        <button type = "button" id ="create-acc-button">створити аккаунт</button>
      </Link>
    </div>
    </div>
  );
}

export default LoginPage;