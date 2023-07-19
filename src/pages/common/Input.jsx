import "style/input.scss";
import React, { useRef, useState } from "react";

const Input = ({ type, placeholder, iconSrc, propStates, error }) => {
  const [value, setValue] = propStates ?? [null, null];
  const [passwordShower, setPasswordShower] = useState(false);
  const inputRef = useRef(null);

  return (
    <div className="custom-input-wrapper">
      {iconSrc ? (
        <div className="input-icon">
          <img src={iconSrc} />
        </div>
      ) : (
        <></>
      )}
      {type == "password" ? (
        <button
          className={passwordShower ? "show-password-btn" : "hide-password-btn"}
          onClick={() => {
            inputRef.current.focus()
            setPasswordShower((state) => !state);
          }}
        ></button>
      ) : (
        <></>
      )}
      <input
        ref={inputRef}
        type={type !== "password" ? type ?? "text" : passwordShower ? "text" : "password"}
        className={
          !iconSrc ? "default" : "" + 
          (error ? "error-border" : "") +
          (type == "password" ? " password" : "")
        }
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          if(setValue instanceof Function){
            setValue(e.target.value);
          }
        }}
      />
      {error ? <div className="error">{error}</div> : <></>}
    </div>
  );
};

export default Input;
