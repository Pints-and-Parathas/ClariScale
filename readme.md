Backend Setup:
*Prerequisits*
- Python
  
Create a Pints-And-Parathas directory

Open Git bash in Pints-And-Parathas directory
run:
  git clone https://github.com/Pints-and-Parathas/Hackathon2024.git

Open Pints-And-Parathas directory in admin CMD: 
  python -m venv {project-name}  #Replace {project name} with something sensible#
  python -m pip install Django

To activate the django server:
Return to top level Pints-And-Parathas directory
  cd Hackathon2024/backend
  django-admin startproject mysite djangotutorial
In browser Navigate to 127.0.0.1:8000
