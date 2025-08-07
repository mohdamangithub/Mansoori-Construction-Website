"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="font-sans bg-white text-gray-900 dark:bg-gray-900 dark:text-white min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-20 px-4 bg-gradient-to-br from-yellow-100 to-yellow-300 dark:from-yellow-700 dark:to-yellow-900">
        <motion.h1
          className="head text-4xl sm:text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Mansoori Construction Babina Pvt Ltd
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl md:text-2xl mb-4 max-w-2xl mx-auto text-yellow-900 dark:text-yellow-200 font-semibold"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          Public Works Department Government Contractor
        </motion.p>
        <motion.p
          className="text-base sm:text-lg mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        >
          Trusted Partner for Government Infrastructure Projects, Specializing
          in Roads, Highways, Bridges, Public Buildings and Dam Construction.
        </motion.p>
        <motion.a
          href="#contact"
          className="inline-block bg-yellow-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-700 transition"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        >
          Request a Consultation
        </motion.a>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-8 bg-gradient-to-t from-white dark:from-gray-900 to-transparent" />
      </section>

      {/* Owner Section */}
      <motion.section
        id="owner"
        className=" px-4 max-w-3xl mx-auto w-full flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
      >
        <Image
          src="/images/Founder.png"
          alt="Owner Photo"
          className="rounded-full object-cover  border-2 border-yellow-700 shadow-amber-100 shadow-2xl dark:shadow-white mb-6"
          width={240} //40
          height={240}
        />
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-yellow-700 dark:text-yellow-400">
          Haji Sheikh Mohammad Ibrahim
        </h2>
        <p className="text-lg mb-14">Chief Contractor & Founder</p>
        <div className="bg-yellow-50 dark:bg-yellow-900/40 p-4 rounded-lg shadow w-full max-w-maxs mx-auto">
          <h3 className="font-semibold text-xl mb-8 mt-4">{`Founder's Sons`}</h3>
          <ul className="text-2xl text-yellow-700 dark:text-yellow-400 font-semibold space-y-1">
            <div className="sons flex items-center justify-center gap-12 mb-3">
              <Image
                src="/images/Saheed.png"
                alt="Owner Photo"
                className=" object-cover object-top border-2 border-yellow-700 shadow"
                width={112} // same as w-28
                height={112}
              />
              <div className="leading-none text-start">
                <li>Mr. Saheed Mansoori</li>
                <span className="text-[1rem] text-black font-normal dark:text-white">
                  ( PWD Contractor )
                </span>
              </div>
            </div>
            <div className="sons flex items-center justify-center gap-12 mb-3">
              <Image
                src="/images/Baheed.png"
                alt="Owner Photo"
                className="object-cover object-top border-2 border-yellow-700 shadow"
                width={112} // same as w-28
                height={112}
              />
              <div className="leading-none text-start">
                <li>Mr. Baheed Mansoori</li>
                <span className="text-[1rem] text-black font-normal dark:text-white">
                  ( Mansoori Building Materials )
                </span>
              </div>
            </div>
            <div className="sons flex items-center justify-center gap-12 mb-3">
              <Image
                src="/images/Jaheed.png"
                alt="Owner Photo"
                className="object-cover object-center border-2 border-yellow-700 shadow"
                width={112} // same as w-28
                height={112}
              />
              <div className="leading-none text-start">
                <li>Mr. Jaheed Mansoori</li>
                <span className="text-[1rem] text-black font-normal dark:text-white">
                  ( Jaheed Stones )
                </span>
              </div>
            </div>
            <div className="sons flex items-center justify-center gap-12 mb-3 mr-9">
              <Image
                src="/images/Aziz.png"
                alt="Owner Photo"
                className="object-cover object-top border-2 border-yellow-700 shadow"
                width={112} // same as w-28
                height={112}
              />
              <div className="leading-none text-start">
                <li>Mr. Aziz Mansoori</li>
                <span className="text-[1rem] text-black font-normal dark:text-white">
                  ( lovely Garments )
                </span>
              </div>
            </div>
          </ul>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="py-16 px-4 max-w-5xl mx-auto w-full text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
      >
        <h2 className="text-5xl font-bold mb-5 mt-9 text-yellow-700 dark:text-yellow-400">
          About Us
        </h2>
        <p className="text-lg mb-4">
          We are a government-registered construction company with decades of
          experience in executing public works contracts. Our expertise covers
          the full spectrum of infrastructure development, from highways and
          bridges to schools, hospitals, and water management projects.
        </p>
        <div className="flex flex-wrap gap-6 justify-center mt-6">
          <div className="bg-yellow-50 dark:bg-yellow-900/40 p-6 rounded-lg shadow w-64">
            <h3 className="font-semibold text-xl mb-2">Government Certified</h3>
            <p>Licensed for major public works and infrastructure projects.</p>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-900/40 p-6 rounded-lg shadow w-64">
            <h3 className="font-semibold text-xl mb-2">Experienced Team</h3>
            <p>
              Engineers, supervisors, and skilled workers for every project
              scale.
            </p>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-900/40 p-6 rounded-lg shadow w-64">
            <h3 className="font-semibold text-xl mb-2">On-Time Delivery</h3>
            <p>Proven record of timely completion and quality assurance.</p>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        id="services"
        className="py-14 px-4 bg-gray-50 dark:bg-gray-800 w-full text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold mb-10 mt-9  text-yellow-700 dark:text-yellow-400">
            Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow flex flex-col items-center">
              <Image
                src="/file.svg"
                alt="Road Construction"
                width={48}
                height={48}
                className="mb-4"
              />
              <h3 className="font-semibold text-xl mb-2">Road Construction</h3>
              <p>
                Highways, rural roads, and urban streets built to government
                standards.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow flex flex-col items-center">
              <Image
                src="/window.svg"
                alt="Building Projects"
                width={48}
                height={48}
                className="mb-4"
              />
              <h3 className="font-semibold text-xl mb-2">Building Projects</h3>
              <p>
                Schools, hospitals, government offices, and public facilities.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow flex flex-col items-center">
              <Image
                src="/globe.svg"
                alt="Dam & Water Works"
                width={48}
                height={48}
                className="mb-4"
              />
              <h3 className="font-semibold text-xl mb-2">Dam & Water Works</h3>
              <p>
                Dams, canals, and water management infrastructure for the public
                good.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="py-16 px-4 max-w-5xl mx-auto w-full text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
      >
        <h2 className="text-5xl font-bold mb-10 mt-7 text-yellow-700 dark:text-yellow-400">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden flex flex-col">
            <Image
              width={400} // same as h-50
              height={0}
              className="h-50 object-cover object-top"
              src="/images/Talbehat.jpg"
              alt="Talbehat Site"
            />
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="font-extrabold text-lg mb-4 uppercase">
                Talbehat Police Residential, U.P
              </h3>
              <p className="text-sm flex-1">
                This Complex are constructed to provide housing for police
                personnel, often prioritizing lower and higher subordinates, and
                are considered a key aspect of police force modernization. These
                complexes typically include well-secured residential buildings
                with basic amenities to improve living and working conditions.
              </p>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden flex flex-col">
            <Image
              width={400} // same as h-50
              height={0}
              className="h-50 object-cover"
              src="/images/Budpura2.jpg"
              alt="Burhpura Site"
            />
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="font-extrabold text-lg mb-4 uppercase">
                Burhpura Higher Secondary School, U.P
              </h3>
              <p className="text-sm flex-1">
                Government School construction projects aim to provide safe and
                conducive learning environments by building or renovating school
                infrastructure. These projects involve various components like
                classrooms, laboratories, libraries, administrative offices, and
                sanitation facilities, often adhering to specific standards and
                guidelines.
              </p>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden flex flex-col">
            <Image
              width={400} // same as h-50
              height={0}
              className="h-50 object-cover"
              src="/images/Samthar.jpg"
              alt="Lalitpur Site"
            />
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="font-extrabold text-lg mb-4 uppercase">
                Lalitpur Bitumen Road Construction, U.P
              </h3>
              <p className="text-sm flex-1">
                Bitumen Road Construction involves creating a paved surface
                using a mixture of bitumen and aggregates like gravel or crushed
                rock. This process creates a durable, waterproof, and flexible
                road surface, ideal for withstanding heavy traffic, The surface
                texture of a bitumen road provides good skid resistance for
                vehicles.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-16 px-4 bg-gray-50 dark:bg-gray-800 w-full text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl font-bold mb-8 mt-7 text-yellow-700 dark:text-yellow-400">
            Contact Us
          </h2>
          <form className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded border border-gray-300 dark:border-gray-700 bg-transparent"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded border border-gray-300 dark:border-gray-700 bg-transparent"
              required
            />
            <textarea
              placeholder="Your Message"
              className="p-3 rounded border border-gray-300 dark:border-gray-700 bg-transparent"
              rows={4}
              required
            />
            <button
              type="submit"
              className="bg-yellow-600 text-white font-semibold px-6 py-3 rounded hover:bg-yellow-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </motion.section>
    </div>
  );
}
