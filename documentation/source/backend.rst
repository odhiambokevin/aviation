Introduction
============
Getting Started
---------------

Installation
++++++++++++

.. attention:: 

    Install GDAL using OSGEO4W

To install, run the following code.

.. code-block::

    (env) $ pipenv install

Use the configuration below to setup GDAL path in the project.

.. py:function:: install_GDAL(name=none)
    
    if os.name == 'nt':
    import platform
    OSGEO4W = r"C:\OSGeo4W"
    if '64' in platform.architecture()[0]:
        OSGEO4W += ""
    assert os.path.isdir(OSGEO4W), "Directory does not exist: " + OSGEO4W
    os.environ['OSGEO4W_ROOT'] = OSGEO4W
    os.environ['GDAL_DATA'] = OSGEO4W + r"\share\gdal"
    os.environ['PROJ_LIB'] = OSGEO4W + r"\share\proj"
    os.environ['PATH'] = OSGEO4W + r"\bin;" + os.environ['PATH']

API Calls
============
Getting Started
---------------

Installation
++++++++++++

.. attention:: 

    Install GDAL using OSGEO4W

To install, run the following code.

.. code-block::

    (env) $ pipenv install
