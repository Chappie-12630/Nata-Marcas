{\rtf1\ansi\ansicpg1252\cocoartf2580
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red71\green137\blue205;\red255\green255\blue255;\red202\green202\blue202;
\red54\green192\blue160;\red212\green212\blue212;\red194\green126\blue101;\red167\green197\blue151;\red202\green202\blue202;
}
{\*\expandedcolortbl;;\cssrgb\c33936\c61427\c84130;\cssrgb\c100000\c100000\c100000;\cssrgb\c83229\c83229\c83125;
\cssrgb\c23956\c78894\c69047;\cssrgb\c86370\c86370\c86262;\cssrgb\c80778\c56830\c46925;\cssrgb\c71008\c80807\c65805;\cssrgb\c83137\c83137\c83137;
}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\sl420\partightenfactor0

\f0\fs28 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 import\cf4 \strokec4  \cf5 \strokec5 React\cf6 \strokec6 ,\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \strokec4  useState\cf6 \strokec6 ,\cf4 \strokec4  useMemo \cf6 \strokec6 \}\cf4 \strokec4  \cf2 \strokec2 from\cf4 \strokec4  \cf7 \strokec7 'react'\cf6 \strokec6 ;\cf4 \strokec4 \
\cf2 \strokec2 import\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \strokec4  motion \cf6 \strokec6 \}\cf4 \strokec4  \cf2 \strokec2 from\cf4 \strokec4  \cf7 \strokec7 'framer-motion'\cf6 \strokec6 ;\cf4 \strokec4 \
\cf2 \strokec2 import\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \strokec4  \cf5 \strokec5 ArrowLeftRight\cf6 \strokec6 ,\cf4 \strokec4  \cf5 \strokec5 Trophy\cf4 \strokec4  \cf6 \strokec6 \}\cf4 \strokec4  \cf2 \strokec2 from\cf4 \strokec4  \cf7 \strokec7 'lucide-react'\cf6 \strokec6 ;\cf4 \strokec4 \
\cf2 \strokec2 import\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \strokec4  \cf5 \strokec5 Label\cf4 \strokec4  \cf6 \strokec6 \}\cf4 \strokec4  \cf2 \strokec2 from\cf4 \strokec4  \cf7 \strokec7 '@/components/ui/label'\cf6 \strokec6 ;\cf4 \strokec4 \
\cf2 \strokec2 const\cf4 \strokec4  \cf5 \strokec5 DISTANCES\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 [\cf7 \strokec7 '50m'\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 '100m'\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 '200m'\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 '400m'\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 '500m'\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 '800m'\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 '1500m'\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 '1km'\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 '1.5km'\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 '2km'\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 '3km'\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 '5km'\cf6 \strokec6 ];\cf4 \strokec4 \
\cf2 \strokec2 const\cf4 \strokec4  \cf5 \strokec5 STYLES\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 [\cf7 \strokec7 'Freestyle'\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 'Breaststroke'\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 'Butterfly'\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 'Backstroke'\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 'Medley'\cf6 \strokec6 ];\cf4 \strokec4 \
\cf2 \strokec2 const\cf4 \strokec4  \cf5 \strokec5 POOL_SIZES\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 [\cf7 \strokec7 '25m'\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 '50m'\cf6 \strokec6 ,\cf4 \strokec4  \cf7 \strokec7 'Open Water'\cf6 \strokec6 ];\cf4 \strokec4 \
\cf2 \strokec2 const\cf4 \strokec4  \cf5 \strokec5 ComparisonView\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 (\{\cf4 \strokec4 \
  swimmers\cf6 \strokec6 ,\cf4 \strokec4 \
  times\
\pard\pardeftab720\sl420\partightenfactor0
\cf6 \strokec6 \})\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \strokec4 \
  \cf2 \strokec2 const\cf4 \strokec4  \cf6 \strokec6 [\cf4 \strokec4 swimmer1Id\cf6 \strokec6 ,\cf4 \strokec4  setSwimmer1Id\cf6 \strokec6 ]\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  useState\cf6 \strokec6 (\cf7 \strokec7 ''\cf6 \strokec6 );\cf4 \strokec4 \
  \cf2 \strokec2 const\cf4 \strokec4  \cf6 \strokec6 [\cf4 \strokec4 swimmer2Id\cf6 \strokec6 ,\cf4 \strokec4  setSwimmer2Id\cf6 \strokec6 ]\cf4 \strokec4  \cf6 \strokec6 =\cf4 \strokec4  useState\cf6 \strokec6 (\cf7 \strokec7 ''\cf6 \strokec6 );\cf4 \strokec4 \
  \cf2 \strokec2 const\cf4 \strokec4  getBestTime \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 swimmerId\cf6 \strokec6 ,\cf4 \strokec4  distance\cf6 \strokec6 ,\cf4 \strokec4  style\cf6 \strokec6 ,\cf4 \strokec4  poolSize\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \strokec4 \
    \cf2 \strokec2 const\cf4 \strokec4  swimmerTimes \cf6 \strokec6 =\cf4 \strokec4  times\cf6 \strokec6 .\cf4 \strokec4 filter\cf6 \strokec6 (\cf4 \strokec4 t \cf6 \strokec6 =>\cf4 \strokec4  t\cf6 \strokec6 .\cf4 \strokec4 swimmerId \cf6 \strokec6 ===\cf4 \strokec4  swimmerId \cf6 \strokec6 &&\cf4 \strokec4  t\cf6 \strokec6 .\cf4 \strokec4 distance \cf6 \strokec6 ===\cf4 \strokec4  distance \cf6 \strokec6 &&\cf4 \strokec4  t\cf6 \strokec6 .\cf4 \strokec4 style \cf6 \strokec6 ===\cf4 \strokec4  style \cf6 \strokec6 &&\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 t\cf6 \strokec6 .\cf4 \strokec4 poolSize \cf6 \strokec6 ||\cf4 \strokec4  \cf7 \strokec7 '50m'\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 ===\cf4 \strokec4  poolSize\cf6 \strokec6 );\cf4 \strokec4 \
    \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 swimmerTimes\cf6 \strokec6 .\cf4 \strokec4 length \cf6 \strokec6 ===\cf4 \strokec4  \cf8 \strokec8 0\cf6 \strokec6 )\cf4 \strokec4  \cf2 \strokec2 return\cf4 \strokec4  \cf2 \strokec2 null\cf6 \strokec6 ;\cf4 \strokec4 \
    \cf2 \strokec2 return\cf4 \strokec4  swimmerTimes\cf6 \strokec6 .\cf4 \strokec4 reduce\cf6 \strokec6 ((\cf4 \strokec4 best\cf6 \strokec6 ,\cf4 \strokec4  curr\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  curr\cf6 \strokec6 .\cf4 \strokec4 totalSeconds \cf6 \strokec6 <\cf4 \strokec4  best\cf6 \strokec6 .\cf4 \strokec4 totalSeconds \cf6 \strokec6 ?\cf4 \strokec4  curr \cf6 \strokec6 :\cf4 \strokec4  best\cf6 \strokec6 );\cf4 \strokec4 \
  \cf6 \strokec6 \};\cf4 \strokec4 \
  \cf2 \strokec2 const\cf4 \strokec4  comparisons \cf6 \strokec6 =\cf4 \strokec4  useMemo\cf6 \strokec6 (()\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \strokec4 \
    \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (!\cf4 \strokec4 swimmer1Id \cf6 \strokec6 ||\cf4 \strokec4  \cf6 \strokec6 !\cf4 \strokec4 swimmer2Id\cf6 \strokec6 )\cf4 \strokec4  \cf2 \strokec2 return\cf4 \strokec4  \cf6 \strokec6 [];\cf4 \strokec4 \
    \cf2 \strokec2 const\cf4 \strokec4  results \cf6 \strokec6 =\cf4 \strokec4  \cf6 \strokec6 [];\cf4 \strokec4 \
    \cf5 \strokec5 STYLES\cf6 \strokec6 .\cf4 \strokec4 forEach\cf6 \strokec6 (\cf4 \strokec4 style \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \strokec4 \
      \cf5 \strokec5 DISTANCES\cf6 \strokec6 .\cf4 \strokec4 forEach\cf6 \strokec6 (\cf4 \strokec4 distance \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \strokec4 \
        \cf5 \strokec5 POOL_SIZES\cf6 \strokec6 .\cf4 \strokec4 forEach\cf6 \strokec6 (\cf4 \strokec4 poolSize \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \strokec4 \
          \cf2 \strokec2 const\cf4 \strokec4  time1 \cf6 \strokec6 =\cf4 \strokec4  getBestTime\cf6 \strokec6 (\cf4 \strokec4 swimmer1Id\cf6 \strokec6 ,\cf4 \strokec4  distance\cf6 \strokec6 ,\cf4 \strokec4  style\cf6 \strokec6 ,\cf4 \strokec4  poolSize\cf6 \strokec6 );\cf4 \strokec4 \
          \cf2 \strokec2 const\cf4 \strokec4  time2 \cf6 \strokec6 =\cf4 \strokec4  getBestTime\cf6 \strokec6 (\cf4 \strokec4 swimmer2Id\cf6 \strokec6 ,\cf4 \strokec4  distance\cf6 \strokec6 ,\cf4 \strokec4  style\cf6 \strokec6 ,\cf4 \strokec4  poolSize\cf6 \strokec6 );\cf4 \strokec4 \
          \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (\cf4 \strokec4 time1 \cf6 \strokec6 ||\cf4 \strokec4  time2\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \strokec4 \
            results\cf6 \strokec6 .\cf4 \strokec4 push\cf6 \strokec6 (\{\cf4 \strokec4 \
              event\cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 `\cf6 \strokec6 $\{\cf4 \strokec4 distance\cf6 \strokec6 \}\cf7 \strokec7  \cf6 \strokec6 $\{\cf4 \strokec4 style\cf6 \strokec6 \}\cf7 \strokec7  (\cf6 \strokec6 $\{\cf4 \strokec4 poolSize\cf6 \strokec6 \}\cf7 \strokec7 )`\cf6 \strokec6 ,\cf4 \strokec4 \
              time1\cf6 \strokec6 ,\cf4 \strokec4 \
              time2\cf6 \strokec6 ,\cf4 \strokec4 \
              winner\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 !\cf4 \strokec4 time1 \cf6 \strokec6 ?\cf4 \strokec4  \cf8 \strokec8 2\cf4 \strokec4  \cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 !\cf4 \strokec4 time2 \cf6 \strokec6 ?\cf4 \strokec4  \cf8 \strokec8 1\cf4 \strokec4  \cf6 \strokec6 :\cf4 \strokec4  time1\cf6 \strokec6 .\cf4 \strokec4 totalSeconds \cf6 \strokec6 <\cf4 \strokec4  time2\cf6 \strokec6 .\cf4 \strokec4 totalSeconds \cf6 \strokec6 ?\cf4 \strokec4  \cf8 \strokec8 1\cf4 \strokec4  \cf6 \strokec6 :\cf4 \strokec4  \cf8 \strokec8 2\cf4 \strokec4 \
            \cf6 \strokec6 \});\cf4 \strokec4 \
          \cf6 \strokec6 \}\cf4 \strokec4 \
        \cf6 \strokec6 \});\cf4 \strokec4 \
      \cf6 \strokec6 \});\cf4 \strokec4 \
    \cf6 \strokec6 \});\cf4 \strokec4 \
    \cf2 \strokec2 return\cf4 \strokec4  results\cf6 \strokec6 ;\cf4 \strokec4 \
  \cf6 \strokec6 \},\cf4 \strokec4  \cf6 \strokec6 [\cf4 \strokec4 swimmer1Id\cf6 \strokec6 ,\cf4 \strokec4  swimmer2Id\cf6 \strokec6 ,\cf4 \strokec4  times\cf6 \strokec6 ]);\cf4 \strokec4 \
  \cf2 \strokec2 return\cf4 \strokec4  \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "space-y-6"\cf6 \strokec6 >\cf4 \strokec4 \
      \cf6 \strokec6 <\cf4 \strokec4 motion\cf6 \strokec6 .\cf4 \strokec4 div initial\cf6 \strokec6 =\{\{\cf4 \strokec4 \
      opacity\cf6 \strokec6 :\cf4 \strokec4  \cf8 \strokec8 0\cf6 \strokec6 ,\cf4 \strokec4 \
      y\cf6 \strokec6 :\cf4 \strokec4  \cf6 \strokec6 -\cf8 \strokec8 20\cf4 \strokec4 \
    \cf6 \strokec6 \}\}\cf4 \strokec4  animate\cf6 \strokec6 =\{\{\cf4 \strokec4 \
      opacity\cf6 \strokec6 :\cf4 \strokec4  \cf8 \strokec8 1\cf6 \strokec6 ,\cf4 \strokec4 \
      y\cf6 \strokec6 :\cf4 \strokec4  \cf8 \strokec8 0\cf4 \strokec4 \
    \cf6 \strokec6 \}\}\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "bg-white rounded-2xl shadow-lg p-6"\cf6 \strokec6 >\cf4 \strokec4 \
        \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "flex items-center gap-3 mb-6"\cf6 \strokec6 >\cf4 \strokec4 \
          \cf6 \strokec6 <\cf5 \strokec5 ArrowLeftRight\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "w-6 h-6 text-blue-600"\cf4 \strokec4  />\
          \cf6 \strokec6 <\cf4 \strokec4 h2 className\cf6 \strokec6 =\cf7 \strokec7 "text-xl font-bold text-gray-900"\cf6 \strokec6 >\cf5 \strokec5 Head\cf4 \strokec4  \cf6 \strokec6 -\cf4 \strokec4  to \cf6 \strokec6 -\cf4 \strokec4  \cf5 \strokec5 Head\cf6 \strokec6 </\cf4 \strokec4 h2\cf6 \strokec6 >\cf4 \strokec4 \
        \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \strokec4 \
