import './Header.css';

const Header = function(props){
    return(
      <div className="header">
        {props.heading}
      </div>
    )
  }

  export default Header;