"use client";

import { useState } from "react";

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Smart Room Control",
    description:
      "ควบคุมแสงสว่าง อุณหภูมิ และอุปกรณ์ในห้องพักผ่าน IoT ทั้งหมดในที่เดียว ลดการใช้พลังงานได้สูงสุด 40% พร้อมเพิ่มความสะดวกสบายให้แขกอย่างสูงสุด",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
      </svg>
    ),
    title: "High-Speed Connectivity",
    description:
      "อินเทอร์เน็ตความเร็วสูงจาก NT Fiber พร้อม Wi-Fi 6 ครอบคลุมทุกพื้นที่โรงแรม รองรับแขกและระบบ IoT พร้อมกันหลายพันอุปกรณ์โดยไม่มีสะดุด",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Smart Security",
    description:
      "ระบบรักษาความปลอดภัยอัจฉริยะด้วย AI-CCTV, กุญแจดิจิทัล และ Access Control ครบวงจร ติดตามและแจ้งเตือนแบบ Real-time ตลอด 24 ชั่วโมง",
  },
];

export default function Home() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">NT</span>
            </div>
            <span className="font-bold text-gray-900 text-lg">Smart Hotel</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#features" className="hover:text-blue-600 transition-colors">ฟีเจอร์</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">ติดต่อเรา</a>
            <a
              href="#contact"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              ทดลองใช้ฟรี
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-100 rounded-full opacity-40 blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-100 rounded-full opacity-40 blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: text */}
            <div>
              <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                NT Smart Solution
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 mb-6">
                ยกระดับโรงแรม
                <span className="text-blue-600 block">สู่ยุคดิจิทัล</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 max-w-lg">
                NT Smart Hotel โซลูชันครบวงจรสำหรับโรงแรมยุคใหม่ ด้วยเทคโนโลยี IoT, AI และเครือข่ายความเร็วสูงจาก NT
                ที่คุณไว้วางใจได้
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="bg-blue-600 text-white text-center px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all hover:shadow-lg hover:-translate-y-0.5"
                >
                  เริ่มต้นใช้งาน
                </a>
                <a
                  href="#features"
                  className="border-2 border-gray-200 text-gray-700 text-center px-8 py-4 rounded-xl font-semibold text-lg hover:border-blue-300 hover:text-blue-600 transition-colors"
                >
                  ดูฟีเจอร์ทั้งหมด
                </a>
              </div>
              {/* Stats */}
              <div className="mt-12 flex flex-wrap gap-8">
                {[
                  { value: "500+", label: "โรงแรมที่ใช้งาน" },
                  { value: "40%", label: "ลดต้นทุนพลังงาน" },
                  { value: "99.9%", label: "Uptime SLA" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-3xl font-extrabold text-blue-600">{stat.value}</div>
                    <div className="text-sm text-gray-500 mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: illustration */}
            <div className="hidden lg:flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-bold text-gray-700">Smart Dashboard</span>
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {[
                      { label: "ห้องที่เปิดใช้งาน", value: "142/180", color: "bg-blue-50 text-blue-700" },
                      { label: "พลังงานวันนี้", value: "1,240 kWh", color: "bg-green-50 text-green-700" },
                      { label: "แขกออนไลน์", value: "98 คน", color: "bg-purple-50 text-purple-700" },
                      { label: "แจ้งเตือน", value: "0 รายการ", color: "bg-orange-50 text-orange-700" },
                    ].map((card) => (
                      <div key={card.label} className={`${card.color} rounded-xl p-4`}>
                        <div className="text-xs font-medium opacity-70 mb-1">{card.label}</div>
                        <div className="font-bold text-lg">{card.value}</div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex justify-between text-xs text-gray-500 mb-2">
                      <span>การใช้พลังงาน</span>
                      <span>ลดลง 38%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div className="h-2 bg-blue-500 rounded-full w-[62%]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-3 py-1 rounded-full mb-4">
              ฟีเจอร์หลัก
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              ทุกสิ่งที่โรงแรมคุณต้องการ
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              โซลูชันอัจฉริยะที่ออกแบบมาเพื่อโรงแรมไทยโดยเฉพาะ รองรับตั้งแต่บูทีกโฮเทลไปจนถึงเชนโรงแรมระดับนานาชาติ
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: text */}
            <div className="text-white">
              <span className="inline-block bg-white/20 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
                ติดต่อเรา
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
                พร้อมเริ่มต้นแล้วใช่ไหม?
              </h2>
              <p className="text-blue-100 text-lg leading-relaxed mb-8">
                ทีมผู้เชี่ยวชาญของ NT พร้อมให้คำปรึกษาและออกแบบโซลูชันที่เหมาะกับโรงแรมของคุณโดยเฉพาะ
                ทดลองใช้ฟรี 30 วันโดยไม่มีค่าใช้จ่าย
              </p>
              <div className="space-y-4">
                {[
                  "ไม่มีค่าติดตั้ง สำหรับโรงแรมที่สมัครวันนี้",
                  "ทีม Support ตลอด 24/7",
                  "รับประกัน Uptime 99.9% ด้วย SLA",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-white/30 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-blue-100">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: form */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">ส่งข้อมูลเรียบร้อยแล้ว!</h3>
                  <p className="text-gray-500">ทีมงานของเราจะติดต่อกลับภายใน 1 วันทำการ</p>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">กรอกข้อมูลเพื่อรับการติดต่อ</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        ชื่อ-นามสกุล <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="กรอกชื่อ-นามสกุล"
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        อีเมล <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="example@hotel.com"
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        เบอร์โทรศัพท์
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="08x-xxx-xxxx"
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        ข้อความ / ความต้องการเพิ่มเติม
                      </label>
                      <textarea
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="บอกเล่าเกี่ยวกับโรงแรมของคุณหรือสิ่งที่ต้องการ..."
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm"
                    >
                      ส่งข้อมูล — ทดลองใช้ฟรี 30 วัน
                    </button>
                    <p className="text-xs text-gray-400 text-center">
                      เราเคารพความเป็นส่วนตัวของคุณ ข้อมูลจะไม่ถูกเผยแพร่ให้บุคคลที่สาม
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-blue-600 rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-xs">NT</span>
            </div>
            <span className="text-white font-semibold">NT Smart Hotel</span>
          </div>
          <p>© {new Date().getFullYear()} บริษัท โทรคมนาคมแห่งชาติ จำกัด (มหาชน). สงวนลิขสิทธิ์.</p>
        </div>
      </footer>
    </div>
  );
}
