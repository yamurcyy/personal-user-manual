import profile from "../assets/resim.png";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, OrbitControls } from "@react-three/drei";
import Book from "./Book";
import Bubble from "../ui/Bubble";
import { useBookStore } from "../store/bookStore";
import GreenPage from "./pages/GreenPage";
import RedPage from "./pages/RedPage";
import ModesPage from "./pages/ModesPage";
import BluePage from "./pages/BluePage";
import { useState } from "react";

function Overlay() {
  const closePage = useBookStore((s) => s.closePage);
  const openBook = useBookStore((s) => s.openBook);
  const opened = useBookStore((s) => s.opened);
  const bubblesVisible = useBookStore((s) => s.bubblesVisible);
  const setPage = useBookStore((s) => s.setPage);
  const currentPage = useBookStore((s) => s.currentPage);
  const [showPackage, setShowPackage] = useState(false);

  return (
    <>
      {!opened && (
        <div
          style={{
            position: "absolute",
            top: 350,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 100,
          }}
        >
          <button
            onClick={openBook}
            style={{
              padding: "16px 34px",
              borderRadius: 50,
              border: "none",
              cursor: "pointer",
              color: "white",
              fontWeight: 700,
              fontSize: 18,
              background: "rgba(255,255,255,.15)",
              backdropFilter: "blur(20px)",
              boxShadow: "0 10px 40px rgba(0,0,0,.35)",
            }}
          >
            📖 Kitabı Aç
          </button>
        </div>
      )}
      {bubblesVisible && (
        <>
          <Bubble
            title="Temel Bilgiler"
            x={50}
            y={12}
            delay={0}
            onClick={() => setPage("about")}
          />

          <Bubble
            title="Nasıl Kullanılır?"
            x={22}
            y={22}
            delay={0.15}
            color="linear-gradient(180deg,#ffe66a,#f4c400)"
            onClick={() => setPage("manual")}
          />

          <Bubble
            title="Optimum"
            x={78}
            y={22}
            delay={0.3}
            color="linear-gradient(180deg,#9fe39f,#59b659)"
            onClick={() => setPage("green")}
          />

          <Bubble
            title="Riskli Durumlar"
            x={30}
            y={70}
            delay={0.45}
            color="linear-gradient(180deg,#ffb6b6,#ff6b6b)"
            onClick={() => setPage("red")}
          />

          <Bubble
            title="Çalışma Modları"
            x={70}
            y={70}
            delay={0.6}
            color="linear-gradient(180deg,#ffc6df,#ff82b4)"
            onClick={() => setPage("modes")}
          />
          <Bubble
            title="Sürüm Geçmişi"
            x={50}
            y={86}
            delay={0.75}
            color="linear-gradient(180deg,#b8dcff,#73b6ff)"
            onClick={() => setPage("blue")}
          />
        </>
      )}{" "}
      {currentPage === "about" && (
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "52%",
            transform: "translate(-50%,-50%)",
            width: 900,
            height: 500,
            background: "#f7f1e6",
            borderRadius: 12,
            padding: 40,
            color: "#222",
            boxShadow: "0 20px 60px rgba(0,0,0,.45)",
            zIndex: 999,
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
              background: "#5b3925",
              color: "white",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: 15,
            }}
          >
            ← Geri
          </button>
          <h1>👤 Temel Bilgiler</h1>{" "}
          <div
            style={{
              position: "absolute",
              top: 30,
              right: 170,
              transform: "rotate(15deg)",
              border: "3px solid #2e8b57",
              color: "#2e8b57",
              padding: "8px 16px",
              borderRadius: 50,
              fontWeight: "bold",
              fontSize: 15,
              opacity: 0.8,
              letterSpacing: 1,
            }}
          >
            ✓ QC PASSED
          </div>
          <div
            style={{
              position: "absolute",
              top: 25,
              right: 30,
              textAlign: "center",
              userSelect: "none",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                gap: 2,
                height: 60,
                marginBottom: 6,
              }}
            >
              {[
                2, 1, 3, 2, 4, 1, 2, 5, 1, 3, 2, 4, 1, 2, 3, 5, 2, 1, 4, 2, 3,
              ].map((w, i) => (
                <div
                  key={i}
                  style={{
                    width: w,
                    height: "100%",
                    background: "#111",
                  }}
                />
              ))}
            </div>

            <div
              style={{
                fontSize: 11,
                letterSpacing: 2,
                fontFamily: "monospace",
                color: "#444",
              }}
            >
              YCY30032005
            </div>

            <div
              style={{
                fontSize: 10,
                color: "#777",
                marginTop: 2,
              }}
            >
              PRODUCT ID
            </div>
          </div>
          <hr />{" "}
          <img
            src={profile}
            alt="Profil"
            style={{
              width: 150,
              height: 180,
              objectFit: "cover",
              border: "10px solid white",
              borderBottom: "30px solid white",
              borderRadius: 3,
              boxShadow: "0 10px 25px rgba(0,0,0,.25)",
              transform: "rotate(-5deg)",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 300,
              top: 25,
              width: 200,
            }}
          >
            <button
              onClick={() => setShowPackage(!showPackage)}
              style={{
                width: "100%",
                padding: "12px",
                background: "#f4e7c3",
                border: "2px dashed #b79b5d",
                borderRadius: 12,
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: 18,
              }}
            >
              {showPackage
                ? "📦 Kutu İçeriğini Gizle ▲"
                : "📦 Kutu İçeriğini Göster ▼"}
            </button>

            {showPackage && (
              <div
                style={{
                  marginTop: 10,
                  background: "#f8ebc9",
                  padding: 15,
                  borderRadius: 12,
                  border: "2px dashed #b79b5d",
                  lineHeight: 1.8,
                }}
              >
                ✔ 1 Adet Yağmur <br />
                ✔ 2 Adet Göz <br />
                ✔ Sınırsız Hayal Gücü <br />
                ✔ Bilgisayar Mühendisliği <br />
                ✔ Biraz İnat <br />❌ Şarj Adaptörü Dahil Değildir
              </div>
            )}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "10px",
              gap: "50px",
            }}
          >
            {/* SOL TARAF */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "170px 1fr",
                rowGap: "1px",
                columnGap: "10px",
                flex: 1,
              }}
            >
              <b>📦 Ürün Adı</b>
              <span>Yağmur Çiğdem Yılmaz</span>

              <b>🏷 Model</b>
              <span>Human v20.0</span>

              <b>📅 Üretim Tarihi</b>
              <span>30 Mart 2005</span>

              <b>📍 Üretim Yeri</b>
              <span>Aksaray / Türkiye</span>
            </div>

            {/* SAĞ TARAF */}
            <div
              style={{
                transform: "translateY(-55px)",
                display: "grid",
                gridTemplateColumns: "170px 1fr",
                rowGap: "14px",
                columnGap: "12px",
                flex: 1,
              }}
            >
              <b>🏭 Üretici</b>
              <span>Yılmaz Industries</span>

              <b>🆔 Seri No</b>
              <span>YCY-30032005</span>

              <b>💾 İşletim Sistemi</b>
              <span>Human OS 20.0</span>

              <b>🟢 Durum</b>
              <span>Aktif</span>

              <b>🔄 Sürüm</b>
              <span>v20.0</span>

              <b>🛠 Garanti</b>
              <span>Sürekli Güncelleniyor</span>

              <b>📜 Lisans</b>
              <span>Open Source Personality</span>
            </div>
          </div>
        </div>
      )}
      {currentPage === "manual" && (
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "52%",
            transform: "translate(-50%,-50%)",
            width: 900,
            height: 500,
            background: "#fff3b0",
            borderRadius: 12,
            padding: 35,
            color: "#222",
            boxShadow: "0 20px 60px rgba(0,0,0,.45)",
            zIndex: 999,
            overflowY: "auto",
          }}
        >
          {/* POST-IT */}
          <div
            style={{
              position: "absolute",
              top: 20,
              right: 25,
              width: 140,
              background: "#ffe45c",
              padding: 12,
              borderRadius: 6,
              transform: "rotate(5deg)",
              boxShadow: "3px 4px 12px rgba(0,0,0,.25)",
            }}
          >
            <h4 style={{ margin: 0 }}>📝 Not</h4>

            <p
              style={{
                marginTop: 8,
                fontSize: 13,
                lineHeight: 1.4,
              }}
            >
              Kullanımdan önce
              <br />
              kahve verilmesi
              <br />
              tavsiye edilir ☕
            </p>
          </div>
          <button
            onClick={closePage}
            style={{
              position: "absolute",
              top: 20,
              left: 20,
              padding: "10px 18px",
              border: "none",
              borderRadius: 10,
              background: "#d9aa00",
              color: "#222",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: 15,
            }}
          >
            ← Geri
          </button>
          <h1>📘 Nasıl Kullanılır?</h1>

          <p
            style={{
              color: "#666",
              fontStyle: "italic",
              marginBottom: 20,
            }}
          >
            Bu ürünün en verimli şekilde kullanılabilmesi için aşağıdaki
            talimatları okuyunuz.
          </p>

          <hr />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 45,
              marginTop: 20,
            }}
          >
            {/* SOL TARAF */}
            <div>
              <h3>☕ Başlatma</h3>
              <p>İlk iletişim için samimi bir "Merhaba" yeterlidir.</p>

              <h3>💬 İletişim</h3>
              <p>Açık ve net iletişim tercih edilir.</p>
              <p>Size fazla soru soracaktır, endişelenmeyiniz.</p>

              <h3>⚡ Performans</h3>
              <p>
                <b>⚠️ Uyarı!</b> Açken çalıştırmayınız. (Bozulabilir.)
              </p>
              <p>Kahve ile performansı artar.</p>
              <p>Müzik açıkken daha verimli çalışır.</p>

              <h3>🚫 Kaçınılması Gerekenler</h3>
              <p>• Etrafta yavaş olan herhangi bir şey.</p>
              <p>• Ödevlerin son güne kalması.</p>
              <p>• Makyaj yapmadan dışarı çıkmak.</p>
              <h3>🛠 Sorun Giderme</h3>

              <p>
                <b>Sorun:</b> Sessizleşti.
              </p>
              <p>
                <b>Çözüm:</b> Bekleyiniz, çalışmaya zorlamayınız.
              </p>

              <p>
                <b>Sorun:</b> Mesajlara cevap vermiyor.
              </p>
              <p>
                <b>Çözüm:</b> Muhtemelen meşguldür. İşi bitince dönecektir.
              </p>

              <p>
                <b>Sorun:</b> Aşırı mutlu.
              </p>
              <p>
                <b>Çözüm:</b> Muhtemelen istediği kıyafeti almıştır.
              </p>
            </div>

            {/* SAĞ TARAF */}
            <div>
              <h3>🔋 Şarj Durumu</h3>
              <p>7-8 saat uyku önerilir.</p>
              <p>Bazen 12 saat uyursa şaşırmayınız.</p>

              <h3>⚠️ Uyarılar</h3>
              <p>Aç ve uykusuzken çok sinirlidir.</p>
              <p>Bu durumda kullanılması önerilmez.</p>

              <h3>🛠 Bakım</h3>
              <p>Cilt bakımı düzenli yapılmalıdır.</p>
              <p>Gün içerisinde mola verilmesi önerilir.</p>

              <h3>❤️ Bonus</h3>
              <p>Nazik davranıldığında çok hızlı adapte olur.</p>
              <p>Takım çalışmalarına uygundur.</p>
              <p>Yeni şeyler öğrenmekten hoşlanır.</p>

              <h3>⏳ Kullanım Ömrü</h3>
              <p>Yakın zamanda tükenebilir.</p>
              <p>Biraz yorulmuş hissediyor.</p>
            </div>
          </div>
        </div>
      )}
      {currentPage === "green" && <GreenPage />}
      {currentPage === "red" && <RedPage />}
      {currentPage === "modes" && <ModesPage />}
      {currentPage === "blue" && <BluePage />}
    </>
  );
}

