import os,lxml.html,re,sys,glob
read = open('README.md',mode='w')
p=[]
for i in glob.glob('gochiusa.com/af/core_sys/images/main/*'):
    p.append(i)
read.write(i)