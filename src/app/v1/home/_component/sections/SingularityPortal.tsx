import { Fingerprint, Gamepad2, Headphones, Terminal } from "lucide-react";

export const SingularityPortal = () => {
  const doors = [
    {
      id: "work",
      title: "The Workshop",
      subtitle: "Code & Projects",
      icon: Terminal,
      color: "#4A6FA5", // Blue
      link: "/v1/work",
    },
    {
      id: "life",
      title: "Identity",
      subtitle: "The Living Room",
      icon: Fingerprint,
      color: "#6B8F71", // Sage Green
      link: "/v1/life",
    },
    {
      id: "music",
      title: "Sound Room",
      subtitle: "Playlists & Vibes",
      icon: Headphones,
      color: "#9B5DE5", // Purple
      link: "/v1/music",
    },
    {
      id: "gaming",
      title: "The Arcade",
      subtitle: "Pixel Dimensions",
      icon: Gamepad2,
      color: "#F15BB5", // Pink
      link: "/v1/gaming",
    },
  ];

  return (
    <div className="relative z-10 flex min-h-[100vh] w-full flex-col items-center justify-center bg-transparent py-20 overflow-hidden">
      {/* Ambient background glow shared by the portal */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-museum-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="group relative flex flex-col items-center justify-center gap-24 z-10 w-full max-w-7xl px-4">
        {/* The Portal Header */}
        <div className="relative flex flex-col items-center gap-8">
          <div className="relative z-50 flex h-48 w-48 items-center justify-center rounded-full border border-museum-gold/20 bg-[#121214]/50 shadow-[0_0_50px_rgba(212,175,55,0.05)] backdrop-blur-md transition-all duration-1000 hover:scale-110 hover:border-museum-gold/60 hover:shadow-[0_0_120px_rgba(212,175,55,0.3)] cursor-pointer">
            <div className="absolute h-40 w-40 rounded-full border-[0.5px] border-museum-gold/30 border-dashed animate-[spin_12s_linear_infinite]" />
            <div className="absolute h-28 w-28 rounded-full border-t-[1.5px] border-museum-gold/70 animate-[spin_6s_linear_infinite_reverse]" />
            <div className="absolute h-16 w-16 rounded-full border-b-2 border-white/40 animate-[spin_3s_linear_infinite]" />

            <div className="relative flex h-6 w-6 items-center justify-center">
              <div className="absolute h-full w-full animate-ping rounded-full bg-white opacity-60 blur-[3px]" />
              <div className="h-3 w-3 rounded-full bg-white shadow-[0_0_40px_rgba(255,255,255,1),0_0_80px_rgba(212,175,55,1)] animate-pulse" />
            </div>

            <div className="absolute h-full w-full animate-[spin_5s_linear_infinite]">
              <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full border-[1.5px] border-museum-gold bg-[#121214] shadow-[0_0_20px_rgba(212,175,55,1)]" />
            </div>

            <div className="absolute inset-0 rounded-full bg-museum-gold/0 transition-colors duration-700 group-hover:bg-museum-gold/10 blur-xl" />
          </div>

          <div className="flex flex-col items-center gap-3 text-center">
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-museum-gold/40" />
              <h3 className="font-display text-2xl md:text-3xl font-light tracking-[0.4em] text-white">
                THE NEXUS
              </h3>
              <div className="h-px w-12 bg-museum-gold/40" />
            </div>
            <p className="font-heading text-sm uppercase tracking-[0.2em] text-museum-gold/80">
              The Linear Timeline Ends Here
            </p>
            <p className="mt-2 font-sans text-xs italic tracking-widest text-white/40">
              Choose your next dimension.
            </p>
          </div>
        </div>

        {/* 4 Doors of Dimension */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full z-10">
          {doors.map((door) => {
            const Icon = door.icon;
            return (
              <a
                key={door.id}
                href={door.link}
                className="group/door relative flex h-96 w-full flex-col items-center justify-between overflow-hidden rounded-t-full rounded-b-xl border border-white/10 bg-black/40 p-8 backdrop-blur-md transition-all duration-700 hover:-translate-y-4"
              >
                {/* Dynamic Inner Light Gradient Base */}
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover/door:opacity-20"
                  style={{
                    background: `linear-gradient(to top, ${door.color} 0%, transparent 100%)`,
                  }}
                />

                {/* Intensive Door Frame Light */}
                <div
                  className="absolute inset-0 rounded-t-full rounded-b-xl opacity-0 transition-all duration-700 group-hover/door:opacity-100"
                  style={{
                    boxShadow: `inset 0 0 60px -20px ${door.color}, 0 0 20px -10px ${door.color}`,
                    border: `1px solid ${door.color}`,
                  }}
                />

                {/* Top Icon section */}
                <div className="mt-8 flex flex-col items-center gap-4 z-10 transition-transform duration-700 group-hover/door:translate-y-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/5 transition-all duration-700 group-hover/door:scale-110 group-hover/door:border-white/50">
                    <Icon
                      size={24}
                      strokeWidth={1}
                      className="text-white/60 transition-colors duration-700 group-hover/door:text-white"
                    />
                  </div>
                </div>

                {/* Bottom text section */}
                <div className="z-10 flex flex-col items-center text-center transition-transform duration-700 group-hover/door:-translate-y-4">
                  <h4 className="font-display text-lg tracking-[0.3em] text-white/80 uppercase transition-colors duration-700 group-hover/door:text-white mb-2">
                    {door.title}
                  </h4>
                  <p
                    className="font-sans text-[10px] uppercase tracking-[0.2em] transition-colors duration-700 opacity-60 group-hover/door:opacity-100"
                    style={{ color: door.color }}
                  >
                    {door.subtitle}
                  </p>
                </div>

                {/* Base slit of pure light */}
                <div
                  className="absolute bottom-0 h-1.5 w-1/3 rounded-t-full opacity-0 transition-all duration-700 group-hover/door:w-2/3 group-hover/door:opacity-100"
                  style={{
                    backgroundColor: door.color,
                    boxShadow: `0 0 20px ${door.color}`,
                  }}
                />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
