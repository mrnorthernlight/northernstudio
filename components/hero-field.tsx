"use client";

import { useEffect, useRef } from "react";

const VERT = `
attribute vec2 a;
void main() {
  gl_Position = vec4(a, 0.0, 1.0);
}
`;

const FRAG = `
precision mediump float;
uniform vec2 u_res;
uniform float u_time;
uniform vec2 u_mouse;
void main() {
  vec2 uv = gl_FragCoord.xy / u_res;
  vec2 p = uv - 0.5;
  p.x *= u_res.x / max(u_res.y, 1.0);
  vec2 m = (u_mouse - 0.5) * vec2(0.35, 0.2);
  float t = u_time;
  float field = 0.0;
  vec3 col = vec3(0.0);
  for (int i = 0; i < 5; i++) {
    float fi = float(i);
    float wave = sin(p.x * (1.4 + fi * 0.45) + t * (0.22 + fi * 0.05) + m.x + fi);
    float y = p.y + m.y * 0.4 - (fi - 2.0) * 0.11 + wave * (0.055 + fi * 0.012);
    float band = exp(-pow(y * (9.0 - fi * 0.4), 2.0));
    vec3 ice = vec3(0.42, 0.86, 1.0);
    vec3 violet = vec3(0.62, 0.42, 1.0);
    vec3 gold = vec3(0.98, 0.74, 0.42);
    vec3 tint = mix(violet, ice, 0.5 + 0.5 * sin(fi + p.x));
    if (i == 2) tint = mix(tint, gold, 0.72);
    col += tint * band * (0.55 + 0.2 * sin(t * 0.3 + fi));
    field += band;
  }
  float glow = exp(-pow(length(p - vec2(0.15, -0.05)) * 1.4, 2.0)) * 0.22;
  col += vec3(0.35, 0.25, 0.85) * glow;
  float vignette = smoothstep(1.25, 0.25, length(p));
  col *= vignette;
  float alpha = clamp(field * 0.72 + glow, 0.0, 0.92);
  gl_FragColor = vec4(col, alpha);
}
`;

export function HeroField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const gl = canvas.getContext("webgl", {
      alpha: true,
      antialias: false,
      depth: false,
      stencil: false,
      powerPreference: "low-power",
      premultipliedAlpha: false,
    });
    if (!gl) return;

    const compile = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vs = compile(gl.VERTEX_SHADER, VERT);
    const fs = compile(gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) return;
    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const location = gl.getAttribLocation(program, "a");
    gl.enableVertexAttribArray(location);
    gl.vertexAttribPointer(location, 2, gl.FLOAT, false, 0, 0);
    gl.useProgram(program);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    const uRes = gl.getUniformLocation(program, "u_res");
    const uTime = gl.getUniformLocation(program, "u_time");
    const uMouse = gl.getUniformLocation(program, "u_mouse");
    const mouse = { x: 0.5, y: 0.5 };
    let frame = 0;
    let running = true;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const width = Math.max(1, Math.floor(rect.width * dpr));
      const height = Math.max(1, Math.floor(rect.height * dpr));
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    const draw = (time: number) => {
      resize();
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, time * 0.001);
      gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    const onPointer = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = (event.clientX - rect.left) / Math.max(rect.width, 1);
      mouse.y = 1 - (event.clientY - rect.top) / Math.max(rect.height, 1);
    };

    resize();
    draw(reduced ? 1200 : 0);

    const loop = (time: number) => {
      if (!running) return;
      draw(time);
      frame = requestAnimationFrame(loop);
    };

    if (!reduced) {
      frame = requestAnimationFrame(loop);
      canvas.addEventListener("pointermove", onPointer);
    }

    const onVisibility = () => {
      if (reduced) return;
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(frame);
      } else if (!running) {
        running = true;
        frame = requestAnimationFrame(loop);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      running = false;
      cancelAnimationFrame(frame);
      canvas.removeEventListener("pointermove", onPointer);
      document.removeEventListener("visibilitychange", onVisibility);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteBuffer(buffer);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-field" aria-hidden="true" />;
}
