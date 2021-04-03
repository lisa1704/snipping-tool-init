# Snipping Tool with search on web option

It will have two functions: **Snip & Search and Snip & Copy**

- Both functions will allow us to snip a region of text as an image, perform character recognition on the image, and then return a string
- The Snip & Search function will then automatically open a browser tab and search the string from the snipped image in Google
- The Snip & Copy function, on the other hand, will save the string to clipboard

## Installaion

```bash
pip install -r requirements.txt
```

### Make sure Tesseract-OCR is installed on your OS

https://github.com/UB-Mannheim/tesseract/wiki has the *Tesseract* installer

## Usage
### Set the Tesseract installer path in the script
```bash
pytesseract.pytesseract.tesseract_cmd=r'C:/Program Files (x86)/Tesseract-OCR/tesseract.exe'
```

### Set the *mozilla* and *chrome browser path* in the `openTab` function in the script

```bash
mozilla_path='C:/Program Files/Mozilla Firefox/firefox.exe %s' #set path in your machine
chrome_path = 'C:/Program Files(x86)/chrome.exe %s' #set path in your machine
```
# Quick Start
## Build your Docker Image
- Go to project directory 
- Create a `Dockerfile`:

```bash
FROM python:3.9

COPY . .

RUN pip install -r requirements.txt

CMD tail -f /dev/null
```
- Go to the directory where the `Dockerfile` is 
- Build your Image
```bash
docker build . -t my-snipping-tool
```
- Run a container based on your image
```bash
docker run -d my-snipping-tool -f /dev/null
```
### Or if you want to
### Pull my image from Docker Hub
```bash
docker pull 4125efef/snipping-tool
```


## For errors in cv2 
- Right click on container and select ***Attach shell*** option and run these commands:
```
apt-get update
apt-get install ffmpeg libsm6 libxext6  -y
```