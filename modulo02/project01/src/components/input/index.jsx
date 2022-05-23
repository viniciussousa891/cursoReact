import './styles.css'

export const Input = ({ searchValue, handleChange}) => {
  return (
    <input
      className="text-input"
      onChange={handleChange}
      value={searchValue} 
      placeholder="Type your search"
      type="search"/>
  )
}