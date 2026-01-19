// typescript
import React, { useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { SVGRenderer } from "three/examples/jsm/renderers/SVGRenderer";

type Props = {
    modelUrl: string; // e.g. /models/candle.glb (file in `public/models`)
    width?: number;
    height?: number;
};

export default function GlbToImage({ modelUrl, width = 50, height = 50 }: Props) {
    const loadingRef = useRef(false);

    async function loadGltf(url: string) {
        return new Promise<THREE.Group>((resolve, reject) => {
            const loader = new GLTFLoader();
            loader.load(
                url,
                gltf => {
                    resolve(gltf.scene);
                },
                undefined,
                err => reject(err)
            );
        });
    }

    function downloadBlob(data: BlobPart, type: string, filename: string) {
        const blob = new Blob([data], { type });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
    }

    async function exportImage(format: "svg" | "png" = "svg") {
        if (loadingRef.current) return;
        loadingRef.current = true;

        try {
            const scene = new THREE.Scene();
            const model = await loadGltf(modelUrl);
            scene.add(model);

            // basic lighting
            const hemi = new THREE.HemisphereLight(0xffffff, 0x444444, 1.0);
            scene.add(hemi);
            const dir = new THREE.DirectionalLight(0xffffff, 0.8);
            dir.position.set(2, 2, 2);
            scene.add(dir);

            // compute model center & size
            const box = new THREE.Box3().setFromObject(model);
            const size = new THREE.Vector3();
            box.getSize(size);
            const center = new THREE.Vector3();
            box.getCenter(center);

            // camera that frames object
            const maxDim = Math.max(size.x, size.y, size.z);
            const fov = 45;
            const distance = maxDim / (2 * Math.tan((fov * Math.PI) / 360));
            const camera = new THREE.PerspectiveCamera(fov, width / height, 0.1, 1000);

// tweak these values to control tilt and rotation
            const elevationDeg = 20; // raise camera by 20 degrees (increase for more top-down)
            const azimuthDeg = 0;    // rotate around model (in degrees)
            const elev = THREE.MathUtils.degToRad(elevationDeg);
            const azim = THREE.MathUtils.degToRad(azimuthDeg);

// radius keeps the same framing; adjust multiplier to zoom in/out
            const radius = distance * 1.5;

// spherical -> cartesian offset (y is up)
            const offset = new THREE.Vector3(
                radius * Math.cos(elev) * Math.sin(azim),
                radius * Math.sin(elev),
                radius * Math.cos(elev) * Math.cos(azim)
            );

// position camera relative to model center and look at it
            camera.position.copy(center).add(offset);
            camera.lookAt(center);
            camera.updateMatrixWorld(true);

            // shift model to origin for nicer SVG coordinates
            model.position.x -= center.x;
            model.position.y -= center.y - 0.1;
            model.position.z -= center.z;

            if (format === "svg") {
                // SVG renderer
                const svgRenderer = new SVGRenderer();
                svgRenderer.setSize(width, height);
                svgRenderer.clear();

                // NOTE: SVGRenderer has limitations: textures and complex materials may not appear.
                svgRenderer.render(scene, camera);
                const svgString = svgRenderer.domElement.outerHTML;
                downloadBlob(svgString, "image/svg+xml;charset=utf-8", getFilename(modelUrl, "svg"));
            } else {
                // PNG fallback via WebGLRenderer -> canvas -> dataURL
                const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
                renderer.setSize(width, height);
                renderer.setPixelRatio(window.devicePixelRatio || 1);
                renderer.render(scene, camera);
                const dataUrl = (renderer.domElement as HTMLCanvasElement).toDataURL("image/png");
                // convert base64 -> blob
                const res = await fetch(dataUrl);
                const blob = await res.blob();
                downloadBlob(blob, "image/png", getFilename(modelUrl, "png"));
                renderer.dispose();
            }
        } catch (err) {
            console.error("Export failed", err);
            // optionally fallback to PNG here
        } finally {
            loadingRef.current = false;
        }
    }

    function getFilename(url: string, ext: string) {
        const name = url.split("/").pop()?.replace(/\.[^/.]+$/, "") || "model";
        return `${name}.${ext}`;
    }

    return (
        <div>
            <button onClick={() => exportImage("svg")}>Export SVG</button>
        </div>
    );
}
