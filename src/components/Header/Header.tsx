import React from 'react';

import './Header.style.scss';
import electricity from '../../assets/images/electricity.svg';
import Button from "../Button/Button";

type User = {
  name: string;
};

interface HeaderProps {
  user?: User;
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export const Header = ({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) => (
  <header className="header">
    <div className="header--logo">
      <picture>
        <img src={electricity} alt="MP Blog"/>
      </picture>
      <h1>MP</h1>
    </div>
    <div>
      {user ? (
        <>
          <span className="welcome">
            Welcome, <b>{user.name}</b>!
          </span>
          <button onClick={onLogout}>Log out</button>
        </>
      ) : (
        <>
          <Button text="Login"/>
        </>
      )}
    </div>
  </header>
);