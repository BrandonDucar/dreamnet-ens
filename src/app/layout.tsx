import React from 'react';

export const metadata = {
  title: 'DreamNet ENS Registry Hub 🌐🤖',
  description: 'Lookup and register agent profiles on ENS with text records.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: `
          body {
            margin: 0;
            padding: 0;
            background-color: #09090b;
            color: #ffffff;
            font-family: 'Inter', sans-serif;
            min-height: 100vh;
          }
          /* Scrollbar styling */
          ::-webkit-scrollbar {
            width: 6px;
            height: 6px;
          }
          ::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.02);
          }
          ::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 4px;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: rgba(255, 255, 255, 0.2);
          }
        `}} />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
