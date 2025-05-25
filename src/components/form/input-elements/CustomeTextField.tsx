import React from 'react';

interface CustomTextFieldProps {
  label?: string;
  type?: React.HTMLInputTypeAttribute;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  name: string;
  isRequired?: boolean;
  required?: boolean;
  error?: boolean | undefined;
  helperText?: string | undefined | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onBlur?: any;
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({
  label,
  type = 'text',
  value,
  name,
  onChange,
  placeholder = '',
  className = '',
  error = false,
  isRequired = false,
  required = false,
  helperText = '',
  onBlur,
}) => {
  return (
    <div className='flex flex-col gap-1'>
      {label && (
        <label
          htmlFor={name}
          className='text-sm font-medium text-grayColor pl-1 capitalize'
        >
          {label} {isRequired && <span className='text-red-500'>*</span>}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        onBlur={onBlur}
        className={`w-full border border-gray-300 placeholder:text-sm rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      />

      {error && helperText ? (
        <p className='text-xs text-red-500'>{helperText}</p>
      ) : null}
    </div>
  );
};

export default CustomTextField;