export default function Scene() {
  return (
    <>
      {" "}
      <div
        style={{
          position: "absolute",
          top: 25,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 999,
          textAlign: "center",
          pointerEvents: "none",
        }}
      >
        <h1
          style={{
            color: "#f5e6c8",
            fontSize: 34,
            margin: 0,
            fontFamily: "'Georgia', serif",
            letterSpacing: 2,
            textShadow: "0 3px 10px rgba(0,0,0,.6)",
          }}
        >
          📖 Yağmur Çiğdem Yılmaz
        </h1>

        <p
          style={{
            marginTop: 8,
            color: "#d7c2a4",
            fontSize: 18,
            letterSpacing: 3,
          }}
        >
          KULLANIM KILAVUZU
        </p>
      </div>
      <Canvas
        shadows
        camera={{
          position: [0, 2.4, 6],
          fov: 32,
        }}
      >
        <color attach="background" args={["#10151d"]} />

        <ambientLight intensity={1.4} />

        <directionalLight castShadow position={[6, 8, 6]} intensity={2.5} />

        <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[30, 30]} />
          <meshStandardMaterial color="#6f4d38" />
        </mesh>

        <group position={[0, 0.02, 0]} scale={1.35}>
          <Book />
        </group>

        <ContactShadows opacity={0.6} blur={2.5} scale={25} far={6} />

        <OrbitControls
          enablePan={false}
          enableRotate={false}
          enableZoom={false}
        />
      </Canvas>
      <Overlay />
    </>
  );
}
