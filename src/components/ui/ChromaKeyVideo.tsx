"use client";

import { useEffect, useRef } from "react";

interface ChromaKeyVideoProps {
  src: string;
  className?: string;
}

export default function ChromaKeyVideo({ src, className }: ChromaKeyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    // Use willReadFrequently to optimize for getImageData calls
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    let animationFrameId: number;

    const drawFrame = () => {
      if (video.paused || video.ended) {
        animationFrameId = requestAnimationFrame(drawFrame);
        return;
      }

      if (video.videoWidth === 0 || video.videoHeight === 0) {
        animationFrameId = requestAnimationFrame(drawFrame);
        return;
      }

      // Ensure canvas matches video resolution
      if (canvas.width !== video.videoWidth || canvas.height !== video.videoHeight) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
      }

      // Draw the video frame onto the canvas
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      // Extract pixel data
      const frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const length = frame.data.length / 4;

      for (let i = 0; i < length; i++) {
        const r = frame.data[i * 4 + 0];
        const g = frame.data[i * 4 + 1];
        const b = frame.data[i * 4 + 2];

        // Apple SVG Filter Logic:
        // A = 4*R - 5*G + 4*B + 255
        let a = 4 * r - 5 * g + 4 * b + 255;
        
        // Clamping alpha
        if (a < 0) a = 0;
        if (a > 255) a = 255;

        // Apply alpha to pixel
        // Pre-multiplying rgb by alpha is not necessary for putImageData, but we can set the pixel to black if it's fully transparent
        if (a === 0) {
          frame.data[i * 4 + 0] = 0;
          frame.data[i * 4 + 1] = 0;
          frame.data[i * 4 + 2] = 0;
          frame.data[i * 4 + 3] = 0; // Transparent (or we can use 255 for black)
        } else {
          frame.data[i * 4 + 3] = a;
        }
      }

      ctx.putImageData(frame, 0, 0);
      animationFrameId = requestAnimationFrame(drawFrame);
    };

    const onPlay = () => {
      drawFrame();
    };

    video.addEventListener("play", onPlay);
    // If it's already playing, start drawing
    if (!video.paused) {
      drawFrame();
    }

    return () => {
      video.removeEventListener("play", onPlay);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Hidden video element used as the source */}
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className="opacity-0 absolute w-[1px] h-[1px] pointer-events-none -z-10"
      />
      {/* The canvas displaying the processed frames */}
      <canvas ref={canvasRef} className={className} />
    </>
  );
}
