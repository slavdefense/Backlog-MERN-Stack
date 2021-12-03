const SearchTicket = () => {
  return ( 
    <div className="container">
      <h1>I am the search page</h1>
      <form action="">
        <input type="text" />
        <input type="date" name="" id="" />
        <select
          name="priority"
         
        >
          <option
            name="priority"
            value='High'
          >
            High
          </option>
          <option 
            name="priority"
            value='Medium'
          >
            Medium
          </option>
          <option
            name="priority" 
            value='Low'
          >
            Low
          </option>
        </select>

      </form>

    </div>
   );
}
 
export default SearchTicket;