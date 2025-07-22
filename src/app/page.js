'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#E7F0DC] text-[#597445] flex flex-col justify-center items-center px-6">
      <div className="bg-white p-8 rounded-2xl shadow-md max-w-2xl text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Selamat Datang di Kuis EduSijaXpert</h1>
        <p className="text-lg sm:text-xl mb-6">Uji pengetahuanmu dalam berbagai bidang sains seperti Biologi, Fisika, Kimia, dan lainnya. Siap untuk belajar sambil bermain?</p>
        <Link href="/quiz">
          <button className="bg-[#658147] text-white px-6 py-3 rounded-xl hover:bg-[#729762] text-lg font-semibold transition-all">
            Mulai Kuis
          </button>
        </Link>
      </div>
    </main>
  );
}