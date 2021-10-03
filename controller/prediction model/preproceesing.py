import csv


with open('data.csv', 'r') as fin, open('pre1.csv', 'w', newline='') as fout:

    # define reader and writer objects
    reader = csv.reader(fin, skipinitialspace=True)
    writer = csv.writer(fout, delimiter=',')

    # write headers
    writer.writerow(next(reader))

    # iterate and write rows based on condition
    for i in reader:
        if ((i[0] =='Toyota' or i[0]=='Honda' or i[0]=='Suzuki' or i[0]=='KIA') and (i[1]=='Used' or i[1]=='New') and (i[2]=='Diesel' or i[2]=='Petrol' or i[2]=='CNG')):
            if (i[5]=='Karachi' or i[5]=='Islamabad' or i[5]=='Lahore' or i[5]=='Rawalpindi'):

                if("Corolla" in i[4] or i[4]=="Prado" or i[4]=="Passo" or "Civic" in i[4]  or "City" in i[4]  or i[4]=="Alto" or i[4] =="Khyber" or "Mehran" in i[4]  or i[4]=="Pride" or i[4]=="Sportage"):
                    try:
                        if("Corolla" in i[4] ):
                            i[4]="Corolla"
                        if("City" in i[4] ):
                            i[4]="City"
                        if("Civic" in i[4] ):
                            i[4]="Civic"
                        if("Mehran" in i[4]):
                            i[4]="Mehran"
                        writer.writerow(i)
                    except Exception as e:
                        print(i)
                        print(e)