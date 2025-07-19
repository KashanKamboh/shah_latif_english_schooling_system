import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    title: "Learning Activities for Kids",
    slug: "learning-activities-for-kids",
    date: "June 10, 2024",
    image: "/images/kid6.png",
    description:
      "Our school organized a series of engaging learning activities for kids, focusing on creativity, problem-solving, and teamwork. From fun science experiments to interactive storytelling sessions, students enjoyed hands-on experiences that made learning enjoyable and memorable.",
  },
  {
    title: "Annual Result Day 2024",
    slug: "annual-result-day-2024",
    date: "May 30, 2024",
    image: "/images/event3.jpg",
    description:
      "The Annual Result Day 2024 was a momentous occasion, celebrating the hard work and achievements of our students. Parents and teachers gathered to honor academic excellence and personal growth. Congratulations to all students for their dedication and success!",
  },
  {
    title: "Annual Science Exhibition 2024",
    slug: "annual-science-exhibition-2024",
    date: "April 15, 2024",
    image: "/images/science1.png",
    description:
      "Our students showcased their creativity and scientific curiosity at the Annual Science Exhibition. Projects ranged from solar-powered models to interactive experiments, inspiring both parents and teachers. The event fostered teamwork, innovation, and a love for learning.",
  },
  {
    title: "Sports Day: Champions in the Making",
    slug: "sports-day-champions-in-the-making",
    date: "March 10, 2024",
    image: "/images/sport5.png",
    description:
      "A day full of energy, excitement, and sportsmanship! Students participated in races, relays, and team games, cheered on by their families. The event highlighted the importance of physical fitness and teamwork in our school culture.",
  },
  {
    title: "Art & Culture Fest: Colors of Creativity",
    slug: "art-culture-fest-colors-of-creativity",
    date: "February 20, 2024",
    image: "/images/event1.jpg",
    description:
      "The Art & Culture Fest brought together students' artistic talents through painting, music, and drama. The vibrant displays and performances celebrated our diverse heritage and encouraged self-expression.",
  },
  {
    title: "Parent-Teacher Meet: Building Bridges",
    slug: "parent-teacher-meet-building-bridges",
    date: "January 25, 2024",
    image: "/images/meeting2.png",
    description:
      "Open communication is key to student success. Our Parent-Teacher Meet provided a platform for meaningful discussions, feedback, and collaborative goal-setting for every child’s growth.",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-green-50 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl  italic font-bold text-green-900 mb-8 text-center animate-fade-in-up">School Blog</h1>
          <p className="text-lg md:text-xl text-green-800 mb-12 text-center animate-fade-in-up delay-100">
            Stay updated with the latest events, achievements, and stories from Shah Latif English Schooling System. Explore our vibrant school life through detailed blog posts, photos, and more!
          </p>
          <div className="grid gap-10 md:grid-cols-2">
            {blogPosts.map((post, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col group hover:scale-[1.03] transition-transform duration-300 animate-fade-in-up"
                style={{ animationDelay: `${idx * 120}ms` }}
              >
                <div className="w-full h-56 relative overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-green-900 mb-2 group-hover:text-green-700 transition-colors duration-300">
                      {post.title}
                    </h2>
                    <p className="text-sm text-green-700 mb-4 italic">{post.date}</p>
                    <p className="text-green-900 text-base mb-4">{post.description}</p>
                  </div>
                  <div className="flex justify-end">
                    <Link href={`/Blog/${post.slug}`}>
                      <button className="px-4 py-2 bg-green-900 text-white rounded-full font-semibold shadow hover:bg-green-800 transition-all animate-pulse">
                        Read More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}