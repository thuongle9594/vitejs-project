import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MyApp from './App.jsx';
import { Menu } from './components/Menu.jsx';
import { Help } from './routes/help/Help.jsx';
import { ErrorPage } from './routes/errorPage/ErrorPage.jsx';
import { Employee } from './components/Employee.jsx';
import { Counter } from './components/Contact.jsx';
import Users from './components/Users.jsx';
import UserDetail from './components/UserDetail.jsx';
import CreateNewUser from './components/CreateNewUser.jsx';
import EditUser from './components/EditUser.jsx';
// tao một bộ định tuyến === đường dẫn đến các component mong muốn của mình

// createBrowserRouter nó chính là hàm cua thư viện react-router-dom dùng để tạo ra một bộ định tuyến giống như chiếc điều khiển tv của các bạn
const router = createBrowserRouter([
  {
    path: '/', // đường dẫn đến component mong muốn, nêú để / là mặc định vô trang đó là home page
    element: <Menu />, // nội dung hiển thị trên đường dẫn đó
    errorElement: <ErrorPage />, // duoc chay khi cai path nguoi dung nhap khong match voi bat ky router nao
    children: [
      {
        path: '/help', // đường dẫn đến component mong muốn
        element: <Help />, // nội dung hiển thị trên đường dẫn đó
      },
      // more child component
      {
        path: '/employee', // đường dẫn đến component mong muốn
        element: <Employee />, // nội dung hiển thị trên đường dẫn đó
      },
      {
        path: '/listUser', // đường dẫn đến component mong muốn
        element: <Users />, // nội dung hiển thị trên đường dẫn đó
      },
      {
        path: '/listUser/:id', // đường dẫn đến component mong muốn
        element: <UserDetail />, // nội dung hiển thị trên đường dẫn đó
      },
      {
        path: '/users/new', // đường dẫn đến component mong muốn
        element: <CreateNewUser />, // nội dung hiển thị trên đường dẫn đó
      },
      {
        path: '/users/edit/:id', // đường dẫn đến component mong muốn
        element: <EditUser />, // nội dung hiển thị trên đường dẫn đó
      },
      {
        path: '/contact', // đường dẫn đến component mong muốn
        element: <Counter />, // nội dung hiển thị trên đường dẫn đó
      },
    ],
  },
  {
    path: '/admin', // đường dẫn đến component mong muốn
    element: <MyApp />, // nội dung hiển thị trên đường dẫn đó
  },
]);

function HomePageAdmin() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default HomePageAdmin;
