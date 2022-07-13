#function returns True if any element of an iterable is True. If not, it returns False.
list1 = ['item1','item2','item3']
list2 = ['item4','item5','item3']

if any(x in list1 for x in list2):
    print("Duplicates found.")
else:
    print("No duplicates found.")
    
#Para expresiones regulares
import re

consulta = input("Ingrese su consulta: ")
validacion_consulta = re.match("^([A-Za-z]+[ ]{1}(AND|OR|NOT)[ ]{1}[A-Za-z]+([ ]{1}(AND|OR|NOT)[ ]{1}[A-Za-z]+)*)$|^[A-Za-z]+$",consulta)

#---------Tuples y list
#tuples --> unmutable, ordered
#list --> mutable, ordered
#En la tuples y list, puedo acceder a los items, así:
items[0:4]
items[::2] #selecciona todos los multiplos del 2, incluye el 0
items[0:5:2] # selecciona del 0-4 y elige los multiplos del 2

#añadir elementos a una lista
lista = [1,2]
lista.append("elemento") #añade solo uno a la vez lista = [1,2, "elemento"]
lista.extends([2,3,2]) #añade más de uno a la vez lista = [1,2, "elemento",2,3,2]

#las listas pueden concatenarse
lista = lista+[0,1,2]

#split convierte string en lista
"hola soy vale".split() = ["hola","soy","vale"]

#sort:ordenala lista
a=[2,1,3]
a.sort
print(a) #1,2,3


#ALIASING
a = [1,2]
b = a
#todo cambio que haga en a, se reflejará en b y viceversa
# esto pasa porque a y b referencian a  la misma lista
# para hacer una copia o clonar se hace
b = a[:] 
#de esa manera se eliminan los problemas del aliasing

#---------Sets
#unordered: no recuerda la posición del elemento
#no almacena elementos repetidos
conjunto = {hola, 1,2,3}

conjunto.add(4)
conjunto.remove(1)


#----------Pandas
#crear un data fram
#las key son los nombres de las columnas
#los values son las los elementos de cada col
songs = { 'album': [1,'jpña','etc'], 'length': [1,2,3,4] }
df=pd.DataFrame(songs)
df=pd.DataFrame({'a':[1,2,1],'b':[1,1,1]})


df[['nombre_columna']] #dataframe con todas las filas de esa col
df.ix[0,1] #tomar dato de la fil 0 col 1
df.ix[0,'nombre_col'] #tomar dato de la fil 0 col nombre_col


#seleccionar datos cuando cumplen cierta condicion
new_df = df[df[condicion]]


#----------Numpy
#numpy tiene arreglos con elementos del mismo tipo

#--indexing and slicing
#el slicing es igual que en las listas

#cada arreglo es como un vector matemático

#--linspace
#sirve para hacer gráficos 
np.linspace(1,20,num=10) #quiero un vector del 1 al 20 con 10 muestras

#--para graficar
import matplotlib.pyplot as plt
x= np.linspace(0,2,1)
y = np.sin(x)
plt.plot(x,y)


#--matrices
matriz = np.array([[1,1,1][1,1,1]])
# 1 1 1
# 1 1 1

