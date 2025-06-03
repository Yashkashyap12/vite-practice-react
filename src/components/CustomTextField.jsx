import React from 'react';

const CustomTextField = ({ label, value, onChange, placeholder, type = "text", name, error, ...props }) => {
  return (
    <div className="custom-textfield-wrapper" style={{ marginBottom: '1rem' }}>
      {label && <label htmlFor={name} style={{ display: 'block', marginBottom: 4 }}>{label}</label>}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{
          padding: '8px 12px',
          fontSize: '16px',
          borderRadius: 4,
          border: error ? '1px solid red' : '1px solid #ccc',
          outline: 'none',
          width: '100%',
          boxSizing: 'border-box',
        }}
        {...props}
      />
      {error && <span style={{ color: 'red', fontSize: '12px' }}>{error}</span>}
    </div>
  );
};

export default CustomTextField;
