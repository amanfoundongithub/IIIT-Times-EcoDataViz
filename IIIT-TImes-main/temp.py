import pandas as pd

df = pd.read_csv(r'C:\Users\Dell\Downloads\IIIT-TImes-main\IIIT-TImes-main\countryContinent.csv', encoding='latin-1')
new = df.values.tolist()
print(new[0])

map_continent = dict()
for i in new: 
    map_continent[i[2]] = i[5] 

df = pd.read_csv(r'C:\Users\Dell\Downloads\IIIT-TImes-main\IIIT-TImes-main\project_data.csv', )
                #  encoding='latin-1')
new = df.values.tolist()

map_asia = []
map_europe = [] 
map_americas = [] 
map_africa = [] 
map_oceania = [] 

for i in new: 
    countryCode = i[1] 
    parameter = i[2] 

    if parameter == 'NGDPD':
        
        continent = map_continent.get(countryCode)
        if(continent == None):
            # print("HIIIOUBFIUWBFU")
            continue 

        
        # if type(i[48]) == str: 
        #     continue 

        
        try: 
            i[48] = str(i[48])
            i[48] = i[48].replace(',','') 
            integer = float(i[48])
        except Exception:
            # print(i[])
            continue 
        if continent == 'Asia':
            map_asia.append(i) 
        elif continent == 'Europe':
            map_europe.append(i) 
        elif continent == 'Americas':
            map_americas.append(i) 
        elif continent == 'Oceania':
            map_oceania.append(i) 
        elif continent == 'Africa':
            map_africa.append(i) 


map_asia.sort(key = lambda x : float(x[48])) 
map_europe.sort(key = lambda x : float(x[48])) 
map_americas.sort(key = lambda x : float(x[48])) 
map_africa.sort(key = lambda x : float(x[48])) 
map_oceania.sort(key = lambda x : float(x[48])) 
for i in map_oceania:
    print(i[3],i[48])  





