import os,lxml.html,re,sys,glob
read = open('README.md',mode='w')
mp3,png=[],[]
ypass='gochiusa.com/af/core_sys/images/main/*'
for i in glob.glob(f'{ypass}/*.*',recursive=True):
    if i.endswith('.mp3'):mp3.append(f"{i}")
    if i.endswith('.jpg'):png.append(f"{i}")
read.write('<https://gochiai.github.io/gochi_AI-2022ja/gochiusa.com/af/>\n')
read.write('# mp3\n')
for mp3 in mp3:read.write(f'<https://gochiai.github.io/gochi_AI-2022ja/{mp3}>\n')
char=['chino','cocoa','rize','maya','megu','syaro','chiya','all','fuyu','aoyama','natsume','elu']
for char in char:
    read.write(f'# {char}\n')
    for apng in png:
        if apng.endswith(f'{char}.png'):read.write(f'![]({apng})\n')
    
