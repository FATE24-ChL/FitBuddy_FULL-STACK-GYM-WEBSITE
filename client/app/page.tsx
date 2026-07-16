"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Home() {
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleContactSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://fitbuddy-full-stack-gym-website.onrender.com/routes/database/contacts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: contactName,
            email: contactEmail,
            message: message,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      alert("Message sent successfully!");

      setContactName("");
      setContactEmail("");
      setMessage("");

    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };


  const [selectedPlan, setSelectedPlan] = useState("");

  const memberships = [
    {
      name: "ELITE",
      color: "text-yellow-600",
      image: "/images/istockphoto-1211886784-612x612.jpg",
      link: "/elite",
      benefits: [
        "At-center group classes",
        "All ELITE and PRO gyms",
        "At-home live workouts",
      ],
    },

    {
      name: "PRO",
      color: "text-gray-400",
      image: "/images/images.jpg",
      link: "/pro",
      benefits: [
        "ALL PRO gyms",
        "2 Sessions/Per Month at all ELITE and PRO gyms",
        "At-home live workouts",
      ],
    },

    {
      name: "SELECT",
      color: "text-red-500",
      image: "/images/complete-commercial-gym-setup-500x500.webp",
      link: "/select",
      benefits: [
        "One center that you choose",
        "Limited Sessions in other centers and gyms",
        "At-home live workouts",
      ],
    },
  ];

  const [selectedImage, setSelectedImage] = useState("");

  const galleryImages = [
  "/images/images (2).jpg",
  "/images/fit-woman-man-gym-full-shot_23-2149734688.avif",
  "/images/newgym.webp",
  "/images/images (3).jpg",
  "/images/images (4).jpg",
  "/images/premium-fitness-gym-haibowal-kalan-ludhiana-gyms-dqfuom0w2x.avif",
  "/images/images (5).jpg",
  "/images/bodyzonegym.jpg",
];
  return (
    <div>
      <section
        className="text-gray-600 body-font bg-cover bg-center  bg-no-repeat min-h-screen"
        style={{
          backgroundImage:
            "url('/images/64a6b282d856f4f9d563997d_Gym people.jpg')",
        }}
      >
        <header className="text-white body-font">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
              <img
                src="/images/zeus-gym-logo-374f3141-0606-4b8b-afbf-a65274127256.jpg"
                alt="Zeus Gym Logo"
                className="w-15 h-15 p-2 bg-red-500 rounded-full"
              />
              <span className="ml-3 text-xl">
                <span className="text-red-600">Fit</span>Buddy
              </span>
            </a>

            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
              <a className="mr-5 hover:text-red-500">Home</a>
              <Link className="mr-5 hover:text-red-500" href="/about">About Us</Link>
              <Link className="mr-5 hover:text-red-500" href="/gallery">Gallery</Link>
              <Link className="mr-5 hover:text-red-500" href="/store">Store</Link>
            </nav>

            <button className="inline-flex items-center bg-red-500 text-white border-0 py-2 px-6 focus:outline-none hover:bg-red-600 hover:text-black rounded-full text-base mt-4 md:mt-0 transition-colors duration-300">
              Get App
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </header>

        <div className="absolute bottom-0 left-0 w-full"></div>

        <div className="container mx-auto flex px-5 py-24 items-center justify-end flex-col mt-70">
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              <span className="text-red-600">Fit</span>Buddy
            </h1>

            <p className="mb-8 leading-relaxed text-white">
              Get fit fast with FitBuddy Gym’s certified personal trainers.
              Enjoy cardio, strength, and weight training with top equipment.
              Join now and make ‘Impossible’ ‘I’m Possible’!
            </p>

            <div className="flex justify-center">
              <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
                <Link href="/login">
                  Sign-In
                </Link>
              </button>

              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                <Link href="/register">
                  Register
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Cards */}
   <section className="text-gray-600 body-font">
  <div className="container px-5 py-10 mx-auto mt-10">

    <div className="flex flex-wrap -m-4">

      {memberships.map((membership, index) => (

        <div key={index} className="p-4 md:w-1/3">

          <div
            onClick={() => setSelectedPlan(membership.name)}
            className={`h-full border-2 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl
              
              ${
                selectedPlan === membership.name
                  ? "border-red-500 bg-red-50"
                  : "border-gray-200"
              }
            `}
          >

            <img
              className="lg:h-48 md:h-36 w-full object-cover object-center"
              src={membership.image}
              alt={membership.name}
            />

            <div className="p-6">

              <h2 className="tracking-widest text-lg title-font font-medium text-black mb-1">
                <span className="text-red-600">Fit</span>Buddy
              </h2>

              <h1
                className={`title-font text-lg font-medium mb-3 ${membership.color}`}
              >
                {membership.name}
              </h1>

              <p className="leading-relaxed mb-3">
                Unlimited access to
              </p>

              <ol className="list-disc ml-5 mb-5">

                {membership.benefits.map((benefit, i) => (

                  <li key={i}>
                    {benefit}
                  </li>

                ))}

              </ol>

              <div className="flex justify-between items-center">

                <Link
                  href={membership.link}
                  className="text-red-500 inline-flex items-center"
                >
                  Learn More
                </Link>

                <button
                  className={`px-4 py-2 rounded-lg text-white transition-all

                  ${
                    selectedPlan === membership.name
                      ? "bg-green-500"
                      : "bg-red-500 hover:bg-red-600"
                  }
                  `}
                >
                  {selectedPlan === membership.name
                    ? "Selected"
                    : "Choose Plan"}
                </button>

              </div>

            </div>

          </div>

        </div>

      ))}

    </div>

  </div>
