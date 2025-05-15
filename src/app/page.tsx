import Image from "next/image";

export default function Home() {
  const hours = [
    ["Monday", "8:00 AM - 6:00 PM"],  
    ["Tuesday", "8:00 AM - 6:00 PM"],
    ["Wednesday", "8:00 AM - 6:00 PM"],
    ["Thursday", "8:00 AM - 6:00 PM"],
    ["Friday", "8:00 AM - 6:00 PM"],
    ["Saturday", "Closed"],
    ["Sunday", "Closed"],
  ];
  return (
    <div className="min-h-screen bg-[#8A1118] p-6 sm:p-20 font-[family-name:var(--font-geist-sans)] text-white">
      <main className="max-w-4x1 mx-auto flex flex-col items-center sm:items-start gap-16">
        <Image
          className="dark:invert w-full"
          src="/brownleeautomotive.png"
          alt="brownlee_logo"
          width={220}
          height={40}
          priority
        />
        <section className="text-sm font-[family-name:var(--font-geist-mono)] text-center">
          <p className="tracking-tight text-center">Family owned and operated since 1987</p>
        </section>
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full justify-items-center">
          {[
            ["/acdelco.png", "acgmdelco_logo"],
            ["/ase.jpg", "ase_logo"],
            ["/NAPA-Logo.png", "napa_logo"],
          ].map(([src, alt]) => (
            <Image
              key={alt}
              className="dark:invert"
              src={src}
              alt={alt}
              width={180}
              height={38}
              priority
            />
          ))}
        </section>
        <section className="text-sm font-[family-name:var(--font-geist-mono)] text-center sm:text-left">
          <p className="tracking-tight">📞 +1 (770) 469-9660</p>
          <p className="tracking-tight">📍 6573 James B Rivers Memorial Dr, Stone Mountain, GA 30083</p>
        </section>
        <div className="w-full h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11228.428422269608!2d-84.17213790897657!3d33.80785411122952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5af53422d0793%3A0xf06df791288944d2!2sBrownlee%20Automotive!5e0!3m2!1sen!2sus!4v1747107496293!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
        <section className="w-full">
          <h2 className="text-lg font-semibold mb-2">Hours</h2>
          <table className="table-auto border-collapse border border-white text-sm w-full">
            <thead>
              <tr>
                <th className="border border-white px-4 py-2">Day</th>
                <th className="border border-white px-4 py-2">Hours</th>
              </tr>
            </thead>
            <tbody>
              {hours.map((row, idx) => (
                <tr key={idx}>
                <td className="border border-white px-4 py-2">{row[0]}</td>
                <td className="border border-white px-4 py-2">{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        <section className="w-full text-black text-sm grid grid-cols-1 sm:grid-cols-2 gap-4">
          <p className="bg-white rounded shadow-lg leading-relaxed text-sm p-6">I recently had my truck's transmission repaired at Brownlee Automotive, and I couldn't be happier with the service. Brett, the service technician, was extremely knowledgeable and efficient, ensuring the repair was done right the first time. I highly recommend Brownlee Automotive for their excellent work and professional staff.</p>
          <p className="bg-white rounded shadow-lg leading-relaxed text-sm p-6">Dan has something to say probably</p>
        </section>
        <div className="relative w-full max-w-md mx-auto">
      <input
        type="text"
        placeholder="Search for an athlete"
        className="w-full p-2 border border-gray-300 rounded"
      />
    </div>
      </main>
      
      
    </div>
  );
}