\
        \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "grid grid-cols-1 md:grid-cols-2 gap-6"\cf6 \strokec6 >\cf4 \strokec4 \
          \cf6 \strokec6 <\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \strokec4 \
            \cf6 \strokec6 <\cf5 \strokec5 Label\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "mb-2 block"\cf6 \strokec6 >\cf5 \strokec5 Swimmer\cf4 \strokec4  \cf8 \strokec8 1\cf6 \strokec6 </\cf5 \strokec5 Label\cf6 \strokec6 >\cf4 \strokec4 \
            \cf6 \strokec6 <\cf4 \strokec4 select value\cf6 \strokec6 =\{\cf4 \strokec4 swimmer1Id\cf6 \strokec6 \}\cf4 \strokec4  onChange\cf6 \strokec6 =\{\cf4 \strokec4 e \cf6 \strokec6 =>\cf4 \strokec4  setSwimmer1Id\cf6 \strokec6 (\cf4 \strokec4 e\cf6 \strokec6 .\cf4 \strokec4 target\cf6 \strokec6 .\cf4 \strokec4 value\cf6 \strokec6 )\}\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500"\cf6 \strokec6 >\cf4 \strokec4 \
              \cf6 \strokec6 <\cf4 \strokec4 option value\cf6 \strokec6 =\cf7 \strokec7 ""\cf6 \strokec6 >\cf5 \strokec5 Select\cf4 \strokec4  \cf5 \strokec5 Swimmer\cf6 \strokec6 </\cf4 \strokec4 option\cf6 \strokec6 >\cf4 \strokec4 \
              \cf6 \strokec6 \{\cf4 \strokec4 swimmers\cf6 \strokec6 .\cf4 \strokec4 map\cf6 \strokec6 (\cf4 \strokec4 s \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 <\cf4 \strokec4 option key\cf6 \strokec6 =\{\cf4 \strokec4 s\cf6 \strokec6 .\cf4 \strokec4 id\cf6 \strokec6 \}\cf4 \strokec4  value\cf6 \strokec6 =\{\cf4 \strokec4 s\cf6 \strokec6 .\cf4 \strokec4 id\cf6 \strokec6 \}>\{\cf4 \strokec4 s\cf6 \strokec6 .\cf4 \strokec4 name\cf6 \strokec6 \}</\cf4 \strokec4 option\cf6 \strokec6 >)\}\cf4 \strokec4 \
            \cf6 \strokec6 </\cf4 \strokec4 select\cf6 \strokec6 >\cf4 \strokec4 \
          \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \strokec4 \
          \cf6 \strokec6 <\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \strokec4 \
            \cf6 \strokec6 <\cf5 \strokec5 Label\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "mb-2 block"\cf6 \strokec6 >\cf5 \strokec5 Swimmer\cf4 \strokec4  \cf8 \strokec8 2\cf6 \strokec6 </\cf5 \strokec5 Label\cf6 \strokec6 >\cf4 \strokec4 \
            \cf6 \strokec6 <\cf4 \strokec4 select value\cf6 \strokec6 =\{\cf4 \strokec4 swimmer2Id\cf6 \strokec6 \}\cf4 \strokec4  onChange\cf6 \strokec6 =\{\cf4 \strokec4 e \cf6 \strokec6 =>\cf4 \strokec4  setSwimmer2Id\cf6 \strokec6 (\cf4 \strokec4 e\cf6 \strokec6 .\cf4 \strokec4 target\cf6 \strokec6 .\cf4 \strokec4 value\cf6 \strokec6 )\}\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500"\cf6 \strokec6 >\cf4 \strokec4 \
              \cf6 \strokec6 <\cf4 \strokec4 option value\cf6 \strokec6 =\cf7 \strokec7 ""\cf6 \strokec6 >\cf5 \strokec5 Select\cf4 \strokec4  \cf5 \strokec5 Swimmer\cf6 \strokec6 </\cf4 \strokec4 option\cf6 \strokec6 >\cf4 \strokec4 \
              \cf6 \strokec6 \{\cf4 \strokec4 swimmers\cf6 \strokec6 .\cf4 \strokec4 map\cf6 \strokec6 (\cf4 \strokec4 s \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 <\cf4 \strokec4 option key\cf6 \strokec6 =\{\cf4 \strokec4 s\cf6 \strokec6 .\cf4 \strokec4 id\cf6 \strokec6 \}\cf4 \strokec4  value\cf6 \strokec6 =\{\cf4 \strokec4 s\cf6 \strokec6 .\cf4 \strokec4 id\cf6 \strokec6 \}>\{\cf4 \strokec4 s\cf6 \strokec6 .\cf4 \strokec4 name\cf6 \strokec6 \}</\cf4 \strokec4 option\cf6 \strokec6 >)\}\cf4 \strokec4 \
            \cf6 \strokec6 </\cf4 \strokec4 select\cf6 \strokec6 >\cf4 \strokec4 \
          \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \strokec4 \
        \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \strokec4 \
      \cf6 \strokec6 </\cf4 \strokec4 motion\cf6 \strokec6 .\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \strokec4 \
