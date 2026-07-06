import { motion } from "framer-motion";

const brands = [
  { name: "Samskruthi", img: "/logos_png_hd/01_Samskruthi.png" },
  { name: "Vemana Institute of Technology", img: "/logos_png_hd/02_Vemana_Institute_of_Technology.png" },
  { name: "Moxx Entertainments", img: "/logos_png_hd/03_Moxx_Entertainments.png" },
  { name: "Augrey", img: "/logos_png_hd/04_Augrey.png" },
  { name: "Marzi", img: "/logos_png_hd/05_Marzi.png" },
  { name: "LSSM", img: "/logos_png_hd/06_LSSM_London_Serenade_School_of_Music.png" },
  { name: "Sunburn Campus", img: "/logos_png_hd/07_Sunburn_Campus.png" },
  { name: "Printo", img: "/logos_png_hd/09_Printo.png" },
  { name: "Saachi", img: "/logos_png_hd/10_Saachi.png" },
  { name: "Enrgy", img: "/logos_png_hd/11_Enrgy.png" },
  { name: "Thamarassery Churam", img: "/logos_png_hd/13_Thamarassery_Churam.png" },
  { name: "Govt Dental College", img: "/logos_png_hd/14_Govt_Dental_College_Alappuzha.png" },
  { name: "Medical Students Network", img: "/logos_png_hd/16_Medical_Students_Network.png" },
  { name: "Decathlon", img: "/logos_png_hd/17_Decathlon.png" },
  { name: "Shot Circuit", img: "/logos_png_hd/18_Shot_Circuit.png" },
  { name: "Geeta Kitchens", img: "/logos_png_hd/19_Geeta_Kitchens.png" },
  { name: "Hot Mug", img: "/logos_png_hd/20_Hot_Mug.png" },
  { name: "YLG Salon", img: "/logos_png_hd/22_YLG_Salon.png" },
  { name: "Aqua Solution", img: "/logos_png_hd/23_AquaSolution.png" },
  { name: "Snack & Ladder", img: "/logos_png_hd/24_Snack_and_Ladder.png" },
  { name: "PluginHive", img: "/logos_png_hd/27_PluginHive.png" },
  { name: "Narthana", img: "/logos_png_hd/28_Narthana.png" },
  { name: "CareerLabs", img: "/logos_png_hd/35_CareerLabs.png" },
  { name: "Unibic", img: "/logos_png_hd/logo_Red-1.png" }
];

export default function Brands() {
  return (
    <section className="brands-ticker">
      <div className="ticker-wrap">
        <div className="ticker-track">
          {brands.map((b, idx) => (
            <div key={`brand-a-${idx}`} className="ticker-item" aria-label={b.name}>
              <img src={b.img} alt={b.name} />
            </div>
          ))}
          {brands.map((b, idx) => (
            <div key={`brand-b-${idx}`} className="ticker-item" aria-label={b.name}>
              <img src={b.img} alt={b.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
