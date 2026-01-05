{\rtf1\ansi\ansicpg1252\cocoartf2580
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red71\green137\blue205;\red255\green255\blue255;\red202\green202\blue202;
\red54\green192\blue160;\red194\green126\blue101;\red212\green212\blue212;\red202\green202\blue202;}
{\*\expandedcolortbl;;\cssrgb\c33936\c61427\c84130;\cssrgb\c100000\c100000\c100000;\cssrgb\c83229\c83229\c83125;
\cssrgb\c23956\c78894\c69047;\cssrgb\c80778\c56830\c46925;\cssrgb\c86370\c86370\c86262;\cssrgb\c83137\c83137\c83137;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\sl420\partightenfactor0

\f0\fs28 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 import\cf4 \strokec4  \cf5 \strokec5 React\cf4 \strokec4  \cf2 \strokec2 from\cf4 \strokec4  \cf6 \strokec6 'react'\cf7 \strokec7 ;\cf4 \strokec4 \
\cf2 \strokec2 import\cf4 \strokec4  \cf7 \strokec7 \{\cf4 \strokec4  \cf5 \strokec5 Helmet\cf4 \strokec4  \cf7 \strokec7 \}\cf4 \strokec4  \cf2 \strokec2 from\cf4 \strokec4  \cf6 \strokec6 'react-helmet'\cf7 \strokec7 ;\cf4 \strokec4 \
\cf2 \strokec2 import\cf4 \strokec4  \cf5 \strokec5 SwimmingTracker\cf4 \strokec4  \cf2 \strokec2 from\cf4 \strokec4  \cf6 \strokec6 '@/components/SwimmingTracker'\cf7 \strokec7 ;\cf4 \strokec4 \
\cf2 \strokec2 import\cf4 \strokec4  \cf7 \strokec7 \{\cf4 \strokec4  \cf5 \strokec5 Toaster\cf4 \strokec4  \cf7 \strokec7 \}\cf4 \strokec4  \cf2 \strokec2 from\cf4 \strokec4  \cf6 \strokec6 '@/components/ui/toaster'\cf7 \strokec7 ;\cf4 \strokec4 \
\
\cf2 \strokec2 function\cf4 \strokec4  \cf5 \strokec5 App\cf7 \strokec7 ()\cf4 \strokec4  \cf7 \strokec7 \{\cf4 \strokec4 \
  \cf2 \strokec2 return\cf4 \strokec4  \cf7 \strokec7 (\cf4 \strokec4 \
    <>\
      \cf7 \strokec7 <\cf5 \strokec5 Helmet\cf7 \strokec7 >\cf4 \strokec4 \
        \cf7 \strokec7 <\cf4 \strokec4 title\cf7 \strokec7 >\cf5 \strokec5 Swimming\cf4 \strokec4  \cf5 \strokec5 Times\cf4 \strokec4  \cf5 \strokec5 Tracker\cf4 \strokec4  \cf7 \strokec7 -\cf4 \strokec4  \cf5 \strokec5 Log\cf4 \strokec4  \cf7 \strokec7 &\cf4 \strokec4  \cf5 \strokec5 Track\cf4 \strokec4  \cf5 \strokec5 Your\cf4 \strokec4  \cf5 \strokec5 Race\cf4 \strokec4  \cf5 \strokec5 Performance\cf7 \strokec7 </\cf4 \strokec4 title\cf7 \strokec7 >\cf4 \strokec4 \
        \cf7 \strokec7 <\cf4 \strokec4 meta name\cf7 \strokec7 =\cf6 \strokec6 "description"\cf4 \strokec4  content\cf7 \strokec7 =\cf6 \strokec6 "Track your swimming race times across different distances and styles. Log competitions, monitor progress, and view your best times for freestyle, breaststroke, butterfly, and backstroke."\cf4 \strokec4  />\
      \cf7 \strokec7 </\cf5 \strokec5 Helmet\cf7 \strokec7 >\cf4 \strokec4 \
      \cf7 \strokec7 <\cf4 \strokec4 div className\cf7 \strokec7 =\cf6 \strokec6 "min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50"\cf7 \strokec7 >\cf4 \strokec4 \
        \cf7 \strokec7 <\cf5 \strokec5 SwimmingTracker\cf4 \strokec4  />\
        \cf7 \strokec7 <\cf5 \strokec5 Toaster\cf4 \strokec4  />\
      \cf7 \strokec7 </\cf4 \strokec4 div\cf7 \strokec7 >\cf4 \strokec4 \
    </>\
  \cf7 \strokec7 );\cf4 \strokec4 \
\pard\pardeftab720\sl420\partightenfactor0
\cf7 \strokec7 \}\cf4 \strokec4 \
\
\pard\pardeftab720\sl420\partightenfactor0
\cf2 \strokec2 export\cf4 \strokec4  \cf2 \strokec2 default\cf4 \strokec4  \cf5 \strokec5 App\cf7 \strokec7 ;\cf8 \cb1 \strokec8 \
}