const AuthLayout = ({ children }: { children: React.ReactNode; }) => {
    return (
        <div className="flex items-center justify-center h-full">
            {/* Your layout code here */}
            {children}
        </div>
    );
};

export default AuthLayout;
