import { useBookStore } from "../../store/bookStore";
import happy from "../../assets/happy.png";
import friends from "../../assets/friends.png";
import boyfriend from "../../assets/boyfriend.png";

export default function GreenPage() {
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
        background: "#e8f7e6",
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
          background: "#63b86d",
          color: "white",
          fontWeight: "bold",
        }}
      >
        ← Kitaba Dön
      </button>
      <h1 style={{ color: "#2b8d45" }}>🟢 Optimum Çalışma Koşulları</h1>
      <p
        style={{
          color: "#5c5c5c",
          fontStyle: "italic",
        }}
      >
        Ürünün maksimum performans verebilmesi için aşağıdaki koşulların
        sağlanması önerilir.
      </p>
      <hr />{" "}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: 50,
          marginTop: 25,
          marginBottom: 35,
          flexWrap: "nowrap",
        }}
      >
        <div
          style={{
            textAlign: "center",
          }}
        >
          <img
            src={happy}
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
              fontFamily: "cursive",
              marginTop: 8,
            }}
          >
            😊 Moral Boost
          </p>
        </div>
        <div
          style={{
            textAlign: "center",
          }}
        >
          <img
            src={friends}
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
              fontFamily: "cursive",
              marginTop: 8,
            }}
          >
            👥 Social Battery +100
          </p>
        </div>
        <div
          style={{
            textAlign: "center",
          }}
        >
          <img
            src={boyfriend}
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
              fontFamily: "cursive",
              marginTop: 8,
            }}
          >
            ❤️ Boyfriend Buff +999
          </p>
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 40,
          marginTop: 20,
        }}
      >
        <div>
          <h3>✅ Gerekli Koşullar</h3>

          <p>Sıcak havalarda çalışması için soğuk bir içecek veriniz</p>

          <p>❤️ Erkek arkadaşı yanındayken daha iyi sonuç verir.</p>

          <p>
            👥 Arkadaşlarıyla vakit geçiriyorsa çok verimli performans gösterir.
          </p>

          <p>🎧 Müzik açık olmalıdır.</p>

          <p>💻 Kod yazıyor ise biraz uzun sürebilir.</p>

          <p>📚 Sürükleyici bir romanın içindeyse hayal gücü aktiftir.</p>

          <p>🌧 Hafif yağmurlu hava önerilir.</p>

          <p>🛍 Yakın zamanda alışveriş yapmış olması motivasyonu artırır.</p>
        </div>

        <div>
          <h3>🚀 Beklenen Sonuç</h3>

          <p>😊 Moral Seviyesi ██████████</p>

          <p>⚡ Enerji █████████░</p>

          <p>🧠 Problem Çözme ██████████</p>

          <p>💻 Kod Yazma İsteği █████████░</p>

          <p>🎯 Motivasyon ██████████</p>

          <br />

          <div
            style={{
              background: "#c9f0c4",
              padding: 20,
              borderRadius: 10,
            }}
          >
            <b>✔ SYSTEM STATUS</b>
            <br />
            <br />
            ██████████
            <br />
            <span style={{ color: "#1c8b38" }}>OPTIMUM</span>
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: 30,
          padding: 18,
          background: "#dff4db",
          borderRadius: 10,
        }}
      >
        💡 <b>Not:</b> Bu koşullar sağlandığında ürün beklenenden daha yüksek
        performans gösterebilir.
      </div>
    </div>
  );
}
