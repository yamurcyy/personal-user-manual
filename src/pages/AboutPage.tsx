import { about } from "../data/about";

export default function AboutPage() {
  return (
    <div className="page">
      <div className="left">
        <h1>{about.title}</h1>

        <p>{about.subtitle}</p>

        <h2>👤 Kimlik</h2>

        <ul>
          <li>Ad : {about.identity.name}</li>
          <li>Yaş : {about.identity.age}</li>
          <li>Doğum : {about.identity.birthday}</li>
          <li>Burç : {about.identity.zodiac}</li>
          <li>Şehir : {about.identity.city}</li>
        </ul>

        <h2>🎓 Eğitim</h2>

        <ul>
          <li>{about.education.university}</li>
          <li>{about.education.department}</li>
          <li>{about.education.grade}</li>
        </ul>

        <h2>💻 İlgi Alanları</h2>

        <div className="chips">
          {about.interests.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>

      <div className="right">
        <div className="character">
          <h2>👤 3D Karakter</h2>

          <p>Yakında burada olacak.</p>
        </div>

        <div className="personality">
          <h2>✨ Kişiliğim</h2>

          {about.personality.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
