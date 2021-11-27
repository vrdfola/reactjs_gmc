import './App.css';

function App() {
  return (
    <div className="App">
      <form className="form-control mt-3">
        <label>Name: </label>
        <input type="name" placeholder="Enter your name"/>
        <br /> <br />
        <label>Email: </label>
        <input type="email" placeholder="Enter your email"/>
        <br /> <br />
        <label>Phone Number: </label>
        <input type="number" placeholder="Enter your phone number"/>
        <br /> <br />
        <label>Address</label>
        <input type="address" placeholder= "Enter your address "/>
        <br/> <br/>

        <input type="submit"  />
      </form>
    </div>
  );
}

export default App;