\
      \cf6 \strokec6 \{\cf4 \strokec4 swimmer1Id \cf6 \strokec6 &&\cf4 \strokec4  swimmer2Id \cf6 \strokec6 &&\cf4 \strokec4  \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "space-y-4"\cf6 \strokec6 >\cf4 \strokec4 \
          \cf6 \strokec6 \{\cf4 \strokec4 comparisons\cf6 \strokec6 .\cf4 \strokec4 length \cf6 \strokec6 ===\cf4 \strokec4  \cf8 \strokec8 0\cf4 \strokec4  \cf6 \strokec6 ?\cf4 \strokec4  \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "text-center p-8 text-gray-500 bg-white rounded-2xl"\cf6 \strokec6 >\cf4 \strokec4 \
              \cf5 \strokec5 No\cf4 \strokec4  common events found between these swimmers\cf6 \strokec6 .\cf4 \strokec4 \
            \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \strokec4  \cf6 \strokec6 :\cf4 \strokec4  comparisons\cf6 \strokec6 .\cf4 \strokec4 map\cf6 \strokec6 ((\cf4 \strokec4 comp\cf6 \strokec6 ,\cf4 \strokec4  idx\cf6 \strokec6 )\cf4 \strokec4  \cf6 \strokec6 =>\cf4 \strokec4  \cf6 \strokec6 <\cf4 \strokec4 motion\cf6 \strokec6 .\cf4 \strokec4 div key\cf6 \strokec6 =\{\cf4 \strokec4 comp\cf6 \strokec6 .\cf4 \strokec4 event\cf6 \strokec6 \}\cf4 \strokec4  initial\cf6 \strokec6 =\{\{\cf4 \strokec4 \
        opacity\cf6 \strokec6 :\cf4 \strokec4  \cf8 \strokec8 0\cf6 \strokec6 ,\cf4 \strokec4 \
        y\cf6 \strokec6 :\cf4 \strokec4  \cf8 \strokec8 10\cf4 \strokec4 \
      \cf6 \strokec6 \}\}\cf4 \strokec4  animate\cf6 \strokec6 =\{\{\cf4 \strokec4 \
        opacity\cf6 \strokec6 :\cf4 \strokec4  \cf8 \strokec8 1\cf6 \strokec6 ,\cf4 \strokec4 \
        y\cf6 \strokec6 :\cf4 \strokec4  \cf8 \strokec8 0\cf4 \strokec4 \
      \cf6 \strokec6 \}\}\cf4 \strokec4  transition\cf6 \strokec6 =\{\{\cf4 \strokec4 \
        delay\cf6 \strokec6 :\cf4 \strokec4  idx \cf6 \strokec6 *\cf4 \strokec4  \cf8 \strokec8 0.05\cf4 \strokec4 \
      \cf6 \strokec6 \}\}\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "bg-white rounded-xl shadow-sm p-4 flex items-center justify-between border border-gray-100"\cf6 \strokec6 >\cf4 \strokec4 \
                \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\{\cf7 \strokec7 `flex-1 text-right pr-4 \cf6 \strokec6 $\{\cf4 \strokec4 comp\cf6 \strokec6 .\cf4 \strokec4 winner \cf6 \strokec6 ===\cf4 \strokec4  \cf8 \strokec8 1\cf4 \strokec4  \cf6 \strokec6 ?\cf4 \strokec4  \cf7 \strokec7 'font-bold text-blue-600'\cf4 \strokec4  \cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'text-gray-500'\cf6 \strokec6 \}\cf7 \strokec7 `\cf6 \strokec6 \}>\cf4 \strokec4 \
                  \cf6 \strokec6 \{\cf4 \strokec4 comp\cf6 \strokec6 .\cf4 \strokec4 time1 \cf6 \strokec6 ?\cf4 \strokec4  comp\cf6 \strokec6 .\cf4 \strokec4 time1\cf6 \strokec6 .\cf4 \strokec4 time \cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 '-'\cf6 \strokec6 \}\cf4 \strokec4 \
                  \cf6 \strokec6 \{\cf4 \strokec4 comp\cf6 \strokec6 .\cf4 \strokec4 winner \cf6 \strokec6 ===\cf4 \strokec4  \cf8 \strokec8 1\cf4 \strokec4  \cf6 \strokec6 &&\cf4 \strokec4  \cf6 \strokec6 <\cf5 \strokec5 Trophy\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "inline w-4 h-4 ml-2 text-yellow-500"\cf4 \strokec4  />\cf6 \strokec6 \}\cf4 \strokec4 \
                \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \strokec4 \
                \
                \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\cf7 \strokec7 "px-4 py-1 bg-gray-100 rounded-full text-xs font-bold text-gray-600 min-w-[150px] text-center"\cf6 \strokec6 >\cf4 \strokec4 \
                  \cf6 \strokec6 \{\cf4 \strokec4 comp\cf6 \strokec6 .\cf4 \strokec4 event\cf6 \strokec6 \}\cf4 \strokec4 \
                \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \strokec4 \
\
                \cf6 \strokec6 <\cf4 \strokec4 div className\cf6 \strokec6 =\{\cf7 \strokec7 `flex-1 text-left pl-4 \cf6 \strokec6 $\{\cf4 \strokec4 comp\cf6 \strokec6 .\cf4 \strokec4 winner \cf6 \strokec6 ===\cf4 \strokec4  \cf8 \strokec8 2\cf4 \strokec4  \cf6 \strokec6 ?\cf4 \strokec4  \cf7 \strokec7 'font-bold text-blue-600'\cf4 \strokec4  \cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 'text-gray-500'\cf6 \strokec6 \}\cf7 \strokec7 `\cf6 \strokec6 \}>\cf4 \strokec4 \
                  \cf6 \strokec6 \{\cf4 \strokec4 comp\cf6 \strokec6 .\cf4 \strokec4 winner \cf6 \strokec6 ===\cf4 \strokec4  \cf8 \strokec8 2\cf4 \strokec4  \cf6 \strokec6 &&\cf4 \strokec4  \cf6 \strokec6 <\cf5 \strokec5 Trophy\cf4 \strokec4  className\cf6 \strokec6 =\cf7 \strokec7 "inline w-4 h-4 mr-2 text-yellow-500"\cf4 \strokec4  />\cf6 \strokec6 \}\cf4 \strokec4 \
                  \cf6 \strokec6 \{\cf4 \strokec4 comp\cf6 \strokec6 .\cf4 \strokec4 time2 \cf6 \strokec6 ?\cf4 \strokec4  comp\cf6 \strokec6 .\cf4 \strokec4 time2\cf6 \strokec6 .\cf4 \strokec4 time \cf6 \strokec6 :\cf4 \strokec4  \cf7 \strokec7 '-'\cf6 \strokec6 \}\cf4 \strokec4 \
                \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\cf4 \strokec4 \
              \cf6 \strokec6 </\cf4 \strokec4 motion\cf6 \strokec6 .\cf4 \strokec4 div\cf6 \strokec6 >)\}\cf4 \strokec4 \
        \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >\}\cf4 \strokec4 \
    \cf6 \strokec6 </\cf4 \strokec4 div\cf6 \strokec6 >;\cf4 \strokec4 \
\cf6 \strokec6 \};\cf4 \strokec4 \
\pard\pardeftab720\sl420\partightenfactor0
\cf2 \strokec2 export\cf4 \strokec4  \cf2 \strokec2 default\cf4 \strokec4  \cf5 \strokec5 ComparisonView\cf6 \strokec6 ;\cf9 \cb1 \strokec9 \
}