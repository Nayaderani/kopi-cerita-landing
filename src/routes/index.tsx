import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  Coffee,
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Music2,
  Star,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  Quote,
  Bean,
  Flame,
  Sofa,
} from "lucide-react";

import heroImg from "../assets/hero.jpg";
import aboutImg from "../assets/about.jpg";
import avatar1 from "../assets/avatar1.jpg";
import avatar2 from "../assets/avatar2.jpg";
import avatar3 from "../assets/avatar3.jpg";
import avatar4 from "../assets/avatar4.jpg";
import avatar5 from "../assets/avatar5.jpg";
import avatar6 from "../assets/avatar6.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kopi Nusantara — Secangkir Cerita, Sejuta Rasa Nusantara" },
      {
        name: "description",
        content:
          "Kedai kopi lokal Indonesia dengan biji pilihan petani, racikan tradisional & modern, serta suasana nyaman untuk nongkrong dan kerja.",
      },
      {
        property: "og:title",
        content: "Kopi Nusantara — Secangkir Cerita, Sejuta Rasa Nusantara",
      },
      {
        property: "og:description",
        content:
          "Nikmati kopi asli daerah Indonesia dalam suasana kedai yang hangat dan nyaman.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang", href: "#tentang" },
  { label: "Menu", href: "#menu" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "Kontak", href: "#kontak" },
];

const values = [
  {
    icon: Bean,
    title: "Biji Pilihan Petani Lokal",
    desc: "Kami bekerja sama langsung dengan petani kopi di berbagai daerah Indonesia untuk memastikan kualitas terbaik.",
  },
  {
    icon: Flame,
    title: "Racikan Tradisional & Modern",
    desc: "Dari kopi tubruk khas nusantara hingga espresso-based modern, setiap cangkir diracik dengan penuh passion.",
  },
  {
    icon: Sofa,
    title: "Suasana Nyaman untuk Semua",
    desc: "Ruang yang hangat, Wi-Fi stabil, dan tempat duduk ergonomis — cocok untuk nongkrong, kerja, atau meeting santai.",
  },
];

const menuHighlights = [
  { name: "Kopi Tubruk Aceh", price: "Rp22.000", desc: "Kopi robusta pekat dengan gula aren asli" },
  { name: "Latte Toraja", price: "Rp32.000", desc: "Espresso susu dengan beans arabika Toraja" },
  { name: "Kopi Jahe Jawa", price: "Rp25.000", desc: "Campuran kopi, jahe, dan rempah tradisional" },
  { name: "Es Kopi Susu Bali", price: "Rp28.000", desc: "Kopi Bali dingin dengan susu kelapa kental" },
  { name: "Matcha Pandan", price: "Rp30.000", desc: "Matcha premium dengan aroma pandan lokal" },
  { name: "Croissant Cokelat", price: "Rp20.000", desc: "Pastry renyah dengan isian cokelat Belgia" },
];

const testimonials = [
  {
    name: "Dewi Lestari",
    location: "Jakarta Selatan",
    rating: 5,
    text: "Kopinya benar-benar terasa beda. Tubruk Aceh-nya pekat tapi nggak bikin sakit perut. Suasananya juga homey banget!",
    avatar: avatar1,
  },
  {
    name: "Andi Wijaya",
    location: "Bandung",
    rating: 5,
    text: "Saya sering WFH di sini. Wi-Fi kencang, colokan banyak, dan baristanya ramah. Latte Toraja jadi andalan saya.",
    avatar: avatar2,
  },
  {
    name: "Rizky Pratama",
    location: "Tangerang",
    rating: 5,
    text: "Tempat nongkrong paling pas bareng teman. Harga terjangkau, pilihan menu lokalnya unik, dan pelayanannya cepat.",
    avatar: avatar3,
  },
  {
    name: "Siti Rahayu",
    location: "Depok",
    rating: 4,
    text: "Suka banget sama konsep mengangkat kopi lokal. Kopi Jahe Jawa-nya hangat dan bikin badan segar.",
    avatar: avatar4,
  },
  {
    name: "Bima Sakti",
    location: "Bekasi",
    rating: 5,
    text: "Croissant cokelatnya enak, kopinya juara. Interiornya aesthetic tapi tetap nyaman. Recommended!",
    avatar: avatar5,
  },
  {
    name: "Hendra Gunawan",
    location: "Jakarta Pusat",
    rating: 5,
    text: "Sebagai pecinta kopi, saya appreciate banget sama proses roasting yang mereka lakukan. Rasa konsisten setiap kunjungan.",
    avatar: avatar6,
  },
];

