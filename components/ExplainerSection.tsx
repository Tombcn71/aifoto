import voorbeeld from "/public/voorbeeld.png";
import wazig from "/public/wazig.png";
import resultaat from "/public/resultaat.png";

export default function ExplainerSection() {
  return (
    <div
      id="Zo werkt het"
      className="w-full max-w-6xl mt-16  px-6 p-8 bg-gray-100 rounded-lg space-y-8">
      <h2 className="text-3xl  font-bold text-center mb-8">Zo werkt het</h2>

      {/* Step 1: Upload your images */}
      <div className="space-y-4">
        <div className="flex items-center justify-center space-x-4">
          <div className="text-3xl font-bold text-sky-600 bg-white border-2 border-sky-600 rounded-full w-10 h-10 flex items-center justify-center">
            1
          </div>
          <h3 className="text-2xl font-semibold">Upload je selfies</h3>
        </div>
        <p className="text-l text-gray-600 text-center">
          kijk recht in de camera, zorg dat je gezicht in het midden van de foto
          is <br />
          vermijd hoeden en zonnebrillen.
        </p>
        <img
          src={voorbeeld.src}
          alt="AI Headshot example"
          className="rounded-lg object-cover w-full md:w-3/4 lg:w-1/2 mx-auto"
        />
      </div>

      {/* Step 2: Train your model */}
      <div className="space-y-4">
        <div className="flex items-center justify-center space-x-4">
          <div className="text-3xl font-bold text-sky-600 bg-white border-2 border-sky-600 rounded-full w-10 h-10 flex items-center justify-center">
            2
          </div>
          <h3 className="text-2xl font-semibold">Onze AI gaat aan het werk</h3>
        </div>
        <p className="text-l text-gray-600 text-center">
          De AI is 15 minuten bezig wanneer het afgerond is ontvang je een
          mailtje{" "}
        </p>
        <img
          src={wazig.src}
          alt="AI Headshot blur"
          className="rounded-lg object-cover w-full md:w-3/4 lg:w-1/2 mx-auto"
        />
      </div>

      {/* Step 3: Generate images */}
      <div className="space-y-4">
        <div className="flex items-center justify-center space-x-4">
          <div className="text-3xl font-bold text-sky-600 bg-white border-2 border-sky-600 rounded-full w-10 h-10 flex items-center justify-center">
            3
          </div>
          <h3 className="text-2xl font-semibold">
            Selecteer je portretfoto's{" "}
          </h3>
        </div>
        <p className="text-l text-gray-600 text-center">
          Je ontvangt verschillende achtergronden, poses en stijlen <br /> om de
          perfecte AI-portretfoto te kiezen.
        </p>
        <img
          src={resultaat.src}
          alt="AI Headshot result"
          className="rounded-lg object-cover w-full md:w-3/4 lg:w-1/2 mx-auto"
        />
      </div>
    </div>
  );
}
