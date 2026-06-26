import { useState } from "react";
import { useBookStore } from "../../store/bookStore";

import happyMode from "../../assets/happyMode.png";
import socialMode from "../../assets/socialMode.png";
import studyMode from "../../assets/studyMode.png";
import lateMode from "../../assets/lateMode.png";
import shoppingMode from "../../assets/shoppingMode.png";
import rainMode from "../../assets/rainMode.png";
import homeMode from "../../assets/homeMode.png";

export default function ModesPage() {
  const closePage = useBookStore((s) => s.closePage);

  const [image, setImage] = useState(happyMode);
  const [title, setTitle] = useState("😊 Mutlu Mod");
  const [text, setText] = useState(
    "Bu mod aktifken ürün oldukça enerjik, konuşkan ve yeni deneyimlere açıktır.",
  );
  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "52%",
        transform: "translate(-50%,-50%)",
        width: 900,
        height: 500,
        background: "#dca8bf",
        borderRadius: 12,
        padding: 35,
        boxShadow: "0 20px 60px rgba(0,0,0,.45)",
        zIndex: 999,
        overflowY: "auto",
      }}
    >
      {" "}
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
          background: "#c32885",
          color: "white",
          fontWeight: "bold",
        }}
      >
        ← Kitaba Dön
      </button>
      <h1
        style={{
          color: "#d13a8b",
        }}
      >
        ⚙️ Çalışma Modları
      </h1>
      <p>
        Farklı durumlarda ürünün davranışı değişebilir. Aşağıdaki modlardan
        birini seçebilirsiniz.
      </p>
      <hr />
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: 20,
          marginBottom: 25,
        }}
      >
        <button
          onClick={() => {
            setImage(happyMode);
            setTitle("😊 Mutlu Mod");
            setText(
              "Bu mod aktifken ürün oldukça enerjik, konuşkan ve yeni deneyimlere açıktır.",
            );
          }}
        >
          😊
        </button>

        <button
          onClick={() => {
            setImage(socialMode);
            setTitle("👥 Arkadaş Modu");
            setText(
              "Yakın arkadaşlarıyla birlikteyken sosyal pil tamamen dolar.",
            );
          }}
        >
          👥
        </button>

        <button
          onClick={() => {
            setImage(studyMode);
            setTitle("📚 Ders Modu");
            setText(
              "Odak seviyesi yükselir, dış dünya ile bağlantı minimum seviyeye iner.",
            );
          }}
        >
          📚
        </button>

        <button
          onClick={() => {
            setImage(lateMode);
            setTitle("⏰ Derse Geç Kalmış Modu");
            setText(
              "Ürün yüksek hızda hareket eder. Panik seviyesi normalin üzerindedir.",
            );
          }}
        >
          ⏰
        </button>

        <button
          onClick={() => {
            setImage(shoppingMode);
            setTitle("🛍️ Alışveriş Modu");
            setText(
              "Ürün mağazalarda uzun süre vakit geçirebilir. Karar vermesi biraz zaman alabilir.",
            );
          }}
        >
          🛍️
        </button>

        <button
          onClick={() => {
            setImage(rainMode);
            setTitle("🌧️ Yağmurlu Gün");
            setText(
              "Kulaklık önerilir. Hayal gücü ve huzur seviyesi belirgin şekilde artar.",
            );
          }}
        >
          🌧️
        </button>

        <button
          onClick={() => {
            setImage(homeMode);
            setTitle("🏠 Ev Modu");
            setText(
              "En rahat hissedilen moddur. Battaniye ve atıştırmalık tavsiye edilir.",
            );
          }}
        >
          🏠
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={image}
          style={{
            width: 330,
            height: 340,
            objectFit: "cover",
            borderRadius: 18,
            boxShadow: "0 12px 30px rgba(0,0,0,.25)",
          }}
        />
      </div>
      <h2
        style={{
          marginTop: 25,
          textAlign: "center",
        }}
      >
        {title}
      </h2>
      <p
        style={{
          textAlign: "center",
          fontSize: 18,
          maxWidth: 650,
          margin: "15px auto",
        }}
      >
        {text}
      </p>
    </div>
  );
}
