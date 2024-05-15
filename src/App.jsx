// nhung file css vao de su dung
import './App.css';
import { Home, HomePage } from './components/Home';
import { Head } from './components/Head';
import { MainHead } from './components/MainHead';
import { Menu } from './components/Menu';
// import libary from react
import { useState, useEffect } from 'react';
import { Footer } from './components/Footer';
import useCounter from './custumHook/useCount';
import useFetch from './custumHook/useFetch';

// import reactjs router

// component
function MyApp() {
  let des =
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquidporro qui rerum expedita non architecto facere error. Molestiae quamea sunt, fugit, cumque eos deleniti illum alias inventore quisobcaecati?';

  const dataRes = [
    {
      id: 1,
      img: 'https://picsum.photos/600/400',
      title: 'lorem isum...',
      time: '9min',
      colorBtn: 'green',
    },
    {
      id: 2,
      img: 'https://picsum.photos/600/400',
      title: 'lorem isum picture...',
      time: '19min',
      colorBtn: undefined,
    },
    {
      id: 3,
      img: 'https://picsum.photos/600/400',
      title: 'lorem isum hello...',
      time: '8min',
      colorBtn: undefined,
    },
  ];

  const [title, setTitle] = useState('hello');
  //                                 initState
  const [infoPage, setInfoPage] = useState(des);

  // show hide footer
  const [showClound, setShowClound] = useState(true);

  const [dataCard, setDataCard] = useState(dataRes);
  // update state dataCard tu gia tri cu sang mot gia tri moi
  // thi se lam re-render lại phan UI --- RETURN

  // mỗi lần mình set lại state thì component của mình sẽ re-render

  const [person, setPerson] = useState('1');
  const [bio, setBio] = useState(null);

  // useEffect
  useEffect(() => {
    console.log('change action !');
    // call api
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((resStr) => {
        // string
        // conver json de su dung
        return resStr.json();
      })
      .then((res) => {
        // setState data
        const data = res.slice(4, 7);
        console.log(data, 'res');
        // set du lieu state thanh cong
        setDataCard(data);
      })
      .catch((err) => {
        console.log('err', err);
      });
  }, []); // [] null
  // dependency - phu thuoc
  // [] logic ben trong se chay duy nhat mot lan

  useEffect(() => {
    console.log('change action showClound!');
    if (true) {
      // to do somthing ...
    }
  }, [showClound, infoPage]); // [showclound, ...]
  // dependency - phu thuoc
  // [showClound] tu true => false hoawcj false => true logic ben trong se chay duy nhat mot lan

  useEffect(() => {
    console.log('change action ------!');
    //setShowClound(!showClound);
  }); // nothing
  // memory leak === qua tai bo xu ly trinh duyet

  // trang thai thay doi => re-render component

  console.log('change log action!');

  // example useEffect
  useEffect(() => {
    const timoutEvent = setTimeout(() => {
      console.log('u can call me after 2s !');
    }, 2000);

    // thuc thi khi ma component destroy
    return () => clearTimeout(timoutEvent);
  }, [showClound]);

  useEffect(() => {
    console.log('change action !');
    let flag = false;
    // call api
    fetch(`https://jsonplaceholder.typicode.com/users/${person}`)
      .then((resStr) => {
        // string
        // conver json de su dung
        return resStr.json();
      })
      .then((res) => {
        // setState data
        // set du lieu state thanh cong
        if (!flag) {
          // !false === true
          console.log(res, 'res bio');
          // set lai bio
          setBio(res);
        }
      })
      .catch((err) => {
        console.log('err', err);
      });
    // lan 1 ---- person change --- fetch user call ---3s--- coonect server ---> response --> setBio(res); // emit old
    // lan 2 ---- person change --- fetch user call ---2s--- coonect server ---> response --> setBio(res); // emit new
    // lan 3 ---- person change --- fetch user call ---4s--- coonect server ---> response --> setBio(res); // emit new
    // race condition // chay dua voi dieu kien
    // khong biet luc nao du lieu no là lần click latest (cuối cùng )
    // thao tác thêm sửa xoá bản ghi trên dữ liệu ở database
    return () => (flag = true);
  }, [person]);
  // useEffect lang nghe dependency

  // su dung custom hook o day
  const [count, increment] = useCounter(1); // đã đc dộ xe...
  const [a, setA] = useState(1); // cua nha san xuat

  // call hook api
  const [data, setData] = useFetch(
    '1',
    'https://jsonplaceholder.typicode.com/users/'
  );

  // btvn thêm nut buton click tương ứng với 1 hoqc 2 hoặc 3 thì useFetch nó trả đúng dữ liệu
  // dùng custom hook

  return (
    <>
      <div>
        <Menu
          menu={title}
          onShowFooter={setShowClound}
          showClound={showClound}
        />
        <select
          value={person}
          onChange={(e) => {
            setPerson(e.target.value);
          }}
        >
          <option value="1">Leanne Graham</option>
          <option value="2">Ervin Howell</option>
          <option value="3">Clementine Bauch</option>
        </select>
        {/* <p>{bio ?? 'Loading....'}</p> */}
        <p>
          {bio ? (
            <div>
              <h4>{bio.name}</h4>
              <h5>{bio.email}</h5>
            </div>
          ) : (
            'Loading...'
          )}
        </p>
        <button onClick={() => increment()}>couter button</button>
        <h4>count: {count}</h4>
        call api
        <h4>data1: {data?.name}</h4>
        <Head
          title="Album Example"
          description={infoPage}
          setDes={setInfoPage}
          btnOne="Main to call action"
          btnTwo="Secondary action"
        />
        <MainHead data={dataCard} />
        {showClound ? <Footer /> : null}
      </div>
    </>
  );
}

// xuat ra de dung noi nao do mong muon
export default MyApp;

// chia component nhu nao bao nhieu % năm dc
// prop la gi ? state la gi
// useState useEffect
// customhook
// css cho component
// câu lệnh điều ? : la gi ?
