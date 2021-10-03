import csv

brand=['Toyota','Honda','Suzuki','KIA']
condition=['Used','New']
fuel=['Diesel','Petrol','CNG']
model=["Corolla","Prado","Passo","Civic","City","Alto","Khyber","Mehran","Pride","Sportage"]
city=['Karachi','Islamabad','Lahore','Rawalpindi']
with open('pre1.csv', 'r') as fin, open('final.csv', 'w', newline='') as fout:

    # define reader and writer objects
    reader = csv.reader(fin, skipinitialspace=True)
    writer = csv.writer(fout, delimiter=',')

    # write headers
    writer.writerow(next(reader))

    # iterate and write rows based on condition
    for i in reader:
        i[0]=brand.index(i[0])
        i[1]=condition.index(i[1])
        i[2]=fuel.index(i[2])
        i[4]=model.index(i[4])
        i[5]=city.index(i[5])
        
        writer.writerow(i)
            