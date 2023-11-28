import './Button.css';

type ButtonProps = {
  label?: string;
  mode?: 'dark' | 'light' | 'default';
  outlined?: boolean;
  clickAnimation?: boolean;
};

const Button = (props: ButtonProps) => {
  const { mode, outlined, clickAnimation } = props;

  const buttonClasses = `button button-theme--${mode || 'default'} ${outlined ? `button-outline--outlined outlined-theme--${mode || 'default'}` : ''} ${clickAnimation ? 'button-animation--click-animation' : ''}`;

  return (
    <button className={buttonClasses}>
      {props.label || "Button"}
    </button>
  );
};

export default Button;