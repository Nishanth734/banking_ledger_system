/** @format */

const Header = () => {
  return (
    <div className='header'>
      <div className='logo-container'>
        <img
          className='logo'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbWqOzbQJ9hjWFVMi-FyH8Ib9mPDxJ7eZluBMuUl1xGw&s=10'
          alt='Tasty Trails Logo'
        />
      </div>
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export { Header };
