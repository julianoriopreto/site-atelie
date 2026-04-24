from imagedominantcolor import ImageDominantColor

img_path = '/home/ubuntu/upload/atelie.jpeg'
idc = ImageDominantColor(img_path)
colors = idc.get_dominant_colors()

print(colors)


