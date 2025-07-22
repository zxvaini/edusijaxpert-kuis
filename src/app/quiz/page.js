'use client';

import { useState } from 'react';

const categories = [
   {
    name: 'Biologi',
    emoji: '🧬',
    questions: [
      { q: 'Enzim katalase pada sel hewan berfungsi untuk...', img: '', a: ['Menghidrolisis protein', 'Menguraikan H₂O₂ menjadi H₂O dan O₂', 'Mensintesis ATP di mitokondria', 'Membentuk NADH', 'Mengoksidasi glukosa langsung'], correct: 1 },
      { q: 'Dalam daur Calvin, molekul yang pertama kali terbentuk setelah fiksasi CO₂ adalah...', img: '', a: ['PGA', 'RuBP', 'PEP', 'G3P', 'OAA'], correct: 0 },
      { q: 'Pada siklus Krebs, CO₂ dilepaskan pada tahap...', img: '', a: ['Pembentukan sitrat', 'Oksidasi malat', 'Dekarboksilasi oksalosuksinat', 'Pembentukan fumarat', 'Pembentukan suksinil KoA'], correct: 2 },
      { q: 'Populasi organisme yang memiliki variasi genetik rendah cenderung...', img: '', a: ['Mudah beradaptasi', 'Cepat berevolusi', 'Rentan punah', 'Meningkatkan keanekaragaman', 'Meningkatkan mutasi alami'], correct: 2 },
      { q: 'Pada tumbuhan C₄, fiksasi CO₂ pertama kali terjadi di...', img: '', a: ['Sel mesofil', 'Sel bundle sheath', 'Kloroplas grana', 'Kloroplas stroma', 'Inti sel'], correct: 0 },
      { q: 'Fase interfase yang terjadi replikasi DNA adalah...', img: '', a: ['G₀', 'G₁', 'S', 'G₂', 'M'], correct: 2 },
      { q: 'Contoh hormon tumbuhan yang memacu pertumbuhan batang adalah...', img: '', a: ['Etilen', 'Asam absisat', 'Auksin', 'Sitokinin', 'Giberelin'], correct: 2 },
      { q: 'Fotosintesis terjadi pada organel...', img: '', a: ['Mitokondria', 'Lisosom', 'Kloroplas', 'Badan Golgi', 'Ribosom'], correct: 2 },
      { q: 'Unit fungsional penyaring pada ginjal disebut...', img: '', a: ['Alveolus', 'Neuron', 'Nefron', 'Sitosol', 'Vilus'], correct: 2 },
    ]
  },
  {
    name: 'Fisika',
    emoji: '🔭',
    questions: [
      { q: 'Sebuah pegas dengan konstanta 200 N/m direntangkan 5 cm. Energi potensial elastiknya adalah...', img: '', a: ['0,25 J', '0,5 J', '1,25 J', '2,5 J', '5 J'], correct: 0 },
      { q: 'Dua lensa cembung masing-masing f = 10 cm disusun berjarak 30 cm. Jarak fokus efektif sistemnya adalah...', img: '', a: ['5 cm', '10 cm', '15 cm', '20 cm', '30 cm'], correct: 2 },
      { q: 'Sebuah kumparan 50 lilitan, luas 2×10⁻² m², terletak di medan B = 0,2 T. Jika sudut antara B dan normal bidang kumparan 60°, fluks magnetiknya adalah...', img: '', a: ['2×10⁻³ Wb', '5×10⁻³ Wb', '1×10⁻² Wb', '5×10⁻² Wb', '1×10⁻¹ Wb'], correct: 1 },
      { q: 'Sebuah benda massa 2 kg berosilasi dengan amplitudo 0,1 m dan frekuensi 5 Hz. Energi mekaniknya adalah...', img: '', a: ['0,5 J', '1 J', '2 J', '5 J', '10 J'], correct: 3 },
      { q: 'Hambatan 3 Ω, 6 Ω, 9 Ω dirangkai paralel. Hambatan totalnya adalah...', img: '', a: ['1 Ω', '1,5 Ω', '2 Ω', '3 Ω', '6 Ω'], correct: 2 },
      { q: 'Gaya ke atas oleh fluida pada benda terapung disebut...', img: '', a: ['Gaya gesek', 'Gaya berat', 'Gaya Archimedes', 'Gaya sentripetal', 'Gaya tegangan'], correct: 2 },
      { q: 'Dalam hukum Ohm, hubungan V, I, R adalah...', img: '', a: ['V = I/R', 'V = IR', 'V = I²R', 'V = P/I', 'V = P²/R'], correct: 1 },
      { q: 'Alat untuk mengukur arus listrik adalah...', img: '', a: ['Voltmeter', 'Ammeter', 'Ohmmeter', 'Galvanometer', 'Barometer'], correct: 1 },
      { q: 'Cahaya merambat paling cepat di...', img: '', a: ['Air', 'Kaca', 'Minyak', 'Udara', 'Ebonit'], correct: 3 },
    ]
  },
  {
    name: 'Kimia',
    emoji: '⚗️',
    questions: [
      { q: 'Air terdiri dari unsur?', img: '', a: ['H dan O', 'H dan N', 'O dan C', 'C dan H'], correct: 0 },
      { q: 'pH netral adalah?', img: '', a: ['1', '7', '14', '0'], correct: 1 },
    ]
  },
  {
    name: 'Astronomi',
    emoji: '🌌',
    questions: [
      { q: 'Planet terbesar di Tata Surya?', img: '', a: ['Bumi', 'Jupiter', 'Mars', 'Saturnus'], correct: 1 },
      { q: 'Bintang terdekat dari Bumi?', img: '', a: ['Sirius', 'Alpha Centauri', 'Matahari', 'Polaris'], correct: 2 },
    ]
  },
  {
    name: 'Ilmu Bumi',
    emoji: '🌍',
    questions: [
      { q: 'Lapisan atmosfer terdekat ke bumi?', img: '/ilmubumi.jpg', a: ['Stratosfer', 'Troposfer', 'Mesosfer', 'Termosfer'], correct: 1 },
      { q: 'Gempa bumi disebabkan oleh?', img: '', a: ['Angin', 'Gelombang laut', 'Pergerakan lempeng', 'Petir'], correct: 2 },
    ]
  },
  {
    name: 'Ekologi',
    emoji: '🌿',
    questions: [
      { q: 'Rantai makanan diawali oleh?', img: '', a: ['Konsumen', 'Pengurai', 'Produsen', 'Omnivora'], correct: 2 },
      { q: 'Contoh simbiosis mutualisme?', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Bee_on_flower.jpg/320px-Bee_on_flower.jpg', a: ['Parasit dan inang', 'Lebah dan bunga', 'Serigala dan rusa', 'Jamur dan pohon'], correct: 1 },
    ]
  }
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [confirmStart, setConfirmStart] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [reviewMode, setReviewMode] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setFinished(false);
    setUserAnswers([]);
    setConfirmStart(false);
    setReviewMode(false);
    setSelectedAnswerIndex(null);
  };

  return (
    <main className="min-h-screen bg-[#E7F0DC] text-[#597445]">
      <nav className="bg-[#658147] text-white p-4 flex justify-between items-center shadow">
        <button onClick={() => { setSelectedCategory(null); resetQuiz(); }} className="font-bold text-xl">🌿 Quiz Sains</button>
        <div className="space-x-4 hidden sm:block">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => {
                setSelectedCategory(cat);
                resetQuiz();
              }}
              className="hover:underline"
            >
              {cat.name}
            </button>
          ))}
        </div>
      </nav>

      <div className="p-6">
        {!selectedCategory ? (
          <>
            <h1 className="text-4xl font-bold mb-4 text-center">Quiz Sains 🌟</h1>
            <p className="text-center mb-10 text-lg">Pilih kategori untuk mulai kuis</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {categories.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => {
                    setSelectedCategory(cat);
                    resetQuiz();
                  }}
                  className="bg-[#658147] hover:bg-[#729762] text-white p-6 rounded-2xl shadow-md flex items-center justify-between transition-all"
                >
                  <span className="text-xl font-semibold">{cat.emoji} {cat.name}</span>
                  <span className="text-xl">➡️</span>
                </button>
              ))}
            </div>
          </>
        ) : !confirmStart ? (
          <div className="max-w-xl mx-auto bg-white rounded-2xl p-6 shadow-md text-center">
            <h2 className="text-3xl font-bold mb-4">{selectedCategory.emoji} {selectedCategory.name}</h2>
            <p className="mb-6 text-lg">Selamat datang! Kamu akan mengerjakan soal-soal tentang <span className="font-semibold">{selectedCategory.name}</span>. Siap untuk mulai?</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setConfirmStart(true)}
                className="bg-[#658147] text-white px-6 py-2 rounded-lg hover:bg-[#729762]"
              >Mulai Kuis</button>
              <button
                onClick={() => setSelectedCategory(null)}
                className="text-[#597445] underline"
              >Batal</button>
            </div>
          </div>
        ) : (
          <div className="max-w-xl mx-auto bg-white rounded-2xl p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-4">{selectedCategory.emoji} {selectedCategory.name}</h2>
            {!finished ? (
              <>
                {selectedCategory.questions[currentQuestion].img && (
                  <img
                    src={selectedCategory.questions[currentQuestion].img}
                    alt="ilustrasi soal"
                    className="rounded-xl mb-4 w-full object-cover max-h-64"
                  />
                )}
                <p className="mb-4 text-lg font-semibold">{selectedCategory.questions[currentQuestion].q}</p>
                <div className="grid gap-4">
                  {selectedCategory.questions[currentQuestion].a.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedAnswerIndex(index)}
                      className={`p-3 rounded-xl shadow transition-all ${
                        selectedAnswerIndex === index
                          ? 'bg-[#729762] text-white font-semibold'
                          : 'bg-white border text-[#597445]'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                <div className="flex justify-between mt-6 items-center">
                  <button
                    disabled={currentQuestion === 0}
                    onClick={() => {
                      setCurrentQuestion(currentQuestion - 1);
                      setSelectedAnswerIndex(userAnswers[currentQuestion - 1] ?? null);
                    }}
                    className={`px-4 py-2 rounded-lg ${
                      currentQuestion === 0
                        ? 'bg-gray-300 cursor-not-allowed'
                        : 'bg-[#597445] text-white hover:opacity-90'
                    }`}
                  >
                    Kembali
                  </button>
                  <span className="text-sm">Soal {currentQuestion + 1} / {selectedCategory.questions.length}</span>
                  <button
                    disabled={selectedAnswerIndex === null}
                    onClick={() => {
                      const newAnswers = [...userAnswers];
                      const prevAnswer = userAnswers[currentQuestion];
                      const correct = selectedCategory.questions[currentQuestion].correct;

                      if (prevAnswer !== undefined) {
                        if (prevAnswer === correct && selectedAnswerIndex !== correct) setScore((s) => s - 1);
                        if (prevAnswer !== correct && selectedAnswerIndex === correct) setScore((s) => s + 1);
                      } else {
                        if (selectedAnswerIndex === correct) setScore((s) => s + 1);
                      }

                      newAnswers[currentQuestion] = selectedAnswerIndex;
                      setUserAnswers(newAnswers);
                      setSelectedAnswerIndex(null);

                      if (currentQuestion + 1 < selectedCategory.questions.length) {
                        setCurrentQuestion(currentQuestion + 1);
                        setSelectedAnswerIndex(newAnswers[currentQuestion + 1] ?? null);
                      } else {
                        setFinished(true);
                      }
                    }}
                    className={`px-4 py-2 rounded-lg ${
                      selectedAnswerIndex === null
                        ? 'bg-gray-300 cursor-not-allowed'
                        : 'bg-[#658147] text-white hover:bg-[#729762]'
                    }`}
                  >
                    {currentQuestion + 1 === selectedCategory.questions.length ? 'Selesai' : 'Lanjut'}
                  </button>
                </div>
              </>
            ) : (
              <div>
                <h3 className="text-xl font-bold mb-2 text-center">Selesai! 🎉</h3>
                <p className="text-center">Skor kamu: {score} / {selectedCategory.questions.length}</p>
                <p className="text-center mb-4">Persentase benar: {((score / selectedCategory.questions.length) * 100).toFixed(0)}%</p>
                <div className="text-center">
                  <button
                    onClick={() => setReviewMode(true)}
                    className="mt-4 bg-[#658147] text-white px-6 py-2 rounded-lg hover:opacity-90"
                  >
                    Review Jawaban
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {reviewMode && selectedCategory && (
          <div className="max-w-xl mx-auto mt-8 bg-white rounded-2xl p-6 shadow-md">
            <h3 className="text-xl font-bold mb-4 text-center">Review Jawaban</h3>
            <div className="space-y-4">
              {selectedCategory.questions.map((q, idx) => (
                <div key={idx} className="border p-4 rounded-xl bg-[#F8F9F5]">
                  <p className="font-semibold">{idx + 1}. {q.q}</p>
                  {q.img && <img src={q.img} alt="img" className="my-2 rounded-md max-h-40 object-cover" />}
                  <p className="text-sm">Jawaban kamu: <span className={userAnswers[idx] === q.correct ? 'text-green-600' : 'text-red-600'}>{q.a[userAnswers[idx]] || '—'}</span></p>
                  <p className="text-sm">Jawaban benar: <span className="text-green-700">{q.a[q.correct]}</span></p>
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <button
                onClick={() => {
                  setSelectedCategory(null);
                  resetQuiz();
                }}
                className="bg-[#597445] text-white px-6 py-2 rounded-lg hover:opacity-90"
              >
                Kembali ke Menu
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