</section>
      {/* Gallery Section */}
     <section className="text-gray-600 body-font">
  <div className="container px-5 py-10 mx-auto">

    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">

      <h1 className="sm:text-3xl text-2xl font-medium title-font mb--5 text-gray-900">
        <span className="text-red-600">Fit</span>Buddy's Gallery
      </h1>

    </div>

    <div className="flex flex-wrap -m-4">

      {galleryImages.map((image, index) => (

        <div
          key={index}
          className="lg:w-1/4 md:w-1/2 p-4 w-full"
        >

          <div
            onClick={() => setSelectedImage(image)}
            className="block relative h-48 rounded overflow-hidden cursor-pointer hover:scale-105 transition"
          >

            <img
              alt="gym"
              className="object-cover object-center w-full h-full block"
              src={image}
            />

          </div>

        </div>

      ))}

    </div>

    {selectedImage && (

      <div className="mt-10 flex justify-center">

        <img
          src={selectedImage}
          alt="selected"
          className="w-150 rounded-xl shadow-xl"
        />

      </div>

    )}

  </div>
</section>
      {/* Fitness Institute Section */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">

          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              <span className="text-red-600">Fit</span>Buddy's Fitness Institute
            </h1>

            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Become a Certified Fitness Professional Today Physical Activity
              Or Can Improve Your Health
            </p>
          </div>

          <div className="flex flex-wrap">

            {/* Card 1 */}
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">

                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>

                <h2 className="text-lg text-red-500 font-medium title-font mb-2">
                  Advanced Online course
                </h2>

                <p className="leading-relaxed text-base">
                  Pursue your career in Fitness with our FitBuddy's Fast Track
                  Online Course and become a Certified Trainer at Rs. 40,000/- only.
                </p>

              </div>
            </div>

            {/* Card 2 */}
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">

                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                  </svg>
                </div>

                <h2 className="text-lg text-red-500 font-medium title-font mb-2">
                  Advanced Offline Course
                </h2>

                <p className="leading-relaxed text-base">
                  We are now Bigger, Better & Safer. Enroll for our Advanced
                  Personal Training Course. The Offline Batches will be available
                  at selected locations.
                </p>

              </div>
            </div>

            {/* Card 3 */}
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">

                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>

                <h2 className="text-lg text-red-500 font-medium title-font mb-2">
                  Sports Nutrition Course
                </h2>

                <p className="leading-relaxed text-base">
                  Join Fitness Expert Prof. Juhi Sharma for an online Sports
                  Nutrition course that’s tailored for athletes, fitness lovers,
                  and health professionals alike.
                </p>

              </div>
            </div>

          </div>
          <Link href="/know-more">
            <button className="flex mx-auto mt-10 mb-10 bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-gray-300 text-white rounded text-lg">
              Know More
            </button>
          </Link>

        </div>
      </section>
      {/* Contact Section */}
      <section
        className="text-gray-600 body-font relative bg-cover bg-center  bg-no-repeat min-h-screen py-20"
        style={{
          backgroundImage:
            "url('/images/GYM-INTERIORS-FEATURE-compressed.jpg')",
        }}
      >
        <div className="container px-5 mx-auto flex sm:flex-nowrap flex-wrap">

          <div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative shadow-2xl">

            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder="0"
              title="map"
              marginHeight={0}
              marginWidth={0}
              scrolling="no"
              src="https://maps.google.com/maps?q=Supreme%20Business%20Park%20Powai%20Mumbai&output=embed"
              style={{
                filter: "contrast(1)",
              }}
            ></iframe>
            <div className="bg-gray-300 relative flex flex-wrap py-6 rounded-lg shadow-md">

              <div className="lg:w-1/2 px-6 mb-4 lg:mb-0">
                <h2 className="title-font font-semibold text-red-500 tracking-widest text-xs">
                  ADDRESS
                </h2>

                <p className="mt-1 text-black">
                  Stilt Level 04, Supreme City, SUPREME BUSINESS PARK,
                  behind Lake Castle, Hiranandani Gardens, Powai,
                  Mumbai, Maharashtra 400076
                </p>
              </div>

              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-red-500 tracking-widest text-xs">
                  EMAIL
                </h2>

                <a className="text-black leading-relaxed hover:text-red-500 transition-colors">
                  FitBuddy@email.com
                </a>

                <h2 className="title-font font-semibold text-red-500 tracking-widest text-xs mt-4">
                  PHONE
                </h2>

                <p className="leading-relaxed text-black">
                  123-456-7890
                </p>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleContactSubmit}
            className="lg:w-1/3 md:w-1/2 bg-gray-300 bg-opacity-80 flex flex-col md:ml-auto w-full md:py-10 px-8 mt-8 md:mt-0 rounded-xl shadow-lg border border-gray-700"
          >

            <h2 className="text-red-500 text-2xl mb-3 font-semibold title-font">
              Get in touch with us!
            </h2>

            <p className="leading-relaxed mb-6 text-black text-sm">
              Speak with our experts to share your specific requirements —
              we’ll create customized solutions for your fitness goals.
            </p>

            {/* Name */}
            <div className="relative mb-4">

              <label
                htmlFor="name"
                className="leading-7 text-sm text-black"
              >
                Name
              </label>

              <input
                type="text"
                id="name"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                className="w-full bg-transparent rounded-lg border border-gray-600 focus:border-red-500 focus:ring-2 focus:ring-red-400 text-black py-2 px-4 outline-none transition duration-300 ease-in-out placeholder-gray-500"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email */}
            <div className="relative mb-4">

              <label
                htmlFor="email"
                className="leading-7 text-sm text-black"
              >
                Email
              </label>

              <input
                type="email"
                id="email"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                className="w-full bg-transparent rounded-lg border border-gray-600 focus:border-red-500 focus:ring-2 focus:ring-red-400 text-black py-2 px-4 outline-none transition duration-300 ease-in-out placeholder-gray-500"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Message */}
            <div className="relative mb-6">

              <label
                htmlFor="message"
                className="leading-7 text-sm text-black"
              >
                Message
              </label>

              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-transparent rounded-lg border border-gray-600 focus:border-red-500 focus:ring-2 focus:ring-red-400 text-black py-2 px-4 h-32 outline-none transition duration-300 ease-in-out placeholder-gray-500 resize-none"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="text-white bg-red-500 hover:bg-red-700 border-0 py-2 px-6 rounded-lg text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              Send Message
            </button>

          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-white body-font">

        <section className="body-font bg-cover bg-center bg-no-repeat bg-gray-900">

          <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">

            <div className="w-64 shrink-0 md:mx-0 mx-auto text-center md:text-left">

              <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">

                <img
                  src="/images/zeus-gym-logo-374f3141-0606-4b8b-afbf-a65274127256.jpg"
                  alt="FitBuddy Logo"
                  className="w-13 h-13 p-2 bg-red-500 rounded-full"
                />

                <h1 className="title-font sm:text-xl text-3xl mb-4 font-medium text-white ml-2 drop-shadow-lg">
                  <span className="text-red-600">Fit</span>Buddy
                </h1>

              </a>

              <p className="mt-3 text-sm text-gray-100 italic drop-shadow">
                “Push yourself, because no one else is going to do it for you.”
              </p>

            </div>

            <div className="grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">

              {/* Quick Links */}
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">

                <h2 className="title-font font-semibold text-red-500 tracking-widest text-sm mb-3 uppercase">
                  Quick Links
                </h2>

                <nav className="list-none mb-10 space-y-2">
                  <li><a className="text-gray-100 hover:text-white cursor-pointer">Gym Locator</a></li>
                  <li><a className="text-gray-100 hover:text-white cursor-pointer">About Us</a></li>
                  <li><a className="text-gray-100 hover:text-white cursor-pointer">Become an Influencer</a></li>
                  <li><a className="text-gray-100 hover:text-white cursor-pointer">Careers</a></li>
                </nav>

              </div>

              {/* Newsletter */}
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">

                <h2 className="title-font font-semibold text-red-500 tracking-widest text-sm mb-3 uppercase">
                  Newsletter
                </h2>

                <nav className="list-none mb-10 space-y-2">
                  <li><a className="text-gray-100 hover:text-white cursor-pointer">Sign Up for Mailing List</a></li>
                  <li><a className="text-gray-100 hover:text-white cursor-pointer">Blogs</a></li>
                  <li><a className="text-gray-100 hover:text-white cursor-pointer">Franchise</a></li>
                  <li><a className="text-gray-100 hover:text-white cursor-pointer">Advertise with Us</a></li>
                </nav>

              </div>

              {/* Blogs */}
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">

                <h2 className="title-font font-semibold text-red-500 tracking-widest text-sm mb-3 uppercase">
                  Latest Blogs
                </h2>

                <nav className="list-none mb-10 space-y-2">
                  <li><a className="text-gray-100 hover:text-white cursor-pointer">FitBuddy Gym's Shillong Blog</a></li>
                  <li><a className="text-gray-100 hover:text-white cursor-pointer">Work Well, Live Well: Ergonomic Harmony</a></li>
                  <li><a className="text-gray-100 hover:text-white cursor-pointer">Benefits of Regular Physical Activity</a></li>
                  <li><a className="text-gray-100 hover:text-white cursor-pointer">Programs</a></li>
                </nav>

              </div>

              {/* Categories */}
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">

                <h2 className="title-font font-semibold text-red-500 tracking-widest text-sm mb-3 uppercase">
                  Categories
                </h2>

                <nav className="list-none mb-10 space-y-2">
                  <li><a className="text-gray-100 hover:text-white cursor-pointer">First Link</a></li>
                  <li><a className="text-gray-100 hover:text-white cursor-pointer">Second Link</a></li>
                  <li><a className="text-gray-100 hover:text-white cursor-pointer">Third Link</a></li>
                  <li><a className="text-gray-100 hover:text-white cursor-pointer">Fourth Link</a></li>
                </nav>

              </div>

            </div>
          </div>
        </section>

        <div className="bg-red-500 bg-opacity-70">

          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">

            <p className="text-gray-300 text-sm text-center sm:text-left">
              © 2025 FitBuddy —
              <a
                href="#"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-white ml-1"
              >
                @FitBuddy
              </a>
            </p>

            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start text-gray-100 space-x-3">

              <a className="hover:text-white">
                <i className="fab fa-facebook-f"></i>
              </a>

              <a className="hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>

              <a className="hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>

              <a className="hover:text-white">
                <i className="fab fa-linkedin"></i>
              </a>

            </span>

          </div>
        </div>
      </footer>
    </div>
  );
}
