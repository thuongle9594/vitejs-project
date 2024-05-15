import './menu.css';
import { Link, Outlet } from 'react-router-dom';
//outlet để chid componet vẫn giữ lại phần head của cha, giữ lại tất cả ở phía trên <Outlet></Outlet>
export const Menu = ({ menu, onShowFooter, showClound }) => {
  return (
    <div>
      <ul className="list-menu">
        <li className="item">
          <Link className="linkCss" to="/">
            Home
          </Link>
        </li>

        <li className="item">
          <Link to="/listUser">Users</Link>
        </li>
        <li className="item">
          <Link to="/admin">Admin</Link>
        </li>
        <li className="item">
          <Link to="/employee">Employee</Link>
        </li>
        <li className="item">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="item">
          <Link to="/help">Help</Link>
        </li>

        {/* <li className="item">{menu}</li>
        <li className="item" onClick={() => onShowFooter(!showClound)}>
          {showClound ? 'show clound' : 'Hide clound'}
        </li> */}
      </ul>
      {/* chinh la component con se dc render here */}

      <Outlet></Outlet>
    </div>
  );
};

// html truyen thống thì để di qa lại giữa các page thì mình dung thẻ a href="link"
