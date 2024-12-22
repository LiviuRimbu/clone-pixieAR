import { useEffect } from "react";

interface DetectRotationProps {
    onLandscape: () => void;
    onPortrait: () => void;
}

const DetectRotation: React.FC<DetectRotationProps> = ({ onLandscape, onPortrait }) => {
    useEffect(() => {
        const handleOrientationChange = () => {
            const isLandscape = window.matchMedia("(orientation: landscape)").matches;
            if (isLandscape) {
                onLandscape();
            } else {
                onPortrait();
            }
        };

        // Attach listener for orientation change
        window.addEventListener("resize", handleOrientationChange);

        // Call the handler on mount to check initial orientation
        handleOrientationChange();

        // Cleanup listener on unmount
        return () => {
            window.removeEventListener("resize", handleOrientationChange);
        };
    }, [onLandscape, onPortrait]);

    return null; // No UI elements needed
};

export default DetectRotation;
