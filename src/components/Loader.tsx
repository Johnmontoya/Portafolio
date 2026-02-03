import { useEffect, useState } from "react";

export default function LoadingScreen({ onFinish }: { onFinish: () => void }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((p) => {
                if (p >= 100) {
                    clearInterval(interval);
                    setTimeout(onFinish, 1000);
                    return 100;
                }
                return p + 4;
            });
        }, 40);

        return () => clearInterval(interval);
    }, [onFinish]);

    return (
        <div
            className="
        fixed inset-0 z-[999]
        flex flex-col items-center justify-center
        bg-black
        text-white
      "
        >
            <h1 className="text-3xl font-semibold mb-2">
                John Montoya
            </h1>
            <p className="text-gray-400 mb-8">
                Building modern web applications
            </p>

            {/* Progress bar */}
            <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
                <div
                    className="h-full bg-cyan-500 transition-all"
                    style={{ width: `${progress}%` }}
                />
            </div>

            <span className="mt-4 text-sm text-gray-500">
                Loading experience…
            </span>
        </div>
    );
}
