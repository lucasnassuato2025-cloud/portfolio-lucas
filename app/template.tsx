export default function Template({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <style>{`
        img[src*="lucas-premium.png"] {
          content: url('/lucas-portfolio.svg');
          object-fit: cover;
          object-position: 50% 32%;
        }

        @media (max-width: 639px) {
          img[src*="lucas-premium.png"] {
            object-position: 50% 28%;
          }
        }
      `}</style>
      {children}
    </>
  )
}
