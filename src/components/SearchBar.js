import './SearchBar.css'

function SearchBar(props){
    

    return(
        <form className="searchBar">
            <label>Search</label>
            <input type='text' onChange={props.search}/>
            <label><input type='checkbox' onChange={props.filtering}/>Only show products in stock</label>
        </form>
    )
}
export default SearchBar;