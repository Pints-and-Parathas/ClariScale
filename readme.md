Backend Setup:<br/>
*Prerequisites*<br/>
- Python<br/>
  
Create a Pints-And-Parathas directory<br/>

Open Git bash in Pints-And-Parathas directory<br/>
run:<br/>
  git clone https://github.com/Pints-and-Parathas/Hackathon2024.git<br/>
<br/>
Open Pints-And-Parathas directory in admin CMD:<br/> 
  python -m venv {project-name}  #Replace {project name} with something sensible#<br/>
  cd {project name}/Scripts <br/>
  activate.bat <br/>
  cd Hackathon2024 #Go back to the top level of the repo
  python -m pip install -r requirements.txt<br/>
  python -m pip install Django<br/>
<br/>
To activate the django server:<br/>
Return to top level Pints-And-Parathas directory<br/>
  cd Hackathon2024/backend/political_scale<br/>
  python manage.py runserver djangotutorial<br/>
In browser Navigate to 127.0.0.1:8000<br/>


**If you install a new package in the virtual environemnt you will need to generate a new requirements file**<br/>
In Hackathon2024 directory with the venv activated run:<br/>
python -m pip freeze > requirements.txt<br/>
