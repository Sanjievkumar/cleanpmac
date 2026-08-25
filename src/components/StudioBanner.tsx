interface StudioBannerProps {
  images: string[];
  height?: string;
}

export default function StudioBanner({ images, height = "450px" }: StudioBannerProps) {
  return (
    <div style={{
      width: "100%",
      height: height,
      background: "radial-gradient(ellipse at bottom, #ffffff 0%, #eaedf2 100%)",
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-end",
      paddingBottom: "3rem",
      gap: "2rem",
      overflow: "hidden"
    }}>
      {/* Background Studio Lights */}
      <div style={{ position: "absolute", top: "-10%", left: "50%", transform: "translateX(-50%)", width: "80%", height: "50%", background: "radial-gradient(ellipse at top, rgba(255,255,255,0.8) 0%, transparent 70%)", zIndex: 0 }}></div>

      {images.map((img, i) => {
        // Vary the height and zIndex slightly to give depth
        const isCenter = i === Math.floor(images.length / 2);
        const itemHeight = isCenter ? "85%" : (i % 2 === 0 ? "65%" : "75%");
        const zIndex = isCenter ? 3 : (i % 2 === 0 ? 1 : 2);
        
        return (
          <div key={i} style={{ position: "relative", height: itemHeight, display: "flex", alignItems: "flex-end", zIndex }}>
            <img src={img} alt="Product" style={{ maxHeight: "100%", maxWidth: "220px", objectFit: "contain", filter: "drop-shadow(0 20px 20px rgba(0,0,0,0.15))" }} />
            {/* Floor Shadow */}
            <div style={{ position: "absolute", bottom: "-15px", left: "10%", width: "80%", height: "20px", background: "radial-gradient(ellipse at center, rgba(0,0,0,0.15) 0%, transparent 70%)", borderRadius: "50%", zIndex: -1 }}></div>
          </div>
        );
      })}
      
      {/* Glossy Floor Reflection Gradient */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "4rem", background: "linear-gradient(to top, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.4) 40%, transparent 100%)", zIndex: 10, pointerEvents: "none" }}></div>
    </div>
  );
}

