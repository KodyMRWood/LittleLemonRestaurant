import ownerPicture1 from '../Assets/MarioandAdrianA.jpg';
import ownerPicture2 from '../Assets/MarioandAdrianB.jpg';

function AboutSection() {
  return (
    <section id="about-section">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>At Little Lemon, we celebrate the vibrant flavors and rich traditions of the Mediterranean.
          From fresh seafood and grilled meats to aromatic herbs and colorful vegetables, our dishes are
          crafted with love and the finest ingredients. Inspired by the coastal regions of Greece, Italy,
          and beyond, we offer a unique dining experience that's both healthy and delicious.
           Join us for a taste of the Mediterranean, where every meal is a journey of flavor and freshness.</p>

        <img src={ownerPicture1} className="" alt="Mario and Adrian talking" width="200px"/>
        <img src={ownerPicture2} className="" alt="Mario and Adrian laughing" width="200px"/>
    </section>
  )
}

export default AboutSection