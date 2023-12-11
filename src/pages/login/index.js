import React, { useState } from 'react';
import Layout from '@theme/Layout';
import '../styles.css'



export default function Login () {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // 在这里处理表单提交逻辑
    console.log('用户名:', username);
    console.log('密码:', password);

    // // 清空表单
    // setUsername('');
    // setPassword('');
  }



  return (
    <Layout title="Hello" description="Hello React Page">
      <div style={{display: 'grid', height: '80vh', width: '100vw',
          placeItems: 'center'}}>
        <div class="card" style={{display: 'inline-block', width: '400px', height: '400px'}}>
        <form onSubmit={handleSubmit} className='form-style'>
          <div class="card__header">
            <h3>Login</h3>
          </div>
          <div class="card__body">
         
        <div>
          <label htmlFor="username">username:</label>
          <input
          className="custom-input"
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="password">password:</label>
          <input
            className="custom-input"
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
          </div>
          <div class="card__footer">
            <button class="button  button--success button--block">Login</button>
          </div>
          </form>
         </div>
        
      </div>
  
    </Layout>
  );
}