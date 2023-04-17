const Header = (props) => {
function handleSubmit (evento){
  evento.preventDefault();
  const searchValue = evento.target[0].value;
  props.onSubmit(searchValue);
  evento.target[0].value = "";

}  
  return (
    <header className="Header">
      <h1>PIPOCA ARRETADA</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Filmes" />
        </form> 
    </header>
  );
};

export default Header;