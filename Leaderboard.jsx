{\rtf1\ansi\ansicpg1252\cocoartf2580
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red71\green137\blue205;\red255\green255\blue255;\red202\green202\blue202;
\red54\green192\blue160;\red212\green212\blue212;\red194\green126\blue101;\red167\green197\blue151;\red238\green46\blue55;
\red202\green202\blue202;}
{\*\expandedcolortbl;;\cssrgb\c33936\c61427\c84130;\cssrgb\c100000\c100000\c100000;\cssrgb\c83229\c83229\c83125;
\cssrgb\c23956\c78894\c69047;\cssrgb\c86370\c86370\c86262;\cssrgb\c80778\c56830\c46925;\cssrgb\c71008\c80807\c65805;\cssrgb\c95677\c27779\c27659;
\cssrgb\c83137\c83137\c83137;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\sl420\partightenfactor0

\f0\fs28 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 import\cf4 \strokec4  \cf5 \strokec5 React\cf6 \strokec6 ,\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \strokec4  useMemo \cf6 \strokec6 \}\cf4 \strokec4  \cf2 \strokec2 from\cf4 \strokec4  \cf7 \strokec7 'react'\cf6 \strokec6 ;\cf4 \strokec4 \
\cf2 \strokec2 import\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \strokec4  motion \cf6 \strokec6 \}\cf4 \strokec4  \cf2 \strokec2 from\cf4 \strokec4  \cf7 \strokec7 'framer-motion'\cf6 \strokec6 ;\cf4 \strokec4 \
\cf2 \strokec2 import\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \strokec4  \cf5 \strokec5 Trophy\cf6 \strokec6 ,\cf4 \strokec4  \cf5 \strokec5 Medal\cf6 \strokec6 ,\cf4 \strokec4  \cf5 \strokec5 MapPin\cf4 \strokec4  \cf6 \strokec6 \}\cf4 \strokec4  \cf2 \strokec2 from\cf4 \strokec4  \cf7 \strokec7 'lucide-react'\cf6 \strokec6 ;\cf4 \strokec4 \
\
\cf2 \strokec2 const\cf4 \strokec4  \cf5 \strokec5 Leaderboard\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 (\{\cf4 \strokec4  swimmers\cf6 \strokec6 ,\cf4 \strokec4  times \cf6 \strokec6 \})\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \strokec4 \
  \cf2 \strokec2 const\cf4 \strokec4  ranking \cf6 \strokec6 =\cf4 \strokec4  useMemo\cf6 \strokec6 (()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \strokec4 \
    \cf2 \strokec2 return\cf4 \strokec4  swimmers\cf6 \strokec6 .\cf4 \strokec4 map\cf6 \strokec6 (\cf4 \strokec4 swimmer \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \strokec4 \
      \cf2 \strokec2 const\cf4 \strokec4  swimmerTimes \cf6 \strokec6 =\cf4 \strokec4  times\cf6 \strokec6 .\cf4 \strokec4 filter\cf6 \strokec6 (\cf4 \strokec4 t \cf6 \strokec6 =>\cf4 \strokec4  t\cf6 \strokec6 .\cf4 \strokec4 swimmerId \cf6 \strokec6 ===\cf4 \strokec4  swimmer\cf6 \strokec6 .\cf4 \strokec4 id\cf6 \strokec6 );\cf4 \strokec4 \
      \cf2 \strokec2 const\cf4 \strokec4  totalPoints \cf6 \strokec6 =\cf4 \strokec4  swimmerTimes\cf6 \strokec6 .\cf4 \strokec4 reduce\cf6 \strokec6 ((\cf4 \strokec4 sum\cf6 \strokec6 ,\cf4 \strokec4  t\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  sum \cf6 \strokec6 +\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 t\cf6 \strokec6 .\cf4 \strokec4 points \cf6 \strokec6 ||\cf4 \strokec4  \cf8 \strokec8 0\cf6 \strokec6 ),\cf4 \strokec4  \cf8 \strokec8 0\cf6 \strokec6 );\cf4 \strokec4 \
      \cf2 \strokec2 return\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \strokec4 \
        \cf6 \strokec6 ...\cf4 \strokec4 swimmer\cf6 \strokec6 ,\cf4 \strokec4 \
        totalPoints\cf6 \strokec6 ,\cf4 \strokec4 \
        raceCount\cf6 \strokec6 :\cf4 \strokec4  swimmerTimes\cf6 \strokec6 .\cf4 \strokec4 length\
      \cf6 \strokec6 \};\cf4 \strokec4 \
    \cf6 \strokec6 \}).\cf4 \strokec4 sort\cf6 \strokec6 ((\cf4 \strokec4 a\cf6 \strokec6 ,\cf4 \strokec4  b\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  b\cf6 \strokec6 .\cf4 \strokec4 totalPoints \cf6 \strokec6 -\cf4 \strokec4  a\cf6 \strokec6 .\cf4 \strokec4 totalPoints\cf6 \strokec6 );\cf4 \strokec4 \
  \cf6 \strokec6 \},\cf4 \strokec4  \cf6 \strokec6 [\cf4 \strokec4 swimmers\cf6 \strokec6 ,\cf4 \strokec4  times\cf6 \strokec6 ]);\cf4 \strokec4 \
