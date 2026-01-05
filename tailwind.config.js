{\rtf1\ansi\ansicpg1252\cocoartf2580
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red79\green122\blue61;\red255\green255\blue255;\red202\green202\blue202;
\red212\green212\blue212;\red194\green126\blue101;\red71\green137\blue205;\red54\green192\blue160;\red167\green197\blue151;
\red202\green202\blue202;}
{\*\expandedcolortbl;;\cssrgb\c37609\c54466\c30476;\cssrgb\c100000\c100000\c100000;\cssrgb\c83229\c83229\c83125;
\cssrgb\c86370\c86370\c86262;\cssrgb\c80778\c56830\c46925;\cssrgb\c33936\c61427\c84130;\cssrgb\c23956\c78894\c69047;\cssrgb\c71008\c80807\c65805;
\cssrgb\c83137\c83137\c83137;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\sl420\partightenfactor0

\f0\fs28 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 /** @type \{import('tailwindcss').Config\} */\cf4 \strokec4 \
module\cf5 \strokec5 .\cf4 \strokec4 exports \cf5 \strokec5 =\cf4 \strokec4  \cf5 \strokec5 \{\cf4 \strokec4 \
  darkMode\cf5 \strokec5 :\cf4 \strokec4  \cf5 \strokec5 [\cf6 \strokec6 'class'\cf5 \strokec5 ],\cf4 \strokec4 \
  content\cf5 \strokec5 :\cf4 \strokec4  \cf5 \strokec5 [\cf4 \strokec4 \
    \cf6 \strokec6 './pages/**/*.\{js,jsx\}'\cf5 \strokec5 ,\cf4 \strokec4 \
    \cf6 \strokec6 './components/**/*.\{js,jsx\}'\cf5 \strokec5 ,\cf4 \strokec4 \
    \cf6 \strokec6 './app/**/*.\{js,jsx\}'\cf5 \strokec5 ,\cf4 \strokec4 \
    \cf6 \strokec6 './src/**/*.\{js,jsx\}'\cf5 \strokec5 ,\cf4 \strokec4 \
  \cf5 \strokec5 ],\cf4 \strokec4 \
  theme\cf5 \strokec5 :\cf4 \strokec4  \cf5 \strokec5 \{\cf4 \strokec4 \
    container\cf5 \strokec5 :\cf4 \strokec4  \cf5 \strokec5 \{\cf4 \strokec4 \
      center\cf5 \strokec5 :\cf4 \strokec4  \cf7 \strokec7 true\cf5 \strokec5 ,\cf4 \strokec4 \
      padding\cf5 \strokec5 :\cf4 \strokec4  \cf6 \strokec6 '2rem'\cf5 \strokec5 ,\cf4 \strokec4 \
      screens\cf5 \strokec5 :\cf4 \strokec4  \cf5 \strokec5 \{\cf4 \strokec4 \
        \cf6 \strokec6 '2xl'\cf5 \strokec5 :\cf4 \strokec4  \cf6 \strokec6 '1400px'\cf5 \strokec5 ,\cf4 \strokec4 \
      \cf5 \strokec5 \},\cf4 \strokec4 \
    \cf5 \strokec5 \},\cf4 \strokec4 \
    extend\cf5 \strokec5 :\cf4 \strokec4  \cf5 \strokec5 \{\cf4 \strokec4 \
      colors\cf5 \strokec5 :\cf4 \strokec4  \cf5 \strokec5 \{\cf4 \strokec4 \
        border\cf5 \strokec5 :\cf4 \strokec4  \cf6 \strokec6 'hsl(var(--border))'\cf5 \strokec5 ,\cf4 \strokec4 \
        input\cf5 \strokec5 :\cf4 \strokec4  \cf6 \strokec6 'hsl(var(--input))'\cf5 \strokec5 ,\cf4 \strokec4 \
        ring\cf5 \strokec5 :\cf4 \strokec4  \cf6 \strokec6 'hsl(var(--ring))'\cf5 \strokec5 ,\cf4 \strokec4 \
        background\cf5 \strokec5 :\cf4 \strokec4  \cf6 \strokec6 'hsl(var(--background))'\cf5 \strokec5 ,\cf4 \strokec4 \
        foreground\cf5 \strokec5 :\cf4 \strokec4  \cf6 \strokec6 'hsl(var(--foreground))'\cf5 \strokec5 ,\cf4 \strokec4 \
        primary\cf5 \strokec5 :\cf4 \strokec4  \cf5 \strokec5 \{\cf4 \strokec4 \
          \cf8 \strokec8 DEFAULT\cf5 \strokec5 :\cf4 \strokec4  \cf6 \strokec6 'hsl(var(--primary))'\cf5 \strokec5 ,\cf4 \strokec4 \
          foreground\cf5 \strokec5 :\cf4 \strokec4  \cf6 \strokec6 'hsl(var(--primary-foreground))'\cf5 \strokec5 ,\cf4 \strokec4 \
        \cf5 \strokec5 \},\cf4 \strokec4 \
        secondary\cf5 \strokec5 :\cf4 \strokec4  \cf5 \strokec5 \{\cf4 \strokec4 \
          \cf8 \strokec8 DEFAULT\cf5 \strokec5 :\cf4 \strokec4  \cf6 \strokec6 'hsl(var(--secondary))'\cf5 \strokec5 ,\cf4 \strokec4 \
          foreground\cf5 \strokec5 :\cf4 \strokec4  \cf6 \strokec6 'hsl(var(--secondary-foreground))'\cf5 \strokec5 ,\cf4 \strokec4 \
        \cf5 \strokec5 \},\cf4 \strokec4 \
        destructive\cf5 \strokec5 :\cf4 \strokec4  \cf5 \strokec5 \{\cf4 \strokec4 \
          \cf8 \strokec8 DEFAULT\cf5 \strokec5 :\cf4 \strokec4  \cf6 \strokec6 'hsl(var(--destructive))'\cf5 \strokec5 ,\cf4 \strokec4 \
          foreground\cf5 \strokec5 :\cf4 \strokec4  \cf6 \strokec6 'hsl(var(--destructive-foreground))'\cf5 \strokec5 ,\cf4 \strokec4 \
        \cf5 \strokec5 \},\cf4 \strokec4 \
        muted\cf5 \strokec5 :\cf4 \strokec4  \cf5 \strokec5 \{\cf4 \strokec4 \
          \cf8 \strokec8 DEFAULT\cf5 \strokec5 :\cf4 \strokec4  \cf6 \strokec6 'hsl(var(--muted))'\cf5 \strokec5 ,\cf4 \strokec4 \
          foreground\cf5 \strokec5 :\cf4 \strokec4  \cf6 \strokec6 'hsl(var(--muted-foreground))'\cf5 \strokec5 ,\cf4 \strokec4 \
        \cf5 \strokec5 \},\cf4 \strokec4 \
        accent\cf5 \strokec5 :\cf4 \strokec4  \cf5 \strokec5 \{\cf4 \strokec4 \
          \cf8 \strokec8 DEFAULT\cf5 \strokec5 :\cf4 \strokec4  \cf6 \strokec6 'hsl(var(--accent))'\cf5 \strokec5 ,\cf4 \strokec4 \
          foreground\cf5 \strokec5 :\cf4 \strokec4  \cf6 \strokec6 'hsl(var(--accent-foreground))'\cf5 \strokec5 ,\cf4 \strokec4 \
        \cf5 \strokec5 \},\cf4 \strokec4 \
        popover\cf5 \strokec5 :\cf4 \strokec4  \cf5 \strokec5 \{\cf4 \strokec4 \
          \cf8 \strokec8 DEFAULT\cf5 \strokec5 :\cf4 \strokec4  \cf6 \strokec6 'hsl(var(--popover))'\cf5 \strokec5 ,\cf4 \strokec4 \
          foreground\cf5 \strokec5 :\cf4 \strokec4  \cf6 \strokec6 'hsl(var(--popover-foreground))'\cf5 \strokec5 ,\cf4 \strokec4 \
        \cf5 \strokec5 \},\cf4 \strokec4 \
        card\cf5 \strokec5 :\cf4 \strokec4  \cf5 \strokec5 \{\cf4 \strokec4 \
          \cf8 \strokec8 DEFAULT\cf5 \strokec5 :\cf4 \strokec4  \cf6 \strokec6 'hsl(var(--card))'\cf5 \strokec5 ,\cf4 \strokec4 \
          foreground\cf5 \strokec5 :\cf4 \strokec4  \cf6 \strokec6 'hsl(var(--card-foreground))'\cf5 \strokec5 ,\cf4 \strokec4 \
        \cf5 \strokec5 \},\cf4 \strokec4 \
      \cf5 \strokec5 \},\cf4 \strokec4 \
      borderRadius\cf5 \strokec5 :\cf4 \strokec4  \cf5 \strokec5 \{\cf4 \strokec4 \
        lg\cf5 \strokec5 :\cf4 \strokec4  \cf6 \strokec6 'var(--radius)'\cf5 \strokec5 ,\cf4 \strokec4 \
        md\cf5 \strokec5 :\cf4 \strokec4  \cf6 \strokec6 'calc(var(--radius) - 2px)'\cf5 \strokec5 ,\cf4 \strokec4 \
        sm\cf5 \strokec5 :\cf4 \strokec4  \cf6 \strokec6 'calc(var(--radius) - 4px)'\cf5 \strokec5 ,\cf4 \strokec4 \
      \cf5 \strokec5 \},\cf4 \strokec4 \
      keyframes\cf5 \strokec5 :\cf4 \strokec4  \cf5 \strokec5 \{\cf4 \strokec4 \
        \cf6 \strokec6 'accordion-down'\cf5 \strokec5 :\cf4 \strokec4  \cf5 \strokec5 \{\cf4 \strokec4 \
          \cf7 \strokec7 from\cf5 \strokec5 :\cf4 \strokec4  \cf5 \strokec5 \{\cf4 \strokec4  height\cf5 \strokec5 :\cf4 \strokec4  \cf9 \strokec9 0\cf4 \strokec4  \cf5 \strokec5 \},\cf4 \strokec4 \
          to\cf5 \strokec5 :\cf4 \strokec4  \cf5 \strokec5 \{\cf4 \strokec4  height\cf5 \strokec5 :\cf4 \strokec4  \cf6 \strokec6 'var(--radix-accordion-content-height)'\cf4 \strokec4  \cf5 \strokec5 \},\cf4 \strokec4 \
        \cf5 \strokec5 \},\cf4 \strokec4 \
        \cf6 \strokec6 'accordion-up'\cf5 \strokec5 :\cf4 \strokec4  \cf5 \strokec5 \{\cf4 \strokec4 \
          \cf7 \strokec7 from\cf5 \strokec5 :\cf4 \strokec4  \cf5 \strokec5 \{\cf4 \strokec4  height\cf5 \strokec5 :\cf4 \strokec4  \cf6 \strokec6 'var(--radix-accordion-content-height)'\cf4 \strokec4  \cf5 \strokec5 \},\cf4 \strokec4 \
          to\cf5 \strokec5 :\cf4 \strokec4  \cf5 \strokec5 \{\cf4 \strokec4  height\cf5 \strokec5 :\cf4 \strokec4  \cf9 \strokec9 0\cf4 \strokec4  \cf5 \strokec5 \},\cf4 \strokec4 \
        \cf5 \strokec5 \},\cf4 \strokec4 \
      \cf5 \strokec5 \},\cf4 \strokec4 \
      animation\cf5 \strokec5 :\cf4 \strokec4  \cf5 \strokec5 \{\cf4 \strokec4 \
        \cf6 \strokec6 'accordion-down'\cf5 \strokec5 :\cf4 \strokec4  \cf6 \strokec6 'accordion-down 0.2s ease-out'\cf5 \strokec5 ,\cf4 \strokec4 \
        \cf6 \strokec6 'accordion-up'\cf5 \strokec5 :\cf4 \strokec4  \cf6 \strokec6 'accordion-up 0.2s ease-out'\cf5 \strokec5 ,\cf4 \strokec4 \
      \cf5 \strokec5 \},\cf4 \strokec4 \
    \cf5 \strokec5 \},\cf4 \strokec4 \
  \cf5 \strokec5 \},\cf4 \strokec4 \
  plugins\cf5 \strokec5 :\cf4 \strokec4  \cf5 \strokec5 [\cf4 \strokec4 require\cf5 \strokec5 (\cf6 \strokec6 'tailwindcss-animate'\cf5 \strokec5 )],\cf4 \strokec4 \
\pard\pardeftab720\sl420\partightenfactor0
\cf5 \strokec5 \};\cf10 \cb1 \strokec10 \
}