import React from 'react';
import ReactDOM from 'react-dom/client';

const MartianLogin = () => {
  return (
    <div className="container">
      <div className="left-panel">
        <div className="stars">
          <div className="star" style={{ top: '15%', left: '18%', width: '3px', height: '3px' }}></div>
          <div className="star" style={{ top: '12%', left: '75%', width: '2px', height: '2px' }}></div>
          <div className="star" style={{ top: '30%', left: '88%', width: '3px', height: '3px' }}></div>
          <div className="star" style={{ top: '48%', left: '8%', width: '3px', height: '3px' }}></div>
          <div className="star" style={{ top: '75%', left: '12%', width: '2px', height: '2px' }}></div>
          <div className="star" style={{ top: '88%', left: '35%', width: '3px', height: '3px' }}></div>
          <div className="star" style={{ top: '80%', left: '70%', width: '2px', height: '2px' }}></div>
          <div className="star" style={{ top: '55%', left: '92%', width: '2px', height: '2px' }}></div>
        </div>
        <div className="streak" style={{ top: '22%', right: '20px' }}></div>
        <div className="streak" style={{ top: '26%', right: '15px', width: '60px', opacity: 0.8 }}></div>
        <div className="planet">
          <div className="cloud-1"></div>
          <div className="cloud-2"></div>
        </div>
        <h1 className="title">M A R T I A N</h1>
      </div>
      <div className="right-panel">
        <form className="login-form" aria-label="Login form">
          <div className="form-group">
            <input type="text" id="username" name="username" placeholder=" " required />
            <label htmlFor="username">Username</label>
          </div>
          <div className="form-group">
            <input type="password" id="password" name="password" placeholder=" " required />
            <label htmlFor="password">Password</label>
          </div>
          <div className="button-group">
            <button type="submit">Sign In</button>
            <button type="button">Sign Up</button>
          </div>
          <a href="#" className="forgot-password">Forgot Password?</a>
        </form>
        <div className="bottom-circle"></div>
      </div>
    </div>
  );
};

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400&display=swap');

  :root {
    --left-panel-bg: linear-gradient(155deg, #4c3a62, #2c223d);
    --right-panel-bg: #a96a6d;
    --planet-color: #e07a5f;
    --planet-shadow: #c86b53;
    --text-primary: rgba(255, 255, 255, 0.9);
    --text-secondary: rgba(255, 255, 255, 0.6);
    --border-color: rgba(255, 255, 255, 0.4);
    --button-hover-bg: rgba(255, 255, 255, 0.08);
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    background: linear-gradient(45deg, #3a3153, #2c283e);
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    color: var(--text-primary);
  }

  .container {
    width: 800px;
    max-width: 90vw;
    height: 500px;
    display: flex;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.4);
  }

  .left-panel, .right-panel {
    flex: 1;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .left-panel {
    background: var(--left-panel-bg);
    position: relative;
    overflow: hidden;
  }
  
  .planet {
    width: 200px;
    height: 200px;
    background-color: var(--planet-color);
    border-radius: 50%;
    position: relative;
    box-shadow: inset -20px -15px 40px rgba(0, 0, 0, 0.15);
    overflow: hidden;
  }

  .cloud-1, .cloud-2 {
    position: absolute;
    background-color: var(--planet-shadow);
  }

  .cloud-1 {
    width: 200px;
    height: 120px;
    top: 30px;
    left: -40px;
    border-radius: 60px;
    transform: rotate(15deg);
  }

  .cloud-2 {
    width: 150px;
    height: 80px;
    bottom: 30px;
    right: -50px;
    border-radius: 40px;
    transform: rotate(10deg);
  }
  
  .title {
    font-size: 1.2rem;
    font-weight: 200;
    letter-spacing: 12px;
    margin-top: 35px;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.85);
    padding-left: 12px;
  }

  .stars {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .star {
    position: absolute;
    background-color: white;
    border-radius: 50%;
    opacity: 0.9;
  }

  .streak {
    position: absolute;
    height: 1px;
    width: 80px;
    background: linear-gradient(to left, rgba(255, 255, 255, 0.4), transparent);
    transform: rotate(-35deg);
  }

  .right-panel {
    background-color: var(--right-panel-bg);
    position: relative;
  }

  .login-form {
    width: 100%;
    max-width: 280px;
    display: flex;
    flex-direction: column;
  }

  .form-group {
    position: relative;
    margin-bottom: 35px;
  }

  .form-group input {
    width: 100%;
    background: transparent;
    border: none;
    border-bottom: 1px solid var(--border-color);
    padding: 8px 0;
    font-size: 15px;
    color: var(--text-primary);
    outline: none;
    font-family: 'Montserrat', sans-serif;
  }
  
  .form-group label {
    position: absolute;
    top: 8px;
    left: 0;
    font-size: 15px;
    font-weight: 300;
    color: var(--text-secondary);
    pointer-events: none;
    transition: all 0.3s ease;
  }

  .form-group input:focus ~ label,
  .form-group input:not(:placeholder-shown) ~ label {
      top: -16px;
      font-size: 12px;
      color: var(--text-primary);
  }

  .form-group input:focus {
    border-bottom-color: var(--text-primary);
  }

  .button-group {
    display: flex;
    gap: 15px;
    margin-top: 10px;
    margin-bottom: 30px;
  }

  .button-group button {
    flex: 1;
    padding: 10px;
    background: transparent;
    border: 1px solid var(--border-color);
    border-radius: 4px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 300;
    cursor: pointer;
    transition: background-color 0.3s ease, border-color 0.3s ease;
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 0.5px;
  }

  .button-group button:hover {
    background-color: var(--button-hover-bg);
    border-color: rgba(255, 255, 255, 0.6);
  }

  .forgot-password {
    text-align: center;
    color: var(--text-secondary);
    text-decoration: none;
    font-size: 13px;
    font-weight: 300;
    transition: color 0.3s ease;
  }

  .forgot-password:hover {
    color: var(--text-primary);
  }
  
  .bottom-circle {
    position: absolute;
    bottom: 25px;
    width: 24px;
    height: 24px;
    background-color: #9f6365;
    border-radius: 50%;
    box-shadow: inset 0 0 5px rgba(0,0,0,0.15);
  }

  @media (max-width: 800px) {
    .container {
      flex-direction: column;
      width: 90vw;
      max-width: 400px;
      height: auto;
    }
    .left-panel {
      padding: 50px 40px;
    }
    .right-panel {
      padding: 50px 40px;
    }
    .streak {
      display: none;
    }
  }

`;

const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <MartianLogin />
  </React.StrictMode>
);
