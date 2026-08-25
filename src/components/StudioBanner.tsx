interface StudioBannerProps {
  images: string[];
  height?: string;
}

export default function StudioBanner({ images, height = "450px" }: StudioBannerProps) {
  return (
    <div style={{
      width: "100%",
      height: height,
      backgroundColor: "#ffffff",
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-end",
      paddingBottom: "3rem",
      gap: "3rem",
      overflow: "hidden",
      borderBottom: "1px solid var(--border-color)"
    }}>
      {/* Background soft studio light */}
      <div style={{ position: "absolute", top: "0", left: "50%", transform: "translateX(-50%)", width: "100%", height: "100%", background: "radial-gradient(circle at center, rgba(245,247,250,0.8) 0%, #ffffff 80%)", zIndex: 0 }}></div>

      {images.map((img, i) => {
        // Vary the height and zIndex slightly to give depth
        const isCenter = i === Math.floor(images.length / 2);
        const itemHeight = isCenter ? "85%" : (i % 2 === 0 ? "65%" : "75%");
        const zIndex = isCenter ? 3 : (i % 2 === 0 ? 1 : 2);
        
        return (
          <div key={i} style={{ position: "relative", height: itemHeight, display: "flex", alignItems: "flex-end", zIndex }}>
            <img 
              src={img} 
              alt="Product" 
              style={{ 
                maxHeight: "100%", 
                maxWidth: "240px", 
                objectFit: "contain", 
                mixBlendMode: "multiply"
              }} 
            />
            {/* Floor Shadow */}
            <div style={{ position: "absolute", bottom: "-10px", left: "10%", width: "80%", height: "15px", background: "radial-gradient(ellipse at center, rgba(0,0,0,0.1) 0%, transparent 70%)", borderRadius: "50%", zIndex: -1 }}></div>
          </div>
        );
      })}
    </div>
  );
}

