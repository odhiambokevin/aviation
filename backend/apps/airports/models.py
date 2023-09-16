from django.contrib.gis.db import models

class Airport(models.TextChoices):
    InternationalAirport = "international", "International Airport"
    Airport = "airport", "Airport"
    Airstrip = "airstrip", "Airstrip"

class County(models.TextChoices):
    '''codeBaseValue = 'databaseValue','adminDisplayValue'''
    Mombasa = 'Mombasa', 'Mombasa'
    Kwale = 'Kwale', 'Kwale'
    Kilifi = 'Kilifi', 'Kilifi'
    Tana_River = 'Tana River', 'Tana River'
    Lamu = 'Lamu', 'Lamu'
    Taita_Taveta = 'Taita Taveta', 'Taita Taveta'
    Garissa = 'Garissa', 'Garissa'
    Wajir = 'Wajir', 'Wajir'
    Mandera = 'Mandera', 'Mandera'
    Marsabit = 'Marsabit', 'Marsabit'
    Isiolo = 'Isiolo', 'Isiolo'
    Meru = 'Meru', 'Meru'
    Tharaka_Nithi = 'Tharaka-Nithi', 'Tharaka-Nithi'
    Embu = 'Embu', 'Embu'
    Kitui = 'Kitui', 'Kitui'
    Machakos = 'Machakos', 'Machakos'
    Makueni = 'Makueni', 'Makueni'
    Nyandarua = 'Nyandarua', 'Nyandarua'
    Nyeri = 'Nyeri', 'Nyeri'
    Kirinyaga = 'Kirinyaga', 'Kirinyaga'
    Muranga = "Murang'a", "Murang'a"
    Kiambu = 'Kiambu', 'Kiambu'
    Turkana = 'Turkana', 'Turkana'
    WestPokot = 'West Pokot', 'West Pokot'
    Samburu = 'Samburu', 'Samburu'
    TransNzoia = 'Trans-Nzoia', 'Trans-Nzoia'
    UasinGishu = 'Uasin Gishu', 'Uasin Gishu'
    ElgeyoMarakwet = 'Elgeyo-Marakwet', 'Elgeyo-Marakwet'
    Nandi = 'Nandi', 'Nandi'
    Baringo = 'Baringo', 'Baringo'
    Laikipia = 'Laikipia' , 'Laikipia'
    Nakuru = 'Nakuru', 'Nakuru'
    Narok = 'Narok', 'Narok'
    Kajiado = 'Kajiado', 'Kajiado'
    Kericho = 'Kericho', 'Kericho'
    Bomet = 'Bomet', 'Bomet'
    Kakamega = 'Kakamega', 'Kakamega'
    Vihiga = 'Vihiga', 'Vihiga'
    Bungoma = 'Bungoma', 'Bungoma'
    Busia = 'Busia', 'Busia'
    Siaya = 'Siaya', 'Siaya'
    Kisumu = 'Kisumu', 'Kisumu'
    HomaBay = 'Homa Bay', 'Homa Bay'
    Migori = 'Migori', 'Migori'
    Kisii = 'Kisii', 'Kisii'
    Nyamira = 'Nyamira', 'Nyamira'
    Nairobi = 'Nairobi', 'Nairobi'

class Airport(models.Model):
    stationid = models.IntegerField(primary_key=True,db_column="stationid")
    station = models.CharField(max_length=100,help_text='name of duty station',db_column="station")
    type = models.CharField(choices=Airport.choices, default=Airport.Airport, max_length=50,db_column="type")
    county = models.CharField(choices=County.choices, default=County.Nairobi, max_length=50,db_column="county")
    geom = models.MultiPolygonField(srid=4326,db_column="geom")

    def __str__(self):
        return f"{self.station}"
    
    class Meta:
        db_table = "airports"
