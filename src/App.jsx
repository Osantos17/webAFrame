import "react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className=" text-white py-4">
        <div className="container mx-auto text-center">
          <img 
            src="/public/Whitelogo.png" 
            className="my-4 mx-auto w-28 h-28" 
            alt="White Logo"
          />
          <p className="text-lg mt-2">Accurate surf forecasts tailored to your location.</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto mt-4 px-4">
        {/* App Info Section */}
        <section className="mb-12">
          <h2 className="text-2xl text-white font-bold mb-4">About</h2>
          <p className='text-white'>
            A-Frame uses your location to deliver real-time surf conditions and forecasts.
            We prioritize your privacy and do not collect or store any personal information.
          </p>
        </section>

        {/* Privacy Policy Section */}
        <section>
          <h2 className="text-2xl text-white font-bold mb-4">Privacy Policy</h2>
          <p className='text-white'>
            <strong>A-Frame</strong> does not collect, store, or share any personal
            information. The app only accesses your current location to provide accurate surf
            forecasts based on your location. This data is processed on your device and is not
            shared with third parties.
          </p>
          <p className="mt-4 text-white">
            For any questions, contact us at <a href="mailto:Aframesurfing@gmail.com" className="text-blue-500 underline">Aframesurfing@gmail.com</a>.
          </p>
        </section>
        <div className="flex flex-row justify-between mt-6 mx-12">
          <img 
            src="/public/map.png" 
            className="w-40" 
            alt="map"
          />
          <img 
            src="/public/local.png" 
            className="w-40" 
            alt="local"
          />
          <img 
            src="/public/forecast.png" 
            className="w-40" 
            alt="forecast"
          />
          <img 
            src="/public/about.png" 
            className="w-40" 
            alt="about"
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 text-center py-4 mt-8">
        <p>&copy; {new Date().getFullYear()} A-Frame. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
