// src/components/layout/Footer.jsx
export default function Footer() {
  return (
    <footer className="py-6 text-center text-xs text-slate-400 bg-black/60">
      © {new Date().getFullYear()} Ankita · Crafted with React & Motion
    </footer>
  );
}
