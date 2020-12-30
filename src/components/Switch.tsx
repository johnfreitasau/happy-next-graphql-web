import React, { ChangeEvent } from 'react';
import { AnySchema } from 'yup';

import {SwitchContainer} from '../styles/pages/components/Switch';


import { InputHTMLAttributes } from "react";
import { FieldProps } from "formik";


interface SwitchProps {
  label: string;
  isOn: boolean;
  handleToggle: ((event: ChangeEvent<HTMLInputElement>) => void) | undefined;
  onColor: any;
}

// const Switch = ({ label, isOn, handleToggle, onColor }: SwitchProps) => {

//   console.log('isOn:',isOn)
//   //console.log('handleToggle:',handleToggle)
//   console.log('onColor:',onColor)

//   return (
//     <>
//     <label htmlFor={label}>{label}</label>
//     <SwitchContainer>
//       <input
//         checked={isOn}
//         onChange={handleToggle}
//         className="react-switch-checkbox"
//         id={`react-switch`}
//         type="checkbox"
//       />
//       <label
//         style={{ background: isOn && onColor }}
//         className="react-switch-label"
//         htmlFor={`react-switch`}
//       >
//         <span className={`react-switch-button`} />
//       </label>
//     </SwitchContainer>
// </>
//   );
// };

// export default Switch;

///


export const Switch: React.FC<FieldProps & SwitchProps> = ({ label, isOn, handleToggle, onColor , field, ...props}) => {

  return (
    <>
    <label htmlFor={label}>{label}</label>
    <SwitchContainer>
      <input

        // checked={isOn}
        // onChange={handleToggle}
        className="react-switch-checkbox"
        id={`react-switch`}
        type="checkbox"
        {...field}


      />
      <label
        style={{ background: isOn && onColor }}
        className="react-switch-label"
        htmlFor={`react-switch`}
      >
        <span className={`react-switch-button`} />
      </label>
    </SwitchContainer>
</>
  );
};

export default Switch;
