import os
import glob
from rembg import remove
from PIL import Image

# Find all jpg and png images in the public folder except those we already processed
images = glob.glob('public/*.jpg') + glob.glob('public/*.png')
images = [img for img in images if not img.endswith('_nobg.png')]

for input_path in images:
    if "glasses.jpg" in input_path or "glasses.png" in input_path: # Specific check to ensure we target the right ones if needed
        output_path = input_path.rsplit('.', 1)[0] + '.png'
        print(f"Processing {input_path}...")
        try:
            input_image = Image.open(input_path)
            output_image = remove(input_image)
            output_image.save(output_path)
            print(f"Success! Saved to {output_path}")
        except Exception as e:
            print(f"Error processing {input_path}: {e}")