\
  \cf2 \strokec2 const\cf4 \strokec4  getRankIcon \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 index\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \strokec4 \
    \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 index \cf6 \strokec6 ===\cf4 \strokec4  \cf8 \strokec8 0\cf6 \strokec6 )\cf4 \strokec4  \cf2 \strokec2 return\cf4 \strokec4  \cf6 \strokec6 <\cf5 \strokec5 Trophy\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "w-6 h-6 text-yellow-500"\cf4 \strokec4  />\cf6 \strokec6 ;\cf4 \strokec4 \
    \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 index \cf6 \strokec6 ===\cf4 \strokec4  \cf8 \strokec8 1\cf6 \strokec6 )\cf4 \strokec4  \cf2 \strokec2 return\cf4 \strokec4  \cf6 \strokec6 <\cf5 \strokec5 Medal\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "w-6 h-6 text-gray-400"\cf4 \strokec4  />\cf6 \strokec6 ;\cf4 \strokec4 \
    \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 index \cf6 \strokec6 ===\cf4 \strokec4  \cf8 \strokec8 2\cf6 \strokec6 )\cf4 \strokec4  \cf2 \strokec2 return\cf4 \strokec4  \cf6 \strokec6 <\cf5 \strokec5 Medal\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "w-6 h-6 text-amber-600"\cf4 \strokec4  />\cf6 \strokec6 ;\cf4 \strokec4 \
    \cf2 \strokec2 return\cf4 \strokec4  \cf6 \strokec6 <\cf4 \strokec4 span className\cf6 \strokec6 =\cf7 \strokec7 "text-lg font-bold text-gray-400"\cf6 \strokec6 >\cf9 \strokec9 #\cf6 \strokec6 \{\cf4 \strokec4 index \cf6 \strokec6 +\cf4 \strokec4  \cf8 \strokec8 1\cf6 \strokec6 \}</\cf4 \strokec4 span\cf6 \strokec6 >;\cf4 \strokec4 \
  \cf6 \strokec6 \};\cf4 \strokec4 \
