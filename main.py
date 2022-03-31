import os,lxml.html,re,sys,glob
read = open('README.md',mode='w')
mp3,png=[],[]
ypass='2021/core_sys/images/main/cont/*'
for i in glob.glob(f'{ypass}/*.*',recursive=True):
    if i.endswith('.mp3'):mp3.append(f"{i}")
    if i.endswith('.png'):png.append(f"{i}")
read.write('# mp3\n')
for mp3 in mp3:read.write(f'![]({mp3})\n')
char=['chino','cocoa','rize','maya','megu','syaro','chiya']
for char in char:
    read.write(f'# {char}\n')
    for apng in png:
        if apng.endswith(f'{char}.png'):read.write(f'![]({apng})\n')
    
