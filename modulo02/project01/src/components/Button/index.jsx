import './styles.css'

export const Button = ({ text, onClick, disabled }) => (
  <button
    className='button-load-posts'
    onClick={onClick}
    disabled={disabled}
  >
    {text}
  </button>
);