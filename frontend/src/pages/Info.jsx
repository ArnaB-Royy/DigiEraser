export default function Info() {
  return (
    <section className="min-h-screen flex flex-col justify-start items-center px-6 py-12 bg-[#F5F5F5]">
      <div className="max-w-4xl text-center">
        <h2 className="text-4xl font-bold mb-8">The Problem</h2>
        <p className="text-lg mb-6">
          India generates over 1.75 million tonnes of e-waste annually.
          Millions of devices remain unused due to fear of data breaches...
        </p>

        <h2 className="text-4xl font-bold mb-8">Our Solution</h2>
        <p className="text-lg mb-6">
          WiपeOut offers a simple, secure, and verifiable data-wiping solution.
          Users can safely erase all device data and receive a tamper-proof certificate.
        </p>

        <h2 className="text-4xl font-bold mb-8">Trust & Transparency</h2>
        <p className="text-lg">
          All wipes generate tamper-proof certificates. Users and third-parties
          can verify device sanitization easily.
        </p>
      </div>
    </section>
  );
}
