import React from 'react';

export const StepSeperator = ()=>{
    return (
      <span className="step__separator" aria-hidden="true">
        <svg className="icon" viewBox="0 0 16 16">
          <g strokeWidth="1" stroke="currentColor">
            <polyline
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              points="6.5,3.5 11,8 6.5,12.5 ">
            </polyline>
          </g>
        </svg>
      </span>
  )
};

export default StepSeperator;