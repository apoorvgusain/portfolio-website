import Presentation from "../images/achievements/one.jpg";
import Certificate from "../images/achievements/two.jpg";
import Award from "../images/achievements/three.jpg";

const Achievements = () => {
  return (
    <section id="achievements" className=" text-white py-16 px-4">
      <div className="text-center mb-8">
        <p className="text-accent text-lg tracking-widest mb-4">Recognition</p>
        <h2 className="text-4xl font-bold mb-2">Achievements</h2>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        <div className=" border-accent-dark border-4    rounded-lg">
          <img src={Award} className="h-52 w-full object-cover rounded-md " />
        </div>
        <div className=" border-accent-dark border-4    rounded-lg">
          <img
            src={Presentation}
            className="h-52 w-full object-cover rounded-md "
          />
        </div>
        <div className=" border-accent-dark border-4    rounded-lg">
          <img
            src={Certificate}
            className="h-52 w-full object-fill rounded-md "
          />
        </div>
      </div>
    </section>
  );
};

export default Achievements;
