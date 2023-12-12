import './searchbar.css'

const Searchbar = ({filter, setFilter}) => {


    const searchitems = filter;

    const handleClick = () => {
        localStorage.setItem("searchitem", JSON.stringify(searchitems))
 

    }
    const seachitems =  localStorage.getItem("searchitem");
    return (
        <div>
        <div className="flexCenter search-h">
           
            <input 
            placeholder="Search by name/username"
            type="text"
            value={filter} 
            onChange={(e)=>setFilter(e.target.value)}
            />
            <button className="button-h" onClick={handleClick}>Search</button>
           
          </div>
          <div className='seachitem'>{seachitems}</div>
          </div>
    );
}

export default Searchbar;
