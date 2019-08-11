# System design: scaling up from 100 to 10,000,000 products #

## Given a foreign code base of a product page, scale up the back end to efficiently handle 10 million products ##

_Stack_
* Docker-machine (for front end)
* PostgreSQL
* MongoDB
* Express
* EC2 from AWS (deployment)
* Jest (testing)
* Artillery (testing)

_Challenges_:
* Generating 10 million fake products
  * The function works in chunks of 100,000 products: 
    * generate 100,000 random products (I wrote a helper function to generate fake products) and write them to a CSV file
    * recursively call this function until 10 million products have been written
    ![Function for writing 10 million pieces of data to a CSV file](writetocsv.png?raw=true)
  * I had to experiment with what load of writing in each recursive my computer could handle. Heap memory errors were abundant. 
    * Fun bug: Despite specifying the file path of my CSV, my function was creating a new CSV file in a totally different place. I was curious why my CSV file was empty no matter how many times I wrote to it. All along, one massive file was swelling with gigabytes worth of Home Depot products. 
* Adding those products to a database
  * From the command line I copied the CSV values to a MongoDB database and a PostgreSQL database. 
  * I indexed my MongoDB for faster queries based on product ID
  * Battle of the databases: who won?
    * MongoDB tested with Jest, seeded in 05:08:21 minutes
    * Mongodb basic query tests: [5.109s, 1.884s, 3.518s, 3.1s, 3.542s] average: 4.4524s
    * Results closest to average:
  ![MongoDB Jest tests](mongodb.png?raw=true)
    * Postgres tested with Jest, seeded in 02:06:37 minutes
    * Postgres basic query tests: [3.755s, 1.595s, 1.56s, 2.493s, 3.266s] average: 2.5338s
    * Results closest to average:
  ![PostgreSQL Jest tests](postgres.png?raw=true)
    * PostgreSQL seemed to query faster after its initial connection. It also took up less space than MongoDB's database.
* I tested querying speed of my chosen database with Artillery:
  * I had to test my database performance with server get requests, so with Artillery I generated 1,000 virtual users to make 100 requests each. This averaged 1,250 requests per second.
   ![Artillery test results](artillery.png?raw=true)
* Optimizing my database
  * My EC2 instance would not handle all of my data for deployment, so I had to optimize how I was storing my data. I realized storing image URL's for each product was a lot of wasted space, so I created a second table which stored my scraped image addresses. Each product had a foriegn key to point to a URL from that table. I also shortened the product names from 170+ characters to < 100. This saved over 1.4GB of space.
* Exploring a complete component and ignoring complexity was tricky to enforce. The goal was to scale up and only change what was necessary.

