sudo apt-get update
sudo apt-get install -y libpq-dev gdal-bin libgdal-dev libgeos-dev
pip install -r requirements.txt
python3.9 manage.py collectstatic
python3.9 manage.py createsuperuser --no-input