\
  \cf2 \strokec2 return\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 \
    \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "space-y-6"\cf6 \strokec6 >\cf4 \strokec4 \
      \cf6 \strokec6 <\cf4 \strokec4 motion\cf6 \strokec6 .\cf4 \strokec4 div\
        initial\cf6 \strokec6 =\{\{\cf4 \strokec4  opacity\cf6 \strokec6 :\cf4 \strokec4  \cf8 \strokec8 0\cf6 \strokec6 ,\cf4 \strokec4  y\cf6 \strokec6 :\cf4 \strokec4  \cf8 \strokec8 20\cf4 \strokec4  \cf6 \strokec6 \}\}\cf4 \strokec4 \
        animate\cf6 \strokec6 =\{\{\cf4 \strokec4  opacity\cf6 \strokec6 :\cf4 \strokec4  \cf8 \strokec8 1\cf6 \strokec6 ,\cf4 \strokec4  y\cf6 \strokec6 :\cf4 \strokec4  \cf8 \strokec8 0\cf4 \strokec4  \cf6 \strokec6 \}\}\cf4 \strokec4 \
        className\cf6 \strokec6 =\cf7 \strokec7 "bg-white rounded-2xl shadow-xl overflow-hidden"\cf4 \strokec4 \
      \cf6 \strokec6 >\cf4 \strokec4 \
        \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "bg-gradient-to-r from-blue-600 to-cyan-600 p-6 text-white"\cf6 \strokec6 >\cf4 \strokec4 \
          \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "flex items-center gap-3"\cf6 \strokec6 >\cf4 \strokec4 \
            \cf6 \strokec6 <\cf5 \strokec5 Trophy\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "w-8 h-8 text-yellow-300"\cf4 \strokec4  />\
            \cf6 \strokec6 <\cf4 \strokec4 h2 className\cf6 \strokec6 =\cf7 \strokec7 "text-2xl font-bold"\cf6 \strokec6 >\cf5 \strokec5 Points\cf4 \strokec4  \cf5 \strokec5 Leaderboard\cf6 \strokec6 </\cf4 \strokec4 h2\cf6 \strokec6 >\cf4 \strokec4 \
          \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \strokec4 \
          \cf6 \strokec6 <\cf4 \strokec4 p className\cf6 \strokec6 =\cf7 \strokec7 "text-blue-100 mt-2"\cf6 \strokec6 >\cf4 \strokec4 \
            \cf8 \strokec8 1\cf4 \strokec4 st place \cf6 \strokec6 =\cf4 \strokec4  \cf8 \strokec8 20\cf4 \strokec4 pts\cf6 \strokec6 ,\cf4 \strokec4  decreasing by \cf8 \strokec8 1\cf4 \strokec4 pt per position\
          \cf6 \strokec6 </\cf4 \strokec4 p\cf6 \strokec6 >\cf4 \strokec4 \
        \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \strokec4 \
