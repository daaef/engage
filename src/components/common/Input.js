import React from 'react';

export const Input = (props)=>{
  const onActive = (e) => {
    e.target.classList.add('active');
  };
  
  return (
    <div className="margin-bottom--md">
      <input className="form-control"
             type={props.type}
             id={props.id}
             name={props.name}
             value={props.value}
             onChange={props.onChange}
             onFocus={onActive}
             required
      />
      <label className="form-label mail" htmlFor={props.id}>{props.label}</label>
    </div>
  )
};