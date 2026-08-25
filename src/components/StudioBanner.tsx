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
        const itemHeight = isCenter ? "75%" : (i % 2 === 0 ? "55%" : "65%");
        const zIndex = isCenter ? 3 : (i % 2 === 0 ? 1 : 2);
        
        return (
          <div key={i} style={{ 
            position: "relative", 
            height: "100%", 
            width: "240px", 
            display: "flex", 
            flexDirection: "column",
            justifyContent: "flex-end", 
            alignItems: "center", 
            zIndex 
          }}>
            {/* Product Image */}
            <div style={{ 
              height: itemHeight, 
              display: "flex", 
              alignItems: "flex-end", 
              justifyContent: "center",
              marginBottom: "12px",
              position: "relative",
              zIndex: 2
            }}>
              <img 
                src={img} 
                alt="Product" 
                style={{ 
                  maxHeight: "100%", 
                  maxWidth: "100%", 
                  objectFit: "contain", 
                  mixBlendMode: "multiply",
                  transform: "translateY(6px)"
                }} 
              />
            </div>

            {/* Showroom Podium */}
            <div style={{
              width: "160px",
              height: "14px",
              background: "linear-gradient(to bottom, #f1f5f9, #cbd5e1)",
              borderRadius: "50%",
              border: "1px solid #94a3b8",
              position: "relative",
              zIndex: 1,
              boxShadow: "inset 0 1px 3px rgba(255,255,255,0.8), 0 4px 6px rgba(0,0,0,0.05)"
            }}>
              {/* Inner top highlight */}
              <div style={{
                position: "absolute",
                top: "1px",
                left: "1px",
                right: "1px",
                bottom: "1px",
                background: "radial-gradient(circle at center, #ffffff 0%, #f1f5f9 100%)",
                borderRadius: "50%"
              }} />
            </div>

            {/* Under-podium soft floor shadow */}
            <div style={{ 
              position: "absolute", 
              bottom: "-4px", 
              width: "180px", 
              height: "12px", 
              background: "radial-gradient(ellipse at center, rgba(0,0,0,0.12) 0%, transparent 70%)", 
              borderRadius: "50%", 
              zIndex: 0 
            }} />
          </div>
        );
      })}
    </div>
  );
}