\
        \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "p-0"\cf6 \strokec6 >\cf4 \strokec4 \
          \cf6 \strokec6 \{\cf4 \strokec4 ranking\cf6 \strokec6 .\cf4 \strokec4 length \cf6 \strokec6 ===\cf4 \strokec4  \cf8 \strokec8 0\cf4 \strokec4  \cf6 \strokec6 ?\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 \
            \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "p-8 text-center text-gray-500"\cf6 \strokec6 >\cf4 \strokec4 \
              \cf5 \strokec5 No\cf4 \strokec4  swimmers registered yet\cf6 \strokec6 .\cf4 \strokec4 \
            \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \strokec4 \
          \cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 \
            \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "divide-y divide-gray-100"\cf6 \strokec6 >\cf4 \strokec4 \
              \cf6 \strokec6 \{\cf4 \strokec4 ranking\cf6 \strokec6 .\cf4 \strokec4 map\cf6 \strokec6 ((\cf4 \strokec4 swimmer\cf6 \strokec6 ,\cf4 \strokec4  index\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 \
                \cf6 \strokec6 <\cf4 \strokec4 motion\cf6 \strokec6 .\cf4 \strokec4 div\
                  key\cf6 \strokec6 =\{\cf4 \strokec4 swimmer\cf6 \strokec6 .\cf4 \strokec4 id\cf6 \strokec6 \}\cf4 \strokec4 \
                  initial\cf6 \strokec6 =\{\{\cf4 \strokec4  opacity\cf6 \strokec6 :\cf4 \strokec4  \cf8 \strokec8 0\cf6 \strokec6 ,\cf4 \strokec4  x\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 -\cf8 \strokec8 20\cf4 \strokec4  \cf6 \strokec6 \}\}\cf4 \strokec4 \
                  animate\cf6 \strokec6 =\{\{\cf4 \strokec4  opacity\cf6 \strokec6 :\cf4 \strokec4  \cf8 \strokec8 1\cf6 \strokec6 ,\cf4 \strokec4  x\cf6 \strokec6 :\cf4 \strokec4  \cf8 \strokec8 0\cf4 \strokec4  \cf6 \strokec6 \}\}\cf4 \strokec4 \
                  transition\cf6 \strokec6 =\{\{\cf4 \strokec4  delay\cf6 \strokec6 :\cf4 \strokec4  index \cf6 \strokec6 *\cf4 \strokec4  \cf8 \strokec8 0.1\cf4 \strokec4  \cf6 \strokec6 \}\}\cf4 \strokec4 \
                  className\cf6 \strokec6 =\{\cf7 \strokec7 `flex items-center justify-between p-6 hover:bg-gray-50 transition-colors \cf6 \strokec6 $\{\cf4 \strokec4 \
                    index \cf6 \strokec6 ===\cf4 \strokec4  \cf8 \strokec8 0\cf4 \strokec4  \cf6 \strokec6 ?\cf4 \strokec4  \cf7 \strokec7 'bg-yellow-50/50'\cf4 \strokec4  \cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 ''\cf4 \strokec4 \
                  \cf6 \strokec6 \}\cf7 \strokec7 `\cf6 \strokec6 \}\cf4 \strokec4 \
                \cf6 \strokec6 >\cf4 \strokec4 \
                  \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "flex items-center gap-4"\cf6 \strokec6 >\cf4 \strokec4 \
                    \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "w-12 flex justify-center"\cf6 \strokec6 >\cf4 \strokec4 \
                      \cf6 \strokec6 \{\cf4 \strokec4 getRankIcon\cf6 \strokec6 (\cf4 \strokec4 index\cf6 \strokec6 )\}\cf4 \strokec4 \
                    \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \strokec4 \
                    \cf6 \strokec6 <\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \strokec4 \
                      \cf6 \strokec6 <\cf4 \strokec4 h3 className\cf6 \strokec6 =\cf7 \strokec7 "text-lg font-bold text-gray-900"\cf6 \strokec6 >\{\cf4 \strokec4 swimmer\cf6 \strokec6 .\cf4 \strokec4 name\cf6 \strokec6 \}</\cf4 \strokec4 h3\cf6 \strokec6 >\cf4 \strokec4 \
                      \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "flex items-center gap-2 text-sm text-gray-500"\cf6 \strokec6 >\cf4 \strokec4 \
                        \cf6 \strokec6 <\cf5 \strokec5 MapPin\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "w-3 h-3"\cf4 \strokec4  />\
                        \cf6 \strokec6 \{\cf4 \strokec4 swimmer\cf6 \strokec6 .\cf4 \strokec4 location\cf6 \strokec6 \}\cf4 \strokec4 \
                      \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \strokec4 \
                    \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \strokec4 \
                  \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \strokec4 \
                  \
                  \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "text-right"\cf6 \strokec6 >\cf4 \strokec4 \
                    \cf6 \strokec6 <\cf4 \strokec4 p className\cf6 \strokec6 =\cf7 \strokec7 "text-2xl font-bold text-blue-600"\cf6 \strokec6 >\{\cf4 \strokec4 swimmer\cf6 \strokec6 .\cf4 \strokec4 totalPoints\cf6 \strokec6 \}</\cf4 \strokec4 p\cf6 \strokec6 >\cf4 \strokec4 \
                    \cf6 \strokec6 <\cf4 \strokec4 p className\cf6 \strokec6 =\cf7 \strokec7 "text-xs text-gray-500 uppercase font-semibold tracking-wider"\cf6 \strokec6 >\cf5 \strokec5 Points\cf6 \strokec6 </\cf4 \strokec4 p\cf6 \strokec6 >\cf4 \strokec4 \
                  \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \strokec4 \
                \cf6 \strokec6 </\cf4 \strokec4 motion\cf6 \strokec6 .\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \strokec4 \
              \cf6 \strokec6 ))\}\cf4 \strokec4 \
            \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \strokec4 \
          \cf6 \strokec6 )\}\cf4 \strokec4 \
        \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \strokec4 \
      \cf6 \strokec6 </\cf4 \strokec4 motion\cf6 \strokec6 .\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \strokec4 \
    \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \strokec4 \
  \cf6 \strokec6 );\cf4 \strokec4 \
\pard\pardeftab720\sl420\partightenfactor0
\cf6 \strokec6 \};\cf4 \strokec4 \
\
\pard\pardeftab720\sl420\partightenfactor0
\cf2 \strokec2 export\cf4 \strokec4  \cf2 \strokec2 default\cf4 \strokec4  \cf5 \strokec5 Leaderboard\cf6 \strokec6 ;\cf10 \cb1 \strokec10 \
}