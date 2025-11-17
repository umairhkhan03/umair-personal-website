import { useEffect, useState, useRef } from "react";

interface TimezoneClockProps {
  scrollPosition?: number;
}

const TimezoneClock = ({ scrollPosition = 0 }: TimezoneClockProps) => {
  const [times, setTimes] = useState({
    riyadh: new Date(),
    bhopal: new Date(),
    manchester: new Date(),
  });
  
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);
  
  // Track cumulative rotations to prevent reverse rotation on wrap-around
  const rotationRefs = useRef({
    riyadh: { hour: 0, minute: 0, second: 0 },
    bhopal: { hour: 0, minute: 0, second: 0 },
    manchester: { hour: 0, minute: 0, second: 0 },
  });

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      
      // Convert to each timezone
      const riyadhTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Riyadh' }));
      const bhopalTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
      const manchesterTime = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/London' }));

      setTimes({
        riyadh: riyadhTime,
        bhopal: bhopalTime,
        manchester: manchesterTime,
      });
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const getRotation = (date: Date, city: 'riyadh' | 'bhopal' | 'manchester') => {
    const hours = date.getHours() % 12;
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const currentHour = (hours * 30) + (minutes * 0.5); // 30° per hour, 0.5° per minute
    const currentMinute = (minutes * 6) + (seconds * 0.1); // 6° per minute, 0.1° per second
    const currentSecond = seconds * 6; // 6° per second

    // Track cumulative rotation to prevent reverse rotation on wrap-around
    const prev = rotationRefs.current[city];
    
    // Helper function to handle wrap-around
    const handleWrap = (current: number, previous: number) => {
      // If current is significantly less than previous (wrap-around), add 360
      if (current < previous - 180) {
        return previous + (current + 360 - previous);
      }
      // Normal forward progression
      return previous + (current - previous);
    };
    
    const cumulativeSecond = handleWrap(currentSecond, prev.second);
    const cumulativeMinute = handleWrap(currentMinute, prev.minute);
    const cumulativeHour = handleWrap(currentHour, prev.hour);

    // Update refs
    rotationRefs.current[city] = {
      hour: cumulativeHour,
      minute: cumulativeMinute,
      second: cumulativeSecond,
    };

    return {
      hour: cumulativeHour,
      minute: cumulativeMinute,
      second: cumulativeSecond,
    };
  };

  const riyadhAngles = getRotation(times.riyadh, 'riyadh');
  const bhopalAngles = getRotation(times.bhopal, 'bhopal');
  const manchesterAngles = getRotation(times.manchester, 'manchester');

  // Calculate scale based on scroll position (shrink as you scroll down)
  // Scale from 1.0 at scroll 0 to ~0.4 at scroll 800px
  const maxScroll = 800;
  const minScale = 0.4;
  const scaleProgress = Math.min(1, scrollPosition / maxScroll);
  const scale = 1 - (scaleProgress * (1 - minScale));

  return (
    <div 
      className="flex flex-col items-center gap-12 animate-fade-in transition-transform duration-300 ease-out" 
      style={{ 
        transform: `scale(${scale})`,
        transformOrigin: 'center center',
        willChange: 'transform'
      }}
    >
      {/* Clock Container */}
      <div className="relative w-64 h-64 md:w-80 md:h-80">
        <svg className="w-full h-full" viewBox="0 0 200 200">
          {/* Outer circle */}
          <circle
            cx="100"
            cy="100"
            r="95"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            opacity="0.15"
          />
          
          {/* Hour markers */}
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30 - 90) * (Math.PI / 180);
            const x1 = 100 + 85 * Math.cos(angle);
            const y1 = 100 + 85 * Math.sin(angle);
            const x2 = 100 + 90 * Math.cos(angle);
            const y2 = 100 + 90 * Math.sin(angle);
            
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="currentColor"
                strokeWidth={i % 3 === 0 ? "2" : "1.5"}
                opacity="0.2"
              />
            );
          })}

          {/* Riyadh Hands - Lightest */}
          <g 
            transform={`rotate(${riyadhAngles.hour} 100 100)`}
            className="transition-all duration-300 ease-out"
          >
            <line
              x1="100"
              y1="100"
              x2="100"
              y2="50"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              opacity={hoveredCity === null ? 0.25 : hoveredCity === 'riyadh' ? 0.95 : 0.15}
              className="transition-opacity duration-300"
            />
          </g>
          <g 
            transform={`rotate(${riyadhAngles.minute} 100 100)`}
            className="transition-all duration-300 ease-out"
          >
            <line
              x1="100"
              y1="100"
              x2="100"
              y2="35"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity={hoveredCity === null ? 0.25 : hoveredCity === 'riyadh' ? 0.95 : 0.15}
              className="transition-opacity duration-300"
            />
          </g>
          <g 
            transform={`rotate(${riyadhAngles.second} 100 100)`}
            className="transition-all duration-100 ease-linear"
          >
            <line
              x1="100"
              y1="100"
              x2="100"
              y2="25"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity={hoveredCity === null ? 0.2 : hoveredCity === 'riyadh' ? 0.85 : 0.1}
              className="transition-opacity duration-300"
            />
          </g>

          {/* Bhopal Hands - Medium */}
          <g 
            transform={`rotate(${bhopalAngles.hour} 100 100)`}
            className="transition-all duration-300 ease-out"
          >
            <line
              x1="100"
              y1="100"
              x2="100"
              y2="50"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              opacity={hoveredCity === null ? 0.45 : hoveredCity === 'bhopal' ? 0.95 : 0.2}
              className="transition-opacity duration-300"
            />
          </g>
          <g 
            transform={`rotate(${bhopalAngles.minute} 100 100)`}
            className="transition-all duration-300 ease-out"
          >
            <line
              x1="100"
              y1="100"
              x2="100"
              y2="35"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity={hoveredCity === null ? 0.45 : hoveredCity === 'bhopal' ? 0.95 : 0.2}
              className="transition-opacity duration-300"
            />
          </g>
          <g 
            transform={`rotate(${bhopalAngles.second} 100 100)`}
            className="transition-all duration-100 ease-linear"
          >
            <line
              x1="100"
              y1="100"
              x2="100"
              y2="25"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity={hoveredCity === null ? 0.35 : hoveredCity === 'bhopal' ? 0.85 : 0.15}
              className="transition-opacity duration-300"
            />
          </g>

          {/* Manchester Hands - Darkest */}
          <g 
            transform={`rotate(${manchesterAngles.hour} 100 100)`}
            className="transition-all duration-300 ease-out"
          >
            <line
              x1="100"
              y1="100"
              x2="100"
              y2="50"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              opacity={hoveredCity === null ? 0.7 : hoveredCity === 'manchester' ? 0.95 : 0.3}
              className="transition-opacity duration-300"
            />
          </g>
          <g 
            transform={`rotate(${manchesterAngles.minute} 100 100)`}
            className="transition-all duration-300 ease-out"
          >
            <line
              x1="100"
              y1="100"
              x2="100"
              y2="35"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity={hoveredCity === null ? 0.7 : hoveredCity === 'manchester' ? 0.95 : 0.3}
              className="transition-opacity duration-300"
            />
          </g>
          <g 
            transform={`rotate(${manchesterAngles.second} 100 100)`}
            className="transition-all duration-100 ease-linear"
          >
            <line
              x1="100"
              y1="100"
              x2="100"
              y2="25"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity={hoveredCity === null ? 0.6 : hoveredCity === 'manchester' ? 0.85 : 0.25}
              className="transition-opacity duration-300"
            />
          </g>

          {/* Center dot */}
          <circle cx="100" cy="100" r="4" fill="currentColor" opacity="0.8" />
        </svg>
      </div>

      {/* Time Labels - Equal spacing with Bhopal centered */}
      <div className="w-full max-w-3xl flex justify-between items-start text-center">
        <div 
          className="flex-1 cursor-pointer transition-all duration-300"
          onMouseEnter={() => setHoveredCity('riyadh')}
          onMouseLeave={() => setHoveredCity(null)}
          style={{
            opacity: hoveredCity === null ? 1 : hoveredCity === 'riyadh' ? 1 : 0.4,
            transform: hoveredCity === 'riyadh' ? 'scale(1.05)' : 'scale(1)'
          }}
        >
          <div className="h-5"></div>
          <div className="text-sm text-muted-foreground tracking-wide">riyadh</div>
          <div className="font-mono text-base mt-1" style={{ opacity: 0.25 }}>
            {times.riyadh.toLocaleTimeString('en-US', { 
              hour: '2-digit', 
              minute: '2-digit',
              hour12: false 
            })}
          </div>
        </div>
        
        <div 
          className="flex-1 cursor-pointer transition-all duration-300"
          onMouseEnter={() => setHoveredCity('bhopal')}
          onMouseLeave={() => setHoveredCity(null)}
          style={{
            opacity: hoveredCity === null ? 1 : hoveredCity === 'bhopal' ? 1 : 0.4,
            transform: hoveredCity === 'bhopal' ? 'scale(1.05)' : 'scale(1)'
          }}
        >
          <div className="h-5"></div>
          <div className="text-sm text-muted-foreground tracking-wide">bhopal</div>
          <div className="font-mono text-base mt-1" style={{ opacity: 0.45 }}>
            {times.bhopal.toLocaleTimeString('en-US', { 
              hour: '2-digit', 
              minute: '2-digit',
              hour12: false 
            })}
          </div>
        </div>
        
        <div 
          className="flex-1 cursor-pointer transition-all duration-300 relative"
          onMouseEnter={() => setHoveredCity('manchester')}
          onMouseLeave={() => setHoveredCity(null)}
          style={{
            opacity: hoveredCity === null ? 1 : hoveredCity === 'manchester' ? 1 : 0.4,
            transform: hoveredCity === 'manchester' ? 'scale(1.05)' : 'scale(1)',
            marginLeft: '2px'
          }}
        >
          <div className="text-xs text-muted-foreground h-5 flex items-end justify-center" style={{ opacity: 0.5 }}>here today!</div>
          <div className="text-sm text-muted-foreground tracking-wide">manchester</div>
          <div className="font-mono text-base mt-1" style={{ opacity: 0.7 }}>
            {times.manchester.toLocaleTimeString('en-US', { 
              hour: '2-digit', 
              minute: '2-digit',
              hour12: false 
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimezoneClock;

