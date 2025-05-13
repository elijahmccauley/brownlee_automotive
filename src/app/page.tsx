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
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-[#8A1118]">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert w-full"
          src="/brownleeautomotive.png"
          alt="brownlee_logo"
          width={180}
          height={38}
          priority
        />
        <Image
          className="dark:invert"
          src="/acdelco.png"
          alt="acgmdelco_logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          
          <li className="tracking-[-.01em]">
            +1 (770) 469-9660
          </li>
        </ol>
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
        <table className="table-auto border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Day</th>
              <th className="border border-gray-300 px-4 py-2">Hours</th>
            </tr>
          </thead>
          <tbody>
            {hours.map((row, idx) => (
              <tr key={idx}>
              <td className="border border-gray-300 px-4 py-2">{row[0]}</td>
              <td className="border border-gray-300 px-4 py-2">{row[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="w-full h-[400px]">
          I recently had my truck's transmission repaired at Brownlee Automotive, and I couldn't be happier with the service. Brett, the service technician, was extremely knowledgeable and efficient, ensuring the repair was done right the first time. I highly recommend Brownlee Automotive for their excellent work and professional staff.
        </div>
        
      </main>
      
      
    </div>
  );
}
