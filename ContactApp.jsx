import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

// 💡 NEUE KOMPONENTE: Über Mich Sektion
function AboutSection() {
    return (
        <section id="about" className="py-16 md:py-24 px-4 bg-white shadow-inner">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-extralight tracking-wider uppercase text-center mb-12 text-gray-900">
                    Über Mich
                </h2>
                
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Linke Seite: Bild (Platzhalter) */}
                    <div className="flex justify-center">
                        {/* Bitte ersetzen Sie diese URL durch Ihr eigenes Profilbild! */}
                        <img
                            src="https://placehold.co/400x500/A079BF/ffffff?text=Ihr+Foto" 
                            alt="Profilbild von Anna Schmidt"
                            className="w-full max-w-xs md:max-w-sm rounded-3xl shadow-2xl object-cover aspect-[4/5] border-8 border-white transition-transform duration-500 hover:scale-[1.02]"
                        />
                    </div>
                    
                    {/* Rechte Seite: Biographie */}
                    <div className="text-gray-700 space-y-6 p-4">
                        <h3 className="text-3xl font-light text-purple-700 tracking-wide">
                            Anna Schmidt – Kreative Gestalterin & Entwicklerin
                        </h3>
                        <p className="leading-relaxed">
                            Willkommen auf meinem Portfolio! Ich bin Anna Schmidt, eine leidenschaftliche Entwicklerin und Designerin mit Sitz in München. Mein Fokus liegt darauf, komplexe Ideen in klare, ästhetische und benutzerfreundliche digitale Lösungen zu verwandeln. Ich glaube fest daran, dass die besten Projekte entstehen, wenn Kreativität auf Präzision trifft.
                        </p>
                        <p className="leading-relaxed">
                            In den letzten fünf Jahren habe ich an zahlreichen Projekten gearbeitet, von minimalistischen Webseiten bis hin zu komplexen E-Commerce-Plattformen. Ich liebe es, die Brücke zwischen kreativer Vision und technischer Machbarkeit zu schlagen. Ich bin immer auf der Suche nach neuen Herausforderungen, die es mir ermöglichen, meine Fähigkeiten in den Bereichen UI/UX, Frontend-Entwicklung (React/Angular) und visuelles Storytelling einzusetzen.
                        </p>
                        <p className="font-semibold text-gray-800 pt-2">
                            Lassen Sie uns zusammenarbeiten, um Ihre nächste Idee zum Leben zu erwecken!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Die ContactSection Komponente
function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    // State für die Statusmeldung (z.B. "Erfolgreich gesendet")
    const [submissionStatus, setSubmissionStatus] = useState(""); 

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmissionStatus("Nachricht wird gesendet...");
        
        // Mock-Formular-Übermittlung mit Verzögerung (simuliert eine API-Antwort)
        setTimeout(() => {
            // Zeigt die Erfolgsmeldung in der UI anstelle eines Alerts
            setSubmissionStatus("Nachricht erfolgreich gesendet! Vielen Dank für Ihr Interesse. (Demo)");
            setFormData({ name: "", email: "", message: "" });
            
            // Löscht die Statusmeldung nach 5 Sekunden
            setTimeout(() => setSubmissionStatus(""), 5000);
        }, 1500);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <section id="contact" className="py-16 md:py-24 px-4 min-h-screen bg-gray-50/50">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-extralight tracking-wider uppercase text-center mb-4 text-gray-900">
                    Kontakt
                </h2>
                <p className="text-lg text-center text-gray-600 mb-12 max-w-2xl mx-auto font-light">
                    Interessiert an einer Zusammenarbeit? Schreiben Sie mir eine Nachricht!
                </p>

                {/* Submission Status Message Box */}
                {submissionStatus && (
                    <div className={`p-4 mb-8 rounded-lg shadow-md text-center font-medium ${
                        submissionStatus.includes("erfolgreich") ? "bg-green-100 text-green-700" : 
                        submissionStatus.includes("gesendet...") ? "bg-blue-100 text-blue-700" : "bg-red-100 text-red-700"
                    }`}>
                        {submissionStatus}
                    </div>
                )}
                
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info (Linke Spalte) */}
                    <div className="p-6 md:p-8 bg-white rounded-xl shadow-lg border border-gray-100">
                        <h3 className="text-xl font-semibold text-gray-900 mb-6">Kontaktinformationen</h3>
                        
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-purple-100 rounded-xl flex-shrink-0">
                                    <Mail className="w-6 h-6 text-purple-600" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500 uppercase mb-1">E-Mail</p>
                                    <a href="mailto:anna.schmidt@example.com" className="text-purple-600 hover:text-purple-700 transition font-semibold">
                                        a.p
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-purple-100 rounded-xl flex-shrink-0">
                                    <Phone className="w-6 h-6 text-purple-600" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500 uppercase mb-1">Telefon</p>
                                    <a href="tel:+4989123456789" className="text-purple-600 hover:text-purple-700 transition font-semibold">
                                        +4
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-purple-100 rounded-xl flex-shrink-0">
                                    <MapPin className="w-6 h-6 text-purple-600" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500 uppercase mb-1">Standort</p>
                                    <p className="text-gray-700 font-semibold">München, Deutschland</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 p-6 bg-purple-50 rounded-xl shadow-inner">
                            <p className="text-gray-700 font-light">
                                Ich bin offen für spannende Projekte, Freelance-Aufträge und 
                                Festanstellungen. Lassen Sie uns gemeinsam etwas Großartiges schaffen!
                            </p>
                        </div>
                    </div>

                    {/* Contact Form (Rechte Spalte) */}
                    <div className="p-6 md:p-8 bg-white rounded-xl shadow-lg border border-gray-100">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-6">
                                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-purple-300/50 focus:border-purple-500 outline-none transition-all duration-200"
                                    placeholder="Ihr Name"
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                                    E-Mail
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-purple-300/50 focus:border-purple-500 outline-none transition-all duration-200"
                                    placeholder="ihre.email@example.com"
                                />
                            </div>

                            <div className="mb-8">
                                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                                    Nachricht
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-purple-300/50 focus:border-purple-500 outline-none transition-all duration-200 resize-none"
                                    placeholder="Ihre Nachricht..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center gap-2 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                                disabled={submissionStatus.includes("gesendet...")} // Deaktiviert den Button beim Senden
                            >
                                <Send className="w-5 h-5" />
                                <span>{submissionStatus.includes("gesendet...") ? "Wird gesendet..." : "Nachricht senden"}</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="mt-20 text-center text-gray-500">
                <p className="text-sm font-light">© 2024 Anna Schmidt. Alle Rechte vorbehalten.</p>
            </div>
        </section>
    );
}

// Hauptkomponente, die beide Sektionen rendert
export default function App() {
    return (
        <div className="min-h-screen font-sans bg-gray-50">
            {/* 1. Über Mich Sektion */}
            <AboutSection />
            
            {/* 2. Kontakt Sektion */}
            <ContactSection />
        </div>
    );
}
