import photo1 from "@/assets/photo1.jpeg";
import photo3 from "@/assets/photo3.jpeg";
import photo4 from "@/assets/photo4.jpeg";
import photo5 from "@/assets/photo5.jpeg";
import photo6 from "@/assets/photo6.jpeg";
import photo7 from "@/assets/photo7.jpeg";
import photo8 from "@/assets/photo8.jpeg";
import photo9 from "@/assets/photo9.jpeg";
import photo10 from "@/assets/photo10.jpeg";
import photo11 from "@/assets/photo11.jpeg";
import photo12 from "@/assets/photo12.jpeg";
import photo13 from "@/assets/photo13.jpeg";
import photo14 from "@/assets/photo14.jpeg";
import photo15 from "@/assets/photo15.jpeg";
import photo16 from "@/assets/photo16.jpeg";
import photo17 from "@/assets/photo17.jpeg";
import photo18 from "@/assets/photo18.jpeg";
import photo19 from "@/assets/photo19.jpeg";
import photo20 from "@/assets/photo20.jpeg";
import photo21 from "@/assets/photo21.jpeg";
import photo22 from "@/assets/photo22.jpeg";
import photo23 from "@/assets/photo23.jpeg";
import photo24 from "@/assets/photo24.jpeg";

const photos = [
  { src: photo1, love: "Iyawo mi" },
  { src: photo3, love: "Te amo" },
  { src: photo4, love: "Ìfẹ́ mi" },
  { src: photo5, love: "I Love You" },
  { src: photo6, love: "사랑해요" },
  { src: photo10, love: "أحبك" },
  { src: photo7, love: "Ich liebe dich" },
  { src: photo8, love: "Ti amo" },
  { src: photo9, love: "Je t'aime" },
  { src: photo11, love: "Eu te amo" },
  { src: photo12, love: "Я тебя люблю" },
  { src: photo13, love: "Ik hou van je" },
  { src: photo14, love: "我爱你" },
  { src: photo15, love: "ฉันรักคุณ" },
  { src: photo16, love: "Σ' αγαπώ" },
  { src: photo17, love: "Jag älskar dig" },
  { src: photo18, love: "Seni seviyorum" },
  { src: photo19, love: "Mahal kita" },
  { src: photo20, love: "Nakupenda" },
  { src: photo21, love: "Ina son ku" },
  { src: photo22, love: "Ina son ku (Hausa)" },
  { src: photo23, love: "A hụrụ m gị n’anya" },
];

const PhotoGallery = () => {
  return (
    <section
      className="py-24 px-6 bg-black/50 bg-center bg-blend-overlay bg-fixed"
      style={{ backgroundImage: `url(${photo24})` }}
    >
      <div className="max-w-5xl xl:max-w-[1300px] mx-auto">
        <p className="font-sans text-xs tracking-[0.5em] uppercase text-white mb-4 text-center">
          Our Memories
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-gold-light text-center mb-12">
          Moments Together
        </h2>

        <div className="columns-1 sm:columns-2 lg:columns-3 2xl:columns-4 gap-4 space-y-4">
          {photos.map((photo, i) => (
            <div key={i} className="gallery-item">
              <img src={photo.src} alt={`Memory ${i + 1}`} loading="lazy" />
              <div className="gallery-overlay">
                <span
                  className="font-script text-2xl sm:text-3xl"
                  style={{ color: "hsl(30, 30%, 95%)" }}
                >
                  {photo.love}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="section-divider" />
    </section>
  );
};

export default PhotoGallery;
