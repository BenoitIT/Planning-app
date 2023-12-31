import React from 'react';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const Input = ({
  label = null,
  type = 'text',
  required = false,
  icon = faUser,
  useIcon = false,
  placeholder = '',
  className = null,
  onChange = null,
  labelClassName = null,
}) => {
  if (type === 'radio') {
    return (
      <label className="flex items-center gap-[5px] cursor-pointer text-[14px]">
        <input type="radio" className="w-5 h-5 text-[15px]" />
        {label}
      </label>
    );
  }

  return (
    <label
      className={`flex flex-col items-start gap-[8px] w-full ${labelClassName}`}
    >
      <p className={`${label ? 'flex' : 'null'} flex text-[15px] text-black`}>
        {label} <span className={required ? 'text-red-600' : 'hidden'}>*</span>
      </p>
      <span className="relative w-full flex items-center gap-[10px]">
        <span
          className={`${
            useIcon ? 'flex' : 'hidden'
          } absolute inset-y-0 left-0 pl-[15px] flex items-center pointer-events-none`}
        >
          <FontAwesomeIcon
            icon={icon}
            className={`${icon ? 'flex' : 'hidden'} text-[15px] text-black`}
          />
        </span>
        <input
          placeholder={placeholder}
          onChange={onChange}
          className={`${
            useIcon ? 'pl-[35px]' : 'pl-[15px]'
          } border-[.5px] border-primary text-black placeholder:text-gray w-full px-[15px] text-[15px] py-[8px] rounded-[10px] outline-none focus:outline-none focus:ring-[1.5px] ring-primary ${className}`}
          type={type}
        />
      </span>
    </label>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  required: PropTypes.bool,
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.object,
  ]),
  placeholder: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
  labelClassName: PropTypes.string,
  options: PropTypes.array,
  useIcon: PropTypes.bool,
};

export default Input;
