import { useBookStore } from "../../store/bookStore";

import sleepy from "../../assets/sleepy.png";
import angry from "../../assets/angry.png";
import deadline from "../../assets/deadline.png";

export default function RedPage() {
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
        background: "#ffe7e7",
        borderRadius: 12,
        padding: 35,
        color: "#222",
        boxShadow: "0 20px 60px rgba(0,0,0,.45)",
        zIndex: 999,
        overflowY: "auto",
      }}
    >
      {/* GERİ */}
      <button
        onClick={closePage}
        style={{
          position: "absolute",
          left: 20,
          top: 20,
          padding: "10px 18px",
          border: "none",
          borderRadius: 10,
          cursor: "pointer",
          background: "#d9534f",
          color: "white",
          fontWeight: "bold",
        }}
      >
        ← Kitaba Dön
      </button>
      <div
        style={{
          position: "absolute",
          top: 18,
          right: 20,
          transform: "rotate(20deg)",
          border: "3px solid #d32f2f",
          color: "#d32f2f",
          padding: "12px 24px",
          borderRadius: 50,
          fontWeight: "bold",
          fontSize: 28,
          opacity: 0.16,
          letterSpacing: 4,
          userSelect: "none",
        }}
      >
        ⚠ WARNİNG
      </div>

      <h1 style={{ color: "#c62828" }}>🔴 Çalıştırılmaması Gereken Durumlar</h1>

      <p
        style={{
          color: "#666",
          fontStyle: "italic",
        }}
      >
        Ürünün stabil çalışabilmesi için aşağıdaki durumlardan mümkün olduğunca
        kaçınılmalıdır.
      </p>

      <hr />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 50,
          marginTop: 25,
          marginBottom: 35,
        }}
      >
        {" "}
        <div style={{ textAlign: "center" }}>
          <img
            src={sleepy}
            style={{
              width: 120,
              height: 150,
              objectFit: "cover",
              border: "8px solid white",
              borderBottom: "24px solid white",
              borderRadius: 3,
              boxShadow: "0 8px 18px rgba(0,0,0,.25)",
              transform: "rotate(-8deg)",
            }}
          />

          <p
            style={{
              marginTop: 8,
              fontFamily: "cursive",
            }}
          >
            😴 Low Battery
          </p>
        </div>
        <div style={{ textAlign: "center" }}>
          <img
            src={angry}
            style={{
              width: 120,
              height: 150,
              objectFit: "cover",
              border: "8px solid white",
              borderBottom: "24px solid white",
              borderRadius: 3,
              boxShadow: "0 8px 18px rgba(0,0,0,.25)",
              transform: "rotate(2deg)",
            }}
          />

          <p
            style={{
              marginTop: 8,
              fontFamily: "cursive",
            }}
          >
            😠 Warning Mode
          </p>
        </div>
        <div style={{ textAlign: "center" }}>
          <img
            src={deadline}
            style={{
              width: 120,
              height: 150,
              objectFit: "cover",
              border: "8px solid white",
              borderBottom: "24px solid white",
              borderRadius: 3,
              boxShadow: "0 8px 18px rgba(0,0,0,.25)",
              transform: "rotate(8deg)",
            }}
          />

          <p
            style={{
              marginTop: 8,
              fontFamily: "cursive",
            }}
          >
            💻 Deadline Mode
          </p>
        </div>
      </div>

      {/* BURAYA SONRA POLAROIDLERİ EKLEYECEĞİZ */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 40,
          marginTop: 20,
        }}
      >
        {/* SOL TARAF */}
        <div>
          <h3>⚠ Riskli Durumlar</h3>

          <p>😴 5 saatten az uyumuşsa.</p>

          <p>😠 Sinirliyse.</p>

          <p>💻 Ödev teslimine çok az süre kalmışsa.</p>

          <p>📶 İnternet yavaşsa.</p>

          <p>🐢 Etrafta çok yavaş insanlar varsa.</p>

          <p>🥵 Hava aşırı sıcaksa.</p>

          <p>🍽 Çok acıkmışsa.</p>

          <p>📱 Telefon şarjı %5'in altındaysa.</p>

          <p>💄 Makyaj yapmadan dışarı çıkmak zorunda kaldıysa.</p>

          <p>😔 İstediği bir şey gerçekleşmediyse.</p>

          <p>💔 Birisiyle kavga ettiyse.</p>
        </div>

        {/* SAĞ TARAF */}
        <div>
          <h3>📉 Beklenen Sonuç</h3>

          <p>😴 Enerji ██░░░░░░░░</p>

          <p>😊 Moral █░░░░░░░░░</p>

          <p>🧠 Dikkat ███░░░░░░░</p>

          <p>💻 Kod Yazma ██░░░░░░░░</p>

          <p>🗣 Konuşma İsteği █░░░░░░░░░</p>

          <p>❤️ Sabır █░░░░░░░░░</p>

          <br />

          <div
            style={{
              background: "#ffd3d3",
              padding: 20,
              borderRadius: 10,
            }}
          >
            <b>⚠ SYSTEM WARNING</b>
            <br />
            <br />
            ████░░░░░░
            <br />
            <span style={{ color: "#c62828" }}>PERFORMANCE DEGRADED</span>
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: 30,
          padding: 18,
          background: "#ffdede",
          borderRadius: 10,
        }}
      >
        ⚠ <b>Uyarı:</b> Bu koşullarda sistem beklenenden daha düşük performans
        gösterebilir. Normal çalışma koşulları sağlanana kadar zorlamayınız.
      </div>
    </div>
  );
}
