import './landingpage.scss';

export default function Landingpage() {
  return (
    <div className="landingpage" id="landingpage">
      <div className="imgContainer">
        <img id="layer4" src="https://i.imgur.com/ZXusky5.png" title="" />

        <img id="layer3" src="https://i.imgur.com/41WRN1E.png" title="" />

        <img id="layer2" src="https://i.imgur.com/H8DMG2w.png" title="" />

        <img id="layer1" src="https://i.imgur.com/cN0CgLv.png" title="" />
      </div>

      <div className="welcome">
        <h2>Hey there. I'm Ena.</h2>
        <h4>
          {' '}
          <br /> I'm an engineering student with a love for designing and
          managing products
          <br />
          that improve the lives of others.
        </h4>
        <h4>
          <br />
          Actively seeking Winter 2023 internship opportunities!
        </h4>
        <h3>
          <br />
          <br />
          <br />
          See my work
          <br />
        </h3>

        <img id="arrowdown" src="https://i.imgur.com/HP46F4W.png" title="" />
      </div>
    </div>
  );
}
