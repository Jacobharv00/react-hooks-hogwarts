import piggy from "../assets/porco.png";



const Nav = () => {
  return (
    <div className="navWrapper">
      <span className="headerText">Hogwarts</span>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <hr/>
      <h1 className="normalText">A React App for County Fair Hog Fans</h1>
    </div>
  );
};

export default Nav