const WA_NUMBER = "6281234567890";
const WA_MESSAGE = "Halo, saya ingin pesan kopi di Kopi Nusantara";

function getWhatsAppHref() {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`;
}

function scrollToSection(href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nextTestimonial = () =>
    setActiveTestimonial((i) => (i + 1) % testimonials.length);
  const prevTestimonial = () =>
    setActiveTestimonial((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/90 shadow-sm backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a
            href="#beranda"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#beranda");
            }}
            className="flex items-center gap-2 text-xl font-bold text-foreground"
          >
            <Coffee className="h-7 w-7 text-primary" />
            <span>Kopi Nusantara</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href={getWhatsAppHref()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              Pesan Sekarang
            </a>
          </nav>

          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary md:hidden"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Buka menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-background p-4 md:hidden">
          <div className="flex items-center justify-between">
            <a
              href="#beranda"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#beranda");
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 text-xl font-bold text-foreground"
            >
              <Coffee className="h-7 w-7 text-primary" />
              <span>Kopi Nusantara</span>
            </a>
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Tutup menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="mt-8 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                  setMobileMenuOpen(false);
                }}
                className="text-lg font-medium text-foreground/80 hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href={getWhatsAppHref()}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-base font-semibold text-primary-foreground"
            >
              Pesan Sekarang
            </a>
          </nav>
        </div>
      )}

      {/* Hero */}
      <section
        id="beranda"
        className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Interior hangat Kopi Nusantara dengan secangkir latte dan croissant di meja kayu"
            className="h-full w-full object-cover"
            width={1440}
            height={900}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
              <Coffee className="h-4 w-4 text-primary" />
              Kopi Lokal Indonesia
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              Secangkir Cerita, Sejuta Rasa Nusantara
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl text-balance">
              Dari biji pilihan petani lokal hingga racikan sempurna di tangan barista kami,
              setiap tegukan membawa Anda menjelajahi kekayaan kopi Indonesia.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={getWhatsAppHref()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:scale-105"
              >
                <Phone className="h-5 w-5" />
                Pesan Sekarang
              </a>
              <a
                href="#menu"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#menu");
                }}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-foreground/20 bg-background/80 px-7 py-3.5 text-base font-semibold text-foreground backdrop-blur-sm transition-colors hover:bg-background"
              >
                <Coffee className="h-5 w-5" />
                Lihat Menu
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="tentang" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-primary/10">
              <img
                src={aboutImg}
                alt="Biji kopi Indonesia yang baru di-roasting"
                className="h-full w-full object-cover"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                Tentang Kami
              </span>
              <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl text-balance">
                Tentang Kopi Nusantara
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Kopi Nusantara lahir dari cinta mendalam pada kopi lokal Indonesia. Kami percaya
                bahwa setiap daerah di negeri ini menyimpan karakter rasa yang unik — dari
                kepekatan Aceh, kelembutan Toraja, hingga kearoman Bali.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Filosofi kami sederhana: menghormati petani, meracik dengan hati, dan menyajikan
                dalam suasana yang membuat setiap pengunjung merasa seperti di rumah sendiri.
              </p>

              <div className="mt-10 grid gap-6 sm:grid-cols-3">
                {values.map((value) => (
                  <div
                    key={value.title}
                    className="rounded-2xl bg-card p-5 shadow-sm ring-1 ring-border transition-transform hover:-translate-y-1"
                  >
                    <value.icon className="h-8 w-8 text-primary" />
                    <h3 className="mt-4 text-sm font-bold text-card-foreground">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {value.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="bg-secondary/40 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Menu Andalan
            </span>
            <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl text-balance">
              Cita Rasa Nusantara dalam Setiap Sajian
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground text-balance">
              Pilihan menu terbaik kami yang diracik dari bahan lokal berkualitas.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {menuHighlights.map((item) => (
              <div
                key={item.name}
                className="group rounded-2xl bg-card p-6 shadow-sm ring-1 ring-border transition-all hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-card-foreground">{item.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-secondary px-3 py-1 text-sm font-semibold text-secondary-foreground">
                    {item.price}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href={getWhatsAppHref()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:scale-105"
            >
              <Phone className="h-5 w-5" />
              Pesan via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimoni" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Testimoni
            </span>
            <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl text-balance">
              Kata Mereka Tentang Kami
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground text-balance">
              Pengalaman nyata pelanggan yang telah menikmati secangkir cerita bersama kami.
            </p>
          </div>

          {/* Desktop grid */}
          <div className="mt-14 hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} testimonial={t} />
            ))}
          </div>

          {/* Mobile carousel */}
          <div className="relative mt-10 md:hidden">
            <TestimonialCard testimonial={testimonials[activeTestimonial]} />
            <div className="mt-6 flex items-center justify-center gap-4">
              <button
                onClick={prevTestimonial}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Testimoni sebelumnya"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <span className="text-sm text-muted-foreground">
                {activeTestimonial + 1} / {testimonials.length}
              </span>
              <button
                onClick={nextTestimonial}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Testimoni berikutnya"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="kontak" className="bg-primary py-16 text-primary-foreground sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Brand */}
            <div>
              <a
                href="#beranda"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#beranda");
                }}
                className="flex items-center gap-2 text-2xl font-bold"
              >
                <Coffee className="h-8 w-8" />
                <span>Kopi Nusantara</span>
              </a>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/80">
                Secangkir cerita, sejuta rasa Nusantara. Kedai kopi lokal yang menghadirkan
                kehangatan dan cita rasa Indonesia.
              </p>
              <div className="mt-6 flex gap-4">
                <SocialLink href="https://instagram.com/kopinusantara" icon={Instagram} label="Instagram" />
                <SocialLink href="https://facebook.com/kopinusantara" icon={Facebook} label="Facebook" />
                <SocialLink href="https://tiktok.com/@kopinusantara" icon={Music2} label="TikTok" />
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-bold">Kontak Kami</h3>
              <ul className="mt-6 space-y-4 text-sm text-primary-foreground/80">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0" />
                  <span>
                    Jl. Nusantara No. 45, Kebayoran Baru
                    <br />
                    Jakarta Selatan, DKI Jakarta 12120
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0" />
                  <a href="tel:+6281234567890" className="hover:underline">
                    +62 812-3456-7890
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0" />
                  <a href="mailto:hello@kopinusantara.id" className="hover:underline">
                    hello@kopinusantara.id
                  </a>
                </li>
              </ul>
            </div>

            {/* Hours */}
            <div>
              <h3 className="text-lg font-bold">Jam Operasional</h3>
              <ul className="mt-6 space-y-3 text-sm text-primary-foreground/80">
                <li className="flex items-center gap-3">
                  <Clock className="h-5 w-5 shrink-0" />
                  <span>Senin — Jumat: 07.00 — 22.00</span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="h-5 w-5 shrink-0" />
                  <span>Sabtu: 08.00 — 23.00</span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="h-5 w-5 shrink-0" />
                  <span>Minggu: 08.00 — 21.00</span>
                </li>
              </ul>

              <div className="mt-8 rounded-2xl bg-primary-foreground/10 p-4 ring-1 ring-primary-foreground/10">
                <p className="text-sm font-medium">
                  Ingin reservasi atau pesan antar?
                </p>
                <a
                  href={getWhatsAppHref()}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105"
                >
                  <Phone className="h-4 w-4" />
                  Chat WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-primary-foreground/10 pt-8 text-center text-sm text-primary-foreground/70">
            <p>&copy; {new Date().getFullYear()} Kopi Nusantara. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={getWhatsAppHref()}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg shadow-whatsapp/30 transition-transform hover:scale-110"
        aria-label="Chat WhatsApp"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </div>
  );
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number];
}) {
  return (
    <div className="flex h-full flex-col rounded-2xl bg-card p-6 shadow-sm ring-1 ring-border">
      <Quote className="h-8 w-8 text-primary/30" />
      <p className="mt-4 flex-1 text-base leading-relaxed text-card-foreground">
        "{testimonial.text}"
      </p>
      <div className="mt-6 flex items-center gap-4">
        <img
          src={testimonial.avatar}
          alt={`Foto ${testimonial.name}`}
          className="h-12 w-12 rounded-full object-cover ring-2 ring-primary/20"
          loading="lazy"
          width={48}
          height={48}
        />
        <div className="flex-1">
          <h4 className="font-semibold text-card-foreground">{testimonial.name}</h4>
          <p className="text-xs text-muted-foreground">{testimonial.location}</p>
        </div>
        <div className="flex items-center gap-0.5 text-amber">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < testimonial.rating ? "fill-current" : "text-muted"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function SocialLink({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground transition-colors hover:bg-primary-foreground/20"
    >
      <Icon className="h-5 w-5" />
    </a>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.596-1.058-.864-1.706-.612-.597.23-1.253.353-1.93.353-2.62 0-4.758-2.14-4.758-4.758 0-.72.16-1.403.446-2.014.27-.58-.06-1.263-.66-1.54-.6-.28-1.32-.06-1.62.53-.55 1.17-.85 2.47-.85 3.84 0 4.97 4.03 9.01 9.01 9.01 1.25 0 2.43-.25 3.51-.71.66-.27.93-1.05.62-1.69-.29-.64-1.08-.91-1.73-.62-.76.32-1.59.49-2.46.49-3.87 0-7.01-3.14-7.01-7.01 0-.85.15-1.66.43-2.41.12-.33.46-.51.8-.42.34.09.55.43.47.77-.22.82-.34 1.68-.34 2.58 0 4.52 3.67 8.19 8.19 8.19.98 0 1.92-.17 2.8-.49.34-.12.71.05.84.39.13.34-.04.72-.38.85-.79.28-1.63.43-2.5.43-5.27 0-9.55-4.28-9.55-9.55 0-1.53.36-2.98 1-4.27.28-.58.98-.83 1.57-.56.59.27.86.95.6 1.55-.44.95-.68 2-.68 3.11 0 4.03 3.28 7.31 7.31 7.31.74 0 1.45-.11 2.12-.32.63-.2 1.31.13 1.52.76.21.63-.12 1.31-.75 1.52z" />
      <path d="M12.004 1.5C6.21 1.5 1.5 6.21 1.5 12.004c0 1.82.49 3.56 1.34 5.08L1.5 22.5l5.55-.34c1.44.75 3.07 1.16 4.79 1.16 5.79 0 10.5-4.71 10.5-10.5S17.79 1.5 12.004 1.5zm0 19.01c-1.49 0-2.93-.4-4.18-1.15l-.3-.18-3.31.2.43-3.23-.2-.34c-.87-1.52-1.33-3.27-1.33-5.08 0-5.65 4.59-10.24 10.24-10.24s10.24 4.59 10.24 10.24-4.59 10.24-10.24 10.24z" />
    </svg>
  );
}
