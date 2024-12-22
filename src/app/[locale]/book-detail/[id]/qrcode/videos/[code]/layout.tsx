export default function CodeLayout({children}: { children: React.ReactNode }) {
    return (

            <div className={`bg-custom-gradient`}>
                {children}
            </div>

    );
}
