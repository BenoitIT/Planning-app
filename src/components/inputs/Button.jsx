import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

const Button = forwardRef(
  (
    {
      value,
      primary = false,
      submit = false,
      type = null,
      className = '',
      route = '#',
      onClick,
      disabled = false,
    },
    ref
  ) => {
    if (submit) {
      return (
        <button
          ref={ref}
          type={type || 'submit'}
          className={`w-fit flex items-center ${
            primary
              ? 'bg-primary text-white hover:bg-opacity-90'
              : 'bg-white text-primary border-[1px] border-primary hover:bg-primary hover:text-primary'
          } ${
            disabled
              ? '!bg-lightgray text-white cursor-default hover:scale-[1] bg-opacity-25 hover:bg-accent border-none'
              : null
          } justify-center min-h-[40px] py-[4px] px-[15px] rounded-md text-[15px] font-medium hover:scale[0.98] ease-in-out duration-300 ${className}`}
        >
          {value}
        </button>
      );
    }
    return (
      <Link
        to={route}
        onClick={onClick}
        ref={ref}
        state={{ from: window.location.pathname }}
        className={`w-fit flex items-center ${
          primary
            ? 'bg-primary text-secondary hover:bg-primary'
            : 'bg-white text-primary border-[1px] border-primary hover:bg-primary hover:text-white'
        } ${
          disabled
            ? '!bg-lightgray text-white cursor-default hover:scale-[1] bg-opacity-25 hover:bg-accent border-none'
            : null
        } justify-center min-h-[35px] py-[4px] px-[15px] rounded-md text-[15px] font-medium hover:scale[0.99] ease-in-out duration-150 ${className}`}
      >
        {value}
      </Link>
    );
  }
);

Button.displayName = 'Button';

Button.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.shape({}),
  ]).isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
  route: PropTypes.string,
  submit: PropTypes.bool,
  onClick: PropTypes.func,
  primary: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default Button;
