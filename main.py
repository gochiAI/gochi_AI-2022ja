import os,lxml.html,re,sys,glob
read = open('README.md',mode='a')
p=[]
for i in glob.glob('gochiusa.com/af/core_sys/images/main/*'):
   read.write(f'![](https://gochiai.github.io/gochi_AI-2022ja/gochiusa.com/af/core_sys/images/main/{i}\¥\n')
