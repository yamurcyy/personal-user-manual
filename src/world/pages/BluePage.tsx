import { useBookStore } from "../../store/bookStore";
export default function BluePage() {
  const closePage = useBookStore((s) => s.closePage);

  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "52%",
        transform: "translate(-50%,-50%)",
        width: 900,
        height: 500,
        background: "#eef6ff",
        borderRadius: 12,
        padding: 35,
        color: "#222",
        boxShadow: "0 20px 60px rgba(0,0,0,.45)",
        zIndex: 999,
        overflowY: "auto",
      }}
    >
      <button
        onClick={closePage}
        style={{
          position: "absolute",
          top: 20,
          left: 20,
          padding: "10px 18px",
          border: "none",
          borderRadius: 10,
          background: "#5aa8ff",
          color: "white",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        ← Geri
      </button>
      <div
        style={{
          position: "absolute",
          top: 25,
          right: 30,
          transform: "rotate(18deg)",
          border: "3px solid #3f8cff",
          color: "#3f8cff",
          padding: "10px 20px",
          borderRadius: 50,
          fontWeight: "bold",
          fontSize: 22,
          opacity: 0.18,
          letterSpacing: 3,
        }}
      >
        LATEST VERSION
      </div>
      <h1>💙 Sürüm Geçmişi</h1>

      <p
        style={{
          color: "#666",
          fontStyle: "italic",
        }}
      >
        Ürünün gelişim süreci kronolojik olarak aşağıda listelenmiştir.
      </p>

      <hr />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "120px 1fr",
          rowGap: 30,
          marginTop: 25,
        }}
      ></div>
      <div>
        <h3>🔵 v1.0</h3>
      </div>

      <div>
        <b>30 Mart 2005</b>

        <p>✔ Initial Release</p>

        <p>İlk sürüm başarıyla yayınlandı.</p>
      </div>
      <div>
        <h3>🔵 v7.0</h3>
      </div>

      <div>
        <b>İlkokul</b>

        <p>✔ Yeni arkadaşlar eklendi.</p>

        <p>✔ Öğrenme sistemi geliştirildi.</p>
      </div>
      <div>
        <h3>🔵 v14.0</h3>
      </div>

      <div>
        <b>Lise Güncellemesi</b>

        <p>✔ Sorumluluk seviyesi arttı.</p>

        <p>✔ İngilizce geliştirildi.</p>
      </div>
      <div>
        <h3>🔵 v20.0</h3>
      </div>

      <div>
        <b>Üniversite Sürümü</b>

        <p>✔ Bilgisayar Mühendisliği eklendi.</p>

        <p>✔ Yeni hedefler tanımlandı.</p>
      </div>
      <div>
        <h3>🔵 v20.5</h3>
      </div>

      <div>
        <b>Major Update</b>

        <p>✔ Java</p>

        <p>✔ C#</p>

        <p>✔ SQL</p>

        <p>✔ React</p>

        <p>✔ Three.js</p>
      </div>
      <div>
        <h3>🔵 v21.0</h3>
      </div>

      <div>
        <b>Coming Soon...</b>

        <p>□ Yapay Zeka</p>

        <p>□ Backend Development</p>

        <p>□ Mobil Development</p>

        <p>□ Mezuniyet</p>
      </div>
      <div
        style={{
          marginTop: 35,
          background: "#d7ebff",
          padding: 20,
          borderRadius: 10,
        }}
      >
        📦 <b>Next Planned Update</b>
        <br />
        <br />
        Tahmini yayın tarihi:
        <b> 2027</b>
        <br />
        Yeni özellikler yolda...
      </div>
    </div>
  );
}
