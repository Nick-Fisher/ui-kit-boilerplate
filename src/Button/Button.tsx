import React, {FC} from 'react';

export interface IButton {

}

const Button: FC<IButton> = ({children, ...props}) => {
    return (
        <button {...props}>
            {children}
        </button>
    )
};

export default Button;