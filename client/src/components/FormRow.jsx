import React, { useState } from 'react';

// FormRow bileşenini güncelleyin
const FormRow = ({ type, name, labelText, defaultValue, togglePassword, showPassword }) => {
  // Eğer type 'password' ise ve togglePassword fonksiyonu varsa, şifre göster/gizle özelliği ekleyin
  if (type === 'password' && togglePassword) {
    return (
      <div className="form-row">
        <label htmlFor={name} className="form-label">
          {labelText || name}
        </label>
        <input
          type={showPassword ? "text" : "password"}
          id={name}
          name={name}
          className="form-input"
          defaultValue={defaultValue || ''}
          required
        />
        <button type="button" onClick={togglePassword} className="toggle-password">
          {showPassword ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }

  // Diğer tüm input tipleri için varsayılan davranış
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className="form-input"
        defaultValue={defaultValue || ''}
        required
      />
    </div>
  );
};

export default FormRow;
