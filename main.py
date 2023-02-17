import os

folder_path = "C:/Users/tiago/Desktop/international-resturant-main/images/turkish-food/"


for filename in os.listdir(folder_path):
    new_filename = filename.split("_", 1)[1]  # split filename at first underscore and keep the second part
    os.rename(
        os.path.join(folder_path, filename),
        os.path.join(folder_path, new_filename)
    )