from PIL import Image
from sklearn.cluster import KMeans
import numpy as np

def get_dominant_colors(image_path, num_colors=5):
    img = Image.open(image_path)
    img = img.convert("RGB")
    img_array = np.array(img)
    
    # Reshape the image to be a list of pixels
    pixels = img_array.reshape(-1, 3)
    
    # Perform K-means clustering
    kmeans = KMeans(n_clusters=num_colors, random_state=0, n_init=10)
    kmeans.fit(pixels)
    
    # Get the dominant colors (cluster centers)
    dominant_colors = kmeans.cluster_centers_
    
    # Convert to hex codes
    hex_colors = []
    for color in dominant_colors:
        hex_colors.append("#{:02x}{:02x}{:02x}".format(int(color[0]), int(color[1]), int(color[2])))
    
    return hex_colors

image_path = '/home/ubuntu/upload/atelie.jpeg'
colors = get_dominant_colors(image_path)
print(colors)


